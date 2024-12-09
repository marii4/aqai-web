import React, { useState } from "react";
import { Box, Paper, Toolbar, Typography, Button, TextField } from '@mui/material';
import TableBuzos from './TableBuzos';
import AddIcon from '@mui/icons-material/Add';
import buzosData from "../data/buzos.json";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";


const PaperBuzo = () => {
    const [search, setSearch] = useState(""); // Estado para el buscador

    const filteredBuzos = buzosData.filter(
        (buzo) =>
          buzo.nombre.toLowerCase().includes(search.toLowerCase()) 
      );
    
    return (
        
            <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: 30, marginTop: 4 }}>
                <Toolbar/>
                <Box sx={{ padding: 1, display: 'flex', justifyContent: 'space-between' }}>
           
                    <Paper elevation={0} sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, height: '%100', backgroundColor: 'rgba(0, 222, 174, 0.23)' }}>
                    <Box sx={{px: 2, pt:1}}>
                            <Breadcrumb />
                        </Box>
                        <Box sx={{paddingX: 4}}>
                            
                            <Box
                            sx={{
                            display: "flex",
                            flexDirection: "row", // Configuración en fila
                            gap: 2, // Espaciado horizontal entre los Box
                            }}
                            >
                            {/* Primer Box */}
                            <Box sx={{ 
                                //backgroundColor: "red", 
                                width: "50%", height: 100, p: 2 }}>
                            <Typography variant="h6" sx={{fontWeight: 'bold'}}>Buzos</Typography>
                            </Box>

                            {/* Segundo Box */}
                            <Box sx={{ backgroundColor: "white", width: "50%", height: 100, p: 2 }}> {/* p es padding*/}
                            <TextField
                                fullWidth
                                label="Buscar Buzo"
                                variant="outlined"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                sx={{ mb: 2 }}
                                />
                            </Box>
                            </Box>

                        </Box>
                        <Box sx={{paddingX: 2}}>



                            <TableBuzos></TableBuzos>
                        
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
                                component={Link} to="/Buzos/NuevoBuzo"
                                sx={{
                                width: '200px', // Tamaño más pequeño
                                height: '40px', // Ajusta la altura si es necesario
                                fontSize: '1rem', // Tamaño de texto más pequeño
                                backgroundColor: '#00C7D1'
                                }}
                            >
                                <AddIcon sx={{ marginRight: 1 }} />
                                Nuevo Buzo
                            </Button>
                            </Box>
                    
                    </Paper>
                
                    
                    </Box>
            </Box>


       
    );

};

export default PaperBuzo;