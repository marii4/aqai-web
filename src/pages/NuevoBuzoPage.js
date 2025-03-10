import * as React from 'react';
import { Box, Paper, Toolbar, Typography } from '@mui/material';
import Header from '../components/HeaderNew';
import Breadcrumb from "../components/Breadcrumb";
import FormsBuzo from '../components/BuzoForms';
// arregar ids

const NuevoBuzoPage= () =>{
   return(
      <Box>
         <Header userName='Mariana Gonzales'/>
			<Toolbar/>
         <Box component="main" sx={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1, marginTop: 2, p:3 }}> 
            <Paper elevation={1} sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, height: '%100', backgroundColor: 'rgba(0, 222, 174, 0.23)' }}>
					<Box sx={{px: 2, pt:1}}>
						<Breadcrumb />
					</Box>
					<Typography variant="h6" sx={{px: 3, py:1, fontWeight: 'bold'}}>Nuevo Buzo</Typography>
					<FormsBuzo/>
				</Paper>
         </Box>
      </Box>
   );
}

export default NuevoBuzoPage;