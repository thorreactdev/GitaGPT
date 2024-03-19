import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AuthContext } from '../Services/ContextAPI';
import { Box } from '@mui/material';

 const AlertDialog = ({ open , onClose}) =>{
    const { LogoutUser } = React.useContext(AuthContext);
    const handleLogout = () =>{
        LogoutUser();
        onClose();
    }
  

  return (
    <Box>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
            style: {
              backgroundColor: '#121212', // Background color
              color: 'white',
              width : "400px",
              height : "200px",
              boxShadow : "0px 0px 2px 0px #ccc"
            }
          }}
       
        
      >
        <DialogTitle id="alert-dialog-title">
        {"Logout Confirmation"}
        </DialogTitle>
        <DialogContent color='#FFF'>
          <DialogContentText id="alert-dialog-description" color="#fff">
          Are you sure you want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} >Disagree</Button>
          <Button autoFocus onClick={handleLogout}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default AlertDialog;