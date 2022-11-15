import React from 'react'
import { customTheme } from 'style/theme'

import { servicesData } from 'data/servicesData'

import './Services.css'
import { SingleService } from './SingleService/SingleService'

export const Services = () =>
  servicesData.length > 0 ? (
    <div
      className="services"
      id="services"
      style={{ backgroundColor: customTheme.secondary }}
    >
      <div className="services-header">
        <h1 style={{ color: customTheme.primary }}>Services</h1>
      </div>
      <div className="services-body">
        <p style={{ color: customTheme.tertiary80 }}>
          These are some of the services I offer. Reach out to me if I can help
          you with any!
        </p>
        <div className="services-bodycontainer">
          {servicesData.map((services) => (
            <SingleService
              key={services.id}
              id={services.id}
              title={services.title}
              icon={services.icon}
            />
          ))}
        </div>
      </div>
    </div>
  ) : null
