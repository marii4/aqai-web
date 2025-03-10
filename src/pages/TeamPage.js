import * as React from 'react';
import { Box, Toolbar } from '@mui/material';
import Header from '../components/HeaderNew';
import PaperTeams from '../components/TeamPaper';

const TeamPage= () =>{

    return(
        <Box component="main">
            <Header userName='Mariana Gonzales'/>
            <Toolbar/>
            <PaperTeams/>
        </Box>
    );
}

export default TeamPage;