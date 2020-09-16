import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route} from "react-router-dom";
import '../App/App.css';

// Add api import once method set up
import Header from '../Header/Header'
import DetailsPage from '../DetailsPage/DetailsPage'
import FavoritesPage from '../FavoritesPage/FavoritesPage'
import Form from '../Form/Form'
import WeatherCard from '../WeatherCard/WeatherCard'

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentWeather: {},
      fiveDayForecast: [],
      favorites: []
    };

  }

  componentDidMount() {

  }

  render() {
    return(
      <main className="App">
        <Header />
        {/* <Form  /> */}
      </main>
    )
  }

};

export default App;
