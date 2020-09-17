import React, { Component } from 'react'
import '../Form/Form.css'
import PropTypes from 'prop-types';
import { southIceland, eastIceland, northIceland, westIceland } from '../cityNames'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
    };
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  generateCities = (region) => {
    return region.map(city => (<option key={city} value={city}>{city}</option>))
  }

  render() {
    return(
      <article className="form-parent">
      <form className="selection-form">
        <h2 className="region">North Iceland</h2>
        <select
          name="city"
          value={this.state.city}
          onChange={this.handleChange}
        >
          <option key={1} value={''}>Pick a city</option>
          {this.generateCities(northIceland)}
        </select>
      </form>

      <form className="selection-form">
        <h2 className="region">South Iceland</h2>
        <select
          name="city"
          value={this.state.city}
          onChange={this.handleChange}
        >
          <option key={2} value={''}>Pick a city</option>
          {this.generateCities(southIceland)}
        </select>
      </form>

      <form className="selection-form">
        <h2 className="region">East Iceland</h2>
        <select
          name="city"
          value={this.state.city}
          onChange={this.handleChange}
        >
          <option key={3} value={''}>Pick a city</option>
          {this.generateCities(eastIceland)}
        </select>
      </form>

      <form className="selection-form">
        <h2 className="region">West Iceland</h2>
        <select
          name="city"
          value={this.state.city}
          onChange={this.handleChange}
        >
          <option key={4} value={''}>Pick a city</option>
          {this.generateCities(westIceland)}
        </select>
      </form>
      </article>
    )
  }
}

export default Form;