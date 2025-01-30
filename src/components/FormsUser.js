import * as React from 'react';
import { useState } from 'react';
import { Box, Typography, Button, InputAdornment, IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import "dayjs/locale/es";
import { Link } from "react-router-dom";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';


const FormsUser= () =>{
    const [photo, setPhoto] = useState('');

    const handleFileChangePhoto = (event) => {
        const file = event.target.files[0];
        if (file) {
        setPhoto(file.name); // Carga de foto
        }
    };


    return(
        <Box>
            <Typography variant="h6" sx={{px: 3, py:1, fontWeight: 'bold'}}>Nuevo Usuario</Typography> 
            <Box component="form" 
                sx={{'& .MuiTextField-root': { m: 2, width: '35ch' },alignContent: 'center', 
                justifyContent: 'center', backgroundColor: 'white',  
                display: 'flex',
                flexWrap: 'wrap',
                marginX: 10, borderRadius: 3, m:2}}>

                <TextField id="filled-basic" label="Nombres" 
                //value={formData.nombres} onChange={(e) => setFormData({ ...formData, nombres: e.target.value })}
                />
                <TextField id="filled-basic" label="Apellidos" variant="outlined"
            //value={formData.apellidos} onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
            />

                <TextField id="filled-basic" label="Rut" variant="outlined"  
                //value={formData.rut} onChange={(e) => setFormData({ ...formData, rut: e.target.value })}
                />
                <TextField id="filled-basic" label="Email" variant="outlined"/>
                <TextField id="filled-basic" label="Usuario" variant="outlined"/>
                <TextField id="filled-basic" label="Empresa" variant="outlined"/>
                <TextField id="filled-basic" label="Rol" variant="outlined"/>
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
            <Box    
                sx={{ display: 'flex', flexDirection: 'column',
                alignItems: 'flex-end', // Alinea los elementos al inicio (izquierda)
                mb: 3, paddingRight: 3}}>
                <Button 
                    variant="contained" 
                    component={Link} to="/Admin"
                    //onClick={handleCreateBuzo}
                    sx={{
                    width: '180px', // Tamaño más pequeño
                    height: '40px', // Ajusta la altura si es necesario
                    fontSize: '1rem', // Tamaño de texto más pequeño
                    backgroundColor: '#00C7D1'
                    }}>
                    Guardar
                </Button>
                </Box>

                
                        
            </Box>
        );
    }

export default FormsUser;