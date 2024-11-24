import * as React from 'react';
import { Box, Paper, Toolbar, Typography, Button } from '@mui/material';
import TableCollapse from './TableCollapse';
import AddIcon from '@mui/icons-material/Add';


const PaperMarea = () => {
    return (
        <Box>
            <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: 30, marginTop: 4 }}>
                <Toolbar/>
                <Box sx={{ padding: 1, display: 'flex', justifyContent: 'space-between' }}>
           
                    <Paper elevation={0} sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, height: '%100', backgroundColor: 'rgba(0, 222, 174, 0.23)' }}>
                        <Box sx={{paddingX: 3, paddingY: 1.5 }}>
                            aki
                        </Box>
                        <Box sx={{paddingX: 2}}>
                            <Typography variant="h6">Mareas en Curso</Typography>
                        </Box>
                        <Box sx={{padding: 2}}>
                        <TableCollapse/>
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
                                sx={{
                                width: '200px', // Tamaño más pequeño
                                height: '40px', // Ajusta la altura si es necesario
                                fontSize: '0.8rem', // Tamaño de texto más pequeño
                                backgroundColor: '#00C7D1'
                                }}
                            >
                                <AddIcon sx={{ marginRight: 1 }} />
                                Nueva Marea
                            </Button>
                            </Box>
                    
                    </Paper>
                
                    
                    </Box>
            </Box>


        </Box>
       
    );

};

export default PaperMarea;