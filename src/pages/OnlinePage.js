import * as React from 'react';
import { Box, Toolbar } from '@mui/material';
import Header from '../components/HeaderNew';
import OnLinePaper from '../components/OnlinePaper';

const OnLinePage= () =>{

    return(
        <Box component="main">
            <Header userName='Mariana Gonzales'/>
            <Toolbar/>
            <OnLinePaper/>
        </Box>
    );
}

export default OnLinePage;