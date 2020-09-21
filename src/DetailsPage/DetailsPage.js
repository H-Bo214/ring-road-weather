import React from 'react'
import PropTypes from 'prop-types'
import '../DetailsPage/DetailsPage.css'
import star from '../assets/star.svg'
import starActive from '../assets/starActive.svg'

function DetailsPage({ currentWeather, favCities, addToFavorites, isFavorite, removeFavorite }) {
  const  {
      cloudCover,
      time,
      feelsLike,
      humidity,
      temperature,
      todayHigh,
      todayLow,
      cityName,
      sunrise,
      sunset,
      description,
      windSpeed,
  } = currentWeather

  const handleFavorite = (cityName) => {
    if (!favCities.includes(cityName)) {
      addToFavorites(cityName)
    } else {
      removeFavorite(cityName)
    }
  }

  return(
    <section className="DetailsPage">
      <section className="current-weather-parent">
        <div className="current-weather">
          <div className="city-header-parent">
            <h3 className="city-header">{`Today's weather in ${cityName}`}</h3>
            <button 
              className="star"
              type="button"
              onClick={ () => handleFavorite(cityName)}
            >
              <img 
                src={isFavorite ? starActive: star} 
                alt="star icon outlined"
              />
            </button>
          </div>
        </div>
        <div className="description">
          <p>{description}</p>
          <p>{time}</p>
        </div>
        <section className="weather-details"> 
          <div className="category">
            <h4>Temperature:</h4>
            <p>{temperature}°</p>
          </div>
          <div className="category">
            <h4>Feels like:</h4>
            <p>{feelsLike}°</p>
          </div>
          <div className="category">
            <h4>Cloud cover:</h4>
            <p>{cloudCover}%</p>
          </div>
          <div className="category">
            <h4>Humidity:</h4>
            <p>{humidity}%</p>
          </div>
          <div className="category">
            <h4>Wind:</h4>
            <p>{windSpeed} mph</p>
          </div>
          <div className="category">
            <h4>High/Low:</h4>
            <p>{todayHigh}°  /  {todayLow}°</p>
          </div>
          <div className="category">
            <h4>Sunrise/Sunset:</h4>
            <p>{sunrise}  /  {sunset}</p>
          </div>
        </section>
      </section>
    </section>
  )
}

  DetailsPage.propTypes = {
    currentWeather: PropTypes.object,
    favCities: PropTypes.array,
    addToFavorites: PropTypes.func,
    isFavorite: PropTypes.bool,
    removeFavorite: PropTypes.func,
  }
  
export default DetailsPage