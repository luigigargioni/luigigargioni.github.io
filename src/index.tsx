import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Main } from 'App'
import { BackToTop } from 'components'
import { CustomContextProvider } from 'context'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
  <CustomContextProvider>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
      <BackToTop />
    </>
  </CustomContextProvider>
)
