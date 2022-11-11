import { ServiceType } from 'data/servicesData'
import React, { useContext } from 'react'
import { Fade } from 'react-awesome-reveal'

import { ThemeContext } from '../../../contexts/ThemeContext'

import './SingleService.css'

export const SingleService = ({ id, title, icon }: ServiceType) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Fade direction="up" triggerOnce>
      <div
        key={id}
        className="single-service"
        style={{ backgroundColor: theme.primary80 }}
      >
        <div className="service-content" style={{ color: theme.tertiary }}>
          <i className="service-icon">{icon}</i>
          <h4 style={{ color: theme.tertiary }}>{title}</h4>
        </div>
      </div>
    </Fade>
  )
}
