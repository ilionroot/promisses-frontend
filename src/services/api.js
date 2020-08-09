import axios from 'axios';

const api = axios.create({
  baseURL: 'http://promisses-backend.herokuapp.com'
});

export default api;