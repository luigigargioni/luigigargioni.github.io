import React, { useContext } from 'react'
import { Fade } from 'react-awesome-reveal'

import { ThemeContext } from '../../contexts/ThemeContext'

import expImgWhite from '../../assets/svg/expImgWhite.svg'

import './Experience.css'
import { ExperienceType } from 'data/experienceData'
import { themeData } from 'data/themeData'

export const ExperienceCard = ({
  id,
  company,
  companyUrl,
  jobtitle,
  startYear,
  endYear,
  description,
}: ExperienceType) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Fade direction="up" triggerOnce style={{ width: '100%' }}>
      <div key={id} className="experience-card">
        <div className="expcard-img" style={{ backgroundColor: theme.primary }}>
          <img src={expImgWhite} alt="" />
        </div>
        <div className="experience-details">
          <h6 style={{ color: theme.primary }}>
            {startYear ? `${startYear}-${endYear}` : endYear}
          </h6>
          <h4 style={{ color: theme.tertiary }}>{jobtitle}</h4>
          <h5 style={{ color: theme.tertiary80 }}>
            <a href={companyUrl} target="_blank">
              {company}
            </a>
          </h5>
          <h6>{description}</h6>
        </div>
      </div>
    </Fade>
  )
}
