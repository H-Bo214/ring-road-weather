import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import DetailsPage from '../DetailsPage/DetailsPage'
import { MemoryRouter } from 'react-router-dom'

describe('DetailsPage', () => {
  let currentWeather, addToFavorites, removeFavorite, isFavorite, favCities
  beforeEach( () => {
     currentWeather = {
      cloudCover: 90,
      time: 1600548797,
      feelsLike: 55,
      humidity: 40,
      temperature: 60,
      todayHigh: 70,
      todayLow: 50,
      cityName: 'Reykjavik',
      sunrise: 1600498986,
      sunset: 1600544371,
      description: 'Overcast Clouds',
      windSpeed: 25,
      id:3413829,
    }

     addToFavorites = jest.fn()
     removeFavorite = jest.fn()
     isFavorite = false
     favCities = []
  })

  it('should render weather details', () => {
   
    render(
      <MemoryRouter>
        <DetailsPage
         currentWeather={currentWeather}
         favCities={favCities}
         addToFavorites={addToFavorites}
         isFavorite={isFavorite}
         removeFavorite={removeFavorite} 
        />
      </MemoryRouter>
      )

      const h3 = screen.getByText('Today\'s weather in', {exact: false})
      const button = screen.getByRole('button')
      expect(h3).toBeInTheDocument()
      expect(button).toBeInTheDocument()
      
  })

  it('should have a weather description and time',  () => {
    render(
      <MemoryRouter>
        <DetailsPage
         currentWeather={currentWeather}
         favCities={favCities}
         addToFavorites={addToFavorites}
         isFavorite={isFavorite}
         removeFavorite={removeFavorite} 
        />
      </MemoryRouter>
      )

    const description = screen.getByText('Overcast Clouds')
    expect(description).toBeInTheDocument()
  })

  it('should have a weather description and time',  () => {
    render(
      <MemoryRouter>
        <DetailsPage
         currentWeather={currentWeather}
         favCities={favCities}
         addToFavorites={addToFavorites}
         isFavorite={isFavorite}
         removeFavorite={removeFavorite} 
        />
      </MemoryRouter>
      )

    const description = screen.getByText('Overcast Clouds')
    const time = screen.getByText('1600548797')
    expect(description).toBeInTheDocument()
    expect(time).toBeInTheDocument()
  })

  // Start testing with lines 56-57. 

  // it('should have a weather description and time',  () => {
  //   render(
  //     <MemoryRouter>
  //       <DetailsPage
  //        currentWeather={currentWeather}
  //        favCities={favCities}
  //        addToFavorites={addToFavorites}
  //        isFavorite={isFavorite}
  //        removeFavorite={removeFavorite} 
  //       />
  //     </MemoryRouter>
  //     )

  //   const description = screen.getByText('Overcast Clouds')
  //   const time = screen.getByText('1600548797')
  //   expect(description).toBeInTheDocument()
  //   expect(time).toBeInTheDocument()
  // })







})