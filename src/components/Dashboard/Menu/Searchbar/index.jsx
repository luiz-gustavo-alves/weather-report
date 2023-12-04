import { useState } from 'react';
import { Logo, SearchBar } from './style';
import { coat, searchIcon } from '../../../../assets/images';
import { updateData } from '../../../../utils/update-data-utils';

export default function Searchbar({ searchForm, setSearchForm, setWeatherData, unit, setForecastData }) {
  const [disableForm, setDisableForm] = useState(false);

  function handleSearchForm(e) {
    setSearchForm({ ...searchForm, [e.target.name]: e.target.value });
  }

  async function handleSearchSubmit(e) {
    e.preventDefault();
    setDisableForm(true);
    await updateData(searchForm, unit, setWeatherData, setForecastData);
    setDisableForm(false);
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
