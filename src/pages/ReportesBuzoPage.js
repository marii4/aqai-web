import * as React from 'react';
import { Box, Toolbar } from '@mui/material';
import Header from '../components/HeaderNew';
import ReportesBuzoPaper from '../components/ReportesBuzoPaper';


const ReportesBuzoPage= () =>{

    return(
        <Box component="main">
            <Header userName='Mariana Gonzales'/>
            <Toolbar/>
            <ReportesBuzoPaper/>
            
        </Box>
    );
}

export default ReportesBuzoPage;