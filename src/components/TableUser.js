import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
} from "@mui/material";
import { Visibility, Delete } from "@mui/icons-material";
import usersData from '../data/user.json'


const UserTable = () => {
    const [data, setData] = useState(usersData);
  
    // Función para eliminar un usuario
    const handleDelete = (usuario) => {
      setData(data.filter((user) => user.usuario !== usuario));
    };
  
    return (
      <TableContainer component={Paper} sx={{ padding: 2,  borderRadius: 3, maxHeight: 400}}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Usuario</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>RUT</TableCell>
              <TableCell>Rol</TableCell>
              <TableCell align="center" >Acción</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((user) => (
              <TableRow key={user.usuario}>
                <TableCell>{user.usuario}</TableCell>
                <TableCell>{user.nombre}</TableCell>
                <TableCell>{user.apellido}</TableCell>
                <TableCell>{user.rut}</TableCell>
                <TableCell>{user.rol}</TableCell>
                <TableCell align="center">
                  <IconButton>
                    <Visibility />
                  </IconButton >
                  <IconButton sx={{ color: "#e71717" }} onClick={() => handleDelete(user.usuario)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  
  export default UserTable;