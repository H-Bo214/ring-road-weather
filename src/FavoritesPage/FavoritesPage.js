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
        console.log('data', data)
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
     console.log('city', city)
      return(
        <DetailsPage 
        key={Date.now()}
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
    console.log('favCitiesData', this.state.favCitiesData)
    return (
      <div style={{width: '100%', overflow:'scroll'}}>
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