import React from "react";
import { Paper, Box, Typography, TextField, Button } from "@mui/material";
import Grid from '@mui/material/Grid2';

const DiverAlarms = () => {
  return (
    <Paper elevation={1} style={{ padding: 10, m:4, backgroundColor: "#e0f7f9" }}>
      {/* Encabezado */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        
        <TextField
          variant="outlined"
          size="small"
          placeholder="Buscar Buzo"
          style={{ backgroundColor: "white" }}
        />
      </Box>

      {/* Información del buzo */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="16px"
        mb={2}
        style={{ backgroundColor: "white", borderRadius: "8px" }}
      >
        <Typography variant="body1">
          <strong>Nombre:</strong> Juan Bustos
        </Typography>
        <Typography variant="body1">
          <strong>RUT:</strong> 8898888
        </Typography>
      </Box>

      {/* Alarma actual */}
      <Box mb={2}>
        <Typography variant="body2" gutterBottom>
          <strong>Alarmas Actuales</strong>
        </Typography>

        <Grid container spacing={2}>
          {[
            { value: "1", label: "Días sin Bucear" },
            { value: "10 mt", label: "Máximo de Profundidad" },
            { value: "10", label: "Máximo de Nitrógeno" },
            { value: "10 min", label: "Tiempo Restante de buceo" },
            { value: "2", label: "Cantidad de Buceo Yoyo" },
          ].map((alarm, index) => (
            <Grid item xs={6} sm={4} md={2.4} key={index}>
              <Box
                textAlign="center"
                padding="8px"
                style={{ backgroundColor: "#e0f7f9", borderRadius: "8px" }}
              >
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                  {alarm.value}
                </Typography>
                <Typography variant="caption">{alarm.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Botón */}
      <Box textAlign="right">
        <Button
          variant="contained"
          style={{ backgroundColor: "#00c4cc", color: "white", borderRadius: "16px" }}
        >
          Ver Alarmas
        </Button>
      </Box>
    </Paper>
  );
};

export default DiverAlarms;
