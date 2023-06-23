import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:4504/api' });

export {api}