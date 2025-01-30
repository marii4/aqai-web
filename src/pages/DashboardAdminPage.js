import React from 'react';
import { Box, Paper, Toolbar, Typography } from '@mui/material';
import Header from '../components/HeaderNew';
import TableDashboard from '../components/TableDashboard';
import Calendar from '../components/Calendar';
import TableCollapse from '../components/TableCollapse';


const Dashboard = () => {
  return (
  	<Box component="main"> 
      <Header userName="Mariana Gonzales" />
		<Box sx={{ flexGrow: 1, mt:1, p:3 }}> 
			<Toolbar/>
			<Box sx={{ padding: 2, display: 'flex', justifyContent: 'space-between'}}>
				<Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
						{/* Bloques de contenido */}
					<Paper elevation={3} sx={{ height: '100%', backgroundColor: 'rgba(0, 222, 174, 0.23)' }}>
						<Typography variant='h6' sx={{paddingX: 5, py:2, fontWeight: 'bolder'}}>Ultimos Reportes</Typography>                        
						<TableDashboard/>
					</Paper>
				</Box>
				<Box sx={{ marginLeft: 2, flexShrink: 0, width: 330 }}>
					<Paper elevation={3} sx={{ height: '100%', width:'100%', backgroundColor: 'white' }}>
						<Calendar/>
					</Paper>
				</Box>
			</Box>
			<Box sx={{ paddingX: 2, paddingY: 1, display: 'flex', justifyContent: 'space-between' }}>
				<Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
					<Paper elevation={3} sx={{ height: '100%', backgroundColor: 'rgba(171, 244, 136, 0.4)', pb:2 }}>
						<Typography variant='h6' sx={{paddingX: 5, py:2, fontWeight: 'bolder'}}>Mareas en Curso</Typography>
						<TableCollapse/>
					</Paper>
				</Box>
			</Box>
		</Box>
	</Box>
    
  );
};

export default Dashboard;
