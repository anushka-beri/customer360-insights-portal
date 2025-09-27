import axios from 'axios';

const BASE_URL = "";

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        console.log('Request:', config);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            console.error('API Error:', error.response.status, error.response.data);
            if (error.response.status === 401) {
                console.log('Unauthorized! Redirect to login.');
            }
        }
        return Promise.reject(error);
    }
);

export default api;