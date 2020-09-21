import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import App from '../App/App';
import { fetchWeather } from '../apiCalls'
jest.mock('../apiCalls')

describe('App', () => {
  beforeEach( async () => {
    let currentWeather = {
      base: "stations",
      clouds: {all: 90},
      cod: 200,
      coord: {lon: -18.09, lat: 65.68,},
      dt: 1600548797,
      id: 3413829,
      main:{
        feels_like: 55,
        humidity: 40,
        pressure: 995,
        temp: 60,
        temp_max: 70,
        temp_min: 50,
      },

      name: "Reykjavik",
      sys: {
        country: "IS",
        id: 83,
        sunrise: 1600498986,
        sunset: 1600544371,
        type: 1,
      },

      timezone: 0,
      visibility: 10000,
      weather: [{id: 300, main: "Drizzle", description: "Overcast Clouds", icon: "09n"}],
      wind:{
        deg: 270,
        speed: 25,
      },
    }

   await fetchWeather.mockResolvedValueOnce(currentWeather)

  })

  it('should render a header on page load', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const img = screen.getByRole('img', {name: 'road sign for Iceland\'s Route 1'})
    const title = screen.getByRole('heading', {name: 'Ring Road Weather'})
    const favButton = screen.getByRole('button', {name: 'See favorites'})

    expect(img).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(favButton).toBeInTheDocument()

  })

  it('should render a form on page load',  () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const h2= screen.getByText('Your guide to weather along Iceland\'s ring road')
    expect(h2).toBeInTheDocument()

    const regionTitle= screen.getByText('North Iceland')
    expect(regionTitle).toBeInTheDocument()

    const region = screen.getByRole('option', {name: 'North Iceland'})
    expect(region).toBeInTheDocument()

    const pickCity= screen.getByText('Pick a city')
    expect(pickCity).toBeInTheDocument()
    
    const selectRegion = screen.getByRole('option', {name: 'Pick a region'})
    fireEvent.change(selectRegion, {target:{value:'South Iceland'}})
    
    expect(selectRegion).toBeInTheDocument()

    const southIceland = screen.getByRole('option', {name: 'South Iceland'})
    expect(southIceland).toBeInTheDocument()
    expect(selectRegion.value).toBe('South Iceland')
    
  })

  it('should be able to select a region and city', () => {
    let currentWeather
    fetchWeather.mockResolvedValueOnce(
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
    )
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const selectRegion = screen.getByRole('option', {name: 'Pick a region'})
    expect(selectRegion).toBeInTheDocument()

    fireEvent.change(selectRegion, {target:{value:'South Iceland'}})
    expect(selectRegion.value).toBe('South Iceland')

    const southIceland = screen.getByRole('option', {name: 'South Iceland'})
    expect(southIceland).toBeInTheDocument()

    const selectCity = screen.getByRole('option', {name: 'Pick a city'})
    expect(selectCity).toBeInTheDocument()
    
    fireEvent.change(selectCity, {target:{value:'Reykjavik'}})
    expect(selectCity.value).toBe('Reykjavik')

  })

  it('should be able to see the weather for the selected city', async () => {

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const selectRegion = screen.getByRole('option', {name: 'Pick a region'})
    expect(selectRegion).toBeInTheDocument()

    fireEvent.change(selectRegion, {target:{value:'South Iceland'}})
    expect(selectRegion.value).toBe('South Iceland')

    const southIceland = screen.getByRole('option', {name: 'South Iceland'})
    expect(southIceland).toBeInTheDocument()

    const selectCity = screen.getByRole('option', {name: 'Pick a city'})
    expect(selectCity).toBeInTheDocument()
    
    fireEvent.change(selectCity, {target:{value:'Reykjavik'}})

    const getWeatherBtn = screen.getByRole('button', {name: 'Get weather'})
    expect(getWeatherBtn).toBeInTheDocument()

    await waitFor(() => {expect(screen.queryByText("Get weather")).toBeInTheDocument()});
    fireEvent.click(getWeatherBtn)

    const h3 = await waitFor(()=> screen.getByText('Today\'s weather in Reykjavik'))

    await waitFor(() => {expect(screen.queryByText("Get weather")).not.toBeInTheDocument()});
    const button = screen.getAllByRole('button')

    expect(h3).toBeInTheDocument()
    expect(button).toHaveLength(2)

    const description = screen.getByText('Overcast Clouds')
    expect(description).toBeInTheDocument()

    const timeData = await waitFor (()=> screen.getByText('1600548797'))
    expect(timeData).toBeInTheDocument()

    const temperature = screen.getByText('Temperature:')
    expect(temperature).toBeInTheDocument()
    const currentTemp = await waitFor (()=> screen.getByText('60°'))
    expect(currentTemp).toBeInTheDocument()

    const feelsLike = screen.getByText('Feels like:')
    expect(feelsLike).toBeInTheDocument()
    const feelsLikeTemp = await waitFor (()=> screen.getByText('55°'))
    expect(feelsLikeTemp).toBeInTheDocument()

    const cloudCover = screen.getByText('Cloud cover:')
    expect(cloudCover).toBeInTheDocument()
    const cloudCoverToday = await waitFor (()=> screen.getByText('90%'))
    expect(cloudCoverToday).toBeInTheDocument()

    const humidity = screen.getByText('Humidity:')
    expect(humidity).toBeInTheDocument()
    const humidityToday = await waitFor (()=> screen.getByText('40%'))
    expect(humidityToday).toBeInTheDocument()

    const wind = screen.getByText('Wind:')
    expect(wind).toBeInTheDocument()
    const windToday = await waitFor (()=> screen.getByText('25 mph'))
    expect(windToday).toBeInTheDocument()

    const highLow = screen.getByText('High/Low:')
    expect(highLow).toBeInTheDocument()
    const highLowToday = await waitFor (()=> screen.getByText('70° / 50°'))
    expect(highLowToday).toBeInTheDocument()

    const sunriseSunset = screen.getByText('Sunrise/Sunset:')
    expect(sunriseSunset).toBeInTheDocument()
    const sunriseSunsetToday = await waitFor (()=> screen.getByText('1600498986 / 1600544371'))
    expect(sunriseSunsetToday).toBeInTheDocument()
  })

  it('should add a city to favorites when favoriting',  () => {
    const addToFavs = jest.fn()
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const seeFavorites = screen.getAllByRole('button', {name: 'See favorites'})
    expect(seeFavorites[0]).toBeInTheDocument()
    const favButton = screen.getAllByRole('button', {value: addToFavs})
    expect(favButton[1]).toBeInTheDocument()

    fireEvent.click(favButton[1])
    const myFavs = ['Reykjavik']
    expect(myFavs).toHaveLength(1)
  })

  it('should be able to view favorites when clicking See favorites',  async () => {
    const addToFavs = jest.fn()
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    const seeFavorites = screen.getAllByRole('button', {name: 'See favorites'})
    expect(seeFavorites[0]).toBeInTheDocument()
    let favButton = screen.getAllByRole('button', {value: addToFavs})
    expect(favButton[1]).toBeInTheDocument()

    fireEvent.click(favButton[1])
    const myFavs = ['Reykjavik']
    expect(myFavs).toHaveLength(1)

    fireEvent.click(seeFavorites[0])
    
    const h3 = await waitFor(()=> screen.getByText('Today\'s weather in Reykjavik'))
    favButton = screen.getAllByRole('button', {value: addToFavs})
    expect(favButton[1]).toBeInTheDocument()

    await waitFor(() => {expect(screen.queryByText("Get weather")).not.toBeInTheDocument()});
    const button = screen.getAllByRole('button')

    expect(h3).toBeInTheDocument()
    expect(button).toHaveLength(2)

    const description = screen.getByText('Overcast Clouds')
    expect(description).toBeInTheDocument()

    const timeData = await waitFor (()=> screen.getByText('1600548797'))
    expect(timeData).toBeInTheDocument()

    const temperature = screen.getByText('Temperature:')
    expect(temperature).toBeInTheDocument()
    const currentTemp = await waitFor (()=> screen.getByText('60°'))
    expect(currentTemp).toBeInTheDocument()

    const feelsLike = screen.getByText('Feels like:')
    expect(feelsLike).toBeInTheDocument()
    const feelsLikeTemp = await waitFor (()=> screen.getByText('55°'))
    expect(feelsLikeTemp).toBeInTheDocument()

    const cloudCover = screen.getByText('Cloud cover:')
    expect(cloudCover).toBeInTheDocument()
    const cloudCoverToday = await waitFor (()=> screen.getByText('90%'))
    expect(cloudCoverToday).toBeInTheDocument()

    const humidity = screen.getByText('Humidity:')
    expect(humidity).toBeInTheDocument()
    const humidityToday = await waitFor (()=> screen.getByText('40%'))
    expect(humidityToday).toBeInTheDocument()

    const wind = screen.getByText('Wind:')
    expect(wind).toBeInTheDocument()
    const windToday = await waitFor (()=> screen.getByText('25 mph'))
    expect(windToday).toBeInTheDocument()

    const highLow = screen.getByText('High/Low:')
    expect(highLow).toBeInTheDocument()
    const highLowToday = await waitFor (()=> screen.getByText('70° / 50°'))
    expect(highLowToday).toBeInTheDocument()

    const sunriseSunset = screen.getByText('Sunrise/Sunset:')
    expect(sunriseSunset).toBeInTheDocument()
    const sunriseSunsetToday = await waitFor (()=> screen.getByText('1600498986 / 1600544371'))
    expect(sunriseSunsetToday).toBeInTheDocument()
    
  })























  })
