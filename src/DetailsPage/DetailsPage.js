import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types'
import '../DetailsPage/DetailsPage.css'
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
    const {cloudCover,
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
    windGust,
    windDirection
  } = this.props.currentWeather;

    return(
      <section className="DetailsPage">
        <h2>{`Today's weather in ${cityName}.`}</h2>
        <div>
          <h4>Current Weather:</h4>
          <p>{description}</p>
          <p>{time}</p>
        </div>
        <section className="weather-details-parent"> 
          <section className="weather-details">
            {/* <div className="category">
              <h4>Current Weather:</h4>
              <p>{time}</p>
            </div> */}
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
          </section>
          <section className="weather-details">
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