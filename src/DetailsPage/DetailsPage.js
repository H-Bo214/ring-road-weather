import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import PropTypes from 'prop-types'
import '../DetailsPage/DetailsPage.css'
import '../WeatherCard/WeatherCard'
import WeatherCard from '../WeatherCard/WeatherCard'
import star from '../assets/star.svg'
import starActive from '../assets/starActive.svg'

class DetailsPage extends Component {
  constructor() {
    super();
    this.state = {
      comments: '',
      allComments: [],
    }

  };

  handleFavorite = (cityName) => {
    let { favCities, addToFavorites } = this.props
    if (!favCities.includes(cityName)) {
      addToFavorites(cityName)
    }
  }

  render() {
  const {
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
    id,
  } = this.props.currentWeather;
    return(
      <section className="DetailsPage">
        <section>
          <div className="current-weather">
            <div className="city-header-parent">
              <h3 className="city-header">{`Today's weather in ${cityName}`}</h3>
              <button 
                className="star"
                type="button"
                onClick={ () => this.handleFavorite(cityName)}
              >
                <img 
                  src={this.props.isFavorite ? starActive: star} 
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
              <p>{windSpeed}mph</p>
            </div>
            <div className="category">
              <h4>High/Low:</h4>
              <p>{todayHigh}°/{todayLow}°</p>
            </div>
            <div className="category">
              <h4>Sunrise/Sunset:</h4>
              <p>{sunrise}/{sunset}</p>
            </div>
          </section>
        </section>
      </section>
    )
  }
};

export default DetailsPage;

