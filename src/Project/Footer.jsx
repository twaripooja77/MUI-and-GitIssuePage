import React from 'react';
import Divider from '@mui/material/Divider';
import GitHubIcon from '@mui/icons-material/GitHub';
import {AppBar, Box, Grid, Toolbar, Typography} from '@mui/material';



const Footer = () => {
  return (
   <>
   <Divider/>
   <Grid container>
   
   
   <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        background:"transparent",
        border:"none",
       
        }} >
        <Toolbar>
        <GitHubIcon/>
        <Typography sx={{color:"black"}}>
   {`© ${new Date().getFullYear()} GitHub, Inc`}
   </Typography>
          <Typography variant="h6" >
            
          </Typography>
         
        </Toolbar>
      </AppBar>
    </Box>
   </Grid>
   
   </>
  )
}

export default Footer
