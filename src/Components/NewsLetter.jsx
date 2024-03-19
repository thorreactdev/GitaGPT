import React, { useState } from 'react'
import { Box, Typography, TextField, Button } from "@mui/material";
// import { styled } from "@mui/material/styles";
import { useContext } from 'react';
import { AuthContext } from "../Services/ContextAPI";
import { BASE_URL } from '../Services/Url';


const NewsLetter = () => {
    const CssTextField = {
        '& label': { // Apply to all label states
          color: '#FFF', // Set label color to white
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#B2BAC2',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#E0E3E7',
          },
          '&:hover fieldset': {
            borderColor: '#B2BAC2',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#6F7E8C',
          },
          '& .MuiInputBase-input': {
            color: "#FFF",
          },
          width : "350px",
          backgroundColor : "#333"
        },
      };

      const { userdata } = useContext(AuthContext);
      console.log(userdata);

      const[newsLetterData , setnewsLetterData] = useState({
        name : "",
        email : "", 
      })

      const handleChange = (e) =>{
        setnewsLetterData({
          ...newsLetterData ,
          [e.target.name]:e.target.value
        })
      }

      const handleSubmit = async() =>{
        try {
          const response = await fetch(`${BASE_URL}/api/subscribe`,{
            method : "POST",
            headers : {
              "Content-Type" : "application/json",
            },
            body:JSON.stringify(newsLetterData)
          });
          const data = await response.json();
          if(response.ok){
            alert(data.message);
            setnewsLetterData({
              name : "",
              email :""
            })
          }else{
            alert(data.message);
          }   
        } catch (error) {
          console.log(error);
        }
      };
    





    
  return (
    <Box  
    mt={3} pb={4}
    >
        <div className='news-letter'>
            <Typography color="#FFF" variant="h4" fontWeight={600} textAlign="center">
            Have the Shloka of the Day delivered to your <br/> inbox each morning
            </Typography>
        <Box  sx={{display : 'flex' , gap : "30px" , alignItems : "center" , justifyContent : "center"}}
        >
            <TextField onChange={handleChange} name='name' label="Enter Your Name"  value={newsLetterData.name} sx={CssTextField}/>
            <TextField  onChange={handleChange} name='email' label="Enter Your Email" value= {newsLetterData.email} sx={CssTextField} />
            <Button variant='contained' size='large' sx={{backgroundColor : "#f57903" , padding : "12px 25px"}} onClick={handleSubmit}
            >
                Subscribe
            </Button>
        </Box>

        </div>

    </Box>
  )
}

export default NewsLetter