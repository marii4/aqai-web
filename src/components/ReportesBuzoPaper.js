import * as React from 'react';
import { useState, useMemo } from 'react';
import { Box, Paper, TextField, Typography, Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from "./Breadcrumb";
import buzos from '../data/reportesbuzo.json';
import ReactECharts from 'echarts-for-react';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

const ReportesBuzoPaper = () => {
  const [busqueda, setBusqueda] = useState(buzos.length > 0 ? buzos[0].nombre : '');
  const [buzoSeleccionado, setBuzoSeleccionado] = useState(buzos.length > 0 ? buzos[0] : null);

  // Fechas seleccionadas en los DatePicker
  const [fechaInicio, setFechaInicio] = useState(null);
  const [fechaFin, setFechaFin] = useState(null);

  const navigate = useNavigate();

  // Buscar buzo por nombre
  const handleBuscar = () => {
    const buzo = buzos.find((b) => b.nombre.toLowerCase() === busqueda.toLowerCase());
    setBuzoSeleccionado(buzo || null);
  };

  // Filtrar datos según el rango de fechas
  const chartDataFiltrada = useMemo(() => {
    if (!buzoSeleccionado || !buzoSeleccionado.chartData) return [];

    let data = buzoSeleccionado.chartData;
    // Si ambos DatePicker tienen valor, filtrar
    if (fechaInicio && fechaFin) {
      data = data.filter((d) => {
        // Convertir el "date" del registro a dayjs (formato 'YYYY-MM-DD')
        const itemDate = dayjs(d.date, 'YYYY-MM-DD');
        return itemDate.isSameOrAfter(fechaInicio, 'day') && itemDate.isSameOrBefore(fechaFin, 'day');
      });
    }
    return data;
  }, [buzoSeleccionado, fechaInicio, fechaFin]);

  // Umbrales según tipo de buzo
  const isIntermedio = buzoSeleccionado?.tipo_buzo === 'Intermedio';
  const depthThreshold = isIntermedio ? 36 : 20;
  const velocityThreshold = isIntermedio ? 24 : 9;

  // Construir arrays para el gráfico
  const datosTiempo = chartDataFiltrada.map((d) => d.date);

  const valoresProfundidad = chartDataFiltrada.map((d) => {
    if (d.depth > depthThreshold) {
      return { value: d.depth, itemStyle: { color: 'red' } };
    }
    return d.depth;
  });

  const valoresTemperatura = chartDataFiltrada.map((d) => d.temperature);

  const valoresVelocidad = chartDataFiltrada.map((d) => {
    if (d.velocity > velocityThreshold) {
      return { value: d.velocity, itemStyle: { color: 'red' } };
    }
    return d.velocity;
  });

  const options = {
    title: {
      text: 'Profundidad, Temperatura y Velocidad',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
      formatter: (params) => {
        const fecha = params[0]?.axisValue || '';
        const lines = params.map((p) => {
          const value = typeof p.data === 'object' ? p.data.value : p.data;
          const isRed = typeof p.data === 'object' && p.data.itemStyle?.color === 'red';
          const textColor = isRed ? 'red' : '#000';
          return `
            <div>
              ${p.marker}
              <span style="color:${textColor}">
                ${p.seriesName}: ${value}
              </span>
            </div>
          `;
        });
        return `<div>${fecha}</div>${lines.join('')}`;
      },
    },
    legend: {
      data: ['Profundidad Promedio', 'Temperatura Promedio', 'Velocidad Promedio'],
      bottom: 0,
    },
    xAxis: {
      type: 'category',
      data: datosTiempo,
      name: 'Fecha',
    },
    yAxis: [
      {
        type: 'value',
        name: 'Profundidad (m) / Velocidad (m/min)',
        //min: 0,
        //max: 40
      },
      {
        type: 'value',
        name: 'Temperatura (°C)',
        //min: 17,
        //max: 25
      }
    ],
    series: [
      {
        name: 'Profundidad Promedio',
        type: 'line',
        data: valoresProfundidad,
        smooth: true,
        lineStyle: { width: 2, color: '#5470C6' },
      },
      {
        name: 'Temperatura Promedio',
        type: 'line',
        data: valoresTemperatura,
        smooth: true,
        lineStyle: { width: 2, color: '#91CC75' },
      },
      {
        name: 'Velocidad Promedio',
        type: 'line',
        data: valoresVelocidad,
        smooth: true,
        lineStyle: { width: 2, type: 'dashed', color: '#FAC858' },
      },
    ],
  };

  return (
    <Box component="main" sx={{ display: 'flex', flexGrow: 1, marginTop: 2, p: 3 }}>
      <Paper
        elevation={1}
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          backgroundColor: 'rgba(0, 222, 174, 0.23)',
        }}
      >
        <Box sx={{ px: 2, pt: 1 }}>
          <Breadcrumb />
        </Box>

        <Box sx={{ display: 'flex', px: 2 }}>
          <Paper sx={{ display: 'flex', p: 2, gap: 2, flexWrap: 'wrap' }}>
            <TextField
              label="Buscar Buzo"
              variant="outlined"
              size="small"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Fecha Inicio"
                value={fechaInicio}
                onChange={(newValue) => setFechaInicio(newValue)}
              />
              <DatePicker
                label="Fecha Fin"
                value={fechaFin}
                onChange={(newValue) => setFechaFin(newValue)}
              />
            </LocalizationProvider>
            <Button variant="contained" onClick={handleBuscar}>
              Aplicar
            </Button>
          </Paper>
        </Box>

        {buzoSeleccionado ? (
          <Paper elevation={1} sx={{ padding: 2, backgroundColor: '#fff', mx: 2, mb: 2 }}>
            {/* Hacemos que el nombre del buzo sea clickable */}
            <Typography variant="h6" sx={{ pb: 2 }}>
              <strong>Nombre:</strong>{' '}
              <span
                onClick={() =>
                  navigate(`/reportes/buzo/${encodeURIComponent(buzoSeleccionado.rut)}`)
                }
                style={{ cursor: 'pointer', textDecoration: 'underline', color: 'blue' }}
              >
                {buzoSeleccionado.nombre}
              </span>{' '}
              &nbsp;|&nbsp;
              <strong>Rut:</strong> {buzoSeleccionado.rut} &nbsp;|&nbsp;
              <strong>Tipo de Buzo:</strong> {buzoSeleccionado.tipo_buzo}
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <Box sx={{ width: { xs: '100%', md: '48%' }, mb: 2 }}>
                <Typography>
                  <strong>Tiempo Inmersión Promedio:</strong> {buzoSeleccionado.tiempo_inmersion_promedio} min
                </Typography>
                <Typography>
                  <strong>Tiempo Inmersión Máximo:</strong> {buzoSeleccionado.tiempo_inmersion_maximo} min
                </Typography>
                <Typography>
                  <strong>Fecha Última Inmersión:</strong> {buzoSeleccionado.fecha_ultima_inmersion}
                </Typography>
                <Typography>
                  <strong>Profundidad Máxima Alcanzada:</strong> {buzoSeleccionado.profundidad_maxima_alcanzada} m
                </Typography>
                <Typography>
                  <strong>Profundidad Promedio en Inmersiones:</strong> {buzoSeleccionado.profundidad_promedio_inmersiones} m
                </Typography>
                <Typography>
                  <strong>N° de infracciones de velocidad ascenso:</strong> {buzoSeleccionado.infracciones_velocidad_ascenso}
                </Typography>
                <Typography>
                  <strong>N° de infracciones de velocidad descenso:</strong> {buzoSeleccionado.infracciones_velocidad_descenso}
                </Typography>
                <Typography>
                  <strong>Cantidad de descensos en promedio por inmersión:</strong> {buzoSeleccionado.descensos_promedio_por_inmersion}
                </Typography>
                <Typography>
                  <strong>N° de Inmersiones en los últimos 30 días:</strong> {buzoSeleccionado.inmersiones_ultimos_30_dias}
                </Typography>
                <Typography>
                  <strong>Intervalo de tiempo en superficie:</strong> {buzoSeleccionado.intervalo_superficie} min
                </Typography>
                <Typography>
                  <strong>Actividades en Desarrolladas:</strong> {buzoSeleccionado.actividades}
                </Typography>
              </Box>

              <Box sx={{ width: { xs: '100%', md: '48%' }, mb: 2 }}>
                <Typography>
                  <strong>Velocidad máxima de primer descenso:</strong> {buzoSeleccionado.velocidad_maxima_primer_descenso} m/min
                </Typography>
                <Typography>
                  <strong>Velocidad máxima de último ascenso:</strong> {buzoSeleccionado.velocidad_maxima_ultimo_ascenso} m/min
                </Typography>
                <Typography>
                  <strong>Velocidad máxima de descenso:</strong> {buzoSeleccionado.velocidad_maxima_descenso} m/min
                </Typography>
                <Typography>
                  <strong>Velocidad máxima de ascenso:</strong> {buzoSeleccionado.velocidad_maxima_ascenso} m/min
                </Typography>
                <Typography>
                  <strong>N° de Inmersiones:</strong> {buzoSeleccionado.inmersiones}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ height: 400 }}>
              <ReactECharts option={options} style={{ height: '100%' }} />
            </Box>
          </Paper>
        ) : (
          <Typography variant="body1" sx={{ mt: 2 }}>
            Ingrese el <strong>Nombre del buzo</strong> y presione "Aplicar" para ver su información.
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default ReportesBuzoPaper;
