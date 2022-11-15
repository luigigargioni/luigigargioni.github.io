import React from 'react'

import {
  Navbar,
  Footer,
  Landing,
  About,
  Skills,
  Education,
  Experience,
  Contacts,
  Services,
} from 'components'

export const Main = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Services />
      <Contacts />
      <Footer />
    </>
  )
}
