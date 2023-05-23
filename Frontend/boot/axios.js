import axios from 'axios';

const api = axios.create({ baseURL: 'https://software-panelero-6d49.onrender.com' });

export {api}