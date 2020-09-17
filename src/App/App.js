import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import '../App/App.css';

import { fetchWeather } from '../apiCalls'
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
      favorites: [],
      error: '',
    };
    this.fetchWeather = fetchWeather
  }

  componentDidMount() {

  }

  handleFetch = async (cityName) => {
   try {
    const data = await this.fetchWeather(cityName)
    console.log('data', data)
   } catch (error) {
     this.setState({error: 'An error occurred fetching weather.'})
   }

  }

  render() {
    return(
      <Router>
      <main className="App">
        <Header />
        <Form
          handleFetch={this.handleFetch}
        
        
        />
        {/* <DetailsPage /> */}
      </main>
      </Router>
    )
  }

};

export default App;
