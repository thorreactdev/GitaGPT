import React from 'react';
import { Box , Typography } from "@mui/material";
import linkedin from "../Assets/linkedin-icon-3.svg";
import instagram from "../Assets/instagram-2016-5.svg";
import github from "../Assets/github-icon-1.svg";
// import facebook from "../Assets/facebook-2020-2-1.svg";

const Footer = () => {
  return (
    <Box>
    <Box pb={3}>
    <Box sx={{
        display :"flex",
        alignItems :"center",
        justifyContent : "center",
        gap : "60px",
        pb : "30px",
        cursor : "pointer",
       
    }}>
        <Typography color="#ccc" variant='body1' fontSize={18}>
            About Us
        </Typography>
        <Typography color="#ccc" variant='body1' fontSize={18}>
            Contact Us
        </Typography>
        <Typography color="#ccc" variant='body1' fontSize={18}>
            Bhagavad Gita AI
        </Typography>
        <Typography color="#ccc" variant='body1' fontSize={18}>
            Privacy
        </Typography>
        <Typography color="#ccc" variant='body1' fontSize={18}>
            Terms
        </Typography>
        <Typography color="#ccc" variant='body1' fontSize={18}>
            API
        </Typography>
    
    </Box>
    <Box 
    sx={{
        display :"flex",
        alignItems :"center",
        justifyContent : "center",
        gap : "30px",
        pb : "30px",
        cursor : "pointer",

    }}
    >
        <img src={linkedin} alt='' width={40}/>
        <img src={instagram} alt='' width={40}/>
        {/* <img src={facebook} alt='' width={45}/> */}
        <img src={github} alt='' width={40}/>
        
    </Box>
    <div style={{
      width : "100%",
      height : "1px",
      backgroundColor : "#FFF"
    
    }}></div>
    </Box>
    <Box sx={{paddingBottom : "30px"}}>

    <Typography color="#FFF" textAlign="center">
    © 2024 Copyright: Develpoed By Vinay Prajapati ❤️. All rights reserved.
    </Typography>
    </Box>
    </Box>
  )
}

export default Footer