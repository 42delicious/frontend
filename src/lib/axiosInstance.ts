import axios, { type AxiosInstance } from 'axios';
import { PUBLIC_SERVER_URI } from '$env/static/public';

const axiosInstance: AxiosInstance = axios.create({
	baseURL: PUBLIC_SERVER_URI
});

export default axiosInstance;
