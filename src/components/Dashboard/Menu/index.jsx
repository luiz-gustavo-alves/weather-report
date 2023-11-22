import { useEffect, useState } from 'react';
import { coat, searchIcon } from '../../../assets/images';
import { Wrapper, Logo, SearchBar, Weather, Temperature, DateContent, Options, Footer } from './style';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/pt-br';

dayjs.extend(localeData);
dayjs.locale('pt-br');

export default function Menu() {
  const [currentTime, setCurrentTime] = useState(dayjs().format('HH:mm'));
  const localeData = dayjs().localeData();
  const currentDay = dayjs().format('DD/MM/YYYY');
  const currentWeekday = localeData.weekdays(dayjs());

  useEffect(() => {
    setInterval(() => setCurrentTime(dayjs().format('HH:mm')), 60 * 50);
  }, []);

  return (
    <Wrapper>
      <Logo>
        <img src={coat}></img>
        <h1>Levo um casaquinho?</h1>
      </Logo>
      <SearchBar>
        <button>
          <img src={searchIcon}></img>
        </button>
        <input placeholder="Procure por uma cidade" />
      </SearchBar>
      <Weather>
        <Temperature>
          <h2>31 °C</h2>
        </Temperature>
        <div className="details">
          <h2>Céu aberto</h2>
        </div>
      </Weather>
      <DateContent>
        <h3>{currentDay}</h3>
        <h3>
          {currentWeekday}, {currentTime}
        </h3>
      </DateContent>
      <Options>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
        <h3>°F</h3>
      </Options>
      <Footer>
        <h3>Todos os direitos reservados. 2023.</h3>
      </Footer>
    </Wrapper>
  );
}
