import React, { useState } from "react";
import { Box, Paper, Typography, Button } from '@mui/material';
import TableBuzos from './TableBuzo';
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
			<Box sx={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1, marginLeft: 27, marginTop: 2, p:3 }}>
				<Paper elevation={1} sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, height: '%100', backgroundColor: 'rgba(0, 222, 174, 0.23)' }}>
					<Box sx={{px: 2, pt:1}}><Breadcrumb/></Box>
					<Box sx={{px: 5}}>
						<Typography variant="h6" sx={{ fontWeight: 'bold'}}>Buzos</Typography>
					</Box>
					<Box sx={{paddingX: 2}}><TableBuzos/></Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', // Alinea los elementos al inicio (izquierda)
            mb: 3, paddingRight: 3, 
            //backgroundColor: 'red'
            }}>
						<Button variant="contained" component={Link} to="/Buzos/NuevoBuzo"
							sx={{width: '200px', // Tamaño más pequeño
								height: '40px', // Ajusta la altura si es necesario
								fontSize: '1rem', // Tamaño de texto más pequeño
								backgroundColor: '#00C7D1'
							}}><AddIcon sx={{ marginRight: 1 }} />Nuevo Buzo</Button>
					</Box>
					
				</Paper>
			</Box>
    );

};

export default PaperBuzo;