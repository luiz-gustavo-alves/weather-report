import api, { API_KEYS } from './api';
import { formatFloatPrecision } from '../../utils/format-utils';

async function getCurrentWeatherByCity(city, unit) {
  const unitType = unit === 'celsius' ? 'metric' : 'imperial';
  const response = await api.get(`/weather?q=${city}&appid=${API_KEYS.OPENWEATHER}&units=${unitType}`);

  const { data } = response;
  const weatherData = {
    name: data.name,
    condition: data.weather[0].main,
    icon: data.weather[0].icon,
    coord: {
      lat: formatFloatPrecision(data.coord.lat, 2),
      lon: formatFloatPrecision(data.coord.lon, 2),
    },
    temp: {
      main: formatFloatPrecision(data.main.temp),
      min: formatFloatPrecision(data.main.temp_min),
      max: formatFloatPrecision(data.main.temp_max),
    },
    details: {
      humidity: data.main.humidity,
      windSpeed: formatFloatPrecision(data.wind.speed),
    },
    unitType: unit === 'celsius' ? '°C' : '°F',
  };
  return weatherData;
}

export const weatherApiService = {
  getCurrentWeatherByCity,
};
