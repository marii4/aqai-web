import React, { useState } from "react";
import { Box, Paper, Toolbar, Typography, Button } from "@mui/material";
import TableMarea from "./TableMarea";
import AddIcon from "@mui/icons-material/Add";
import Breadcrumb from "./Breadcrumb";
import { Link } from "react-router-dom";
import FilterPanel from "./FilterPanel";

const MareaPaper = () => {
  const [filters, setFilters] = useState({});

  return (
    <Box component="main" sx={{ flexGrow: 1, marginLeft: 27, marginTop: 2, p: 3 }}>
      <Toolbar />

      <Box sx={{ display: "flex", gap: 3 }}>
        {/* Panel de filtros */}
        <FilterPanel onFilterChange={setFilters} />

        {/* Contenedor de la tabla */}
        <Paper
          elevation={1}
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            backgroundColor: "rgba(0, 222, 174, 0.23)",
          }}
        >
          <Box sx={{ px: 2, pt: 1 }}>
            <Breadcrumb />
          </Box>
          <Typography variant="h6" sx={{ px: 3, fontWeight: "bold" }}>
            Mareas en Curso
          </Typography>
          <Box sx={{ px: 2 }}>
            <TableMarea filters={filters} />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 3, pr: 3 }}>
            <Button
              variant="contained"
              component={Link}
              to="/Marea/NuevaMarea"
              sx={{ width: "200px", height: "40px", fontSize: "1rem", backgroundColor: "#00C7D1" }}
            >
              <AddIcon sx={{ marginRight: 1 }} />
              Nueva Marea
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default MareaPaper;
