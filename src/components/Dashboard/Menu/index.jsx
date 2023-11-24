import { useEffect, useState } from 'react';
import { Wrapper, MainContent, Footer } from './style';
import { weatherApiService } from '../../../services/OpenWeather/weatherApi';

import Searchbar from './Searchbar';
import WeatherStatus from './WeatherStatus';
import Time from './Time';
import Options from './Options';

export default function Menu({ weatherData, setWeatherData }) {
  const [currentUnit, setCurrentUnit] = useState('celsius');
  const [searchForm, setSearchForm] = useState({ city: '' });
  const [fetchData, setFetchData] = useState(false);
  const [disableFetch, setDisableFetch] = useState(false);

  const hasWeatherData = weatherData !== null;
  useEffect(() => {
    if (!weatherData) {
      return;
    }

    async function getCurrentWeatherData() {
      setDisableFetch(true);
      try {
        const { city } = searchForm;
        const currentWeatherData = await weatherApiService.getCurrentWeatherByCity(city, currentUnit);
        setWeatherData(currentWeatherData);
      } catch (error) {
        // TO-DO: friendly error messages
        console.log(error);
      } finally {
        setDisableFetch(false);
      }
    }

    if (fetchData && !disableFetch) {
      getCurrentWeatherData();
    }
  }, [fetchData]);

  return (
    <Wrapper>
      <MainContent>
        <Searchbar
          searchForm={searchForm}
          setSearchForm={setSearchForm}
          setWeatherData={setWeatherData}
          unit={currentUnit}
        />
        {hasWeatherData && <WeatherStatus weatherData={weatherData} />}
        <Time />
        <Options currentUnit={currentUnit} setCurrentUnit={setCurrentUnit} setFetchData={setFetchData} />
      </MainContent>
      <Footer>
        <h3>Todos os direitos reservados. 2023.</h3>
      </Footer>
    </Wrapper>
  );
}
