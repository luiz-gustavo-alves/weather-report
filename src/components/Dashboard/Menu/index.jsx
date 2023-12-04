import { useEffect, useState } from 'react';
import { Wrapper, MainContent, Footer } from './style';
import { updateData } from '../../../utils/update-data-utils';

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

    async function getCurrentData() {
      setDisableFetch(true);
      await updateData(searchForm, currentUnit, setWeatherData, setForecastData);
      setDisableFetch(false);
    }

    if (!disableFetch) {
      getCurrentData();
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
