import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '32ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

const Header = () => {

  return (
    <>
    <AppBar position="secondary" style={{ background: '#2E3B55' }} >
        <Toolbar>
           <GitHubIcon/>
           <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search or jump to..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Typography variant="subtitle2" margin={2}>Pull requests</Typography>
          <Typography variant="subtitle2" margin={2}>Issues</Typography>
          <Typography variant="subtitle2" margin={2}>Codespaces</Typography>
          <Typography variant="subtitle2" margin={2}>Marketplace</Typography>
          <Typography variant="subtitle2" margin={2}>Explore</Typography>
         
         <NotificationsNoneIcon />
        
         
          
            
          
        </Toolbar>
    </AppBar>
    </>
  )
}

export default Header