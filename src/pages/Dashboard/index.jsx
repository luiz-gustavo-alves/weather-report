import { useState } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { Wrapper, Content, NavOptions, CityContainer, ApiMessage, MainContent } from './style';
import { Menu } from '../../components/Dashboard';

export default function DashBoard() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [weatherData, setWeatherData] = useState(null);

  function toggleWeatherForecastPage() {
    pathname === '/current' ? navigate('/forecast') : navigate('/current');
  }

  const hasWeatherData = weatherData !== null;

  return (
    <Wrapper $pathname={pathname}>
      <Menu weatherData={weatherData} setWeatherData={setWeatherData} />
      {hasWeatherData && (
        <Content>
          <MainContent>
            <NavOptions $pathname={pathname}>
              <button className="current" onClick={toggleWeatherForecastPage} type="button">
                Hoje
              </button>
              <button className="forecast" onClick={toggleWeatherForecastPage} type="button">
                Próximos Dias
              </button>
            </NavOptions>
            <CityContainer>
              <h2 className="name">{weatherData.name}</h2>
              <h2 className="coordinates">
                Lat: {weatherData.coord.lat} &nbsp;&nbsp;&nbsp; Long: {weatherData.coord.lon}
              </h2>
            </CityContainer>
            <Outlet context={[weatherData]} />
          </MainContent>
          <div>
            <ApiMessage>
              <p>
                Dados fornecidos pela&nbsp;
                <a className="apiName" href="https://openweathermap.org/">
                  Open Weather API
                </a>
              </p>
            </ApiMessage>
          </div>
        </Content>
      )}
    </Wrapper>
  );
}
