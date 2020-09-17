import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types'

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
    return(
      <section>
        <h1>Today's weather in CityName is Weather</h1>
      </section>
    )
  }
};

export default DetailsPage;