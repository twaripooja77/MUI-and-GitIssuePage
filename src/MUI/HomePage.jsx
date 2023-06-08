import React from 'react';
import { useState , useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';


const Copyright=()=>{
  return(
    <>
    <Typography variant='body2' align='center' color='textSecondary'></Typography>
    {`Copyright © ${new Date().getFullYear()} .`}
    
    
    </>
  )
}





const HomePage = () => {

  const[posts, setPosts]=useState([]);
  const[loadingPost, setLoadingPost]=useState(false);
  


  const getPostData=()=>{
    //using fetch
    // setLoadingPost(true);
    // fetch("https://63b06aa0f9a53fa20268c6ed.mockapi.io/api/v1/Posts").then(res=>res.json()).then(data=>
    // {console.log(data,"this is data");
    // setPosts(data)});
    // setLoadingPost(false);
    
   }

   console.log(posts,"this is saved posts")
  
   useEffect(()=>{
    getPostData();
   },[])
     
  return (
   <>
   <CssBaseline>
   


    {/* Main Body  Starts Here*/}
    <main>
        <Grid>
            <Container>
                <Typography variant="h2" align="center">Posts</Typography>
                <Typography variant="h6" align="center" color="textSecondary">Description Here</Typography>
                <Grid>
                    <Grid container justifyContent="center" spacing={2}> 
                        <Grid item>
                    <Button variant="contained">Primary Action</Button>
                    </Grid>
                    <Grid item>
                    <Button variant="outlined">Secondary Action</Button>
                    </Grid>
                   
                    </Grid>
                </Grid>
            </Container>
        </Grid>
        <Grid mt={3}>
        <Container >
          {loadingPost ? <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
    </Stack> :
    <Grid container spacing={3}>
               
    {posts.map((post)=>{
     return( 
       <Grid item key={post.id}>
       <Card sx={{ maxWidth: 345 }}>
<CardMedia
sx={{ height: 140 }}
image={post.post_image}
title={post.post_name}
/>
<CardContent>
<Typography gutterBottom variant="h5" component="div">
{post.post_name}
</Typography>
<Typography variant="body2" color="text.secondary">
 Lizards are a widespread group of squamate reptiles, with over 6,000
 species, ranging across all continents except Antarctica
</Typography>
</CardContent>
<CardActions>
<Button size="small">Share</Button>
<Button size="small">Learn More</Button>
</CardActions>
</Card>
       </Grid> 
     )
    })}
    
 </Grid>
    }
            
        </Container>
        </Grid>
        
       
    </main>

    {/* <footer >
<MyFooter/>
    </footer> */}

<Copyright/>

   </CssBaseline>
   </>
  )
}

export default HomePage