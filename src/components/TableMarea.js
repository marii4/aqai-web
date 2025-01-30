import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Collapse, Box, Typography } from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import data from "../data/dataTableMarea.json";
import teams from '../data/teams.json';

const TableMarea = ({ filters, data, teams }) => {
  const [openRow, setOpenRow] = useState({});

  const handleToggle = (id) => {
    setOpenRow((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getTeamsByMarea = (mareaId) => {
    return teams.find((t) => t.mareaId === mareaId)?.teams || [];
  };

  const filteredData = data.filter((row) => {
    return (
      (!filters.empresa || row.empresa.toLowerCase().includes(filters.empresa.toLowerCase())) &&
      (!filters.fechaInicio || new Date(row.fechaInicio) >= filters.fechaInicio) &&
      (!filters.fechaTermino || new Date(row.fechaTermino) <= filters.fechaTermino) &&
      (!filters.supervisor || teams.some(t => t.mareaId === row.id && t.teams.some(team => team.supervisor.toLowerCase().includes(filters.supervisor.toLowerCase()))))
    );
  });

  return (
    <TableContainer component={Paper} sx={{ padding: 2, maxHeight: 400, borderRadius: 3 }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Marea</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Fecha Inicio</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Fecha Termino</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Empresa</TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>Teams</TableCell>
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
                <TableCell colSpan={5}>
                  <Collapse in={openRow[row.id]} timeout="auto" unmountOnExit>
                    <Box margin={2}>
                      <Typography sx={{ fontWeight: "bolder" }}>Equipos</Typography>
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>Team</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Supervisor</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Buzos</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {getTeamsByMarea(row.id).map((team) => (
                            <TableRow key={team.teamId}>
                              <TableCell>{team.teamId}</TableCell>
                              <TableCell>{team.supervisor}</TableCell>
                              <TableCell>{team.buzos.join(", ")}</TableCell>
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
  );
};

export default TableMarea;
