import React from 'react';
import { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import { Box, Grid, Typography, FormControl, Tooltip} from '@mui/material';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Chip from '@mui/material/Chip';
import axios from 'axios';
import TitleHover from './TitleHover';
import roboto from '@fontsource/roboto/500.css';
import Comment from './Comment';


const GitHomepage = () => {
  const[info, setInfo]=useState([]);
  const navigate=useNavigate();
  const getIssues=()=>{
    axios.get("https://api.github.com/repos/facebook/react/issues").then(({data})=>setInfo(data));
  }
  let time="";

  useEffect(()=>{
    getIssues();
  },[]);

  const handleTitlePage=(issueNumber)=>{
    navigate(`/issue/${issueNumber}`);
    <Comment info={info}/>

  }
  return (
   <>
<main>
    <Grid mb={3} sx={{padding:'0 8em', background:"#EBF5FB"}}>
      <Box
      sx={{
        border:"1px solid #FFF4",
        borderRadius:"5px",
        borderColor:'#95A5A6'
      }}>
        <Box sx={{
          padding:"1em",
          background:"#FFF1"
        }}>
<Grid container justifyContent='space-between'>
  <Box>
    <Grid container>
      <Box>
        <Grid container 
        alignItems='center' 
        sx={{color:'#FFF'}}
        spacing={1}
        >
          <Grid item>
            <AdjustOutlinedIcon sx={{color:'black'}}/>
          </Grid>
          <Grid item>
          <Typography variant="body2" sx={{color:'black'}}>903 Open</Typography>
          </Grid>
          
          </Grid>
      </Box>
      <Box sx={{marginLeft:"1em"}}>
        <Grid container 
        alignItems='center' 
        sx={{color:'blue'}}
        spacing={1}
        >
          <Grid item>
            <AdjustOutlinedIcon sx={{color:'black'}}/>
          </Grid>
          <Grid item>
          <Typography variant="body2" sx={{color:'black'}}>11083 Closed</Typography>
          </Grid>
          
          </Grid>
      </Box>

    </Grid>
  </Box>
<Box>
  <Grid container>
    <Grid>
      <FormControl>
          <select 
          style={{
            background:'#F8F9F9',
            color:"black",
            marginRight:"15px",
            border:"none",
            fontSize:"12px"
            
          }}>
              <option value="">Author</option>
          </select>
      </FormControl>
      <FormControl>
          <select 
          style={{
            background:'#F8F9F9',
            color:"black",
            marginRight:"15px",
            border:"none",
            fontSize:"12px"
            
          }}>
              <option value="">Label</option>
          </select>
      </FormControl>
      <FormControl>
          <select 
          style={{
            background:'#F8F9F9',
            color:"black",
            marginRight:"15px",
            border:"none",
             fontSize:"12px"
            
          }}>
              <option value="">Projects</option>
          </select>
      </FormControl>
      <FormControl>
          <select 
          style={{
            background:'#F8F9F9',
            color:"black",
            marginRight:"15px",
            border:"none",
            fontSize:"12px"
            
          }}>
              <option value="">Milestones</option>
          </select>
      </FormControl>
      <FormControl>
          <select 
          style={{
            background:'#F8F9F9',
            color:"black",
            marginRight:"15px",
            border:"none",
            fontSize:"12px"
            
          }}>
              <option value="">Assignee</option>
          </select>
      </FormControl>
      <FormControl>
          <select
          style={{
            background:'#F8F9F9',
            color:"black",
            marginRight:"15px",
            border:"none",
            fontSize:"12px"
            
          }}>
              <option value="">Sort</option>
          </select>
      </FormControl>
    </Grid>
  </Grid>
</Box>
</Grid>
        </Box>
        {info.map((item)=>{
          const currentDate= new Date().getTime()/1000;
          const createdDate= new Date(item.created_at).getTime()/1000;
          const diffInSeconds=currentDate- createdDate;

          //when time is less than a minute
          if(diffInSeconds <60){
            time="Now";
          }
          
           //when time is less than an hour
           else if(diffInSeconds <3600){
            time=`${Math.floor(diffInSeconds/60)
           } minutes ago`;
           }

           //when time is less than a day
           else if(diffInSeconds <86400){
            time=`${Math.floor(diffInSeconds/3600)
           } hours ago`;
           }
           else if(diffInSeconds >86400 && diffInSeconds <=86400*2){
            //when time is between 1 and 2 days
            time=`yesterday`;
           }
           //when time is greater than 2  and less than a week(1week=60*60*24*7)
           else 
           {
            if(diffInSeconds <604800){
            time=`${Math.floor(diffInSeconds/86400)} days ago`;
           }

           else if(diffInSeconds > 604800 &&diffInSeconds <=604800*2 ){
            time=`last week`;
           } else{
            if(diffInSeconds <604800*4){
              time=`${Math.floor(Math.floor(diffInSeconds/(86400*7)))} weeks ago`;
            }else if(
              diffInSeconds>604800*4 &&
              diffInSeconds <=604800*4*2
            ){
              time=`a month ago`;
            }else{
              time=`long time ago`;
            }
           }

        }
        return(
          <>
          <Box sx={{borderTop:'1px solid #873600',
        background:"#ABB2B9", padding:"3px"}} key={item.id}>
          <Grid container justifyContent='space-between' alignItems='flex-start'>
            <Box>
              <Grid container>
                <Box>
                  <ArrowRightIcon sx={{color:'green' }}/>
                </Box>
                <Box>
                  <Grid container
                  sx={{color:'grey', maxWidth:'900px', font:roboto}}
                  >
                    <Tooltip placement='top'
                    //  title={<TitleHover item={item}/>} 
                    //  arrow
                     >
                      <Typography component={link} to="/commentpage" onClick={()=>handleTitlePage(item.number)}
                      sx={{
                        cursor:'pointer',
                        '&:hover':{
                          color:'black',
                        },
                      }}
                      >
                        {item.title}
                      </Typography>
                    </Tooltip>
                    {item.labels.map((ele)=>{
                      return(
                      <>
                      <Tooltip
                      //  title={ele.description}
                       >
                        <Chip sx={{
                          background:`#${ele.color}`,
                          margin:"0 5px",
                          cursor:"pointer",
                        }}
                        label={ele.name}
                        variant="outlined"
                        size="small"
                        />
                        </Tooltip></>
                      );
                    })}
                  </Grid>
                </Box>
              </Grid>
              <Grid>
                <Grid sx={{
                  display:"flex",
                  alignItem:"center",
                  marginTop:"5px",
                  marginLeft:"25px",
                  color:"#283747"
                }}>
                  <Typography sx={{marginRight:"4px"}}>{`#${item.number} opened ${time} by `}</Typography>
                  <Tooltip placement="top" arrow>
                    <Typography sx={{cursor:'pointer'
                    // , '&:hover':{color:'black'}
                    }}>
                      {item.user.login}
                    </Typography>
                  </Tooltip>
                </Grid>
              </Grid>
            </Box>

          </Grid>
        </Box>
          </>
        
        )
        
        
         } )};
    
      </Box>
    </Grid>
    </main>
   
   </>
  )
}

export default GitHomepage