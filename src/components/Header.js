import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Avatar, Box, CssBaseline } from '@mui/material';
import DrawerHeader from './DrawerHeader';



const Header = ({ userName, logoSrc }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ display: 'flex' }}> 
        <CssBaseline />
        <AppBar position="fixed" sx={{backgroundColor: '#00ABE1', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <img src={'/img/aq.png'} alt="Logo" style={{ height: '85px' }} />
                </Box>

                {/* Avatar y Nombre */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h6" sx={{ marginRight: 2 }}>
                    {userName}
                    </Typography>
                    <Avatar alt={userName} src="/static/images/avatar/1.jpg" />
                </Box>
            </Toolbar>
        </AppBar>
        <DrawerHeader/>
    </Box>
    
  );
};

export default Header;
