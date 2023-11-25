import { useOutletContext } from 'react-router-dom';
import { Wrapper, Container, Card, DisplayMessage } from './style';

export default function CurrentWeather() {
  const [weatherData] = useOutletContext();

  function checkWeatherTemperatures() {
    const temperatures = [weatherData.temp.main, weatherData.temp.min, weatherData.temp.max];
    const maxTemperature = weatherData.unit === 'celsius' ? 17 : 62;
    for (let i = 0; i < temperatures.length; i++) {
      const temperature = temperatures[i];
      if (temperature < maxTemperature) {
        return true;
      }
    }
    return false;
  }

  const shouldWearCoat = checkWeatherTemperatures();
  const displayMessage = shouldWearCoat
    ? 'Sim! você deve levar um casaquinho!'
    : 'Não, você não deve levar um casaquinho!';

  return (
    <Wrapper>
      <Container>
        <Card>
          <p className="details">Mínima</p>
          <p className="content">
            {weatherData.temp.min} {weatherData.unitType}
          </p>
        </Card>
        <Card>
          <p className="details">Máxima</p>
          <p className="content">
            {weatherData.temp.max} {weatherData.unitType}
          </p>
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
        <p>{displayMessage}</p>
      </DisplayMessage>
    </Wrapper>
  );
}
