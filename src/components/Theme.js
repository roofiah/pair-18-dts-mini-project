import { ThemeProvider, createTheme } from '@mui/material/styles';

const Theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#E50913',
        },
        white: '#ffffff'
    },
});

export default Theme; 