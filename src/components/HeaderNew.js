import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Avatar, Box, CssBaseline, Menu, MenuItem } from '@mui/material';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import ScubaDivingIcon from '@mui/icons-material/ScubaDiving';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ExpandMore from '@mui/icons-material/ExpandMore';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { Link } from 'react-router-dom';

const Header = ({ userName, logoSrc }) => {
    const [anchorElPersonal, setAnchorElPersonal] = useState(null);
    const [anchorElReportes, setAnchorElReportes] = useState(null);

    const handleMenuOpenPersonal = (event) => {
        setAnchorElPersonal(event.currentTarget);
    };

    const handleMenuClosePersonal = () => {
        setAnchorElPersonal(null);
    };

    const handleMenuOpenReportes = (event) => {
        setAnchorElReportes(event.currentTarget);
    };

    const handleMenuCloseReportes = () => {
        setAnchorElReportes(null);
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
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Typography component={Link} to="/Marea" sx={{ color: 'white', textDecoration: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                            <DirectionsBoatIcon sx={{ marginRight: 1 }} /> Marea
                        </Typography>

                        {/* Menú Personal */}
                        <Typography onClick={handleMenuOpenPersonal} sx={{ color: 'white', textDecoration: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                            <ScubaDivingIcon sx={{ marginRight: 1 }} /> Personal <ExpandMore />
                        </Typography>
                        <Menu 
                            anchorEl={anchorElPersonal} 
                            open={Boolean(anchorElPersonal)} 
                            onClose={handleMenuClosePersonal} 
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} 
                            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                            sx={{ '& .MuiPaper-root': { backgroundColor: '#004466', color: 'white', width: 150 } }}
                        >
                            <MenuItem component={Link} to="/Buzos" onClick={handleMenuClosePersonal} sx={{ color: 'white', display: 'flex', alignItems: 'center' }}>Buzos</MenuItem>
                            <MenuItem component={Link} to="/Teams" onClick={handleMenuClosePersonal} sx={{ color: 'white', display: 'flex', alignItems: 'center' }}>Teams</MenuItem>
                        </Menu>

                        {/* Menú Reportes */}
                        <Typography onClick={handleMenuOpenReportes} sx={{ color: 'white', textDecoration: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                            <ContentPasteIcon sx={{ marginRight: 1 }} /> Reportes <ExpandMore />
                        </Typography>
                        <Menu 
                            anchorEl={anchorElReportes} 
                            open={Boolean(anchorElReportes)} 
                            onClose={handleMenuCloseReportes} 
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} 
                            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                            sx={{ '& .MuiPaper-root': { backgroundColor: '#004466', color: 'white', width: 150 } }}
                        >
                            <MenuItem component={Link} to="/Reportes-Buzos" onClick={handleMenuCloseReportes} sx={{ color: 'white', display: 'flex', alignItems: 'center' }}>Buzos</MenuItem>
                            <MenuItem component={Link} to="/Reportes-Marea-Faena" onClick={handleMenuCloseReportes} sx={{ color: 'white', display: 'flex', alignItems: 'center' }}>Marea-Faena</MenuItem>
                        </Menu>

                        <Typography component={Link} to="/Admin" sx={{ color: 'white', textDecoration: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                            <SupervisorAccountIcon sx={{ marginRight: 1 }} /> Admin
                        </Typography>
                        <Typography component={Link} to="/OnLine" sx={{ color: 'white', textDecoration: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', marginLeft: 3 }}>
                            <RadioButtonCheckedIcon sx={{ marginRight: 1, color: 'red' }} /> En Vivo
                        </Typography>
                    </Box>

                    {/* Avatar */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h6" sx={{ marginRight: 1, color: 'white' }}>
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
