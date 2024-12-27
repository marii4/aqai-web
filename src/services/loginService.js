import sendRequest from './apiClient';

export const login = async (credentials) => {
  const response = await sendRequest('POST', '/login', credentials, false);
  console.log(response);
  const { token } = response.data.token;
  localStorage.setItem('jwtToken', response.data.token);
    
  if (token) {
    localStorage.setItem('jwtToken', response.data);
    localStorage.setItem('user', JSON.stringify(response.data.user));
  }
  return response;
};
