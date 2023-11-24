import { useEffect, useState } from 'react';
import { Container } from './style';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/pt-br';

dayjs.extend(localeData);
dayjs.locale('pt-br');

export default function Time() {
  const localeData = dayjs().localeData();
  const [currentTime, setCurrentTime] = useState(dayjs().format('HH:mm'));
  const [currentDay, setCurrentDay] = useState(dayjs().format('DD/MM/YYYY'));
  const [currentWeekday, setCurrentWeekday] = useState(localeData.weekdays(dayjs()));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(dayjs().format('HH:mm'));
      setCurrentDay(dayjs().format('DD/MM/YYYY'));
      setCurrentWeekday(localeData.weekdays(dayjs()));
    }, 1000 * 15);

    return () => clearInterval(intervalId);
  }, [currentTime]);

  return (
    <>
      <Container>
        <p>{currentDay}</p>
        <p>
          {currentWeekday}, {currentTime}
        </p>
      </Container>
    </>
  );
}
