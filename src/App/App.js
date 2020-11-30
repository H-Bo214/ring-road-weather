import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { cleanData } from '../cleanData'
import { fetchWeather } from '../apiCalls'
import Header from '../Header/Header'
import DetailsPage from '../DetailsPage/DetailsPage'
import FavoritesPage from '../FavoritesPage/FavoritesPage'
import Form from '../Form/Form'
import '../App/App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      currentWeather: {},
      favCities: [],
      error: '',
    }

    this.fetchWeather = fetchWeather
    this.cleanData = cleanData

  }

  addToFavorites = (newCity) => {
    this.setState({favCities:[...this.state.favCities, newCity]})
  }

  removeFavorite = (newCity) => {
    const cityToRemove =  this.state.favCities.find(city => city === newCity)
    this.setState({favCities: this.state.favCities.filter(city => city !== cityToRemove)})
  }

  handleFetch = async (cityName) => {
   try {
    const data = await this.fetchWeather(cityName)
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
           exact path="/details-page/:cityName"
          render={ () => {
            return (
              <DetailsPage 
                currentWeather={this.state.currentWeather} 
                favCities={this.state.favCities} 
                addToFavorites={this.addToFavorites}
                isFavorite={this.state.favCities.includes(this.state.currentWeather.cityName)}
                removeFavorite={this.removeFavorite}
              />
            )}}
        />
        <Route 
          exact path="/favorites"
          render={ () => {
            return(
              <FavoritesPage 
                favCities={this.state.favCities}
                addToFavorites={this.addToFavorites}
                isFavorite={this.state.favCities.includes(this.state.currentWeather.cityName)}
                removeFavorite={this.removeFavorite}
              />
            )
          }}
        />
      </main>
      </Router>
    )
  }

};

export default App;
