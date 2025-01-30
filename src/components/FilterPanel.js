import React, { useState } from "react";
import { Paper, Box, TextField, Typography, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

const FilterPanel = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    empresa: "",
    fechaInicio: null,
    fechaTermino: null,
    supervisor: "",
  });

  const handleChange = (field, value) => {
    setFilters((prev) => {
      const newFilters = { ...prev, [field]: value };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  return (
    <Paper
      elevation={3}
      sx={{
        width: "250px",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        backgroundColor: "rgba(0, 222, 174, 0.23)",
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        Filtrar Mareas
      </Typography>
      
      <TextField
        label="Empresa"
        variant="outlined"
        size="small"
        value={filters.empresa}
        onChange={(e) => handleChange("empresa", e.target.value)}
      />

      <DatePicker
        label="Fecha Inicio"
        value={filters.fechaInicio}
        onChange={(date) => handleChange("fechaInicio", date)}
        renderInput={(params) => <TextField {...params} size="small" />}
      />

      <DatePicker
        label="Fecha Término"
        value={filters.fechaTermino}
        onChange={(date) => handleChange("fechaTermino", date)}
        renderInput={(params) => <TextField {...params} size="small" />}
      />

      <TextField
        label="Supervisor"
        variant="outlined"
        size="small"
        value={filters.supervisor}
        onChange={(e) => handleChange("supervisor", e.target.value)}
      />

      <Button variant="contained" color="primary" onClick={() => onFilterChange(filters)}>
        Aplicar Filtros
      </Button>
    </Paper>
  );
};

export default FilterPanel;
