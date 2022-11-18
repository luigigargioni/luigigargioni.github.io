import React, { useContext } from 'react'
import { customTheme } from 'style/theme'

import {
  servicesDataEN,
  servicesDataIT,
  servicesDescriptionEN,
  servicesDescriptionIT,
  servicesTitleEN,
  servicesTitleIT,
} from 'data/servicesData'

import './Services.css'
import { CustomContext } from 'context'
import { LanguageEnum } from 'utils/language'
import { SingleService } from './SingleService/SingleService'

export const Services = () => {
  const { lang } = useContext(CustomContext)
  const servicesTitle =
    lang === LanguageEnum.EN ? servicesTitleEN : servicesTitleIT
  const servicesDescription =
    lang === LanguageEnum.EN ? servicesDescriptionEN : servicesDescriptionIT
  const servicesData =
    lang === LanguageEnum.EN ? servicesDataEN : servicesDataIT

  return servicesData.length > 0 ? (
    <div
      className="services"
      id="services"
      style={{ backgroundColor: customTheme.secondary }}
    >
      <div className="services-header">
        <h1 style={{ color: customTheme.primary }}>{servicesTitle}</h1>
      </div>
      <div className="services-body">
        <p style={{ color: customTheme.tertiary80 }}>{servicesDescription}</p>
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
}
