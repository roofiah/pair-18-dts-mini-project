import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Theme from '../components/Theme';

export const WithNavbar = () => {
    return (
        <ThemeProvider theme={Theme}>
            <div className='content'>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </ThemeProvider>
    )
}

