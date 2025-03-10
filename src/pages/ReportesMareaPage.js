import * as React from 'react';
import { Box, Toolbar } from '@mui/material';
import Header from '../components/HeaderNew';
import ReportesMareaPaper from '../components/ReportesMareaPaper';


const ReportesMareaPage= () =>{

    return(
        <Box component="main">
            <Header userName='Mariana Gonzales'/>
            <Toolbar/>
            <ReportesMareaPaper/>
            
        </Box>
    );
}

export default ReportesMareaPage;