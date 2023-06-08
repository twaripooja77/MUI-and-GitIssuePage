import React, { useState,useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


  
 
const Users = () => {
    const [users, setUsers]=useState([]);
    const[page, setPage]=useState(1);
    const [rowperpage]=useState(10);

    const getUsersData=()=>{
       
        fetch("https://63b06aa0f9a53fa20268c6ed.mockapi.io/api/v1/users").then(res=>res.json()).then(data=>
        {console.log(data,"this is users data");
        setUsers(data)});
       
    }

    useEffect(()=>{
        getUsersData();
       },[])

       const handleChangePage=(event, newPage)=>{
            setPage(newPage);
       }
         
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.N</TableCell>
            <TableCell >FirstName</TableCell>
            <TableCell >LastName</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.slice(page*rowperpage-rowperpage, page*rowperpage).map((row,index) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >
                
                {rowperpage*(page-1)+1+index}
              </TableCell>
              <TableCell >
                {row.firstname}
              </TableCell>
              <TableCell >
                {row.lastname}
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
{users.length>0 &&(
  <Stack spacing={2}>
      
      <Pagination count={Math.floor(users.length/rowperpage)} onChange={handleChangePage} color="secondary" />
      
    </Stack>
)}
    
    </>
  )
}

export default Users