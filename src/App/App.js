import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
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
      favCities: [],
      error: '',
    };
    this.fetchWeather = fetchWeather
    this.cleanData = cleanData
  }

  componentDidMount() {
    
  }

  addToFavorites = (newCity) => {
    this.setState({favCities:[...this.state.favCities, newCity]})
  }

  handleFetch = async (cityName) => {
   try {
    const data = await this.fetchWeather(cityName)
    console.log('data', data)
    if (data) {
      const filteredData = this.cleanData(data)
      this.setState({currentWeather: filteredData })
    }
   } catch (error) {
     this.setState({error: 'An error occurred fetching weather.'})
   }
  }

  render() {
    return(
      <Router>
      <main className="App">
        <Header />

        <Route
          exact path ="/"
          render={ () => {
            return(
              <Form handleFetch={this.handleFetch} />
            )
          }}
        />
        <Route
          exact path="/details-page"
          render={ () => {
            return (
              <DetailsPage 
                currentWeather={this.state.currentWeather} 
                favCities={this.state.favCities} 
                addToFavorites={this.addToFavorites}
                isFavorite={this.state.favCities.includes(this.state.currentWeather.cityName)}
              />
            )}}
        />
      </main>
      </Router>
    )
  }

};

export default App;
