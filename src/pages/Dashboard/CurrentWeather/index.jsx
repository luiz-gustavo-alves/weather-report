import { useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { Wrapper, Container, Card, DisplayMessage } from './style';

export default function CurrentWeather() {
  const navigate = useNavigate();
  const [weatherData] = useOutletContext();

  useEffect(() => {
    if (weatherData === null) {
      navigate('/');
    }
  }, []);

  return (
    <Wrapper>
      <Container>
        <Card>
          <p className="details">Mínima</p>
          <p className="content">{weatherData.temp.min}° C</p>
        </Card>
        <Card>
          <p className="details">Máxima</p>
          <p className="content">{weatherData.temp.max}° C</p>
        </Card>
        <Card>
          <p className="details">Umidade</p>
          <p className="content">{weatherData.details.humidity}%</p>
        </Card>
        <Card>
          <p className="details">Velocidade do vento</p>
          <p className="content">{weatherData.details.windSpeed} m/s</p>
        </Card>
      </Container>
      <DisplayMessage>
        <p>Não, você não deve levar um casaquinho!</p>
      </DisplayMessage>
    </Wrapper>
  );
}
