import React from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App'
import ThemeContextProvider from './contexts/ThemeContext'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
)
