import React from "react";
import {
  Table,
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
  return (
    <TableContainer sx={{ paddingX: 2}}>
     
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><strong>Team</strong></TableCell>
            <TableCell><strong>Supervisor</strong></TableCell>
            <TableCell><strong>Buzos</strong></TableCell>
            <TableCell align="center"><strong>Acción</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teamsData.map((marea) =>
            marea.teams.map((team) => (
              <TableRow key={team.teamId}>
                <TableCell>{team.teamId}</TableCell>
                <TableCell sx={{fontSize: '1rem'}}>{team.supervisor}</TableCell>
                <TableCell>
                  {team.buzos.length > 0
                    ? team.buzos.map((buzo, index) => (
                        <Typography key={index} sx={{ marginLeft: 2 }}>
                          {`• ${buzo}`}
                        </Typography>
                      ))
                    : null}
                </TableCell>
                <TableCell align="center">
                  <IconButton color="primary" aria-label="editar">
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="eliminar">
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
