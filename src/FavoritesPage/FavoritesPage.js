import React, { Component } from 'react'
import { cleanData } from '../cleanData'
import { fetchWeather } from '../apiCalls'
import DetailsPage from '../DetailsPage/DetailsPage'
import PropTypes from 'prop-types'

class FavoritesPage extends Component {
  constructor() {
    super()
    this.state = {
      favCitiesData: [],
      error:''
    }
  }

  async componentDidMount() {
    for (let cityName of this.props.favCities) {
      try {
        const data = await fetchWeather(cityName)
        if (data) {
          const filteredData = cleanData(data)
          this.setState({favCitiesData: [...this.state.favCitiesData, filteredData]})
        }
       } catch (error) {
         this.setState({error: 'An error occurred fetching favorites.'})
       }
    }
  }

  displayFavorites() {
   return this.state.favCitiesData.map(city => {
      return(
        <DetailsPage 
        key={city.id}
        currentWeather={city} 
        favCities={this.props.favCities} 
        addToFavorites={this.props.addToFavorites}
        isFavorite={this.props.isFavorite}
        removeFavorite={this.props.removeFavorite}
        />
      )
    })
  }

  render() {
    return (
      <div>
        {this.displayFavorites()}
      </div>
    )
  }
  
}

FavoritesPage.propTypes = {
  favCities: PropTypes.array,
  addToFavorites: PropTypes.func,
  isFavorite: PropTypes.bool,
  removeFavorite: PropTypes.func,
}

export default FavoritesPage