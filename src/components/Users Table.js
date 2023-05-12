import { Table, TableHead, TableRow, TableCell, TableBody, IconButton } from "@mui/material";
import { styled } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import { deleteInvitation } from "@/redux/actions/InvitationsAction";
import { deleteUsers } from "@/redux/actions/usersAction";
import jwt from 'jsonwebtoken'

const StyledTable = styled(Table)({
  maxWidth: "45rem",
  margin : 'auto',
});

const MyUsersTable = (props) => {
    const rows = props.children
    const dispatch = useDispatch();
    const isClient = typeof window !== 'undefined';
    let userData = jwt.decode(isClient ? localStorage.getItem('token') : null)

  return (
    <>
    {
        rows.length < 0 ? 
        <h3 style={{ textAlign: 'center', color: '#FFFF' }}>אין נתונים !</h3> :
        <StyledTable>
      <TableHead>
        <TableRow>
          <TableCell sx={{ textAlign : 'center' , color : '#FFFF' }} >שם פרטי</TableCell>
          <TableCell sx={{ textAlign : 'center' , color : '#FFFF' }} >שם משפחה</TableCell>
          <TableCell sx={{ textAlign : 'center' , color : '#FFFF' }} >דואר אלקטרוני</TableCell>
          <TableCell sx={{ textAlign : 'center' , color : '#FFFF' }} >מס&apos; טלפון</TableCell>
          <TableCell sx={{ textAlign : 'center' , color : '#FFFF' }} >מחיקה</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {rows.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{ textAlign : 'center' , color : '#FFFF' }}>
                {row.fName}
              </TableCell>
              <TableCell sx={{ textAlign : 'center' , color : '#FFFF' }}>
                {row.lName}
              </TableCell>
              <TableCell sx={{ textAlign : 'center' , color : '#FFFF' }}>
                {row.email}
              </TableCell>
              <TableCell sx={{ textAlign : 'center' , color : '#FFFF' }}>
                {row.phoneNumber}
              </TableCell>
              <TableCell sx={{ textAlign : 'center' , color : '#FFFF' }} >
              <IconButton disabled={row._id === userData._id} onClick={() => dispatch(deleteUsers(row._id))}>
                    <DeleteIcon color={row._id === userData._id ? "disabled" :"error"}/>
              </IconButton>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </StyledTable>
    }
    {
            rows.length === 0 && <h3 style={{ textAlign: 'center', color: '#FFFF' }}>אין משתמשים !</h3>
          }
    </>
  );
};

export default MyUsersTable;
