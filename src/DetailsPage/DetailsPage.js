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
    this.props.addToFavorites(cityName)
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
    console.log('cityID', id)
    return(
      <section className="DetailsPage">
        <button 
          className="star"
          type="button"
          onClick={ () => this.handleFavorite(cityName)}
        >
          <img src={this.props.isFavorite ? starActive: star} alt="star icon outlined"/>
        </button>
        <WeatherCard 
          cloudCover={cloudCover}
          time={time}
          feelsLike={feelsLike}
          humidity={humidity}
          temperature={temperature}
          todayHigh={todayHigh}
          todayLow={todayLow}
          cityName={cityName}
          sunrise={sunrise}
          sunset={sunset}
          description={description}
          windSpeed={windSpeed}
          id={id}
        />
      </section>
    )
  }
};

export default DetailsPage;

