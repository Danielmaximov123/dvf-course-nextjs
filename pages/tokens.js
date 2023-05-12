import { Box, IconButton, InputAdornment, Paper, Table, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios';
import CustomField from '@/src/components/Custom Field';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { addNewInvitation, getInvitations } from '@/redux/actions/InvitationsAction';
import { useRouter } from 'next/router';
import MyInvitationTable from '@/src/components/Invitation Table';

const Tokens = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const { invitations } = useSelector(state => ({
    invitations : state.invitations.invitations
  }))
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/sign-in');
    }
  }, [router]);
  
  useEffect(() => {
    dispatch(getInvitations())
  },[dispatch])

  const filteredInvitations = invitations.filter(invitation => {
    if (searchTerm.trim() === '') {
      // Display all invitations when searchTerm is empty
      return true;
    } else {
      // Filter invitations based on search term
      return invitation._id.toLowerCase().includes(searchTerm.toLowerCase());
    }
  });

  return (
    <>
      <Head>
        <title>DVF - קורס עריכת וידאו בכדורגל - אסימונים</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <h1 style={{ textAlign: 'center', color: '#FFFF' }}>אסימונים</h1>
        <Box sx={{ textAlign: 'center' }}>
          <CustomField
            placeholder="חיפוש..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            sx={{ width: '30rem', mr: 1 }}
          />
          <IconButton onClick={() => dispatch(addNewInvitation())} size="large">
            <AddIcon size="inherit" sx={{ color : '#ffa22d' }}/>
          </IconButton>
            <MyInvitationTable>
            {filteredInvitations}
          </MyInvitationTable>
        </Box>
      </Box>
    </>
  );
};

export default Tokens;
