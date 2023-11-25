import { Weather, Temperature, Details } from './style';
import { getWeatherConditions, getWeatherIcons } from '../../../../utils/constants-utils';

export default function WeatherStatus({ weatherData }) {
  const weatherConditions = getWeatherConditions();
  const weatherIcons = getWeatherIcons();

  const icon = weatherIcons[weatherData.icon];
  const { description, color } = weatherConditions[weatherData.condition];
  return (
    <>
      <Weather>
        <Temperature $fontColor={color}>
          <img src={icon} />
          <h2>
            {weatherData.temp.main} {weatherData.unitType}
          </h2>
        </Temperature>
        <Details>
          <h2>{description}</h2>
        </Details>
      </Weather>
    </>
  );
}
