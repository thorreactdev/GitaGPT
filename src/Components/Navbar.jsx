import React, { useContext, useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  MenuItem,
  Divider,
  ListItemIcon,
  Menu,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import { AuthContext } from "../Services/ContextAPI";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import AlertDialog from "./AlertDialog";
import Contact from "./Contact";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { isLoggedin, userdata } = useContext(AuthContext);
  console.log(userdata?.name);
  console.log(isLoggedin);

  const [popup, setpopup] = useState(false);
  const [loginPopup, setLoginpopup] = useState(false);
  const handlePopup = () => {
    setpopup(!popup);
  };

  const handleCancel = () => {
    setpopup(!popup);
  };

  const handelRegistrationConfirmation = () => {
    setpopup(!popup);
  };

  //login popup
  const handleLoginPopup = () => {
    setLoginpopup(!loginPopup);
  };
  const handleLoginClose = () => {
    setLoginpopup(!loginPopup);
  };

  const handleLoginSubmit = () => {
    setLoginpopup(!loginPopup);
  };

  // Avatar Image

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string?.length; i++) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name?.split(" ")[0][0]}`,
    };
  }

  const [logoutAlert, setLogoutAlert] = useState(false);
  const handleLogoutAlert = () => {
    setLogoutAlert(!logoutAlert);
  };

  const [contacPopup, setContactPopup] = useState(false);
  const handleContactPopup = () => {
    setContactPopup(!contacPopup);
  };

  const handleOnCancel = () => {
    setContactPopup(!contacPopup);
  };

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px={4}
        py={1}
        sx={{
          boxShadow: "0px 0px 1px 0px #fff",
          color: "#fff",
          cursor: "pointer",
          position: "sticky",
          top: 0,
          left: 0,
          zIndex: 2,
          backgroundColor: "#000",
        }}
      >
        <Box>
          <Typography
            variant="h6"
            fontWeight={600}
            fontSize={40}
            color="#f57903"
          >
            Bhagavad Gita
          </Typography>
        </Box>

        <Stack direction="row" alignItems="center" spacing={5}>
          <Typography fontSize={18}>Quotes</Typography>

          <Typography fontSize={18}>About Gita</Typography>
          <Link to="/gitagpt" style={{ textDecoration: "None", color: "#FFF" }}>
            <Typography fontSize={18}>Gita AI</Typography>
          </Link>
          <Box sx={{ display: "flex", gap: "30px" }}>
            {isLoggedin ? (
              <React.Fragment>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{ minWidth: 100 }}
                    onClick={handleContactPopup}
                  >
                    Contact
                  </Typography>

                  <Tooltip
                    title="Account settings"
                    sx={{ backgroundColor: "#252525" }}
                  >
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Avatar {...stringAvatar(userdata?.name)} />
                        <Typography color="#ccc">
                          Welcome {userdata?.name}
                        </Typography>
                      </Box>
                    </IconButton>
                  </Tooltip>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      backgroundColor: "#121212",
                      color: "#FFF",
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                        bgcolor: "#757575",
                        color: "#121212",
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleClose}>
                    <Avatar /> Profile
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Avatar /> My account
                  </MenuItem>
                  <Divider
                    sx={{
                      color: "#101418",
                      backgroundColor: "#e7e7e7",
                      height: ".02px",
                    }}
                  />
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" sx={{ color: "#FFF" }} />
                    </ListItemIcon>
                    Add another account
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Settings fontSize="small" sx={{ color: "#FFF" }} />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={handleLogoutAlert}>
                    <ListItemIcon>
                      <Logout fontSize="small" sx={{ color: "#FFF" }} />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </React.Fragment>
            ) : (
              <>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#f57903",
                    fontSize: "16px",
                    color: "#FFF",
                    padding: "6px 20px",
                    ":hover": { backgroundColor: "darkorange" },
                  }}
                  onClick={handlePopup}
                >
                  Sign Up
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#f57903",
                    fontSize: "16px",
                    color: "#FFF",
                    padding: "6px 20px",
                    ":hover": { backgroundColor: "darkorange" },
                  }}
                  onClick={handleLoginPopup}
                >
                  Log In
                </Button>
              </>
            )}
          </Box>

          <div style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                top: "13px",
                left: "9px",
                cursor: "pointer",
              }}
            >
              <SearchIcon fontSize="small" />
            </span>
            <input
              type="search"
              placeholder="Search For Quotes"
              required
              style={{
                height: "45px",
                width: "300px",
                outline: "none",
                padding: "0px 35px",
                borderRadius: "5px",
                backgroundColor: "transparent",
                border: ".5px solid #ccc",
                color: "white",
              }}
            />
          </div>
        </Stack>
      </Stack>
      {popup && (
        <Signup
          onCancel={handleCancel}
          onSubmit={handelRegistrationConfirmation}
         
          
        />
      )}
      {popup && <div className="blur-overlay" onClick={handleCancel}></div>}
      {loginPopup && (
        <Login onCancel={handleLoginClose} onSubmit={handleLoginSubmit} />
      )}
      {loginPopup && (
        <div className="blur-overlay" onClick={handleLoginClose}></div>
      )}
      {logoutAlert && (
        <AlertDialog
          open={logoutAlert}
          onClose={() => setLogoutAlert(!logoutAlert)}
        />
      )}
      {contacPopup && <Contact onCancel={handleOnCancel} />}
      {contacPopup && (
        <div className="blur-overlay" onClick={handleOnCancel}></div>
      )}
      
    </Box>
  );
};

export default Navbar;
