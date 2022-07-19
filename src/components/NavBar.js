import React, { useState } from 'react';
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
import Logo from '../assets/images/logo.png';
import giftIcon from '../assets/images/gift.png'
import { useNavigate, NavLink } from 'react-router-dom';
import { auth } from '../configs/firebase';
import { signOut } from "firebase/auth";
import { Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import Search from './SearchMenu';
import { useAuthState } from 'react-firebase-hooks/auth';

const pages = [
    { name: 'Home', url: '/' },
    { name: 'Series', url: '/series' },
    { name: 'Movies', url: "/movies" },
    { name: 'New and Popular', url: "/new-popular" },
    { name: 'My List', url: "/my-list" }
];

const NavBar = () => {
    const [userLogin] = useAuthState(auth)
    const navigate = useNavigate()
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
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

    const onLogin = () => {
        navigate("/login")
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
                    <Box sx={{ flexGrow: 1 }} className="nav">
                        {pages.map((page) => (
                            <NavLink
                                to={page.url}
                                key={page.name}
                                className={({ isActive }) => isActive ? 'nav nav-active' : 'nav nav-inactive'}
                                color="info"
                                underline="none"
                            >
                                {page.name}
                            </NavLink>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0, display: { md: 'flex' } }}>
                        {userLogin ?
                            <Box>
                                {/* <Search /> */}
                                <IconButton size="large">
                                    <SearchIcon />
                                </IconButton>
                                <IconButton size="large" >
                                    <img src={giftIcon}
                                        alt="logo"
                                        className="navbar-icon"
                                    />
                                </IconButton>
                                <IconButton size="large" >
                                    <Badge badgeContent={2} color="error">
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                                <Tooltip>
                                    <IconButton onClick={handleOpenUserMenu}>
                                        <Avatar sx={{ bgcolor: "red" }} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                                    <MenuItem className="text-user">{userLogin.email}</MenuItem>
                                    <MenuItem onClick={onLogout}>
                                        <Typography textAlign="center">Logout</Typography>
                                    </MenuItem>
                                </Menu>
                            </Box>
                            :
                            <Box>
                                <IconButton size="large">
                                    <SearchIcon />
                                </IconButton>
                                <Tooltip>
                                    <IconButton onClick={handleOpenUserMenu}>
                                        <Avatar src="/broken-image.jpg" />
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
                                    <MenuItem onClick={onLogin}>
                                        <Typography textAlign="center">Login</Typography>
                                    </MenuItem>
                                </Menu>
                                {/* <Box onClick={onLogin}>
                                    <Typography textAlign="center">Login</Typography>
                                </Box> */}
                            </Box>
                        }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;