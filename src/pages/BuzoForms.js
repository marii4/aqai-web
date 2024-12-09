import * as React from 'react';
import { useState } from 'react';
import { Box, Paper, Toolbar, Typography, Button, InputAdornment, IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import Header from '../components/Header';
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";

// arregar ids

const FormsBuzo= () =>{
    const [selectedBD, setSelectedBD] = useState(null); // Fecha nacimiento

    const [selectedDate, setSelectedDate] = useState(null); // Fecha vencimiento mattricula

    const [selectedDateExman, setSelectedDateExam] = useState(null); // Fecha vencimiento exam

    

    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
        setFileName(file.name); // Carga de zip
        }
    };


    const [photo, setPhoto] = useState('');

    const handleFileChangePhoto = (event) => {
        const file = event.target.files[0];
        if (file) {
        setPhoto(file.name); // Carga de foto
        }
    };

    return(
        <Box>
            <Header/>
            <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: 30, marginTop:4 }}> 
                <Toolbar/>
                <Box sx={{ padding: 1, display: 'flex', justifyContent: 'space-between' }}>
                    <Paper elevation={0} sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, height: '%100', backgroundColor: 'rgba(0, 222, 174, 0.23)' }}>
                    <Box sx={{px: 2, pt:1}}>
                            <Breadcrumb />
                        </Box>
                        <Box sx={{paddingX: 2}}>
                            <Typography variant="h6">Nuevo Buzo</Typography>
                        </Box>
                        <Box  component="form" 
                            sx={{'& .MuiTextField-root': { m: 2, width: '35ch' }, 
                            alignContent: 'center', 
                            justifyContent: 'center', 
                            backgroundColor: 'white',  
                            display: 'flex',
                            flexWrap: 'wrap',
                            marginX: 15,
                            borderRadius: 3}}>
                        <TextField
                           id="filled-basic" label="Nombres" />
                        <TextField id="filled-basic" label="Apellidos" variant="outlined"/>

                        <TextField id="filled-basic" label="Rut" variant="outlined"/>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                            
                                label="Fecha de nacimiento"
                                value={selectedBD}
                                onChange={(newValue) => setSelectedBD(newValue)}
                                renderInput={(params) => <TextField {...params} />}
                                
                            />
                        </LocalizationProvider>
                        <TextField id="filled-basic" label="Email" variant="outlined"/>
                        <TextField id="filled-basic" label="Numero de Celular" variant="outlined"/>
                         {/* Input de archivo oculto */}
                         <input
                            id="file-input"
                            type="file"
                            style={{ display: 'none' }}
                            onChange={handleFileChangePhoto}
                        />
                        {/* TextField personalizado */}
                            <TextField
                            
                                variant="outlined"
                                label="Foto"
                                value={photo}
                                InputProps={{
                                readOnly: true, // Solo lectura para mostrar el nombre del archivo
                                endAdornment:(
                                    <InputAdornment position="end" >
                                        <IconButton onClick={() => document.getElementById('file-input').click()}>
                                            <FileUploadOutlinedIcon/>
                                        </IconButton>

                                    </InputAdornment>


                                )
                                }}
                                >
                                </TextField>
                            
                        </Box>
                        <Box  component="form" 
                        sx={{'& .MuiTextField-root': { m: 2, width: '35ch' }, 
                            alignContent: 'center', 
                            justifyContent: 'center', 
                            backgroundColor: 'white',  
                            display: 'flex',
                            flexWrap: 'wrap',
                            marginX: 15,
                            borderRadius: 3,
                             }}>
                                <TextField id="filled-basic" label="Numero de Matricula" variant="outlined"/>
                     

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                            
                            label="Fecha de Vencimiento Matricula"
                            value={selectedDate}
                            onChange={(newValue) => setSelectedDate(newValue)}
                            renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        
                         {/* Input de archivo oculto */}
                         <input
                            id="file-input2"
                            type="file"
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                        {/* TextField personalizado */}
                            <TextField
                            
                                variant="outlined"
                                label="Cargar Certificados"
                                value={fileName}
                                InputProps={{
                                readOnly: true, // Solo lectura para mostrar el nombre del archivo
                                endAdornment:(
                                    <InputAdornment position="end" >
                                        <IconButton onClick={() => document.getElementById('file-input2').click()}>
                                            <FileUploadOutlinedIcon/>
                                        </IconButton>

                                    </InputAdornment>


                                )
                                }}
                                >
                                    

                                </TextField>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                            
                            label="Fecha de Vencimiento Examen"
                            value={selectedDateExman}
                            onChange={(newValue) => setSelectedDateExam(newValue)}
                            renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        




                            
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-end', // Alinea los elementos al inicio (izquierda)
                                margin: 4,
                                paddingRight: 5 
                            }}
                            >
                            <Button 
                                variant="contained" 
                                component={Link} to="/Buzos"
                                sx={{
                                width: '150px', // Tamaño más pequeño
                                height: '40px', // Ajusta la altura si es necesario
                                fontSize: '0.8rem', // Tamaño de texto más pequeño
                                backgroundColor: '#00C7D1'
                                }}
                            >
                                Guardar
                            </Button>
                            </Box>

            
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
}

export default FormsBuzo;