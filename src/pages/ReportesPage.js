import React from 'react';
import { Box, Paper, Toolbar, Typography } from '@mui/material';
import Breadcrumb from "../components/Breadcrumb";
import Header from '../components/Header';
import DiverChart from '../components/DiverChart';
import DiverAlarms from '../components/Alarm';
import { Link } from "react-router-dom";


const DashboardBody = () => {
  return (

    <Box component="main" > 
        <Header userName="Mariana"/>
        <Box sx={{ flexGrow: 1, ml: 27, mt:2, p:1 }}> 
            <Toolbar/>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Paper elevation={1} sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, height: '%100', backgroundColor: 'rgba(0, 222, 174, 0.23)' }}>
                    <Box sx={{px: 2, pt:1}}>
                        <Breadcrumb />
                    </Box>
                        <Box sx={{paddingX: 5}}>
                            <Typography variant="h6" sx={{fontWeight: 'bold'}}>Reportes Buzo</Typography>
                        </Box>
                          
                        
                        <Box sx={{padding: 2}}>
                        <DiverAlarms/>
                        <DiverChart/>
                        </Box>
                        
                        
                    
                    </Paper>
                
                    
                    </Box>
            
        </Box>
    </Box>
    
  );
};

export default DashboardBody;
