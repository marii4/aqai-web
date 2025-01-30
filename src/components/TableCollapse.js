import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Collapse,
  Box,
  Typography,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import data from "../data/dataTableMarea.json";
import teams from '../data/teams.json';

const TableCollapse = () => {
  const [openRow, setOpenRow] = useState({});

  const handleToggle = (id) => {
    setOpenRow((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getTeamsByMarea = (mareaId) => {
    const teamData = teams.find((item) => item.mareaId === mareaId);
    return teamData ? teamData.teams : [];
  };

  return (
    <TableContainer sx={{ paddingX: 2, maxHeight: 400}}>
      <Table size="small">
        {/* Cabecera de la tabla */}
        <TableHead >
          <TableRow >
            
            <TableCell sx={{fontWeight: 'bold'}}>Marea</TableCell>
            <TableCell sx={{fontWeight: 'bold'}}>Fecha Inicio</TableCell>
            <TableCell sx={{fontWeight: 'bold'}}>Fecha Termino</TableCell>
            <TableCell sx={{fontWeight: 'bold'}}>Empresa</TableCell>
            
            <TableCell align="center" sx={{fontWeight: 'bold'}}>Teams</TableCell>
          </TableRow>
        </TableHead>

        {/* Cuerpo de la tabla */}
        <TableBody>
          {data.slice(0, 4).map((row) => (
            <React.Fragment key={row.id}>
              {/* Fila principal */}
              <TableRow>
                
                <TableCell >{row.marea}</TableCell>
                <TableCell>{new Date(row.fechaInicio).toLocaleDateString()}</TableCell>
                <TableCell>{new Date(row.fechaTermino).toLocaleDateString()}</TableCell>
                <TableCell>{row.empresa}</TableCell>
                
                <TableCell align="center">
                  <IconButton onClick={() => handleToggle(row.id)}>
                    {openRow[row.id] ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                  </IconButton>
                </TableCell>
              </TableRow>

              {/* Tabla colapsable */}
              <TableRow sx={{backgroundColor: "#ABF488"}}>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
                  <Collapse in={openRow[row.id]} timeout="auto" unmountOnExit>
                    <Box margin={2}>
                      <Typography sx={{fontWeight: 'bolder'}} gutterBottom>
                        Equipos
                      </Typography>
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell sx={{fontWeight: 'bold'}}>Team</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}}>Supervisor</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}}>Buzos</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {getTeamsByMarea(row.id).map((team) => (
                            <TableRow key={team.teamId}>
                              <TableCell>{team.teamId}</TableCell>
                              <TableCell>{team.supervisor}</TableCell>
                              <TableCell>
                                {team.buzos.map((buzo, index) => (
                                  <div key={index}>{buzo}</div> // Cada buzo en una nueva línea
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
  );
};

export default TableCollapse;
