import * as React from 'react';
import { Box} from '@mui/material';
import Header from '../components/Header';
import PaperBuzo from '../components/PaperBuzo';



const BuzoPage= () =>{

    return(
        <Box>
            <Header userName='Mariana'/>
            <PaperBuzo/>           
        </Box>
    );
}

export default BuzoPage;