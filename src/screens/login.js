import React, { useState } from "react";
import { Typography, Button, TextField, Box } from "@mui/material";
import { loginUser } from "../config/firebasemethod";
import { Link, useNavigate } from "react-router-dom";
import '../App.css';
// import Loader from '../assets/loader.gif'
import CircularProgress from "@mui/material/CircularProgress";
import userImg from '../assets/user.png'


function Login() {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  let login = () => {
    setIsLoading(true)
    loginUser({ userName, email, password })
      .then((success) => {
        // navigate(`/admin/${success.id.slice(0, 8)}`)
        // navigate(`/${success.id}`)
        setIsLoading(false)
        if (email === 'admin@gmail.com') {
          navigate(`/admin/${success.id}`)
        }
        else {
          navigate(`/student/${success.id}`)
        }
        console.log((success))
      })
      .catch((error) => {
        setIsLoading(false)
        console.log(error)
      })
  };

  return (
    <>
      <Box className='login'>
        <Box className='main' px={4} pt={5} pb={4}>
          <img src={userImg} width='100' height='100' />
          <h2 variant="h1" align="center" color="error">Login
          </h2>
          <Box mt={3}>
            <Button className='button' variant="contained" size="large" sx={{ width: '50%' }} onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button variant="outlined" size="large" sx={{ width: '50%', fontWeight: 'bold', color: 'black' }} onClick={() => navigate('/signup')}>
              SignUp
            </Button>
          </Box>
          {/* <Box mt={4}>
            <TextField
              label="User Name"
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
            <Button className='button' variant="contained" size="large" fullWidth onClick={login}>
              {isLoading ? <CircularProgress /> : 'Login'}
            </Button>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 'bold' }}>Create new account <Link to="/signup" style={{ textDecoration: 'none' }}>SIGN UP</Link></Typography>
          </Box>
          <Box mt={5} mb={0} py={2} sx={{border: '1px solid black', backgroundColor: 'black', borderTopRightRadius: '60px',borderBottomLeftRadius: '60px'}}>
            <Typography onClick={()=>navigate('/form')} sx={{ fontWeight: 'bold', fontSize: '24px',  }}> <Link to="/signup" style={{ textDecoration: 'none', color: 'white', fontFamily:'verdana' }}>Registration Form</Link></Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Login;
