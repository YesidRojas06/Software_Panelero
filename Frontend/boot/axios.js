import axios from 'axios';

const api = axios.create({ baseURL: 'https://software-panelero.onrender.com' });

export {api}