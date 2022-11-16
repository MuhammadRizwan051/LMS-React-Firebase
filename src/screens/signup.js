import React, { useState } from "react";
import { Typography, Button, TextField } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { signUpUser } from "../config/firebasemethod";
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import '../App.css';
import CircularProgress from "@mui/material/CircularProgress";
import userImg from '../assets/user.png'


function Signup() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)


  let signUp = () => {
    setIsLoading(true)
    signUpUser({ email, password })
      .then((success) => {
        setIsLoading(false)
        // Signed in
        navigate('/')
        console.log(success);
      })
      .catch((error) => {
        setIsLoading(false)
        console.log(error);
      });
  };
  // const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Box className='signup'>
        <Box className='main' px={4} pt={5} pb={4}>
        <img src={userImg} width='100' height='100' />
          <h2 variant="h1" align="center" color="error">Signup
          </h2>
          <Box mt={3}>
            <Button variant="outlined" size="large" sx={{ width: '50%', fontWeight: 'bold', color: 'black' }} onClick={() => navigate('/')}>
              Login
            </Button>
            <Button className='button' variant="contained" size="large" sx={{ width: '50%' }} onClick={() => navigate('/signup')}>
              Signup
            </Button>
          </Box>
          {/* <Box mt={4}>
            <TextField
              label="UserName"
              variant="outlined"
              fullWidth
              onChange={(e) => setUserName(e.target.value)}
            />
          </Box> */}
          <Box mt={2}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box mt={2}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box my={2}>
            <Button className='button' variant="contained" size="large" fullWidth onClick={signUp}>
              { isLoading ? <CircularProgress /> : 'SIGNUP'}
            </Button>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 'bold', }}>Already have an account ? <Link to="/" style={{ textDecoration: 'none' }}>LOGIN</Link></Typography>
          </Box>
          <Box mt={5} mb={0} py={2} sx={{border: '1px solid black', backgroundColor: 'black', borderTopRightRadius: '60px',borderBottomLeftRadius: '60px'}}>
            <Typography onClick={()=>navigate('/form')} sx={{ fontWeight: 'bold', fontSize: '24px',  }}> <Link to="/signup" style={{ textDecoration: 'none', color: 'white', fontFamily:'verdana' }}>Registration Form</Link></Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Signup;
