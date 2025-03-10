import React, { useState } from "react";
import {
  Table, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow,
  IconButton, Collapse, Box, Typography, TextField
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import data from "../data/dataTableMarea.json";
import teams from '../data/teams.json';

const TableMarea = () => {
  const [openRow, setOpenRow] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const handleToggle = (id) => {
    setOpenRow((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getTeamsByMarea = (mareaId) => {
    const teamData = teams.find((item) => item.mareaId === mareaId);
    return teamData ? teamData.teams : []; 
  };

  // Filtrar datos según el término de búsqueda
  const filteredData = data.filter(row =>
    row.empresa.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.marea.toString().includes(searchTerm)
  );

  return (
    <Box sx={{display: 'flex', flexGrow: 1}}>
      {/* Campo de búsqueda */}
      <Box sx={{paddingX: 2, width: '350px'}}>
        <Paper elevation={1} sx={{backgroundColor: 'white', p:2, borderRadius:2}}>
          <Typography sx={{ fontWeight: 'bold', pb:2 }}>Filtros</Typography>
            <TextField
              label="Buscar por Marea o Empresa"
              variant="outlined"
              fullWidth
              margin="normal"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
        </Paper>
      </Box>
      <Box sx={{paddingX: 2, flexGrow: 1}}>
      <TableContainer component={Paper} sx={{ padding: 2, maxHeight: 400, borderRadius: 3 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Marea</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Fecha Inicio</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Fecha Termino</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Empresa</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>Teams</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row) => (
              <React.Fragment key={row.id}>
                <TableRow>
                  <TableCell>{row.marea}</TableCell>
                  <TableCell>{new Date(row.fechaInicio).toLocaleDateString()}</TableCell>
                  <TableCell>{new Date(row.fechaTermino).toLocaleDateString()}</TableCell>
                  <TableCell>{row.empresa}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => handleToggle(row.id)}>
                      {openRow[row.id] ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow sx={{ backgroundColor: "#ABF488" }}>
                  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
                    <Collapse in={openRow[row.id]} timeout="auto" unmountOnExit>
                      <Box margin={2}>
                        <Typography sx={{ fontWeight: 'bolder' }} gutterBottom>
                          Equipos
                        </Typography>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell sx={{ fontWeight: 'bold' }}>Team</TableCell>
                              <TableCell sx={{ fontWeight: 'bold' }}>Supervisor</TableCell>
                              <TableCell sx={{ fontWeight: 'bold' }}>Buzos</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {getTeamsByMarea(row.id).map((team) => (
                              <TableRow key={team.teamId}>
                                <TableCell>{team.teamId}</TableCell>
                                <TableCell>{team.supervisor}</TableCell>
                                <TableCell>
                                  {team.buzos.map((buzo, index) => (
                                    <div key={index}>{buzo}</div>
                                  ))}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
    </Box>
  );
};

export default TableMarea;
