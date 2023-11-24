import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_OPENWEATHER_API_URL,
});

export const API_KEYS = {
  OPENWEATHER: import.meta.env.VITE_OPENWEATHER_API_KEY,
};

export default instance;
