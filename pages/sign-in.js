import CustomField from '@/src/components/Custom Field'
import CustomFieldWithShowPass from '@/src/components/Custom Field showPass'
import { Box, Button } from '@mui/material'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Login = () => {
  const [user, setUser] = useState({ email : "" , password : "" })
  const router = useRouter();
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    let resp = await axios.post('api/auth/sign-in' , user)
    if(resp.data.success) {
      localStorage.setItem('token', resp.data.token);
      router.push('/')
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/');
    }
  }, []);

  return (
    <Box sx={{ textAlign: 'center', padding: '3rem' }}>
        <h1 style={{ color : '#ffa22d' }}>התחברות למשתמש</h1>
        <Box component='form' onSubmit={handleSubmit} sx={{ width: { md : '30%' , xs : '100%' }, margin: 'auto' }}>
        <CustomField required value={user.email || ""} label="דואר אלקטרוני" onChange={e => setUser({...user, email : e.target.value})} fullWidth/>
        <CustomFieldWithShowPass required value={user.password || ""} label="סיסמה" onChange={e => setUser({...user, password : e.target.value})} fullWidth/>
        <Link href='sign-up' style={{ color: '#FFFF', textDecoration: 'none', float: 'right', margin: '0.5rem' }}>משתמש חדש? לחץ כאן</Link>
        <Button sx={{ margin : '0.3rem'  }} type='submit' variant='outlined' color='warning' fullWidth>התחברות</Button>
        </Box>
    </Box>
  )
}

export default Login