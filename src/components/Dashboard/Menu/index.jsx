import { useEffect, useState } from 'react';
import { Wrapper, MainContent, Footer } from './style';
import { weatherApiService } from '../../../services/OpenWeather/weatherApi';
import { formatForecastData, formatWeatherData } from '../../../utils/format-utils';

import Searchbar from './Searchbar';
import WeatherStatus from './WeatherStatus';
import Time from './Time';
import Options from './Options';

import { toast } from 'react-toastify';
import httpStatus from 'http-status';
import { cityBadRequestError } from '../../../errors/bad-request-errors';
import { cityNotFoundError } from '../../../errors/not-found-errors';
import { serverInternalError } from '../../../errors/server-internal-error';

export default function Menu({ weatherData, setWeatherData, setForecastData }) {
  const [currentUnit, setCurrentUnit] = useState('celsius');
  const [searchForm, setSearchForm] = useState({ city: '' });
  const [disableFetch, setDisableFetch] = useState(false);

  const hasWeatherData = weatherData !== null;
  useEffect(() => {
    if (!weatherData) {
      return;
    }

    async function updateData() {
      setDisableFetch(true);
      const { city } = searchForm;
      try {
        let response = null;
        response = await weatherApiService.getCurrentWeatherByCity(city, currentUnit);
        const currentWeatherData = formatWeatherData(response.data, currentUnit);
        setWeatherData(currentWeatherData);

        const { coord } = weatherData;
        response = await weatherApiService.getWeatherForecast(coord.lat, coord.lon, currentUnit);
        const currentForecastData = formatForecastData(response.data);
        setForecastData(currentForecastData);
      } catch (error) {
        const { status } = error.response;

        if (status === httpStatus.BAD_REQUEST) {
          return toast(cityBadRequestError());
        }

        if (status === httpStatus.NOT_FOUND) {
          return toast(cityNotFoundError(city));
        }

        return toast(serverInternalError());
      } finally {
        setDisableFetch(false);
      }
    }

    if (!disableFetch) {
      updateData();
    }
  }, [currentUnit]);

  return (
    <Wrapper>
      <MainContent>
        <Searchbar
          searchForm={searchForm}
          setSearchForm={setSearchForm}
          setWeatherData={setWeatherData}
          setForecastData={setForecastData}
          unit={currentUnit}
        />
        {hasWeatherData && <WeatherStatus weatherData={weatherData} />}
        <Time />
        <Options currentUnit={currentUnit} setCurrentUnit={setCurrentUnit} disableFetch={disableFetch} />
      </MainContent>
      <Footer>
        <h3>Todos os direitos reservados. 2023.</h3>
      </Footer>
    </Wrapper>
  );
}
