import React from 'react';
import { Box, Button, TextField, Typography} from '@mui/material';
import { Lock, Person } from '@mui/icons-material';
import { styled, width } from '@mui/system';
import {login} from '../services/loginService'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom'; 

const BackgroundContainer = styled('div')({
    backgroundImage: 'url("/images/dream-about-scuba-diving.jpg")', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  const LoginBox = styled(Box)({
    backgroundColor: '#00ABE1', // Color azul claro
    padding: '2rem',
    borderRadius: '20px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '500px',
    width: width*0.2,
  });

  const Login = () => {
    const [formData, setFormData] = useState({
      usuario: '',
      password: '',
  });
  const navigate = useNavigate(); 
  const handleLogin = async () => { 
    try{
      const credentials = {
        usuario: formData.usuario,
        password: formData.password,
      }
      const response = await login(credentials);
      if (response) {
        navigate('/Dashboard');
      } else {
        alert('Credenciales incorrectas');
      }
    }catch(error){
      console.log(error);
  }}

    return(

        <BackgroundContainer>
            <LoginBox>
            <img src="/images/aq.png" alt="Logo" style={{ width: '350px', marginBottom: '1rem' }} />
            <Typography variant="h5" gutterBottom color="white">Bienvenido/a</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                <Person sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="filled-basic" label="Usuario" variant="filled" fullWidth
                InputProps={{
                    style: { backgroundColor: 'white', borderRadius: '10px' }
                  }}
                  value={formData.usuario} onChange={(e) => setFormData({ ...formData, usuario: e.target.value })}
                />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <Lock sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField  label="Contraseña" variant="filled" type="password" fullWidth 
                InputProps={{
                    style: { backgroundColor: 'white', borderRadius: '10px' }
                  }}
                  value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
            </Box>
            <Typography variant="body2" color="white" sx={{ marginBottom: '1rem', cursor: 'pointer' }}>
          ¿Olvidaste tu contraseña?
        </Typography>
        <Button variant="contained" sx={{backgroundColor: '#9AF087', color: 'black',}}  onClick={handleLogin}>
          Ingresar
        </Button>


            </LoginBox>



        </BackgroundContainer>

    );
  };
  
  export default Login;