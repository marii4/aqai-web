import * as React from 'react';
import { useState } from 'react';
import { Box, Paper, TextField, Typography, Button } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import "dayjs/locale/es";
import { useNavigate } from 'react-router-dom';
import Breadcrumb from "./Breadcrumb";
import marea from "../data/reportemarea.json";

dayjs.locale('es'); 

const ReportesMareaPaper = () => {
  // Estados para filtros
  const [activityFilter, setActivityFilter] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredData, setFilteredData] = useState(marea);
  const navigate = useNavigate();

  // Función para convertir fecha (formato "DD-MM-YYYY") a dayjs
  const parseDate = (dateStr) => {
    if (!dateStr) return null;
    return dayjs(dateStr, "DD-MM-YYYY");
  };

  // Filtrar datos según actividad y rango de fechas
  const handleFilter = () => {
    const newData = marea.filter(item => {
      let matchActivity = true;
      let matchDate = true;
      if (activityFilter.trim() !== "") {
        if (item.operacionesRealizadas && item.operacionesRealizadas.length > 0) {
          matchActivity = item.operacionesRealizadas.some(op =>
            op.toLowerCase().includes(activityFilter.toLowerCase())
          );
        } else {
          matchActivity = false;
        }
      }
      if (startDate || endDate) {
        if (item.fechaFaena) {
          const itemDate = parseDate(item.fechaFaena);
          if (startDate) {
            matchDate = matchDate && (itemDate.isSame(startDate, 'day') || itemDate.isAfter(startDate));
          }
          if (endDate) {
            matchDate = matchDate && (itemDate.isSame(endDate, 'day') || itemDate.isBefore(endDate));
          }
        } else {
          matchDate = false;
        }
      }
      return matchActivity && matchDate;
    });
    setFilteredData(newData);
  };

  const handleReset = () => {
    setActivityFilter("");
    setStartDate(null);
    setEndDate(null);
    setFilteredData(marea);
  };

  return (
    <Box component="main" sx={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1, marginTop: 2, p: 3 }}>
      <Paper elevation={1} sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, backgroundColor: 'rgba(0, 222, 174, 0.23)' }}>
        <Box sx={{ px: 2, pt: 1 }}>
          <Breadcrumb />
        </Box>
        <Box sx={{ display: 'flex', px: 2 }}>
          <Paper sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, p: 2 }}>
            <TextField
              label="Actividades"
              variant="outlined"
              size="small"
              value={activityFilter}
              onChange={(e) => setActivityFilter(e.target.value)}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Fecha inicio"
                value={startDate}
                onChange={(newValue) => setStartDate(newValue)}
                renderInput={(params) => <TextField {...params} size="small" />}
              />
              <DatePicker
                label="Fecha término"
                value={endDate}
                onChange={(newValue) => setEndDate(newValue)}
                renderInput={(params) => <TextField {...params} size="small" />}
              />
            </LocalizationProvider>
            <Button variant="contained" color="primary" onClick={handleFilter}>
              Aplicar
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleReset}>
              Reiniciar
            </Button>
          </Paper>
        </Box>
        <Box sx={{ px: 2, mt: 1 }}>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <Paper key={index} sx={{ p: 2, mb: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Fecha Faena: {item.fechaFaena || 'N/A'} | Faena ID: {item.faenaId || 'N/A'} | Marea ID: {item.mareaId}
                </Typography>
                {item.teams && item.teams.map((team, idx) => (
                  <Box key={idx} sx={{ ml: 2, mt: 1 }}>
                    <Typography variant="body2">
                      <strong>Supervisor:</strong> {team.supervisor}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Buzos:</strong>{" "}
                      {team.buzos.map((buzoName, i) => (
                        <span
                          key={i}
                          style={{ cursor: 'pointer', textDecoration: 'underline', color: 'blue' }}
                          onClick={() => navigate(`/reportes/buzo/${encodeURIComponent(buzoName)}`)}
                        >
                          {buzoName}{i < team.buzos.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </Typography>
                  </Box>
                ))}
                {item.operacionesRealizadas && item.operacionesRealizadas.length > 0 && (
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    <strong>Operaciones Realizadas:</strong> {item.operacionesRealizadas.join(', ')}
                  </Typography>
                )}
              </Paper>
            ))
          ) : (
            <Typography variant="body1">No se encontraron resultados.</Typography>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default ReportesMareaPaper;
