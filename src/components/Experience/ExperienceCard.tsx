import React from 'react'
import { Fade } from 'react-awesome-reveal'

import { ExperienceType } from 'data/experienceData'
import { useCustomTheme } from 'style/themeProvider'
import expImgWhite from 'assets/svg/expImgWhite.svg'

import './Experience.css'

export const ExperienceCard = ({
  id,
  company,
  companyUrl,
  jobtitle,
  startYear,
  endYear,
  description,
}: ExperienceType) => {
  const customTheme = useCustomTheme()

  return (
    <Fade direction="up" triggerOnce style={{ width: '100%' }}>
      <div key={id} className="experience-card">
        <div
          className="expcard-img"
          style={{ backgroundColor: customTheme.primary }}
        >
          <img src={expImgWhite} alt="" width="80" height="80" />
        </div>
        <div className="experience-details">
          <h3 style={{ color: customTheme.primary }}>
            {startYear ? `${startYear}-${endYear}` : endYear}
          </h3>
          <h4 style={{ color: customTheme.tertiary }}>{jobtitle}</h4>
          <h5 style={{ color: customTheme.primary }}>
            <a href={companyUrl} target="_blank" rel="noreferrer">
              {company}
            </a>
          </h5>
          <div style={{ color: customTheme.tertiary80, textAlign: 'justify' }}>
            {description}
          </div>
        </div>
      </div>
    </Fade>
  )
}
