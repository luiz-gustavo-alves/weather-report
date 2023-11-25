import { useOutletContext } from 'react-router-dom';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { TooltipWrapper } from './style';
import { formatTemperature } from '../../../utils/format-utils';

export default function WeatherForecast() {
  const [weatherData, forecastData] = useOutletContext();

  function customTooltip({ active, payload, label }) {
    if (active && payload && payload.length) {
      return (
        <TooltipWrapper>
          <div className="custom-tooltip">
            <p className="label">{`${label}`}</p>
            <p className="intro">{formatTemperature(payload[0].value, weatherData.unit)}</p>
          </div>
        </TooltipWrapper>
      );
    }
    return null;
  }

  const yAxisDomain = [forecastData.minTemp - 2, forecastData.maxTemp + 2];
  return (
    <ResponsiveContainer
      style={{ backgroundColor: '#ffffff' }}
      width="100%"
      height={forecastData.weatherData.length * 10}
    >
      <LineChart
        width={500}
        height={300}
        data={forecastData.weatherData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 25,
        }}
      >
        <CartesianGrid />
        <XAxis dataKey="date" ticks={[...Object.keys(forecastData.days)]} />
        <YAxis dataKey="temp" domain={yAxisDomain} unit={weatherData.unitType} />
        <Tooltip content={customTooltip} />
        <Line type="stroke" dataKey="temp" stroke="#8884d8" activeDot={{ r: 6 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
