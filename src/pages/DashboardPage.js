import React from 'react';
import { Box, Paper, Toolbar, Typography } from '@mui/material';
import Header from '../components/Header';
import TableDashboard from '../components/TableDashboard';
import Calendar from '../components/Calendar';
import TableCollapse from '../components/TableCollapse';

const DashboardBody = () => {
  return (
    <Box component="main" > 
        <Header userName="Mariana Gonzales"/>
        <Box sx={{ flexGrow: 1, ml: 27, mt:2, p:1, 
            //backgroundColor: 'red' 
            }}> 
            <Toolbar/>
            <Box sx={{ padding: 2, display: 'flex', justifyContent: 'space-between'}}>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        {/* Bloques de contenido */}
                    <Paper elevation={1} sx={{ height: '100%', backgroundColor: 'rgba(0, 222, 174, 0.23)' }}>
                        <Typography variant='h6' sx={{padding: 2, fontWeight: 'bolder'}}>Ultimos Reportes</Typography>                        
                        <TableDashboard/>
                    </Paper>
                </Box>
                <Box sx={{ marginLeft: 2, flexShrink: 0, width: 330 }}>
                    <Paper elevation={1} sx={{ height: '100%', backgroundColor: '#e0e0e0', padding: 1 }}>
                      <Calendar/>
                    </Paper>  
                </Box>
            </Box>
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Paper elevation={1} sx={{ height: '100%', backgroundColor: 'rgba(171, 244, 136, 0.4)' }}>
                        <Typography variant='h6' sx={{padding: 2, fontWeight: 'bolder'}}>Mareas en Curso</Typography>
                        <TableCollapse/>
                    </Paper>
                </Box>
            </Box>
        </Box>
    </Box>
    
  );
};

export default DashboardBody;
