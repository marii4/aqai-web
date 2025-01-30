import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "dayjs/locale/es"; // Importa el idioma español

const Calendar = ({ value }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es" >
      <DateCalendar
        orientation="landscape" 
        value={dayjs(value)}
        format="DD/MM/YYYY"
      />
    </LocalizationProvider>
  );
};

export default Calendar;
