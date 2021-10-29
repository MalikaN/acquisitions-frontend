import Axios, { AxiosInstance } from 'axios';
import user from './user';

const api: AxiosInstance = Axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

// --- --- --- --- --- --- INTERCEPTORS --- --- --- --- --- ---
api.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error),
);

export const userService = user(api);
