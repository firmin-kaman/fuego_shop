// LoginPage.tsx

import React from 'react';
import { Container, Paper, Typography, TextField, Button} from '@mui/material';
import "../../Components/Css/RegisterPage.css";
import GoogleIcon from '../../Components/Images/Google__G__logo.svg.png';
import FacebookIcon from '../../Components/Images/Facebook-logo.png';
import { useNavigate } from 'react-router-dom';


interface LoginPageProps {
  // Ajoutez les propriétés nécessaires ici
}

const RegisterPage: React.FC<LoginPageProps> = (props) => {
  // Ajoutez le gestionnaire de connexion ici

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/login');
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100vh', justifyContent: 'center'}} className='login'>
    <Container component="main" maxWidth="xs" sx={{ margin: 'auto' }}>
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'left'}}>
        <Typography variant="h5" gutterBottom sx={{fontWeight: "600"}}>
          Sign up
        </Typography>
        <Typography variant="h6" style={{ display: "flex", alignItems: "center", marginBottom: "20px",  marginTop: "-10px"}}>
          <Typography style={{ marginRight: "5px" }}> Have you an account ?</Typography>
          <a href='#1'style={{fontWeight: "600", fontSize: "18px", 
                color: "#000",
                '&:hover': {
                backgroundColor: '#000',
              },
              textDecoration: "none",
              } as React.CSSProperties} onClick={handleButtonClick} className='Signup-link'>
            Sign in!
          </a> 
        </Typography>
        {/* Auth-provider */}
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <Button fullWidth variant="contained" // color="neutral" onClick={() => {   // Ajoutez ici le code pour le traitement de la connexion avec Google }} 
              sx={{width: "45%", display :"flex", flexDirection: "row", marginBottom: "30px", 
              backgroundColor: "#353535",
              '&:hover': {
                backgroundColor: '#000',
              },
              }} 
              className='google-btn'>
          <img src={GoogleIcon} alt="Google_img" style={{ width: "20px", marginRight: "10px" }}/>
          Google
        </Button>
        <Button fullWidth variant="contained" // color="neutral" onClick={() => {   // Ajoutez ici le code pour le traitement de la connexion avec Google }} 
              sx={{width: "45%", display :"flex", flexDirection: "row", marginBottom: "30px",
              backgroundColor: "#353535",
              '&:hover': {
                backgroundColor: '#000',
              },
              }} 
              className='facebook-btn'>
          <img src={FacebookIcon} alt="Facebook_img" style={{ width: "40px", marginRight: "3px" }}/>
          Facebook
        </Button>
        </div>
        <div style={{display: "flex", marginBottom: "20px"}}>
          {/* Ligne horizontale avant le mot "or" */}
          <hr style={{ width: '50%', borderTop: '1px solid #d4d4d4', margin: '10px 0' }} />
          <Typography variant="body2" style={{ backgroundColor: '#fff', padding: '0 10px' }}>or</Typography>
          {/* Ligne horizontale après le mot "or" */}
          <hr style={{ width: '50%', borderTop: '1px solid #d4d4d4', margin: '10px 0' }} />
        </div>

        <form>
          <TextField label="Username" variant="outlined" margin="normal" required fullWidth />
          <TextField label="Email" variant="outlined" margin="normal" required fullWidth type="email" />
          <TextField label="Password" variant="outlined" margin="normal" required fullWidth type="password" />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}> Sign In </Button>
        </form>
      </Paper>
    </Container>
    </div>
  );
};

export default RegisterPage;
