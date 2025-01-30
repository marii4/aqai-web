import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  IconButton,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import data from "../data/dataTableMarea.json"; // Importar el JSON

const TableDashboard = () => {
  const [orderDirection, setOrderDirection] = useState("asc"); // Orden: asc o desc
  const [sortedData, setSortedData] = useState(data);

  // Función para manejar el cambio de orden
  const handleSort = () => {
    const isAsc = orderDirection === "asc";
    const sorted = [...sortedData].sort((a, b) =>
      isAsc ? new Date(a.fechaInicio) - new Date(b.fechaInicio) : new Date(b.fechaInicio) - new Date(a.fechaInicio)
    );
    setSortedData(sorted);
    setOrderDirection(isAsc ? "desc" : "asc");
  };

  return (
    <TableContainer sx={{ paddingX: 2, maxHeight: 400}}>
      <Table size="small" aria-label="dense table">
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={true}
                direction={orderDirection}
                onClick={handleSort}
                sx={{fontWeight: 'bold'}}
              >
                Fecha
              </TableSortLabel>
            </TableCell>
            <TableCell sx={{fontWeight: 'bold'}}>Marea</TableCell>
            <TableCell sx={{fontWeight: 'bold'}}>Empresa</TableCell>
            <TableCell sx={{fontWeight: 'bold'}}>Documento</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.slice(0, 4).map((row) => (
            <TableRow key={row.id}>
              <TableCell>{new Date(row.fechaInicio).toLocaleDateString()}</TableCell>
              <TableCell>{row.marea}</TableCell>
              <TableCell>{row.empresa}</TableCell>
              <TableCell>
                <IconButton
                  component="a"
                  href={`/${row.documento}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DownloadIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableDashboard;
