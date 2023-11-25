import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/pt-br';

dayjs.extend(localeData);
dayjs.locale('pt-br');

export function formatFloatPrecision(float, precision = 0) {
  const format = float.toFixed(precision);
  return Number(format);
}

export function formatTemperature(temp, unit) {
  const unitType = unit === 'celsius' ? '°C' : '°F';
  const fixTempPrecision = formatFloatPrecision(Number(temp), 1);
  const format = `${fixTempPrecision} ${unitType}`;
  return format;
}

export function formatDate(date) {
  const localeData = dayjs().localeData();
  const day = dayjs(date).format('DD/MM');
  const weekday = localeData.weekdaysShort(dayjs(date));
  const format = `${day} (${weekday})`;
  return format;
}

export function formatWeatherData(data, unit) {
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

export function formatForecastData(data) {
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
    maxTemp: formatFloatPrecision(sortedTemperatures[0].main.temp),
    minTemp: formatFloatPrecision(sortedTemperatures[weatherData.length - 1].main.temp),
  };
  return forecastData;
}
