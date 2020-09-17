const apiKey  = process.env.REACT_APP_OPEN_WEATHER_API_KEY

export function fetchWeather(cityName) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},iceland&units=imperial&appid=${apiKey}`)
  .then(response => {
    if(response.ok) {
      return response.json()
    } else {
      throw response;
    }
  })
}


