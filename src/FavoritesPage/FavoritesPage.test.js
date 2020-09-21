import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import DetailsPage from '../DetailsPage/DetailsPage'
import { MemoryRouter } from 'react-router-dom'

describe('FavoritesPage', () => {
  let currentWeather, currentWeather2, addToFavorites, removeFavorite, isFavorite, favCities
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

  currentWeather2 = {
    cloudCover: 99,
    time: 1600343537,
    feelsLike: 56,
    humidity: 50,
    temperature: 58,
    todayHigh: 80,
    todayLow: 40,
    cityName: 'Arborg',
    sunrise: 1600498990,
    sunset: 1600544370,
    description: 'Clouds',
    windSpeed: 20,
    id:3413830,
  }

  addToFavorites = jest.fn()
  removeFavorite = jest.fn()
  isFavorite = false  
  favCities = []      
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

  it('should have a weather description and time',  () => {
    render(
      <MemoryRouter>
        <DetailsPage
        currentWeather={currentWeather2}
        favCities={favCities}
        addToFavorites={addToFavorites}
        isFavorite={isFavorite}
        removeFavorite={removeFavorite} 
        />
      </MemoryRouter>
    )
    const description = screen.getByText('Overcast Clouds')
    const description2 = screen.getByText('Clouds')
    const time = screen.getByText('1600548797')
    const time2 = screen.getByText('1600343537')
    expect(description).toBeInTheDocument()
    expect(description2).toBeInTheDocument()
    expect(time).toBeInTheDocument()
    expect(time2).toBeInTheDocument()
  })

  it('should have a weather temperature',  () => {
    render(
      <MemoryRouter>
        <DetailsPage
        currentWeather={currentWeather2}
        favCities={favCities}
        addToFavorites={addToFavorites}
        isFavorite={isFavorite}
        removeFavorite={removeFavorite} 
        />
      </MemoryRouter>
    )
    const title = screen.getAllByText('Temperature:')
    const title2 = screen.getAllByText('Temperature:')
    const temperature = screen.getByText('60°')
    const temperature2 = screen.getByText('58°')
    expect(title[0]).toBeInTheDocument()
    expect(title2[1]).toBeInTheDocument()
    expect(temperature).toBeInTheDocument()
    expect(temperature2).toBeInTheDocument()
  })

  it('should have a feels like temperature',  () => {
    render(
      <MemoryRouter>
        <DetailsPage
        currentWeather={currentWeather2}
        favCities={favCities}
        addToFavorites={addToFavorites}
        isFavorite={isFavorite}
        removeFavorite={removeFavorite} 
        />
      </MemoryRouter>
    )
    const title = screen.getAllByText('Feels like:')
    const title2 = screen.getAllByText('Feels like:')
    const feelsLike = screen.getByText('55°')
    const feelsLike2 = screen.getByText('56°')
    expect(title[0]).toBeInTheDocument()
    expect(title2[1]).toBeInTheDocument()
    expect(feelsLike).toBeInTheDocument()
    expect(feelsLike2).toBeInTheDocument()
  })

  it('should have a percentage of cloud cover',  () => {
    render(
      <MemoryRouter>
        <DetailsPage
        currentWeather={currentWeather2}
        favCities={favCities}
        addToFavorites={addToFavorites}
        isFavorite={isFavorite}
        removeFavorite={removeFavorite} 
        />
      </MemoryRouter>
    )
    const title = screen.getAllByText('Cloud cover:')
    const title2 = screen.getAllByText('Cloud cover:')
    const cloudCover = screen.getByText('90%')
    const cloudCover2 = screen.getByText('99%')
    expect(title[0]).toBeInTheDocument()
    expect(title2[1]).toBeInTheDocument()
    expect(cloudCover).toBeInTheDocument()
    expect(cloudCover2).toBeInTheDocument()
  })

  it('should have a percentage of humidity',  () => {
    render(
      <MemoryRouter>
        <DetailsPage
        currentWeather={currentWeather2}
        favCities={favCities}
        addToFavorites={addToFavorites}
        isFavorite={isFavorite}
        removeFavorite={removeFavorite} 
        />
      </MemoryRouter>
    )
    const title = screen.getAllByText('Humidity:')
    const title2 = screen.getAllByText('Humidity:')
    const humidity = screen.getByText('40%')
    const humidity2 = screen.getByText('50%')
    expect(title[0]).toBeInTheDocument()
    expect(title2[1]).toBeInTheDocument()
    expect(humidity).toBeInTheDocument()
    expect(humidity2).toBeInTheDocument()

  })

  it('should have a wind speed',  () => {
    render(
      <MemoryRouter>
        <DetailsPage
        currentWeather={currentWeather2}
        favCities={favCities}
        addToFavorites={addToFavorites}
        isFavorite={isFavorite}
        removeFavorite={removeFavorite} 
        />
      </MemoryRouter>
    )
    const title = screen.getAllByText('Wind:')
    const title2 = screen.getAllByText('Wind:')
    const wind = screen.getByText('25 mph')
    const wind2 = screen.getByText('20 mph')
    expect(title[0]).toBeInTheDocument()
    expect(title2[1]).toBeInTheDocument()
    expect(wind).toBeInTheDocument()
    expect(wind2).toBeInTheDocument()
  })

  it('should have a high and a low temperature',  () => {
    render(
      <MemoryRouter>
        <DetailsPage
        currentWeather={currentWeather2}
        favCities={favCities}
        addToFavorites={addToFavorites}
        isFavorite={isFavorite}
        removeFavorite={removeFavorite} 
        />
      </MemoryRouter>
    )
    const title = screen.getAllByText('High/Low:')
    const title2 = screen.getAllByText('High/Low:')
    const highLow = screen.getByText('70° / 50°')
    const highLow2 = screen.getByText('80° / 40°')
    expect(title[0]).toBeInTheDocument()
    expect(title2[1]).toBeInTheDocument()
    expect(highLow).toBeInTheDocument()
    expect(highLow2).toBeInTheDocument()
  })

  it('should have a sunrise and sunset time',  () => {
    render(
      <MemoryRouter>
        <DetailsPage
        currentWeather={currentWeather2}
        favCities={favCities}
        addToFavorites={addToFavorites}
        isFavorite={isFavorite}
        removeFavorite={removeFavorite} 
        />
      </MemoryRouter>
    )
    const title = screen.getAllByText('Sunrise/Sunset:')
    const title2 = screen.getAllByText('Sunrise/Sunset:')
    const sunriseSunset = screen.getByText('1600498986 / 1600544371')
    const sunriseSunset2 = screen.getByText('1600498990 / 1600544370')
    expect(title[0]).toBeInTheDocument()
    expect(title2[1]).toBeInTheDocument()
    expect(sunriseSunset).toBeInTheDocument()
    expect(sunriseSunset2).toBeInTheDocument()
  })

})