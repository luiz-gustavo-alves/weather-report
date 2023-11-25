import api, { API_KEYS } from './api';
import { formatFloatPrecision, formatDate } from '../../utils/format-utils';

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
    unit: unit,
    unitType: unit === 'celsius' ? '°C' : '°F',
  };
  return weatherData;
}

async function getWeatherForecast(lat, lon, unit) {
  const unitType = unit === 'celsius' ? 'metric' : 'imperial';
  const response = await api.get(`/forecast/?lat=${lat}&lon=${lon}&appid=${API_KEYS.OPENWEATHER}&units=${unitType}`);

  const { data } = response;
  const weatherData = data.list.map((data) => {
    return {
      temp: formatFloatPrecision(data.main.temp),
      date: formatDate(data.dt_txt),
    };
  });

  const days = {};
  for (let i = 0; i < weatherData.length; i++) {
    const date = weatherData[i].date;
    if (!days[date]) {
      days[date] = date;
    }
  }

  const sortedTemperatures = data.list.sort((a, b) => b.main.temp - a.main.temp);
  const forecastData = {
    weatherData,
    days,
    maxTemp: sortedTemperatures[0].main.temp,
    minTemp: sortedTemperatures[weatherData.length - 1].main.temp,
  };

  return forecastData;
}

export const weatherApiService = {
  getCurrentWeatherByCity,
  getWeatherForecast,
};
