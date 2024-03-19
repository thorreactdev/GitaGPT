import React , { useState, useEffect} from 'react';
import { Box , Typography} from "@mui/material";
import { useParams } from 'react-router-dom';
import GeetaVerse from './GeetaVerse';

const Sloka = () => {
  
    const { chapter_number } = useParams();
    const [singleData, setGeetaCardData] = useState(null);
    const[geetaverse , setGeetaVerse] = useState([]);
   

  const options = {
    method: "GET",
    url: `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter_number}/`,
    params: { limit: "18" },
    headers: {
      "X-RapidAPI-Key": "ec64071271mshd0777f7b8c18e33p15d129jsn563f0650c1d3",
      "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
    },
  };

  const geetaCards = async () => {
    try {
      const response = await fetch(options.url, {
        method: options.method,
        headers: options.headers,
      });
      const data = await response.json();
      console.log(data);
      if (data) {
        setGeetaCardData(data);
      } else {
        return ;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    geetaCards();
  },[chapter_number]);

  

  const options2 = {
    method: 'GET',
    url: `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter_number}/verses/`,
    headers: {
      'X-RapidAPI-Key': 'ec64071271mshd0777f7b8c18e33p15d129jsn563f0650c1d3',
      'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
    }
  };

  const geetaVerses = async()=>{
    try {
      const response = await fetch(options2.url , { method : options2.method , headers : options2.headers});
      const data = await response.json();
      if(data){
        setGeetaVerse(data);
      } 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    geetaVerses();
  },[chapter_number]);






  return (
    <Box className="main-sloka">
        <Box sx={{
            
            width : "68%" , 
            margin : "auto",
            marginTop : "80px"
        }}>
        <Box  
        sx={{
            display : 'flex',
            alignItems : "center",
            justifyContent : "center",
            flexDirection : "column",
            gap : "10px",
        }}
        >
        <Typography color="#f57903" fontSize={22} fontWeight={500}  >
           Chapter {singleData?.chapter_number}
        </Typography>
        <Typography color="#FFF" fontWeight={700} fontSize={35} mt={2} >
            {singleData?.name_translated || singleData?.name_transliterated}
        </Typography>
        <Typography color="#FFF" fontSize={18} mt={3} letterSpacing={.4} >
            {singleData?.chapter_summary}
        </Typography>
        </Box>
        {/* <Box sx={{
            width : "100%",
            height : ".5px",
            backgroundColor :"#FFF",
            marginTop : "60px"
        }}
        ></Box> */}

        {/* <Box sx={{
            display : "flex",
            alignItems : "center",
            justifyContent : 'center',
            flexDirection : "column",
            mt:"30px",
            pb : "20px"
        }}>
            <Typography  variant ='h4' color="#f57903"  fontWeight={800} >
                Summary Translation
            </Typography>
            <Typography color="#FFF" variant='body1' fontSize={18} mt={4} letterSpacing={.5}>
                {singleData?.chapter_summary_hindi}
            </Typography>
        </Box> */}
        
        <GeetaVerse verses={geetaverse}/>
        

        </Box>
       
    </Box>
    
  )
}

export default Sloka