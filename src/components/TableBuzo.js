import React, { useState } from "react";
import {
  Table, TableBody, TableCell, Box, TableContainer, TextField,
  TableHead, Typography, TableRow, Switch, IconButton, Paper,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import buzosData from "../data/buzos.json"; // Importar el JSON de buzos

const TableBuzos = () => {
  const [buzos, setBuzos] = useState(buzosData);
  const [searchTerm, setSearchTerm] = useState("");

  // Función para manejar el cambio de estado del switch
  const handleSwitchChange = (index) => {
    const updatedBuzos = [...buzos];
    updatedBuzos[index].estaHabilitado = !updatedBuzos[index].estaHabilitado;
    setBuzos(updatedBuzos);
  };

  // Función para eliminar un buzo
  const handleDelete = (rut) => {
    const updatedBuzos = buzos.filter((buzo) => buzo.rut !== rut);
    setBuzos(updatedBuzos);
  };

  const filteredData = buzosData.filter(row =>
    row.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.rut.toString().includes(searchTerm)
  );

  return (
    <Box sx={{display: 'flex', flexGrow: 1}}>
      <Box sx={{paddingX: 2, width: '350px'}}>
        <Paper elevation={1} sx={{backgroundColor: 'white', p:2, borderRadius:2}}>
          <Typography sx={{ fontWeight: 'bold', pb:2 }}>Filtros</Typography>
            <TextField
              label="Buscar por Nombre o Rut"
              variant="outlined"
              fullWidth
              margin="normal"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
        </Paper>
      </Box>
      <Box sx={{paddingX: 2, flexGrow: 1}}>
      <TableContainer component={Paper} sx={{ padding: 2, maxHeight: 400, borderRadius: 2, maxWidth: '100%'}}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Nombre</strong>
              </TableCell>
              <TableCell>
                <strong>RUT</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Acción</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Habilitar</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((buzo, index) => (
              <TableRow key={buzo.rut}>
                <TableCell>{buzo.nombre}</TableCell>
                <TableCell>{buzo.rut}</TableCell>
                <TableCell align="center">
                  <IconButton color="primary" aria-label="editar">
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="eliminar"
                    color="error" // Color rojo para eliminar
                    onClick={() => handleDelete(buzo.rut)} // Llama a la función para eliminar
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <Switch
                    checked={buzo.estaHabilitado}
                    onChange={() => handleSwitchChange(index)}
                    color="success"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
    </Box>
  );
};

export default TableBuzos;
