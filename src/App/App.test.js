import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import App from '../App/App';
import { fetchWeather } from '../apiCalls'
jest.mock('../apiCalls')

describe('App', () => {
  // beforeEach( () => {
  // })

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

  it('should be able to get the current weather for a specific city', async () => {
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

    const region = await waitFor(() => screen.getByRole('option', {name: 'South Iceland'}))
    const cityName = await waitFor(() => screen.getAllByText('Reykjavik'))

    expect(region).toBeInTheDocument()
    expect(cityName).toBeInTheDocument()
    


  })




  })
