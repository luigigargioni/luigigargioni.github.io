import { ServiceType } from 'data/servicesData'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { customTheme } from 'style/theme'

import './SingleService.css'

export const SingleService = ({ id, title, icon }: ServiceType) => (
  <Fade direction="up" triggerOnce>
    <div
      key={id}
      className="single-service"
      style={{ backgroundColor: customTheme.primary80 }}
    >
      <div className="service-content" style={{ color: customTheme.tertiary }}>
        <i className="service-icon">{icon}</i>
        <h4 style={{ color: customTheme.tertiary }}>{title}</h4>
      </div>
    </div>
  </Fade>
)
