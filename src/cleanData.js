export const cleanData = (data) => {
  const weatherData = {
    cloudCover: data.clouds.all,
    time: data.dt ,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    temperature: data.main.temp,
    todayHigh: data.main.temp_max,
    todayLow: data.main.temp_min,
    cityName: data.name,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    description: data.weather[0].description,
    windSpeed: data.wind.speed,
    windGust: data.wind.gust,
    windDirection: data.wind.deg,
  }
  return weatherData
}

