import React from 'react'
import { useTranslation } from 'react-i18next'

import './Experience.css'

import { useCustomTheme } from 'style/themeProvider'
import { experienceDataEN, experienceDataIT } from 'data/experienceData'
import { ExperienceCard } from './ExperienceCard'

export const Experience = () => {
  const { t, i18n } = useTranslation()
  const customTheme = useCustomTheme()
  const experienceData =
    i18n.language === 'en' ? experienceDataEN : experienceDataIT

  return (
    <div
      className="experience"
      id="experience"
      style={{ backgroundColor: customTheme.secondary }}
    >
      <div className="experience-body">
        <div className="experience-image">
          <img src={customTheme.expimg} alt="" width="400" height="400" />
        </div>
        <div className="experience-description">
          <h2 style={{ color: customTheme.primary }}>
            {t('experience.title')}
          </h2>
          {experienceData
            .sort((a, b) => b.id - a.id)
            .map((exp) => (
              <ExperienceCard
                key={exp.id}
                id={exp.id}
                jobtitle={exp.jobtitle}
                company={exp.company}
                companyUrl={exp.companyUrl}
                startYear={exp.startYear}
                endYear={exp.endYear}
                description={exp.description}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
