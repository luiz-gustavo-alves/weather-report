import { useState } from 'react';
import { Logo, SearchBar } from './style';
import { coat, searchIcon } from '../../../../assets/images';
import { weatherApiService } from '../../../../services/OpenWeather/weatherApi';

export default function Searchbar({ searchForm, setSearchForm, setWeatherData, unit }) {
  const [disableForm, setDisableForm] = useState(false);

  function handleSearchForm(e) {
    setSearchForm({ ...searchForm, [e.target.name]: e.target.value });
  }

  async function handleSearchSubmit(e) {
    e.preventDefault();
    setDisableForm(true);
    try {
      const { city } = searchForm;
      const weatherData = await weatherApiService.getCurrentWeatherByCity(city, unit);
      setWeatherData(weatherData);
    } catch (error) {
      // TO-DO: friendly error messages
      console.log(error);
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
        <input placeholder="Procure por uma cidade" name="city" value={searchForm.city} onChange={handleSearchForm} />
      </SearchBar>
    </>
  );
}
