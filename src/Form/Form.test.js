import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Form from '../Form/Form'
import { MemoryRouter } from 'react-router-dom'

describe('Form', () => {
  let city, handleFetch
  beforeEach( () => {

    city = 'Akureyri'
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

  it('should have a selected option value', () => {
    const region = screen.getByRole('option', {name: 'North Iceland'})
    expect(region).toBeInTheDocument()
  })

















})