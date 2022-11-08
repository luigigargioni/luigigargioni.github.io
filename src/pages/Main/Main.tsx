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
  Projects,
  Services,
  Achievement,
} from '../../components'

export const Main = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Achievement />
      <Services />
      <Contacts />
      <Footer />
    </>
  )
}
