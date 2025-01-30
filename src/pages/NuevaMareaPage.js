import * as React from 'react';
import { Box, Paper, Toolbar, Button } from '@mui/material';
import Header from '../components/Header';
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import MareaForms from '../components/FormsMarea';


const NuevaMarea= () => {
    return(
        <Box>
            <Header/>
            <Box component="main" sx={{ flexGrow: 1, p: 2, marginLeft: 27, marginTop:2 }}> 
                <Toolbar/>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Paper elevation={1} sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, height: '%100', backgroundColor: 'rgba(0, 222, 174, 0.23)' }}>
                        <Box sx={{px: 2, pt:1}}>
                            <Breadcrumb />
                        </Box>
                        <MareaForms />
                        <Box
                            sx={{
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
                                component={Link} to="/Marea"
                                sx={{
                                width: '180px', // Tamaño más pequeño
                                height: '40px', // Ajusta la altura si es necesario
                                fontSize: '1rem', // Tamaño de texto más pequeño
                                backgroundColor: '#00C7D1'
                                }}
                            >
                               
                                Guardar
                            </Button>
                            </Box>
                        




                    </Paper>

                </Box>        

        </Box>
        </Box>

    );
};

export default NuevaMarea;