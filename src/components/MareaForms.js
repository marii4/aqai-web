import * as React from 'react';
import { Box, Paper, TextField } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import "dayjs/locale/es";
import TeamList from './TeamList';

const MareaForms = () => {
  return (
    <Paper
      component="form"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mx: 2,
        padding: 3,
        gap: 3, // Espacio entre los boxes
      }}
    >
      {/* Box de los campos de texto y fecha */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 1,
          gap: 2, // Espaciado uniforme
        }}
      >
        <TextField fullWidth label="Nombre Empresa" variant="outlined" sx={{ width: '34ch' }} />
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
          <DatePicker label="Fecha de Inicio Marea" format="DD/MM/YYYY" sx={{ width: '34ch' }} />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
          <DatePicker label="Fecha de Término Marea" format="DD/MM/YYYY" sx={{ width: '34ch' }} />
        </LocalizationProvider>
      </Box>

      {/* Box de la lista de equipos, ahora más grande */}
      <Box
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 2, // Aumentamos el tamaño de la lista
          maxWidth: '100%', // Ajusta el ancho de la lista
          overflow: 'auto', // Permite scroll si es necesario
        }}
      >
        <TeamList />
      </Box>
    </Paper>
  );
};

export default MareaForms;
