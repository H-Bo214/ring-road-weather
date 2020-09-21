import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
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
  isFavorite = false   //Ask Quinn how or why I would test these?
  favCities = []       //Ask Quinn how or why I would test these?
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
  })

  it('should render weather details', () => {
    const h3 = screen.getByText('Today\'s weather in', {exact: false})
    const button = screen.getByRole('button')
    expect(h3).toBeInTheDocument()
    expect(button).toBeInTheDocument()
      
  })

  it('should render a favorite button',  () => {
    const star = screen.getByRole('button')
    expect(star).toBeInTheDocument()
  })

  it('should add to favorites when favorited',  () => {
    const star = screen.getByRole('button')
    expect(star).toBeInTheDocument()

    const starImage = screen.getByRole('img')
    expect(starImage).toBeInTheDocument()

    fireEvent.click(star)
    expect(addToFavorites).toHaveBeenCalledTimes(1)
  })

  it('should have a weather description and time',  () => {
    const description = screen.getByText('Overcast Clouds')
    const time = screen.getByText('1600548797')
    expect(description).toBeInTheDocument()
    expect(time).toBeInTheDocument()
  })

  it('should have a weather temperature',  () => {
    const title = screen.getByText('Temperature:')
    const temperature = screen.getByText('60°')
    expect(title).toBeInTheDocument()
    expect(temperature).toBeInTheDocument()
  })

  it('should have a feels like temperature',  () => {
    const title = screen.getByText('Feels like:')
    const feelsLike = screen.getByText('55°')
    expect(title).toBeInTheDocument()
    expect(feelsLike).toBeInTheDocument()
  })

  it('should have a percentage of cloud cover',  () => {
    const title = screen.getByText('Cloud cover:')
    const cloudCover = screen.getByText('90%')
    expect(title).toBeInTheDocument()
    expect(cloudCover).toBeInTheDocument()
  })

  it('should have a percentage of humidity',  () => {
    const title = screen.getByText('Humidity:')
    const humidity = screen.getByText('40%')
    expect(title).toBeInTheDocument()
    expect(humidity).toBeInTheDocument()
  })

  it('should have a wind speed',  () => {
    const title = screen.getByText('Wind:')
    const wind = screen.getByText('25 mph')
    expect(title).toBeInTheDocument()
    expect(wind).toBeInTheDocument()
  })

  it('should have a high and a low temperature',  () => {
    const title = screen.getByText('High/Low:')
    const highLow = screen.getByText('70° / 50°')
    expect(title).toBeInTheDocument()
    expect(highLow).toBeInTheDocument()
  })

  it('should have a sunrise and sunset time',  () => {
    const title = screen.getByText('Sunrise/Sunset:')
    const sunriseSunset = screen.getByText('1600498986 / 1600544371')
    expect(title).toBeInTheDocument()
    expect(sunriseSunset).toBeInTheDocument()
  })

})