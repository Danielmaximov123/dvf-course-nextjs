import { Table, TableHead, TableRow, TableCell, TableBody, IconButton } from "@mui/material";
import { styled } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteInvitation } from "@/redux/actions/InvitationsAction";

const StyledTable = styled(Table)({
  maxWidth: "30rem",
  margin : 'auto',
});

const MyInvitationTable = (props) => {
    const rows = props.children
    const dispatch = useDispatch();

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
      
        // Get day, month, and year
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();
      
        // Get hours and minutes
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
      
        // Return formatted date and time
        return `${day}-${month}-${year}, ${hours}:${minutes}`;
      };

  return (
    <>
    {
        rows.length < 0 ? 
        <h3 style={{ textAlign: 'center', color: '#FFFF' }}>אין נתונים !</h3> :
        <StyledTable>
      <TableHead>
        <TableRow>
          <TableCell sx={{ textAlign : 'center' , color : '#FFFF' }} >אסימון</TableCell>
          <TableCell sx={{ textAlign : 'center' , color : '#FFFF' }} >הקמה</TableCell>
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
                {row._id}
              </TableCell>
              <TableCell sx={{ textAlign : 'center' , color : '#FFFF' }} >{formatDate(row.createdAt)}</TableCell>
              <TableCell sx={{ textAlign : 'center' , color : '#FFFF' }} >
              <IconButton onClick={() => dispatch(deleteInvitation(row._id))}>
                    <DeleteIcon color="error"/>
              </IconButton>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </StyledTable>
    }
    {
            rows.length === 0 && <h3 style={{ textAlign: 'center', color: '#FFFF' }}>אין אסימונים !</h3>
          }
    </>
  );
};

export default MyInvitationTable;
