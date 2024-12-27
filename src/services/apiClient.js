import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:4000/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const sendRequest = async (method, url, data = {}, includeToken = true) => {
  const config = {
    method,
    url,
    data,
    headers: {},
  };

  if (includeToken) {

    const token = localStorage.getItem('jwtToken');
    if (token) {        
      config.headers.Authorization = `${token}`; 
    } else {
      throw new Error('Token no encontrado. Por favor, inicia sesión.');
    }
  }

  try {
    const response = await apiClient(config);
    return response.data;
  } catch (error) {
    console.error('Error en la solicitud:', error.response || error.message);
    throw error;
  }
};

export default sendRequest;
