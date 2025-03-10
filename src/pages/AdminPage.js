import * as React from 'react';
import { Box, Toolbar } from '@mui/material';
import Header from '../components/HeaderNew';
import PaperAdmin from '../components/AdminPaper';



const Admin = () => {
    return (
        <Box component="main">
        <Header userName='Mariana Gonzales'/>
        <Toolbar/>
            <PaperAdmin/>
            
        </Box>

    );

};

export default Admin;