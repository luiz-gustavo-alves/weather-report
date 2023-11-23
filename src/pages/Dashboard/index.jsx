import { useEffect } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { Wrapper, Content, NavOptions, CityContainer, ApiMessage, MainContent } from './style';
import { Menu } from '../../components/Dashboard';

export default function DashBoard() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function toggleWeatherForecastPage() {
    if (pathname === '/current') {
      navigate('/forecast');
    } else {
      navigate('/current');
    }
  }

  useEffect(() => {
    if (pathname === '/') {
      navigate('/current');
    }
  }, [pathname]);

  return (
    <Wrapper>
      <Menu />
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
            <h2 className="name">São Paulo</h2>
            <h2 className="coordinates">Lat: 44.32 &nbsp;&nbsp;&nbsp; Long: 10.99</h2>
          </CityContainer>
          <Outlet />
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
    </Wrapper>
  );
}
