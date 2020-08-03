import axios from 'axios';
import { authService } from 'services';

const httpClient = axios.create({ baseURL: 'https://api.spotify.com/v1/' });

httpClient.interceptors.request.use(
    (config) => {
        const token = authService.getToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
            config.headers['Content-Type'] = 'application/json';
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

httpClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            authService.logout();
        }
    }
);

export { httpClient };
