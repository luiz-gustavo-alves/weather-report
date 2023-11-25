import { useEffect, useState } from 'react';
import { Wrapper, MainContent, Footer } from './style';
import { weatherApiService } from '../../../services/OpenWeather/weatherApi';

import Searchbar from './Searchbar';
import WeatherStatus from './WeatherStatus';
import Time from './Time';
import Options from './Options';

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
      try {
        const { city } = searchForm;
        const currentWeatherData = await weatherApiService.getCurrentWeatherByCity(city, currentUnit);
        setWeatherData(currentWeatherData);

        const { coord } = weatherData;
        const currentForecastData = await weatherApiService.getWeatherForecast(coord.lat, coord.lon, currentUnit);
        setForecastData(currentForecastData);
      } catch (error) {
        // TO-DO: friendly error messages
        console.log(error);
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
