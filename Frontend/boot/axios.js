import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:4503' });

export {api}