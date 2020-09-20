import React, { Component } from 'react'
import '../Form/Form.css'
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import { regions, allCities } from '../cityNames'

class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      region: '',
      city: '',
      redirectDetailPage: false,
    };
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  generateData = (region) => {
    return region.map(city => (<option className="city-names" key={city} value={city}>{city}</option>))
  }

  locateCities = (allCities) => {
    let cityKeys = Object.keys(allCities)
    let foundCity = cityKeys.find(key => this.state.region === key)
    if (this.state.region === foundCity) {
      return this.generateData(allCities[foundCity])
    }
  }

  submitCityRequest = (event) => {
    event.preventDefault()
    const cityName = {name: this.state.city}
    this.props.handleFetch(cityName.name)
    this.setState({redirectDetailPage: true})
  }

  render() {
    return(
      <section>
        <h2 className="subtitle">Your guide to weather along Iceland's ring road!</h2>
        <article className="form-parent">
          <form className="selection-form">
            <h2 className="region">{this.state.region}</h2>
            <select
              name="region"
              value={this.state.region}
              onChange={this.handleChange}
            >
              <option value={''}>Pick a region</option>
              {this.generateData(regions)}
            </select>
            <select
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            >
              <option key={1} value={''}>Pick a city</option>
              {this.state.region && this.locateCities(allCities)}
            </select>
            <button 
              className="get-weather-button" 
              type="button"
              onClick={ (event) => this.submitCityRequest(event) }
            >Get weather
            </button>
              {this.state.redirectDetailPage && <Redirect to="/details-page" />}
          </form>
        </article>
      </section>
    )
  }
}

Form.propTypes = {
  handleFetch: PropTypes.func
}
export default Form;