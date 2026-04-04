import React, { useContext } from 'react'

import './Education.css'
import { useCustomTheme } from 'style/themeProvider'
import {
  educationDataEN,
  educationDataIT,
  educationTitleEN,
  educationTitleIT,
} from 'data/educationData'
import { CustomContext } from 'context'
import { LanguageEnum } from 'utils/language'
import { EducationCard } from './EducationCard'

export const Education = () => {
  const { lang } = useContext(CustomContext)
  const customTheme = useCustomTheme()
  const educationData =
    lang === LanguageEnum.EN ? educationDataEN : educationDataIT
  const educationTitle =
    lang === LanguageEnum.EN ? educationTitleEN : educationTitleIT

  return (
    <div
      className="education"
      id="education"
      style={{ backgroundColor: customTheme.secondary }}
    >
      <div className="education-body">
        <div className="education-description">
          <h1 style={{ color: customTheme.primary }}>{educationTitle}</h1>
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
          <img src={customTheme.eduimg} alt="" />
        </div>
      </div>
    </div>
  )
}
