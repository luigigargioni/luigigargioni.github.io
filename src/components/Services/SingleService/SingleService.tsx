import { ServiceType } from 'data/servicesData'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { useCustomTheme } from 'style/themeProvider'

import './SingleService.css'

export const SingleService = ({ id, title, icon }: ServiceType) => {
  const customTheme = useCustomTheme()

  return (
    <Fade direction="up" triggerOnce>
      <div
        key={id}
        className="single-service"
        style={{ backgroundColor: customTheme.primary80 }}
      >
        <div
          className="service-content"
          style={{ color: customTheme.tertiary }}
        >
          <i className="service-icon">{icon}</i>
          <h3 style={{ color: customTheme.tertiary }}>{title}</h3>
        </div>
      </div>
    </Fade>
  )
}
