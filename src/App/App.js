import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import '../App/App.css';
import { cleanData } from '../cleanData'
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
    this.cleanData = cleanData
  }

  componentDidMount() {
    
  }

  handleFetch = async (cityName) => {
   try {
    const data = await this.fetchWeather(cityName)
    // console.log('data', data)
    if (data) {
      const filteredData = this.cleanData(data)
      this.setState({currentWeather: filteredData })
      // console.log('filteredData', filteredData)
    }
    console.log('this.state.currentWeather', this.state.currentWeather)
   } catch (error) {
     this.setState({error: 'An error occurred fetching weather.'})
   }

  }

  // cleanData = (data) => {
  //   for(let key in weatherData) {
     
  //   }
  // }

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
