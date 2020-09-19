import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../Header/Header'
import { MemoryRouter } from 'react-router-dom'

describe('Header', () => {
  it('should render the Header on page load', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    const img = screen.getByRole('img', {name: 'road sign for Iceland\'s Route 1'})
    const title = screen.getByRole('heading', {name: 'Ring Road Weather!'})
    const favButton = screen.getByRole('button', {name: 'Go to Favorites'})

    expect(img).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(favButton).toBeInTheDocument()
  })





















})