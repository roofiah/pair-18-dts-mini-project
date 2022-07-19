import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import image from '../assets/ProfilePicture.png'
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../components/Theme'
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../configs/firebase';

const Login = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email')
        const password = data.get('password')

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/")
        } catch (error) {
            setErrorMessage(error.message)
        }
    };

    return (
        <div className="login-container">
            <div className='login-image' />
            <div className="login-content">
                <Box component="form" noValidate onSubmit={handleSubmit}
                    className="form-login"
                    sx={{ mt: 1 }}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        color="secondary"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        color="secondary"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        color="secondary"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        LOGIN
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link to="/register" color="secondary">
                                {"Don't have an account? Register"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>

    );
}

export default Login;
