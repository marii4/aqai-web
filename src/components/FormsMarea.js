import * as React from 'react';
import { Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import "dayjs/locale/es";
import TeamList from './TeamList';



const MareaForms = () => {
    return(
        <Box>
            <Typography variant="h6" sx={{px: 5, py:1, fontWeight: 'bold'}}>Nueva Marea</Typography>
        
            <Box component="form" 
             sx={{
                alignContent: 'center', justifyContent: 'center', 
                backgroundColor: 'white', display: 'flex',
                flexWrap: 'wrap', mx:12, borderRadius: 3}}>
                <Box sx={{m: 2, width: 636 }}>
                    <TextField fullWidth id="filled-basic" label="Nombre Empresa" variant="outlined"/>
                </Box>
                <Box sx={{'& .MuiTextField-root': { m: 2, width: '34ch' }}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
                        <DatePicker 
                            label="Fecha de Inicio"
                            format="DD/MM/YYYY" />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
                        <DatePicker 
                            label="Fecha de Término"
                            format="DD/MM/YYYY" />
                    </LocalizationProvider>
                </Box>
            </Box>
            
                <Typography variant="h6" sx={{paddingX: 5, py: 1, fontWeight: 'bold'}}>Teams</Typography>
            
            <Box component="form" 
                sx={{
                backgroundColor: 'white', mx:12, maxHeight: 430, py: 2,
                borderRadius: 3, justifyContent: 'center', alignContent: 'center'}}>
                    
                <TeamList/>
            </Box>
        </Box>
                        

    );
};

export default MareaForms;