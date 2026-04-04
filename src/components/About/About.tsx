import React from 'react'
import { useTranslation } from 'react-i18next'

import './About.css'
import { useCustomTheme } from 'style/themeProvider'

export const About = () => {
  const { t } = useTranslation()
  const customTheme = useCustomTheme()

  return (
    <div
      className="about"
      id="about"
      style={{ backgroundColor: customTheme.secondary }}
    >
      <div className="line-styling">
        <div
          className="style-circle"
          style={{ backgroundColor: customTheme.primary }}
        />
        <div
          className="style-circle"
          style={{ backgroundColor: customTheme.primary }}
        />
        <div
          className="style-line"
          style={{ backgroundColor: customTheme.primary }}
        />
      </div>
      <div className="about-body">
        <div className="about-description">
          <h2 style={{ color: customTheme.primary }}>{t('about.title')}</h2>
          <p style={{ color: customTheme.tertiary80 }}>
            <span>
              {t('about.description1')}
              <br />
              <br />
            </span>
            <span>
              {t('about.description2')}
              <br />
              <br />
            </span>
            <span>
              {t('about.description3')}
              <br />
              <br />
            </span>
          </p>
        </div>
        <div className="about-img">
          <img src={customTheme.aboutimg1} alt="" width="400" height="400" />
        </div>
      </div>
    </div>
  )
}
