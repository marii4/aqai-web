import React from "react";
import teamsData from "../data/teams.json"; // Importa el JSON desde la carpeta correspondiente
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  Checkbox,
  Typography,
  Box,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const TeamList = () => {
  const [selectedTeams, setSelectedTeams] = React.useState([]);
  const [openTeam, setOpenTeam] = React.useState({});

  // Manejar selección de equipos
  const handleSelectTeam = (teamId) => {
    setSelectedTeams((prevSelected) =>
      prevSelected.includes(teamId)
        ? prevSelected.filter((id) => id !== teamId)
        : [...prevSelected, teamId]
    );
  };

  // Manejar colapsar/expandir de equipos
  const handleToggleTeam = (teamId) => {
    setOpenTeam((prev) => ({
      ...prev,
      [teamId]: !prev[teamId],
    }));
  };

  return (
    <Box sx={{ maxWidth: 600, maxHeight: 400, margin: "auto",  overflow: "auto" }}>
      
      <List>
        {teamsData.map((marea) =>
          marea.teams.map((team) => (
            <React.Fragment key={team.teamId}>
              {/* Item del Team */}
              <ListItem
                sx={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: "4px",
                  mb: 1,
                }}
                button
                onClick={() => handleToggleTeam(team.teamId)}
              >
                <Checkbox
                  checked={selectedTeams.includes(team.teamId)}
                  onChange={() => handleSelectTeam(team.teamId)}
                  onClick={(e) => e.stopPropagation()} // Prevenir colapso al hacer clic en el checkbox
                />
                <ListItemText
                  primary={`Team ${team.teamId}`}
                  primaryTypographyProps={{ fontWeight: "bold" }}
                />
                {openTeam[team.teamId] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

              {/* Detalles del Team (Supervisor y Buzos) */}
              <Collapse in={openTeam[team.teamId]} timeout="auto" unmountOnExit>
                <Box
                  sx={{
                    pl: 4,
                    backgroundColor: "#e8f5e9",
                    borderRadius: "4px",
                    mb: 1,
                  }}
                >
                  <Typography variant="body1" gutterBottom>
                    <strong>Supervisor:</strong> {team.supervisor}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Buzos:</strong> {team.buzos.join(", ")}
                  </Typography>
                </Box>
              </Collapse>
            </React.Fragment>
          ))
        )}
      </List>
    </Box>
  );
};

export default TeamList;
