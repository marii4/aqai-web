import React, { useState } from "react";
import {
  Box,
  TextField,
  Checkbox,
  Typography,
  Autocomplete,
} from "@mui/material";
import buzosData from "../data/buzos.json";

const NuevoTeamForm = () => {
  const [supervisor, setSupervisor] = useState(""); // Estado para el supervisor seleccionado
  const [selectedBuzos, setSelectedBuzos] = useState([]); // Estado para los buzos seleccionados
  const [search, setSearch] = useState(""); // Estado para el buscador

  // Manejar selección de buzos
  const handleBuzoToggle = (buzo) => {
    setSelectedBuzos((prevSelected) =>
      prevSelected.includes(buzo)
        ? prevSelected.filter((selected) => selected !== buzo)
        : [...prevSelected, buzo]
    );
  };

  // Filtrar buzos según búsqueda y estado
  const filteredBuzos = buzosData.filter(
    (buzo) =>
      buzo.nombre.toLowerCase().includes(search.toLowerCase()) &&
      buzo.nombre !== supervisor // Excluir supervisor de la lista de buzos
  );

  return (
    <Box>
      <Box
        sx={{
          maxWidth: 400,
          margin: "auto",
          mt: 4,
          p: 2,
          borderRadius: 2,
        }}
      >
        {/* Autocomplete para seleccionar Supervisor */}
        <Autocomplete
          options={buzosData.map((buzo) => buzo.nombre)} // Opciones de nombres
          value={supervisor}
          onChange={(event, newValue) => setSupervisor(newValue)} // Actualiza supervisor seleccionado
          renderInput={(params) => <TextField {...params} label="Supervisor" />}
        />

        {/* Búsqueda de buzos */}
        <TextField
          fullWidth
          label="Buscar Buzo"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mb: 2 }}
        />
      </Box>

      {/* Lista de Buzos */}
      <Box
        sx={{
          maxHeight: 300,
          maxWidth: 800,
          overflowY: "auto",
          //backgroundColor: "red",
          p: 4,
          borderRadius: 1,
          display: "grid", // Activamos CSS Grid
          gridTemplateColumns: "repeat(2, 1fr)", // 2 columnas iguales
          //gap: 1, // Espaciado entre elementos
          marginBottom:3
        }}
      >
        {filteredBuzos.map((buzo) => (
          <Box
            key={buzo.rut}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox
              checked={selectedBuzos.includes(buzo.nombre)}
              onChange={() => handleBuzoToggle(buzo.nombre)}
            />
            <Typography>{buzo.nombre}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default NuevoTeamForm;
