import { Weather, Temperature } from './style';
import { getWeatherConditions, getWeatherIcons } from '../../../../utils/constants-utils';

export default function WeatherStatus({ weatherData }) {
  const weatherConditions = getWeatherConditions();
  const weatherIcons = getWeatherIcons();
  return (
    <>
      <Weather>
        <Temperature>
          <h2>
            {weatherData.temp.main} {weatherData.unitType}
          </h2>
        </Temperature>
        <div className="details">
          <img src={weatherIcons[weatherData.icon]} />
          <h2>{weatherConditions[weatherData.condition].description}</h2>
        </div>
      </Weather>
    </>
  );
}
