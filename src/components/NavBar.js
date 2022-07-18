import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { auth } from '../configs/firebase';
import { signOut } from "firebase/auth";
const pages = ['Home', 'Series', 'Movies', 'New and Popular', 'My List'];
// const settings = ['Logout'];

const NavBar = () => {
    const navigate = useNavigate()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const onLogout = () => {
        signOut(auth).then(() => {
            navigate("/login")
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <div>
                        <img src={Logo}
                            alt="logo"
                            width="30"
                            height="50"
                        // className={classes.logo} 
                        />
                    </div>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip>
                            <IconButton onClick={handleOpenUserMenu}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={onLogout}>
                                <Typography textAlign="center">Logout</Typography>
                            </MenuItem>
                            {/* {settings.map((data) => (
                                <MenuItem key={data} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{data}</Typography>
                                </MenuItem>
                            ))} */}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;