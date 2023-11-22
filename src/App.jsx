import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, CurrentWeather, WeatherForecast } from './pages';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="current" element={<CurrentWeather />}></Route>
          <Route path="forecast" element={<WeatherForecast />}></Route>
          <Route index path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
}
