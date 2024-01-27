import React from "react";
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import github from '../Images/Github.png';
import linkedin from '../Images/Linkedin.png';
import mail from '../Images/mail.png';
export default function NavBar(){
    return(
       <>
       <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
          }
        `}
      </style>
        <AppBar style={{
            backgroundColor: '#CEB4F8',
            color:'#6000FC',
            boxShadow: 'none',
            }}>
        <Stack direction={'row'}>
        <Typography style={{ fontSize: '6vh',fontWeight:100,fontStyle:'Inter',marginTop:'0vh',marginLeft:'5vw',color:''}}>Home</Typography>
        <Typography style={{ fontSize: '6vh',fontStyle:'Inter',marginTop:'0vh',marginLeft:'15vw',marginRight:'0'}}>Projects</Typography>
        <Typography style={{ fontSize: '6vh',fontStyle:'Inter',marginTop:'0vh',marginLeft:'10vw',width:'100%',marginRight:'12vw'}}>About Me</Typography>
        <img src={github} style={{height:'10vh',marginLeft:'0vw',marginTop:'0vh'}}></img>
        <img src={linkedin} style={{height:'10vh',marginLeft:'2vw',marginTop:'0vh'}}></img>
        <img src={mail} style={{height:'8vh',marginLeft:'2vw',marginTop:'1vh',marginRight:'2vw'}}></img>
        </Stack>
        </AppBar>
        </>
    );
};
