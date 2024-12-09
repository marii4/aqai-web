import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Switch,
  IconButton,
  Typography,
  Paper,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import buzosData from "../data/buzos.json"; // Importar el JSON de buzos
import axios from "axios";

const TableBuzos = () => {
  const [buzos, setBuzos] = useState(buzosData);
  
  useEffect( () =>{
    const FetchData =  async () =>{
        try{
          const response = await axios.get("http://localhost:3000/api/v1/buzos/Compañia1", {
            withCredentials: true, // Incluye cookies
          })
          if(response.data){
            setBuzos(response.data.data)
            console.log(response)

          }
        }catch(e){
          console.error(e)
        }
    }
    FetchData()
  },[buzos])

  // Función para manejar el cambio de estado del switch
  const handleSwitchChange = (index) => {
    const updatedBuzos = [...buzos];
    updatedBuzos[index].estaHabilitado = !updatedBuzos[index].estaHabilitado;
    setBuzos(updatedBuzos);
  };

  
  return (
    <TableContainer sx={{ paddingX: 2, maxHeight: 400}}>
      
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><strong>Nombre</strong></TableCell>
            <TableCell><strong>RUT</strong></TableCell>
            <TableCell align="center"><strong>Acción</strong></TableCell>
            <TableCell align="center"><strong>Habilitar</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {buzos.map((buzo, index) => (
            <TableRow key={index}>
              <TableCell>{buzo.nombre}</TableCell>
              <TableCell>{buzo.rut}</TableCell>
              <TableCell align="center">
                <IconButton color="primary" aria-label="editar">
                  <EditIcon />
                </IconButton>
                <IconButton  aria-label="eliminar">
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
  );
};

export default TableBuzos;
