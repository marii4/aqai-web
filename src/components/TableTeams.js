import React, { useState } from "react";
import {
  Table,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import teamsData from "../data/teams.json"; // Importar el JSON de teams

const TableTeams = () => {
  const [data, setData] = useState(teamsData);

  // Función para eliminar un equipo por teamId
  const handleDelete = (teamId) => {
    const updatedData = data.map((marea) => ({
      ...marea,
      teams: marea.teams.filter((team) => team.teamId !== teamId), // Filtrar equipos por teamId en cada marea
    })).filter((marea) => marea.teams.length > 0); // Eliminar mareas sin equipos
    setData(updatedData);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ padding: 2, borderRadius: 3, maxHeight: 400 }}
    >
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Marea ID</strong>
            </TableCell>
            <TableCell>
              <strong>Team</strong>
            </TableCell>
            <TableCell>
              <strong>Supervisor</strong>
            </TableCell>
            <TableCell>
              <strong>Buzos</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Acción</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((marea) =>
            marea.teams.map((team) => (
              <TableRow key={team.teamId}>
                <TableCell>{marea.mareaId}</TableCell>
                <TableCell>{team.teamId}</TableCell>
                <TableCell>{team.supervisor}</TableCell>
                <TableCell>
                  {team.buzos.map((buzo, index) => (
                    <Typography key={index}>{`• ${buzo}`}</Typography>
                  ))}
                </TableCell>
                <TableCell align="center">
                  <IconButton color="primary" aria-label="editar">
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="eliminar" sx={{ color: "#e71717" }} 
                    onClick={() => handleDelete(team.teamId)} // Llama a handleDelete con el teamId
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableTeams;
