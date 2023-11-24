import api, { API_KEYS } from './api';

async function getCurrentWeatherByCity(city, unit) {
  const unitType = unit === 'celsius' ? 'metric' : 'imperial';
  return await api.get(`/weather?q=${city}&appid=${API_KEYS.OPENWEATHER}&units=${unitType}`);
}

export const weatherApiService = {
  getCurrentWeatherByCity,
};
