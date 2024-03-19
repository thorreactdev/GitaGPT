import React, {useContext, useState} from 'react';
import { Box , Typography , Button , TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { BASE_URL } from '../Services/Url';
import { AuthContext } from '../Services/ContextAPI';

const Contact = ({ onCancel }) => {
    const { userdata , token } = useContext(AuthContext);
    console.log(userdata);
    const [userData, setuserData] = useState({
        name: userdata?.name,
        email: userdata?.email,
        message: "",
      });
    
    const handleChange = (e) => {
        setuserData({
          ...userData,
          [e.target.name]: e.target.value,
        });
      };

    const handleContactData = async () =>{
        try {
            const response = await fetch(`${BASE_URL}/api/contactdata`, {
                method :"POST",
                headers : {
                    "Content-Type":"application/json",
                    Authorization : `Bearer ${token}`
                },
                body:JSON.stringify(userData)
            });
            const data = await response.json();
            if(response.ok){
                console.log(data);
                alert(data.message);
                onCancel();
            }else{
                alert(data.message);
            }  
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <Box
      sx={{
        width: "480px",
        minHeight: "400px",
        backgroundColor :"#FFF",
        boxShadow: "0px 0px 3px 0px #FFF",
        borderRadius: "5px",
        padding: "25px",
        zIndex: 1000,
        position: "fixed",
        top: "20%",
        left: "35%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" fontSize={22} fontWeight={600}>
          Contact Us
        </Typography>
        <div
          style={{
            width: "40px",
            height: "40px",
            border: ".2px solid #ccc",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={onCancel}
        >
          <CloseIcon />
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "30px",
          marginTop: "30px",
        }}
        component="form"
        noValidate
        autoComplete="off"
      >
        <TextField
          type="text"
          id="outlined-basic"
          label="Enter Name"
          variant="outlined"
          name="name"
          required
          style={{ width: "100%", cursor: "pointer"  }}
          onChange={handleChange}
          value={userData.name}
        />
        <TextField
          type="email"
          id="outlined-basic"
          label="Enter Email"
          variant="outlined"
          name="email"
          required
          style={{ width: "100%", cursor: "pointer" }}
          onChange={handleChange}
          value={userData.email}
        />
        <TextField
          id="outlined-basic"
          label="Message"
          variant="outlined"
          name="message"
          multiline
          required
          rows={5}
          style={{ width: "100%", cursor: "pointer" }}
          onChange={handleChange}
          value={userData.message}
        />
      </Box>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#f57903",
          ":hover": { backgroundColor: "#f57903" },
          width: "100%",
          marginTop: "20px",
          padding: "10px 0px",
        }}
        onClick={() => {
        handleContactData();
        }}
        
      >
        Send
      </Button>
      
      
    </Box>
  )
}

export default Contact