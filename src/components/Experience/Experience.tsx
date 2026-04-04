import React, { useContext } from 'react'

import './Experience.css'

import { useCustomTheme } from 'style/themeProvider'
import {
  experienceDataEN,
  experienceDataIT,
  experienceTitleEN,
  experienceTitleIT,
} from 'data/experienceData'
import { CustomContext } from 'context'
import { LanguageEnum } from 'utils/language'
import { ExperienceCard } from './ExperienceCard'

export const Experience = () => {
  const { lang } = useContext(CustomContext)
  const customTheme = useCustomTheme()
  const experienceTitle =
    lang === LanguageEnum.EN ? experienceTitleEN : experienceTitleIT
  const experienceData =
    lang === LanguageEnum.EN ? experienceDataEN : experienceDataIT

  return (
    <div
      className="experience"
      id="experience"
      style={{ backgroundColor: customTheme.secondary }}
    >
      <div className="experience-body">
        <div className="experience-image">
          <img src={customTheme.expimg} alt="" />
        </div>
        <div className="experience-description">
          <h1 style={{ color: customTheme.primary }}>{experienceTitle}</h1>
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
