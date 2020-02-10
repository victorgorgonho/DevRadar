import axios from 'axios';

const api = axios.create({
    baseURL: 'http://150.165.200.5:3333'
});

export default api;