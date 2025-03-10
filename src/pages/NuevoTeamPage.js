import * as React from 'react';
import { Box, Paper, Toolbar, Typography, Button } from '@mui/material';
import "dayjs/locale/es";
import NuevoTeamForm from '../components/TeamForms';
import Header from '../components/HeaderNew';
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";

const TeamForms = () => {
   return(
      <Box>
         <Header userName='Mariana Gonzales'/>
			<Toolbar/>
         <Box component="main" sx={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1, marginTop: 2, p:3 }}> 
				<Paper elevation={1} sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, height: '%100', 
						backgroundColor: 'rgba(0, 222, 174, 0.23)' }}>
               <Box sx={{px: 2, pt:1}}>
                  <Breadcrumb />
               </Box>
               <Box sx={{paddingX: 5}}>
                  <Typography variant="h6" sx={{fontWeight: 'bold'}}>Nuevo Team</Typography>
              	</Box>
               <Box component="form" 
                  sx={{'& .MuiTextField-root': { m: 2, width: '35ch' },
						alignContent: 'center', 
						justifyContent: 'center', 
						backgroundColor: 'white',  
						display: 'flex',
						flexWrap: 'wrap',
						marginX: 15,
						borderRadius: 3}}>
							<NuevoTeamForm/>     
					</Box>
               <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', // Alinea los elementos al inicio (izquierda)
                  mb: 3, paddingRight: 3, //backgroundColor: 'red'
                  }}>
						<Button 
							variant="contained" 
							component={Link} to="/Teams"
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
    );
};

export default TeamForms;