import React from 'react'
import '../WeatherCard/WeatherCard.css'

function WeatherCard(props) {
  return (
    <section>
        <div className="current-weather">
        <h3 className="city-header">{`Today's weather in ${props.cityName}`}</h3>
          <p>{props.description}</p>
          <p>{props.time}</p>
        </div>
        <section className="weather-details-parent"> 
          <section className="weather-details">
            <div className="category">
              <h4>Temperature:</h4>
              <p>{props.temperature}°</p>
            </div>
            <div className="category">
              <h4>Feels like:</h4>
              <p>{props.feelsLike}°</p>
            </div>
            <div className="category">
              <h4>Cloud cover:</h4>
              <p>{props.cloudCover}%</p>
            </div>
          </section>
          <section className="weather-details">
            <div className="category">
              <h4>Humidity:</h4>
              <p>{props.humidity}%</p>
            </div>
            <div className="category">
              <h4>Wind:</h4>
              <p>{props.windSpeed}mph</p>
            </div>
            <div className="category">
              <h4>High/Low:</h4>
              <p>{props.todayHigh}°/{props.todayLow}°</p>
            </div>
            <div className="category">
              <h4>Sunrise/Sunset:</h4>
              <p>{props.sunrise}/{props.sunset}</p>
            </div>
          </section>
        </section>
      </section>
  )
}

export default WeatherCard