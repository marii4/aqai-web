import React, { useState } from "react";
import { Box, Paper, Toolbar, Typography, Button } from '@mui/material';
import TableUser from './TableUser';
import AddIcon from '@mui/icons-material/Add';

import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";


const PaperAdmin = () => {
        
    return (
        <Box component="main" sx={{ flexGrow: 1, marginLeft: 27, marginTop: 2, p:2 }}>
            <Toolbar/>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Paper elevation={1} sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, height: '%100', backgroundColor: 'rgba(0, 222, 174, 0.23)' }}>
                    <Box sx={{px: 2, pt:1}}>
                        <Breadcrumb />
                    </Box>
                    <Box sx={{paddingX: 5}}>
                        <Typography variant="h6" sx={{fontWeight: 'bold'}}>Usuarios</Typography>
                    </Box>
                    <Box sx={{paddingX: 2}}>
                        <TableUser/>
                    </Box>
                    
                    <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end', // Alinea los elementos al inicio (izquierda)
                            mb: 3,
                            paddingRight: 3, 
                            //backgroundColor: 'red'
                        }}
                        >
                        <Button 
                            variant="contained" 
                            component={Link} to="/Admin/NuevoUsuario"
                            sx={{
                            width: '210px', // Tamaño más pequeño
                            height: '40px', // Ajusta la altura si es necesario
                            fontSize: '1rem', // Tamaño de texto más pequeño
                            backgroundColor: '#00C7D1'
                            }}>
                            <AddIcon sx={{ marginRight: 1 }} />Nuevo Usuario
                        </Button>
                    </Box>
                
                </Paper>
            
                
                </Box>
        </Box>


       
    );

};

export default PaperAdmin;