import { ThemeProvider } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Theme from '../components/Theme';

export const NoNavbar = () => {
    return (
        <ThemeProvider theme={Theme}>
            <Outlet />
        </ThemeProvider>
    )
}

