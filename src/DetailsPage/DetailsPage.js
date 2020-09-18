import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types'
import '../DetailsPage/DetailsPage.css'
import '../WeatherCard/WeatherCard'
import WeatherCard from '../WeatherCard/WeatherCard';

class DetailsPage extends Component {
  constructor() {
    super();
    this.state = {
      comments: '',
      allComments: [],
      isFavorite: false,
      
    }

  };

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
    } = this.props.currentWeather;

    return(
    <section className="DetailsPage">
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
      />
    </section>
      
    )
  }
};

export default DetailsPage;