import {
  icon_01d,
  icon_01n,
  icon_02d,
  icon_02n,
  icon_03d,
  icon_03n,
  icon_04d,
  icon_04n,
  icon_09d,
  icon_09n,
  icon_10d,
  icon_10n,
  icon_11d,
  icon_11n,
  icon_13d,
  icon_13n,
  icon_50d,
  icon_50n,
} from '../assets/images';

export function getWeatherConditions() {
  const weatherConditions = {
    Clear: {
      color: '#ff5000',
      description: 'Céu aberto',
    },
    Clouds: {
      color: '#8d8d8d',
      description: 'Nublado',
    },
    Rain: {
      color: '#2700fe',
      description: 'Chovendo',
    },
    Snow: {
      color: '#eeeeee',
      description: 'Nevando',
    },
    Thunderstorm: {
      color: '#a300d1',
      description: 'Tempestade',
    },
    Drizzle: {
      color: '#009fff',
      description: 'Chuviscando',
    },
    Mist: {
      color: '#d4d4d4',
      description: 'Neblina',
    },
  };
  return weatherConditions;
}

export function getWeatherIcons() {
  const weatherIcons = {
    '01d': icon_01d,
    '01n': icon_01n,
    '02d': icon_02d,
    '02n': icon_02n,
    '03d': icon_03d,
    '03n': icon_03n,
    '04d': icon_04d,
    '04n': icon_04n,
    '09d': icon_09d,
    '09n': icon_09n,
    '10d': icon_10d,
    '10n': icon_10n,
    '11d': icon_11d,
    '11n': icon_11n,
    '13d': icon_13d,
    '13n': icon_13n,
    '50d': icon_50d,
    '50n': icon_50n,
  };
  return weatherIcons;
}
