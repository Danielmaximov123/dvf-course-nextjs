import CustomField from '@/src/components/Custom Field'
import CustomFieldWithShowPass from '@/src/components/Custom Field showPass'
import { Box, Button } from '@mui/material'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Register = () => {
  const [invitation, setInvitation] = useState('')
  const [invitationExist, setInvitationExist] = useState(false)
  const [user, setUser] = useState({ email : "" , phoneNumber : "" , fName : "" , lName : '' , confirmPassword : "" , password : "" })
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault()
    let resp = await axios.post('api/users' , user)
    if(resp.data.success) {
      await axios.delete(`api/Invitation/${invitation}`)
      setInvitation('')
      router.push('/sign-in')
    }
  }
  
  const checkInvitation = async (e) => {
    e.preventDefault()
      let resp = await axios.get(`api/Invitation/${invitation}`)
      if(resp.data.success) {
        setInvitationExist(true)
      } else {
        setInvitationExist(false)
      }
  }

  const checkForm = () => {
    if (!user.email || !user.fName || !user.lName || !user.phoneNumber || !user.password || !user.confirmPassword) {
      return true;
    }
    if (user.password !== user.confirmPassword) {
      return true;
    } else {
      return false;
    }
  };
  
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      router.push('/');
    }
  }, []);

  return (
    <Box sx={{ textAlign: 'center', padding: '3rem' }}>
        <h1 style={{ color : '#ffa22d' }}>הגדרת משתמש</h1>
        {
          invitationExist ? 
          <Box component="form" onSubmit={handleSubmit} sx={{ width: { md : '30%' , xs : '100%' }, margin: 'auto' }}>
        <CustomField required req value={ user.email || "" } type="email" label="דואר אלקטרוני" onChange={e => setUser({...user, email : e.target.value})}  fullWidth/>
        <CustomField required value={ user.phoneNumber || "" } label="מספר טלפון" onChange={e => setUser({...user, phoneNumber : e.target.value})}  fullWidth/>
        <CustomField required value={ user.fName || "" } label="שם פרטי" onChange={e => setUser({...user, fName : e.target.value})} fullWidth/>
        <CustomField required value={ user.lName || "" } label="שם משפחה" onChange={e => setUser({...user, lName : e.target.value})} fullWidth/>
        <CustomFieldWithShowPass required value={ user.password || "" } label="סיסמה" onChange={e => setUser({...user, password : e.target.value})}  fullWidth/>
        <CustomFieldWithShowPass required value={ user.confirmPassword || "" } label="אישור סיסמה" onChange={e => setUser({...user, confirmPassword : e.target.value})}  fullWidth/>
        <Link href='sign-in' style={{ color: '#FFFF', textDecoration: 'none', float: 'right', margin: '0.5rem' }}>משתמש מוגדר? לחץ כאן</Link>
        <Button disabled={checkForm() ? true : false} sx={{ margin : '0.3rem'  }} type='submit' variant='outlined' color='warning' fullWidth>הפעלת חשבון</Button>
        </Box>
          :
          <Box component="form" onSubmit={checkInvitation} sx={{ width: { md : '30%' , xs : '100%' }, margin: 'auto' }}>
          <CustomField label="הזמנה" onChange={e => setInvitation(e.target.value)} fullWidth/> 
            <Link href='sign-in' style={{ color: '#FFFF', textDecoration: 'none', float: 'right', margin: '0.5rem' }}>משתמש מוגדר? לחץ כאן</Link>
            <Button sx={{ margin : '0.3rem' }} type='submit' variant='outlined' color='warning' fullWidth>בדיקה</Button>
          </Box>

        }
        
    </Box>
  )
}

export default Register