import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter as Router } from 'react-router-dom'
import 'intersection-observer'

import { App } from './App'
import { contactsDataEmail, contactsDataPhone } from './data/contactsData'

describe('App tests', () => {
  it('renders the page', () => {
    render(
      <Router>
        <App />
      </Router>
    )
    expect(screen.getByText(contactsDataEmail)).toBeInTheDocument()
    expect(screen.getByText(contactsDataPhone)).toBeInTheDocument()
  })
})
