import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NoteIcon from '@mui/icons-material/Note';
import { Link } from "react-router-dom";

const MyHeader = () => {
  return (
    <>
    <AppBar position="relative" color="secondary">
        <Toolbar>
            <NoteIcon/>
            <Typography variant="h6" component={Link} to="/">Posts</Typography>
            {/* <Link to="/aboutus"> */}
            <Typography variant="h6" align="center" component={Link} to="/aboutus">About Us</Typography>
            {/* </Link> */}
            <Typography variant="h6" align="center" component={Link} to="/userinfo">Users</Typography>
        </Toolbar>
    </AppBar>
    </>
  )
}

export default MyHeader