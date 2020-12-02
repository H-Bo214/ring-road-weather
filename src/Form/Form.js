import React, { Component } from 'react'
import '../Form/Form.css'
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import { regions, allCities } from '../cityNames'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      region: '',
      city: '',
      redirectDetailPage: false,
      error: ''
    };
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  generateData = (listItems) => {
    return listItems.map(item => (<option className="city-names" key={item} value={item}>{item}</option>))
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
    if (!this.state.city) {
      this.setState({error: '⚠️  Please select a region and city'})
    } else {
      const cityName = {name: this.state.city}
      this.props.handleFetch(cityName.name)
      this.setState({error: ''})
      this.setState({redirectDetailPage: true})
    }
  }


  render() {
    let borderStyle = {
      border: '4px solid #ffcc00'
    }
    let borderStyle2 = {
      border: '4px solid #ffcc00'
    }

    if(this.state.region) {
      borderStyle = {
        border: '4px solid #fff'
      }
    } 
    
    if(this.state.city) {
        borderStyle2 = {
          border: '4px solid #fff'
      }
    } 
    
    return(
      <section>
        <div className="guide-to">
          <h2 className="subtitle">Your guide to weather along Iceland's ring road</h2>
        </div>
        <article className="form-parent">
          <form className="selection-form">
              {this.state.region ? 
              <h3 className="region-select" >
                {this.state.region}
              </h3>:
              <h3 className="region-select">Select a region</h3>}
            <label className="region-label" htmlFor="region">Region:</label>
            <select
              id="region"
              name="region"
              style={borderStyle}
              value={this.state.region}
              onChange={this.handleChange}
            >
              <option value={''}>Select a region</option>
              {this.generateData(regions)}
            </select>
            <label className="city-label" htmlFor="city">City:</label>
            <select
              id="city"
              style={borderStyle2}
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            >
              <option className="choices" key={1} value={''}>Select a city</option>
              {this.state.region && this.locateCities(allCities)}
            </select>
              {!this.state.city && <h4 className="form-error">{this.state.error}</h4>}
            <button 
              className="get-weather-button" 
              type="button"
              onClick={(event) => this.submitCityRequest(event)}
            >Get weather
            </button>
              {this.state.redirectDetailPage && <Redirect to={`/details-page/${this.state.city}` }/>}
          </form>
        </article>
      </section>
    )
  }
}

Form.propTypes = {
  handleFetch: PropTypes.func
}
export default Form