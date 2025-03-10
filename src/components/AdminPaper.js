import React, { useState } from "react";
import { Box, Paper, TextField, Typography, Button } from '@mui/material';
import TableUser from './TableUser';
import AddIcon from '@mui/icons-material/Add';

import Breadcrumb from "./Breadcrumb";
import { Link } from "react-router-dom";


const PaperAdmin = () => {
        
    return (
        <Box component="main" sx={{  display: 'flex', justifyContent: 'space-between', flexGrow: 1, marginTop: 2, p:3 }}>
				<Paper elevation={1} sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, height: '%100', backgroundColor: 'rgba(0, 222, 174, 0.23)' }}>
					<Box sx={{px: 2, pt:1}}>
						<Breadcrumb/>
					</Box>
					<Box sx={{paddingX: 5}}>
							<Typography variant="h6" sx={{fontWeight: 'bold'}}>Usuarios</Typography>
					</Box>
					<Box sx={{display: 'flex', flexGrow: 1}}>
						<Box sx={{paddingX: 2}}>
							<Paper elevation={1} sx={{backgroundColor: 'white', p:2, borderRadius:2}}>
								<Typography sx={{ fontWeight: 'bold', pb:2 }}>Filtros</Typography>
								<TextField id="outlined-basic" label="Nombre Usuario" variant="outlined" />
							</Paper>
						</Box>
						<Box sx={{paddingX: 2, flexGrow: 1}}>
                        <TableUser/>
                    </Box>
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
        


       
    );

};

export default PaperAdmin;