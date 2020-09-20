import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Form from '../Form/Form'
import { MemoryRouter } from 'react-router-dom'

describe('Form', () => {
  let handleFetch
  beforeEach( () => {


    handleFetch = jest.fn()
    render(
    <MemoryRouter>
      <Form 
      handleFetch={handleFetch}
      />
    </MemoryRouter>
    ) 
  })

  it('should render a heading', () => {
    const h2= screen.getByText('Your guide to weather along Iceland\'s ring road!')
    expect(h2).toBeInTheDocument()
  })

  it('should render a region title', () => {
    const regionTitle= screen.getByText('North Iceland')
    expect(regionTitle).toBeInTheDocument()
  })

  it('should have a selected option value for a region', () => {
    const region = screen.getByRole('option', {name: 'North Iceland'})
    expect(region).toBeInTheDocument()
  })

  it('should have a selected option value for a city', () => {
    const pickCity= screen.getByText('Pick a city')
    expect(pickCity).toBeInTheDocument()
  })

  it('should be able to select a region', () => {
    const selectRegion = screen.getByRole('option', {name: 'Pick a region'})
    expect(selectRegion).toBeInTheDocument()

    fireEvent.change(selectRegion, {target:{value:'South Iceland'}})

    const southIceland = screen.getByRole('option', {name: 'South Iceland'})
    expect(southIceland).toBeInTheDocument()
    expect(selectRegion.value).toBe('South Iceland')
  })

  it('should have a get weather button', () => {
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('should fire a fetch request on button click', () => {
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()

    fireEvent.click(button)
    expect(handleFetch).toHaveBeenCalledTimes(1)
  })












})