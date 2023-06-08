import React from 'react';
import {AppBar, Box, Grid, Toolbar, Typography} from '@mui/material';
import roboto from '@fontsource/roboto/500.css';
import CodeIcon from '@mui/icons-material/Code';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import FeedIcon from '@mui/icons-material/Feed';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ShowChartIcon from '@mui/icons-material/ShowChart';

const Headerbar = () => {
  return (
    <>
    
      <AppBar sx={{
        position:'relative',
        background:'#F3FFFF',
        height:'80px',
         font:roboto,
         
      }}>
        <Toolbar>
          
          <Grid container alignItems="center">
            <Box sx={{
                padding:'5px 15px',
                mt:'40px',

            }}>
                <Grid container>
                    <Grid item>
                    <CodeIcon sx={{color:'black'}}/>
                    </Grid>
                    <Grid item>

                        <Typography variant='body1' sx={{color:'black'}}>&nbsp;Code</Typography>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{
                padding:'5px 30px',
                mt:'40px',

            }}>
                <Grid container>
                    <Grid item>
                    <AdjustOutlinedIcon sx={{color:'black'}}/>
                    </Grid>
                    <Grid item>
                        
                        <Typography variant='body1' sx={{color:'black'}}>&nbsp;Issues</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{
                padding:'5px 30px',
                mt:'40px',

            }}>
                <Grid container>
                    <Grid item>
                    <AccountTreeOutlinedIcon sx={{color:'black'}}/>
                    </Grid>
                    <Grid item>
                        
                        <Typography variant='body1' sx={{color:'black'}}>&nbsp;Pull Requests</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{
                padding:'5px 30px',
                mt:'40px',

            }}>
                <Grid container>
                    <Grid item>
                    <PlayCircleFilledWhiteOutlinedIcon sx={{color:'black'}}/>
                    </Grid>
                    <Grid item>
                        
                        <Typography variant='body1' sx={{color:'black'}}>&nbsp;Action</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{
                padding:'5px 30px',
                mt:'40px',

            }}>
                <Grid container>
                    <Grid item>
                    <FeedIcon sx={{color:'black'}}/>
                    </Grid>
                    <Grid item>
                        
                        <Typography variant='body1' sx={{color:'black'}}>&nbsp;Project</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{
                padding:'5px 30px',
                mt:'40px',

            }}>
                <Grid container>
                    <Grid item>
                    <AnnouncementIcon sx={{color:'black'}}/>
                    </Grid>
                    <Grid item>
                        
                        <Typography variant='body1' sx={{color:'black'}}>&nbsp;Security</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{
                padding:'5px 30px',
                mt:'40px',

            }}>
                <Grid container>
                    <Grid item>
                    <ShowChartIcon sx={{color:'black'}}/>
                    </Grid>
                    <Grid item>
                        
                        <Typography variant='body1' sx={{color:'black'}}>&nbsp;Insights</Typography>
                    </Grid>
                </Grid>
            </Box>
          </Grid>
          
        </Toolbar>
      </AppBar>
  
    </>
  )
}

export default Headerbar
