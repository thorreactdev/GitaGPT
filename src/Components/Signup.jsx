import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../Services/Url";

const Signup = ({ onCancel , onSubmit ,popup}) => {
  const navigate = useNavigate();
  const [userData, setuserData] = useState({
    name: "",
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
      const response = await fetch(`${BASE_URL}/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        alert(data.message);
        onSubmit();
        alert("Signup Sucessfull Please Click To Login");
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
          Sign Up
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
          style={{ width: "100%", cursor: "pointer" }}
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
        Create Account
      </Button>
      <Box sx={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <Checkbox />
        <Typography variant="body1" fontSize={15.5}>
          By Continuing , I agree to our Terms of use and privacy policy
        </Typography>
      </Box>
      <Typography mt={3} fontWeight={400}>
        Already Have an Account ?{" "}
        <Link style={{ textDecoration: "none", color: "#f57903" }}>
          Login Here
        </Link>
      </Typography>
    </Box>
  );
};

export default Signup;
