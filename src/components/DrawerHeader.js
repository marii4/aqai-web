import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse'; // Importa Collapse
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import ScubaDivingIcon from '@mui/icons-material/ScubaDiving';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ExpandLess from '@mui/icons-material/ExpandLess'; // Icono para desplegar menos
import ExpandMore from '@mui/icons-material/ExpandMore'; // Icono para desplegar más

import { Link } from "react-router-dom"; // Importar Link de React Router



const drawerWidth = 240;

export default function DrawerHeader() {

  
    const [openPersonal, setOpenPersonal] = React.useState(false); // Estado para manejar el despliegue
  
    const handlePersonalClick = () => {
      setOpenPersonal(!openPersonal); // Cambia el estado al hacer clic
    };


  return (

    


    <Box >

      <Drawer
        variant="permanent"
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: 'rgba(0, 171, 225, 0.65)' },
        }}
      >
        <Toolbar sx={{backgroundColor: 'red'}}/>
        <Box sx={{ overflow: 'auto',  marginTop: '50px' }}>
          <List>
            <ListItem button component={Link} to="/Marea">              
              <ListItemIcon>
                <DirectionsBoatIcon />
              </ListItemIcon>
              <ListItemText primary="Marea" />
            </ListItem>
            <ListItem button onClick={handlePersonalClick}>              
              <ListItemIcon>
              <ScubaDivingIcon />
              </ListItemIcon>
              <ListItemText primary="Personal" />
              {openPersonal ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openPersonal} timeout="auto" unmountOnExit sx={{backgroundColor: '#00ABE1'}}>
              <List component="div" disablePadding>
                <ListItem button component={Link} to="/Buzos" sx={{textAlign: 'right', paddingRight: 5 }}>
                  
                  <ListItemText primary="Buzos" />
                </ListItem>
                <Divider></Divider>
                <ListItem button component={Link} to="/Teams" sx={{textAlign: 'right', paddingRight: 5 }}>
                  
                  <ListItemText primary="Teams" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button>              
              <ListItemIcon>
              <ContentPasteIcon />
              </ListItemIcon>
              <ListItemText primary="Reportes" />
            </ListItem>
            
            <ListItem button>              
              <ListItemIcon>
              <SupervisorAccountIcon />
              </ListItemIcon>
              <ListItemText primary="Admin" />
            </ListItem>
          </List>
          <Divider />
          <List>
            {['Cerrar sesión'].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton component={Link} to="/">
                  <ListItemIcon>
                    {<LogoutIcon/>}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      
    </Box>
  );
}

