import * as React from 'react';
import { useState } from 'react';
import { Box, Button, InputAdornment, IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import "dayjs/locale/es";
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { Link } from "react-router-dom";
import { createBuzo } from '../services/buzoService';


// arregar ids

const FormsBuzo= () =>{
    const [selectedBD, setSelectedBD] = useState(null); // Fecha nacimiento

    const [selectedDate, setSelectedDate] = useState(null); // Fecha vencimiento mattricula

    const [selectedDateExman, setSelectedDateExam] = useState(null); // Fecha vencimiento exam
    
    const [formData, setFormData] = useState({
        nombres: '',
        apellidos: '',
        rut: '',
        email: '',
        celular: '',
        numeroMatricula: '',
    });
    const [photo, setPhoto] = useState('');

    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
        setFileName(file.name); // Carga de zip
        }
    };

    const handleCreateBuzo = async () => {
        const newBuzo = {
            "nombre": formData.nombres,
            "apellido": formData.apellidos,
            "rut": formData.rut,
            "mail": formData.email,
            "compania": "Compañia1",
            "foto": photo,
            "licenciaBuzo": formData.numeroMatricula,
            "licenciaBuzoVenc": selectedDate,
            "examMedVenc": selectedDateExman,
            "contrasena": "12",
            "certificados": fileName,
            "estaHabilitado": false
        }
        try{
            const createdBuzo = await createBuzo(newBuzo);

        }catch(error){
            console.log(error);
        }
    }

    const handleFileChangePhoto = (event) => {
        const file = event.target.files[0];
        if (file) {
        setPhoto(file.name); // Carga de foto
        }
    };

    return(
        <Box>
            
            <Box component="form" 
                sx={{'& .MuiTextField-root': { m: 2, width: '35ch' },alignContent: 'center', 
                justifyContent: 'center', backgroundColor: 'white',  
                display: 'flex',
                flexWrap: 'wrap',
                marginX: 5, borderRadius: 3}}>

                <TextField id="filled-basic" label="Nombres" value={formData.nombres} onChange={(e) => setFormData({ ...formData, nombres: e.target.value })}/>
                <TextField id="filled-basic" label="Apellidos" variant="outlined"  value={formData.apellidos} onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}/>

                <TextField id="filled-basic" label="Rut" variant="outlined"  value={formData.rut} onChange={(e) => setFormData({ ...formData, rut: e.target.value })}/>

                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
                    <DatePicker label="Fecha de nacimiento"
                    value={selectedBD}
                    onChange={(newValue) => setSelectedBD(newValue)}
                    renderInput={(params) => <TextField {...params} />}/>
                </LocalizationProvider>
                <TextField id="filled-basic" label="Email" variant="outlined"  value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <TextField id="filled-basic" label="Numero de Celular" variant="outlined" value={formData.celular} onChange={(e) => setFormData({ ...formData, celular: e.target.value })}/>
            {/* Input de archivo oculto */}
                <input
                    id="file-input"
                    type="file"
                    style={{ display: 'none' }}
                    onChange={handleFileChangePhoto}/>
                {/* TextField personalizado */}
                <TextField variant="outlined" label="Foto"
                    value={photo}
                    InputProps={{
                    readOnly: true, // Solo lectura para mostrar el nombre del archivo
                    endAdornment:(
                    <InputAdornment position="end" >
                        <IconButton onClick={() => document.getElementById('file-input').click()}>
                            <FileUploadOutlinedIcon/>
                        </IconButton>
                    </InputAdornment>)}}>
                </TextField>
    
            </Box>
            <Box  component="form" 
                sx={{'& .MuiTextField-root': { m: 2, width: '35ch' }, 
                    alignContent: 'center', justifyContent: 'center', 
                    backgroundColor: 'white', display: 'flex',
                    flexWrap: 'wrap', mx: 5,my:3,
                    borderRadius: 3}}>
                <TextField id="filled-basic" label="Numero de Matricula" variant="outlined"value={formData.numeroMatricula} onChange={(e) => setFormData({ ...formData, numeroMatricula: e.target.value })}/>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
                    <DatePicker
                    label="Fecha de Vencimiento Matricula"
                    value={selectedDate}
                    onChange={(newValue) => setSelectedDate(newValue)}
                    renderInput={(params) => <TextField {...params} />}/>
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
<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
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
        mb: 3,
        paddingRight: 3}}>
    <Button 
        variant="contained" 
        component={Link} to="/Buzos"
        onClick={handleCreateBuzo}
        sx={{
        width: '180px', // Tamaño más pequeño
        height: '40px', // Ajusta la altura si es necesario
        fontSize: '1rem', // Tamaño de texto más pequeño
        backgroundColor: '#00C7D1'
        }}
    >
        Guardar
    </Button>
    </Box>

            
                    
        </Box>
    );
}

export default FormsBuzo;