import * as React from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header';
import PaperAdmin from '../components/PaperAdmin';



const Admin = () => {
    return (
        <Box>
            <Header userName='Mariana'/>
            <PaperAdmin/>
            
        </Box>

    );

};

export default Admin;