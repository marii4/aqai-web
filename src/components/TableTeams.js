import React, { useState } from "react";
import {
  Table, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Typography, IconButton, Box, TextField
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import teamsData from "../data/teams.json"; // Importar el JSON de teams

const TableTeams = () => {
  const [data, setData] = useState(teamsData);
  const [searchTerm, setSearchTerm] = useState("");

  // Función para eliminar un equipo por teamId
  const handleDelete = (teamId) => {
    const updatedData = data.map((marea) => ({
      ...marea,
      teams: marea.teams.filter((team) => team.teamId !== teamId),
    })).filter((marea) => marea.teams.length > 0); // Eliminar mareas sin equipos
    setData(updatedData);
  };

  // Filtrar datos según el término de búsqueda
  const filteredData = data.map(marea => ({
    ...marea,
    teams: marea.teams.filter(team =>
      team.teamId.toString().includes(searchTerm) || 
      team.supervisor.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(marea => marea.teams.length > 0); // Mantener solo mareas con equipos visibles

  return (
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
      <Box sx={{ paddingX: 2, width: '350px' }}>
        <Paper elevation={1} sx={{ backgroundColor: 'white', p: 2, borderRadius: 2 }}>
          <Typography sx={{ fontWeight: 'bold', pb: 2 }}>Filtros</Typography>
          <TextField
            label="Buscar por Id Team o Supervisor"
            variant="outlined"
            fullWidth
            margin="normal"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Paper>
      </Box>
      <Box sx={{ paddingX: 2, flexGrow: 1 }}>
        <TableContainer component={Paper} sx={{ padding: 2, borderRadius: 3, maxHeight: 400 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell><strong>Marea ID</strong></TableCell>
                <TableCell><strong>Team</strong></TableCell>
                <TableCell><strong>Supervisor</strong></TableCell>
                <TableCell><strong>Buzos</strong></TableCell>
                <TableCell align="center"><strong>Acción</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((marea) =>
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
                        onClick={() => handleDelete(team.teamId)}
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
      </Box>
    </Box>
  );
};

export default TableTeams;
