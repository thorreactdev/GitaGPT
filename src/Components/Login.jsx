import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../Services/Url";
import { AuthContext } from "../Services/ContextAPI";
import { useContext } from "react";


const Login = ({ onCancel , onSubmit }) => {
  const { storeToken  } = useContext(AuthContext);
  const navigate = useNavigate();

  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setuserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        storeToken(data.token);
        alert(data.message);
        onSubmit();
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        width: "430px",
        minHeight: "400px",
        backgroundColor: "#FFF",
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
          Welcome Back
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
          type="password"
          id="outlined-basic"
          label="Enter Password"
          name="password"
          variant="outlined"
          required
          style={{ width: "100%", cursor: "pointer" }}
          onChange={handleChange}
          value={userData.password}
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
          handleSubmit ()
        }}
        
      >
        Login
      </Button>
      <Box sx={{ display: "flex", marginTop: "20px" , justifyContent : "space-between" , alignItems : "center" }}>
        <Box sx={{display : "flex" , gap : "1px" , alignItems : "center"}}>
        <Checkbox />
        <Typography variant="body1" fontSize={15.5}>
          Remember Me
        </Typography>
        </Box>
        <Box>
            <Typography variant="body1" fontSize={15.5} sx={{cursor : "pointer" , ":hover" :{color : "#f57903"}}}>
                Forgot Password
            </Typography>
        </Box>
      </Box>
      <Typography mt={3} fontWeight={400}>
        Don't Have an Account ?{" "}
        <Link style={{ textDecoration: "none", color: "#f57903" }}>
          Create One
        </Link>
      </Typography>
    </Box>
  );
};

export default Login;
