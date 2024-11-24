import React from 'react';
import { Box, Paper, Toolbar, Typography } from '@mui/material';
import Header from '../components/Header';
import TableDashboard from '../components/TableDashboard';
import Calendar from '../components/Calendar';
import TableCollapse from '../components/TableCollapse';



const DashboardBody = () => {
  return (

    <Box > 
        <Header userName="Mariana"/>
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: 30, marginTop:4 }}> 
            <Toolbar/>
            <Box sx={{ padding: 1, display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {/* Bloques de contenido */}
                    <Paper elevation={0} sx={{ height: '100%', backgroundColor: 'rgba(0, 222, 174, 0.23)' }}>
                        <Typography variant='h6' sx={{padding: 2, fontWeight: 'bolder'}}>Ultimos Reportes</Typography>                        
                        <TableDashboard></TableDashboard>

                    </Paper>
        
                </Box>
                <Box sx={{ marginLeft: 4, flexShrink: 0, width: 330 }}>
                    <Paper elevation={3} sx={{ height: '100%', backgroundColor: '#e0e0e0', padding: 1 }}>
                      <Calendar></Calendar>

                    </Paper>
                    
                </Box>
            </Box>
            <Box sx={{ paddingX: 1, paddingY: 3, display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Paper elevation={0} sx={{ height: '100%', backgroundColor: 'rgba(171, 244, 136, 0.4)' }}>
                    <Typography variant='h6' sx={{padding: 2, fontWeight: 'bolder'}}>Mareas en Curso</Typography>
                        <TableCollapse></TableCollapse>

                    </Paper>
                </Box>
            </Box>
        </Box>
    </Box>
    
  );
};

export default DashboardBody;
