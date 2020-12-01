import { DateTime } from 'luxon';

// Capitalizes first character of word//
const capitalize = (words) => {
  return words.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
};

// Formats single digit minutes to double digits// 
const formatMinutes = (num) => {
  return num <= 9 ? '0' + num : num
}

// Cleans data into a more presentable format for the user// 
export const cleanData = (data) => {
  const month = DateTime.fromSeconds(data.dt).monthLong
  const day = DateTime.fromSeconds(data.dt).day
  const dayOfWeek = DateTime.fromSeconds(data.dt).weekdayShort
  const dateFormat = `${dayOfWeek}, ${month} ${day} `
  const sunriseZone = DateTime.fromSeconds(data.sys.sunrise)
  const rezonedSunrise = sunriseZone.setZone('Atlantic/Reykjavik')
  const riseHour = rezonedSunrise.c.hour
  const riseMin  = `${rezonedSunrise.c.minute}`
  const sunriseFormat = `${riseHour}:${formatMinutes(riseMin)}`
  const sunsetZone = DateTime.fromSeconds(data.sys.sunset)
  const rezonedSunset = sunsetZone.setZone('Atlantic/Reykjavik')
  const setHour = rezonedSunset.c.hour
  const setMin  = `${rezonedSunset.c.minute}`
  const sunsetFormat = `${setHour}:${formatMinutes(setMin)}` 

  const weatherData = {
    cloudCover: data.clouds.all,
    time: dateFormat ,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    temperature: data.main.temp,
    todayHigh: data.main.temp_max,
    todayLow: data.main.temp_min,
    cityName: data.name,
    sunrise: sunriseFormat,
    sunset: sunsetFormat,
    description: capitalize(data.weather[0].description),
    windSpeed: data.wind.speed,
    id:data.id,
  }
  return weatherData
}