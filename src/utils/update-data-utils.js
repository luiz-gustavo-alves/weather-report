import { weatherApiService } from '../services/OpenWeather/weatherApi';
import { formatWeatherData, formatForecastData } from './format-utils';
import { toast } from 'react-toastify';
import httpStatus from 'http-status';
import { cityBadRequestError } from '../errors/bad-request-errors';
import { cityNotFoundError } from '../errors/not-found-errors';
import { serverInternalError } from '../errors/server-internal-error';

async function getWeatherData(city, unit, setWeatherData) {
  const response = await weatherApiService.getCurrentWeatherByCity(city, unit);
  const weatherData = formatWeatherData(response.data, unit);
  setWeatherData(weatherData);
  return weatherData;
}

async function getForecastData(coord, unit, setForecastData) {
  const response = await weatherApiService.getWeatherForecast(coord.lat, coord.lon, unit);
  const forecastData = formatForecastData(response.data);
  setForecastData(forecastData);
}

export async function updateData(searchForm, unit, setWeatherData, setForecastData) {
  const { city } = searchForm;
  try {
    const weatherData = await getWeatherData(city, unit, setWeatherData);
    const { coord } = weatherData;
    await getForecastData(coord, unit, setForecastData);
  } catch (error) {
    const { status } = error.response;
    if (status === httpStatus.BAD_REQUEST) return toast(cityBadRequestError());
    if (status === httpStatus.NOT_FOUND) return toast(cityNotFoundError(city));
    return toast(serverInternalError());
  }
}
