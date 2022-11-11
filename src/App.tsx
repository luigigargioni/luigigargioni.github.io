import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Main } from './pages'
import { BackToTop } from './components'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
      <BackToTop />
    </>
  )
}
