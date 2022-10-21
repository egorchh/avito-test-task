export function covertTimeToDate(time: number): string {
    const date = new Date(time * 1000);
    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
    const [hour, minutes] = [date.getHours(), date.getMinutes(), date.getSeconds()];

    return `${getZero(hour)}:${getZero(minutes)} ${getZero(day)}/${getZero(month)}/${year}`
  }

function getZero(time: number): string {
  if (time >= 0 && time <= 9 ) {
    return `0${time}`;
  }

  return `${time}`;
}