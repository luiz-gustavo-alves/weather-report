import { useEffect, useState } from 'react';
import { coat, searchIcon } from '../../../assets/images';
import { Wrapper, Logo, SearchBar, Weather, Temperature, DateContent, Options, Footer, MainContent } from './style';
import { weatherApiService } from '../../../services/OpenWeather/weatherApi';
import { formatFloatPrecision } from '../../../utils/format';

import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/pt-br';

dayjs.extend(localeData);
dayjs.locale('pt-br');

export default function Menu({ weatherData, setWeatherData }) {
  const [currentTime, setCurrentTime] = useState(dayjs().format('HH:mm'));
  const localeData = dayjs().localeData();
  const currentDay = dayjs().format('DD/MM/YYYY');
  const currentWeekday = localeData.weekdays(dayjs());

  const [searchForm, setSearchForm] = useState({ city: '' });
  const [disableForm, setDisableForm] = useState(false);
  const [unit, setUnit] = useState('celsius');

  function toggleUnit() {
    unit === 'celsius' ? setUnit('fahrenheit') : setUnit('celsius');
  }

  function handleSearchForm(e) {
    setSearchForm({ ...searchForm, [e.target.name]: e.target.value });
  }

  async function handleSearchSubmit(e) {
    e.preventDefault();
    setDisableForm(true);

    try {
      const { city } = searchForm;
      const response = await weatherApiService.getCurrentWeatherByCity(city, unit);
      const { data } = response;

      const weatherData = {
        name: data.name,
        condition: data.weather.main,
        icon: data.weather.icon,
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
      };

      setWeatherData(weatherData);
    } catch (error) {
      // TO-DO: friendly error messages
      console.log(error);
    } finally {
      setDisableForm(false);
    }
  }

  useEffect(() => {
    setInterval(() => setCurrentTime(dayjs().format('HH:mm')), 60 * 50);
  }, []);

  const hasWeatherData = weatherData !== null;

  return (
    <Wrapper>
      <MainContent>
        <Logo>
          <img src={coat}></img>
          <h1>Levo um casaquinho?</h1>
        </Logo>
        <SearchBar onSubmit={handleSearchSubmit}>
          <button type="submit" disabled={disableForm}>
            <img src={searchIcon}></img>
          </button>
          <input placeholder="Procure por uma cidade" name="city" value={searchForm.city} onChange={handleSearchForm} />
        </SearchBar>
        {hasWeatherData && (
          <Weather>
            <Temperature>
              <h2>{weatherData.temp.main} °C</h2>
            </Temperature>
            <div className="details">
              <h2>Céu aberto</h2>
            </div>
          </Weather>
        )}
        <DateContent>
          <p>{currentDay}</p>
          <p>
            {currentWeekday}, {currentTime}
          </p>
        </DateContent>
        <Options>
          <label className="switch">
            <input type="checkbox" onChange={toggleUnit} />
            <span className="slider"></span>
          </label>
          <p>°F</p>
        </Options>
      </MainContent>
      <Footer>
        <h3>Todos os direitos reservados. 2023.</h3>
      </Footer>
    </Wrapper>
  );
}
