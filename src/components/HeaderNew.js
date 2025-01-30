import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Avatar, Box, CssBaseline, Menu, MenuItem } from '@mui/material';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import ScubaDivingIcon from '@mui/icons-material/ScubaDiving';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const Header = ({ userName, logoSrc }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <CssBaseline/>
            <AppBar elevation={3} position="fixed" sx={{ backgroundColor: '#00ABE1' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* Logo */}
                    <Box sx={{ display: 'flex', alignItems: 'initial' }} component={Link} to="/DashboardAdmin">
                        <img src={'/images/aq.png'} alt="Logo" style={{ height: '90px'}} />
                    </Box>
                    {/* Menu Items */}
                    <Box sx={{ display: 'flex', gap: 4 }}>
                        <Typography component={Link} to="/Marea" sx={{ color: 'white', textDecoration: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                            <DirectionsBoatIcon sx={{ marginRight: 1 }} /> Marea
                        </Typography>
                        <Typography onClick={handleMenuOpen} sx={{ color: 'white', textDecoration: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                            <ScubaDivingIcon sx={{ marginRight: 1 }} /> Personal <ExpandMore />
                        </Typography>
                        <Menu 
                            anchorEl={anchorEl} 
                            open={open} 
                            onClose={handleMenuClose} 
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} 
                            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                            sx={{ '& .MuiPaper-root': { backgroundColor: '#004466', color: 'white' } }}
                        >
                            <MenuItem component={Link} to="/Buzos" onClick={handleMenuClose} sx={{ color: 'white' }}>Buzos</MenuItem>
                            <MenuItem component={Link} to="/Teams" onClick={handleMenuClose} sx={{ color: 'white' }}>Teams</MenuItem>
                        </Menu>

                        <Typography component={Link} to="/Reportes" sx={{ color: 'white', textDecoration: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                            <ContentPasteIcon sx={{ marginRight: 1 }} /> Reportes
                        </Typography>

                        <Typography component={Link} to="/Admin" sx={{ color: 'white', textDecoration: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                            <SupervisorAccountIcon sx={{ marginRight: 1 }} /> Admin
                        </Typography>
                    </Box>

                    {/* Avatar */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h6" sx={{ marginRight: 2, color: 'white' }}>
                            {userName}
                        </Typography>
                        <Avatar alt={userName} src="/static/images/avatar/1.jpg" />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
