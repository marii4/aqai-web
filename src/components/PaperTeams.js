import * as React from 'react';
import { Box, Paper, Toolbar, Typography, Button } from '@mui/material';
import TableTeams from './TableTeams';
import AddIcon from '@mui/icons-material/Add';
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";


const PaperTeams = () => {
    return (
        
            <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: 30, marginTop: 4 }}>
                <Toolbar/>
                <Box sx={{ padding: 1, display: 'flex', justifyContent: 'space-between' }}>
           
                    <Paper elevation={0} sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, height: '%100', backgroundColor: 'rgba(0, 222, 174, 0.23)' }}>
                        <Box sx={{px: 2, pt:1}}>
                            <Breadcrumb />
                        </Box>
                        <Box sx={{paddingX: 5}}>
                            <Typography variant="h6" sx={{fontWeight: 'bold'}}>Teams</Typography>
                        </Box>
                        <Box sx={{paddingX: 2}}>
                            <TableTeams></TableTeams>
                            
                        
                        </Box>
                        
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-end', // Alinea los elementos al inicio (izquierda)
                                margin: 4,
                                paddingRight: 2, 
                                //backgroundColor: 'red'
                            }}
                            >
                            <Button 
                                variant="contained" 
                                component={Link} to="/Teams/NuevoTeam"
                                sx={{
                                width: '200px', // Tamaño más pequeño
                                height: '40px', // Ajusta la altura si es necesario
                                fontSize: '1rem', // Tamaño de texto más pequeño
                                backgroundColor: '#00C7D1'
                                }}
                            >
                                <AddIcon sx={{ marginRight: 1 }} />
                                Nuevo Teams
                            </Button>
                            </Box>
                    
                    </Paper>
                
                    
                    </Box>
            </Box>


       
    );

};

export default PaperTeams;