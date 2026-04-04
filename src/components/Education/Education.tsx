import React from 'react'
import { useTranslation } from 'react-i18next'

import './Education.css'
import { useCustomTheme } from 'style/themeProvider'
import { educationDataEN, educationDataIT } from 'data/educationData'
import { EducationCard } from './EducationCard'

export const Education = () => {
  const { t, i18n } = useTranslation()
  const customTheme = useCustomTheme()
  const educationData =
    i18n.language === 'en' ? educationDataEN : educationDataIT

  return (
    <div
      className="education"
      id="education"
      style={{ backgroundColor: customTheme.secondary }}
    >
      <div className="education-body">
        <div className="education-description">
          <h2 style={{ color: customTheme.primary }}>{t('education.title')}</h2>
          {educationData
            .sort((a, b) => b.id - a.id)
            .map((edu) => (
              <EducationCard
                key={edu.id}
                id={edu.id}
                institution={edu.institution}
                institutionUrl={edu.institutionUrl}
                course={edu.course}
                courseUrl={edu.courseUrl}
                startYear={edu.startYear}
                endYear={edu.endYear}
                description={edu.description}
              />
            ))}
        </div>
        <div className="education-image">
          <img src={customTheme.eduimg} alt="" width="400" height="400" />
        </div>
      </div>
    </div>
  )
}
