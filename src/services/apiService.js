import axios from 'axios';

const api = (params, method) => {
  if (method === 'get') {
    return axios.get(
      `https://cors-anywhere.herokuapp.com/http://www.alejandro.work:3000/bodyparts${params}`,
      { headers: { 'x-requested-with': 'alex' } },
    );
  }
  return 'success';
};

export default api;
