import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/pt-br';

dayjs.extend(localeData);
dayjs.locale('pt-br');

export function formatFloatPrecision(float, precision = 0) {
  const format = float.toFixed(precision);
  return format;
}

export function formatTemperature(temp, unit) {
  const unitType = unit === 'celsius' ? '°C' : '°F';
  const fixTempPrecision = formatFloatPrecision(Number(temp), 1);
  const format = `${fixTempPrecision} ${unitType}`;
  return format;
}

export function formatDate(date) {
  const localeData = dayjs().localeData();
  const day = dayjs(date).format('DD/MM');
  const weekday = localeData.weekdaysShort(dayjs(date));
  const format = `${day} (${weekday})`;
  return format;
}
