import React from 'react'
import { useTranslation } from 'react-i18next'
import { useCustomTheme } from 'style/themeProvider'

import { servicesDataEN, servicesDataIT } from 'data/servicesData'

import './Services.css'
import { SingleService } from './SingleService/SingleService'

export const Services = () => {
  const { t, i18n } = useTranslation()
  const customTheme = useCustomTheme()
  const servicesData = i18n.language === 'en' ? servicesDataEN : servicesDataIT

  return servicesData.length > 0 ? (
    <div
      className="services"
      id="services"
      style={{ backgroundColor: customTheme.secondary }}
    >
      <div className="services-header">
        <h2 style={{ color: customTheme.primary }}>{t('services.title')}</h2>
      </div>
      <div className="services-body">
        <p style={{ color: customTheme.tertiary80 }}>
          {t('services.description')}
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
}
