import * as React from 'react';
import { useState } from 'react';
import { Box, Paper, TextField, Typography, Button, MenuItem } from '@mui/material';
import Breadcrumb from "./Breadcrumb";
import buzos from '../data/reportebuzoOnline.json';
import ReactECharts from 'echarts-for-react';

const OnLinePaper = () => {
  const [busqueda, setBusqueda] = useState(buzos.length > 0 ? buzos[0].rut : '');
  const [buzoSeleccionado, setBuzoSeleccionado] = useState(buzos.length > 0 ? buzos[0] : null);
  const [selectedChartKey, setSelectedChartKey] = useState("chartData1");

  const handleBuscar = () => {
    const buzo = buzos.find((b) => b.rut === busqueda);
    setBuzoSeleccionado(buzo || null);
  };

  const getChartOption = () => {
    if (!buzoSeleccionado || !buzoSeleccionado[selectedChartKey]) return {};

    const data = buzoSeleccionado[selectedChartKey];
    const temperatureValues = data.map(item => item.temperature);
    const times = data.map(item => item.time);

    // Definir umbrales según tipo de buzo
    const isIntermedio = buzoSeleccionado.tipo_buzo === 'Intermedio';
    const depthThreshold = isIntermedio ? 36 : 20;
    const velocityThreshold = isIntermedio ? 24 : 9;

    // Crear array para Profundidad con estilo condicional en el punto
    const depthData = data.map(item => {
      if (item.depth > depthThreshold) {
        return {
          value: item.depth,
          itemStyle: { color: 'red' } // punto rojo
        };
      }
      return item.depth;
    });

    // Crear array para Velocidad con estilo condicional en el punto
    const velocityData = data.map(item => {
      if (item.velocity > velocityThreshold) {
        return {
          value: item.velocity,
          itemStyle: { color: 'red' } // punto rojo
        };
      }
      return item.velocity;
    });

    return {
      tooltip: {
        trigger: 'axis',
        // Custom formatter para colorear texto en rojo si excede umbral
        formatter: (params) => {
          // params es un array con la info de Profundidad, Velocidad y Temperatura en ese eje x
          const timeLabel = params[0]?.axisValue || '';
          let lines = params.map((p) => {
            // p.data es el valor en la serie; si es un objeto, trae itemStyle
            const value = typeof p.data === 'object' ? p.data.value : p.data;
            const isRed = (typeof p.data === 'object' && p.data.itemStyle?.color === 'red');
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
          return `<div>${timeLabel}</div>${lines.join('')}`;
        }
      },
      legend: {
        data: ['Profundidad', 'Temperatura', 'Velocidad']
      },
      xAxis: {
        type: 'category',
        data: times,
        name: '   Minutos'
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
          name: 'Profundidad',
          type: 'line',
          data: depthData,
          yAxisIndex: 0,
          smooth: true,
          // color original para la línea
          lineStyle: { color: '#5470C6' }
        },
        {
          name: 'Temperatura',
          type: 'line',
          data: temperatureValues,
          yAxisIndex: 1,
          smooth: true,
          // color original para la línea
          lineStyle: { color: '#91CC75' }
        },
        {
          name: 'Velocidad',
          type: 'line',
          data: velocityData,
          smooth: true,
          yAxisIndex: 0,
          // color original para la línea
          lineStyle: {width: 2, type: 'dashed', color: '#FAC858' }
        }
      ]
    };
  };

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexGrow: 1,
        marginTop: 2,
        p: 3,
      }}
    >
      <Paper
        elevation={1}
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          height: '100%',
          backgroundColor: 'rgba(0, 222, 174, 0.23)',
        }}
      >
        <Box sx={{ px: 2, pt: 1 }}>
          <Breadcrumb />
        </Box>

        {/* Barra de búsqueda */}
        <Box sx={{ display: 'flex', px: 2 }}>
          <Paper sx={{ display: 'flex', p: 2, gap: 2 }}>
            <TextField
              label="Rut Buzo"
              variant="outlined"
              size="small"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <Button variant="contained" onClick={handleBuscar}>
              Aplicar
            </Button>
          </Paper>
        </Box>

        {/* Mostrar información del buzo seleccionado */}
        {buzoSeleccionado ? (
          <Paper elevation={1} sx={{ padding: 2, backgroundColor: '#fff', mx: 2, mb: 2 }}>
            <Typography variant="h6" sx={{ pb: 2 }}>
              <strong>Nombre:</strong> {buzoSeleccionado.nombre} &nbsp; | &nbsp;
              <strong>Rut:</strong> {buzoSeleccionado.rut} &nbsp; | &nbsp;
              <strong>Estado Faena:</strong> {buzoSeleccionado.estado_faena} &nbsp; | &nbsp;
              <strong>Tipo de Buzo:</strong> {buzoSeleccionado.tipo_buzo} &nbsp; | &nbsp;
              <strong>Fecha de Inicio Faena:</strong> 12-01-2025
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              {/* Columna izquierda */}
              <Box sx={{ width: { xs: '100%', md: '48%' }, mb: 2 }}>
                <Typography><strong>Tiempo Inmersión en Faena:</strong> {buzoSeleccionado.tiempo_inmersion_faena} min</Typography>
                <Typography><strong>Tiempo Restante:</strong> {buzoSeleccionado.tiempo_restante} min</Typography>
                <Typography><strong>Profundidad Máxima alcanzada:</strong> {buzoSeleccionado.profundidad_maxima_faena} m</Typography>
                <Typography><strong>Profundidad Promedio en Faena:</strong> {buzoSeleccionado.profundidad_promedio_faena} m</Typography>
                <Typography><strong>N° de infracciones de velocidad ascenso:</strong> {buzoSeleccionado.infracciones_velocidad_ascenso}</Typography>
                <Typography><strong>N° de infracciones de velocidad descenso:</strong> {buzoSeleccionado.infracciones_velocidad_descenso}</Typography>
                <Typography><strong>Cantidad de descensos en promedio por inmersión:</strong> {buzoSeleccionado.descensos_promedio_por_inmersion}</Typography>
                <Typography><strong>N° de Inmersiones en los últimos 30 días:</strong> {buzoSeleccionado.inmersiones_ultimos_30_dias}</Typography>
                <Typography><strong>Intervalo de superficie:</strong> {buzoSeleccionado.intervalo_superficie} min</Typography>
                <Typography><strong>N° de Inmersiones en la faena:</strong> {buzoSeleccionado.inmersiones_faena}</Typography>
                <Typography><strong>Profundidad Máxima promedio en inmersiones:</strong> {buzoSeleccionado.profundidad_maxima_promedio} m</Typography>
                <Typography><strong>Actividades en Desarrolladas:</strong> {buzoSeleccionado.actividades}</Typography>
              </Box>

              {/* Columna derecha */}
              <Box sx={{ width: { xs: '100%', md: '48%' }, mb: 2 }}>
                <Typography><strong>Velocidad máxima de primer descenso:</strong> {buzoSeleccionado.velocidad_maxima_primer_descenso} m/min</Typography>
                <Typography><strong>Velocidad máxima de último ascenso:</strong> {buzoSeleccionado.velocidad_maxima_ultimo_ascenso} m/min</Typography>
                <Typography><strong>Velocidad máxima de descenso:</strong> {buzoSeleccionado.velocidad_maxima_descenso} m/min</Typography>
                <Typography><strong>Velocidad máxima de ascenso:</strong> {buzoSeleccionado.velocidad_maxima_ascenso} m/min</Typography>
              </Box>
            </Box>

            {/* Selección de la inmersión + Gráfico */}
            {buzoSeleccionado[selectedChartKey] && (
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Evolución en vivo
                </Typography>
                <TextField
                  select
                  label="Seleccione inmersión"
                  value={selectedChartKey}
                  onChange={(e) => setSelectedChartKey(e.target.value)}
                  //size="small"
                  sx={{ mb: 2, width: "200px" }}
                >
                  <MenuItem value="chartData1">Inmersión 1</MenuItem>
                  <MenuItem value="chartData2">Inmersión 2</MenuItem>
                  <MenuItem value="chartData3">Inmersión 3</MenuItem>
                  <MenuItem value="chartData4">Inmersión 4</MenuItem>
                </TextField>
                <ReactECharts
                  option={getChartOption()}
                  style={{ height: '400px', width: '100%' }}
                />
              </Box>
            )}
          </Paper>
        ) : (
          <Typography variant="body1" sx={{ mt: 2 }}>
            Ingrese el RUT de un buzo y presione "Aplicar" para ver su información.
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default OnLinePaper;
