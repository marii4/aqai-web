import sendRequest from './apiClient';

// Crear un nuevo buzo
export const createBuzo = async (buzoData) => {
  return sendRequest('POST', '/buzo', buzoData);
};

// Obtener la lista de buzos
export const getBuzos = async (company) => {
  return sendRequest('GET', `/buzos/${company}`);
};

// Actualizar un buzo
export const updateBuzo = async (id, buzoData) => {
  return sendRequest('PUT', `/buzo/${id}`, buzoData);
};

// Eliminar un buzo
export const deleteBuzo = async (id) => {
  return sendRequest('DELETE', `/buzo/${id}`);
};
