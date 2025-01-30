import * as React from 'react';
import { Box, Paper, Toolbar } from '@mui/material';
import Header from '../components/Header';
import Breadcrumb from "../components/Breadcrumb";
import FormsBuzo from '../components/FormsBuzo';
// arregar ids

const NuevoBuzoPage= () =>{
    
    return(
        <Box>
            <Header/>
            <Box component="main" sx={{ flexGrow: 1, p: 2, marginLeft: 27, marginTop:2 }}> 
                <Toolbar/>
                <Box sx={{display: 'flex', justifyContent: 'space-between' }}>
                    <Paper elevation={1} sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, height: '%100', backgroundColor: 'rgba(0, 222, 174, 0.23)' }}>
                        <Box sx={{px: 2, pt:1}}>
                            <Breadcrumb />
                        </Box>
                        <FormsBuzo/>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
}

export default NuevoBuzoPage;