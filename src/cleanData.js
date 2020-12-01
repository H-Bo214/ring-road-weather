import { DateTime } from 'luxon';

const capitalize = (words) => {
  return words.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
};

export const cleanData = (data) => {
  let m = DateTime.fromSeconds(data.dt).monthLong
  let d = DateTime.fromSeconds(data.dt).day
  let dayOfWeek = DateTime.fromSeconds(data.dt).weekdayShort
  let dateFormat = `${dayOfWeek}, ${m} ${d} `

  const weatherData = {
    cloudCover: data.clouds.all,
    time: dateFormat ,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    temperature: data.main.temp,
    todayHigh: data.main.temp_max,
    todayLow: data.main.temp_min,
    cityName: data.name,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    description: capitalize(data.weather[0].description),
    windSpeed: data.wind.speed,
    id:data.id,
  }
  console.log('timeData', DateTime.fromSeconds(data.dt))
  // console.log('Formatting', console.log({m:m, d:d, dayOfWeek:dayOfWeek}))
  console.log('dateFormat', dateFormat)
  return weatherData
}
