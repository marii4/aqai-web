import React from 'react';
import { Box, Paper, Toolbar, TextField, Typography } from '@mui/material';
import Breadcrumb from "../components/Breadcrumb";
import Header from '../components/HeaderNew';
import DiverChart from '../components/DiverChart';
import DiverAlarms from '../components/Alarm';
import { Link } from "react-router-dom";


const DashboardBody = () => {
  	return (
    	<Box component="main" > 
        	<Header userName="Mariana Gonzales"/>
        	<Toolbar/>
        	<Box sx={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1, marginTop: 2, p:3 }}> 
            <Paper elevation={1} sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, height: '%100', backgroundColor: 'rgba(0, 222, 174, 0.23)' }}>
               <Box sx={{px: 2, pt:1}}>
                  <Breadcrumb />
               </Box>
               <Box sx={{paddingX: 5}}>
                  <Typography variant="h6" sx={{fontWeight: 'bold'}}>Reportes Buzo</Typography>
               </Box>
					<Box sx={{display: 'flex', flexGrow: 1}}>
						<Box sx={{paddingX: 2}}>
							<Paper elevation={1} sx={{backgroundColor: 'white', p:2, borderRadius:2}}>
								<Typography sx={{ fontWeight: 'bold', pb:2 }}>Filtros</Typography>
								<TextField id="outlined-basic" label="Nombre Buzo" variant="outlined" />
								<TextField id="outlined-basic" label="Buscar Buzo activo" variant="outlined" />
							</Paper>
						</Box>
						<Box sx={{paddingX: 2, flexGrow: 1, gap:1}}>
							<DiverAlarms/>
							<DiverChart/>
                  </Box>
               </Box>
            </Paper>
         </Box>
      </Box>
   );
};

export default DashboardBody;
