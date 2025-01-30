import * as React from 'react';
import { Box, Toolbar } from '@mui/material';
import Header from '../components/HeaderNew';
import PaperBuzo from '../components/BuzoPaper';



const BuzoPage= () =>{

    return(
        <Box component="main">
            <Header userName='Mariana Gonzales'/>
            <Toolbar/>
            <PaperBuzo/>           
        </Box>
    );
}

export default BuzoPage;