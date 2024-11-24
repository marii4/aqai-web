import * as React from 'react';
import { Box, Paper, Toolbar, Breadcrumbs } from '@mui/material';
import Header from '../components/Header';
import FormsBuzo from '../components/PersonalForms';



const Personal= () =>{

    return(
        <Box>
            <Header userName='Mariana'/>
            <FormsBuzo/>
            
            
        </Box>
    );
}

export default Personal;