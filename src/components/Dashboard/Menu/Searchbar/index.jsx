import { useState } from 'react';
import { Logo, SearchBar } from './style';
import { coat, searchIcon } from '../../../../assets/images';
import { weatherApiService } from '../../../../services/OpenWeather/weatherApi';
import { formatForecastData, formatWeatherData } from '../../../../utils/format-utils';

import { toast } from 'react-toastify';
import httpStatus from 'http-status';
import { cityBadRequestError } from '../../../../errors/bad-request-errors';
import { cityNotFoundError } from '../../../../errors/not-found-errors';
import { serverInternalError } from '../../../../errors/server-internal-error';

export default function Searchbar({ searchForm, setSearchForm, setWeatherData, unit, setForecastData }) {
  const [disableForm, setDisableForm] = useState(false);

  function handleSearchForm(e) {
    setSearchForm({ ...searchForm, [e.target.name]: e.target.value });
  }

  async function handleSearchSubmit(e) {
    e.preventDefault();
    setDisableForm(true);
    const { city } = searchForm;
    try {
      let response = null;
      response = await weatherApiService.getCurrentWeatherByCity(city, unit);
      const weatherData = formatWeatherData(response.data, unit);
      setWeatherData(weatherData);

      const { coord } = weatherData;
      response = await weatherApiService.getWeatherForecast(coord.lat, coord.lon, unit);
      const forecastData = formatForecastData(response.data);
      setForecastData(forecastData);
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
      setDisableForm(false);
    }
  }

  return (
    <>
      <Logo>
        <img src={coat}></img>
        <h1>Levo um casaquinho?</h1>
      </Logo>
      <SearchBar onSubmit={handleSearchSubmit}>
        <button type="submit" disabled={disableForm}>
          <img src={searchIcon}></img>
        </button>
        <input
          autoFocus
          placeholder="Procure por uma cidade"
          name="city"
          value={searchForm.city}
          onChange={handleSearchForm}
        />
      </SearchBar>
    </>
  );
}
