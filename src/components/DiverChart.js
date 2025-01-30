import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

const DiverChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Simulated JSON data representing 20 minutes of descent
    const fetchData = async () => {
      const data = [
        { time: 0, depth: 0, temperature: 25 },
        { time: 1, depth: 2, temperature: 24.9 },
        { time: 2, depth: 5, temperature: 24.8 },
        { time: 5, depth: 10, temperature: 24.5 },
        { time: 10, depth: 20, temperature: 23.5 },
        { time: 15, depth: 30, temperature: 22 },
        { time: 20, depth: 40, temperature: 21 },
      ];
      setChartData(data);
    };

    fetchData();
  }, []);

  const getOption = () => {
    if (!chartData) return {};

    const times = chartData.map((d) => d.time);
    const depths = chartData.map((d) => d.depth);
    const temperatures = chartData.map((d) => d.temperature);

    return {
      tooltip: {
        trigger: "axis",
        formatter: (params) => {
          let tooltipText = "";
          params.forEach((param) => {
            if (param.seriesName === "Profundidad") {
              tooltipText += `Profundidad: ${param.value} m<br/>`;
            } else if (param.seriesName === "Temperatura") {
              tooltipText += `Temperatura: ${param.value} °C<br/>`;
            }
          });
          return `Tiempo: ${params[0].axisValue} min<br/>` + tooltipText;
        },
      },
      legend: {
        data: ["Profundidad", "Temperatura"],
      },
      xAxis: {
        type: "category",
        name: "Tiempo (min)",
        data: times,
      },
      yAxis: [
        {
          type: "value",
          name: "Profundidad (m)",
          inverse: true, // For descending depth
        },
        {
          type: "value",
          name: "Temperatura (°C)",
        },
      ],
      series: [
        {
          name: "Profundidad",
          type: "line",
          data: depths,
          yAxisIndex: 0,
          smooth: true,
          lineStyle: {
            color: "blue",
          },
        },
        {
          name: "Temperatura",
          type: "line",
          data: temperatures,
          yAxisIndex: 1,
          smooth: true,
          lineStyle: {
            color: "red",
          },
        },
      ],
    };
  };

  return (
    <div>
      <ReactECharts option={getOption()} style={{ height: "350px", width: "100%", m:3, backgroundColor: 'white', borderRadius: 5 }} />
    </div>
  );
};

export default DiverChart;
