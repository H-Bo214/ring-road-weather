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

  // generateRegions = (region) => {
  //   return region.map(city => (<option className="city-names" key={city} value={city}>{city}</option>))
  // }

  generateRegions = (region) => {
    console.log('allCities', region)
    console.log('allCities.eastIceland', allCities[0].eastIceland)
    // return region.map(city => (<option className="city-names" key={city} value={city}>{city}</option>))
  }

  submitCityRequest = (event) => {
    event.preventDefault()
      const cityName = {
        name: this.state.city
      }
    this.props.handleFetch(cityName.name)
    this.setState({redirectDetailPage: true})
  }

  render() {
    return(
      <section>
        <h2 className="subtitle">Your guide to weather along Iceland's ring road!</h2>
        <article className="form-parent">
          <form className="selection-form">
            <h2 className="region">North Iceland</h2>
            <select
              name="region"
              value={this.state.region}
              onChange={this.handleChange}
            >
              <option value={''}>Pick a region</option>
              {this.generateRegions(allCities)}
            </select>


            <select
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            >
              <option key={1} value={''}>Pick a city</option>
              {/* {this.state.region && this.generateRegions(northIceland)} */}
            </select>
            <button 
              className="get-weather-button" 
              type="button"
              onClick={ (event) => this.submitCityRequest(event) }
            >Get weather
            </button>
              {this.state.redirectDetailPage && <Redirect to="/details-page" />}
          </form>














          {/* <form className="selection-form">
            <h2 className="region">South Iceland</h2>
            <select
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            >
              <option key={2} value={''}>Pick a city</option>
              {this.generateRegions(southIceland)}
            </select>
            <button className="get-weather-button" type="button">Get weather</button>
          </form>

          <form className="selection-form">
            <h2 className="region">East Iceland</h2>
            <select
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            >
              <option key={3} value={''}>Pick a city</option>
              {this.generateRegions(eastIceland)}
            </select>
            <button className="get-weather-button" type="button">Get weather</button>
          </form>

          <form className="selection-form">
            <h2 className="region">West Iceland</h2>
            <select
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            >
              <option key={4} value={''}>Pick a city</option>
              {this.generateRegions(westIceland)}
            </select>
            <button className="get-weather-button" type="button">Get weather</button>
          </form> */}
        </article>
      </section>
    )
  }
}

export default Form;