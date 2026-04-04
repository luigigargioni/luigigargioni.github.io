import React from 'react'
import { Fade } from 'react-awesome-reveal'

import { EducationType } from 'data/educationData'

import { useCustomTheme } from 'style/themeProvider'
import eduImgWhite from 'assets/svg/eduImgWhite.svg'
import './Education.css'

export const EducationCard = ({
  id,
  institution,
  institutionUrl,
  course,
  courseUrl,
  startYear,
  endYear,
  description,
}: EducationType) => {
  const customTheme = useCustomTheme()

  return (
    <Fade direction="up" triggerOnce style={{ width: '100%' }}>
      <div key={id} className="education-card">
        <div
          className="educard-img"
          style={{ backgroundColor: customTheme.primary }}
        >
          <img src={eduImgWhite} alt="" width="80" height="80" />
        </div>
        <div className="education-details">
          <h3 style={{ color: customTheme.primary }}>
            {startYear ? `${startYear}-${endYear}` : endYear}
          </h3>
          <h4 style={{ color: customTheme.tertiary }}>
            <a href={courseUrl} target="_blank" rel="noreferrer">
              {course}
            </a>
          </h4>
          <h5 style={{ color: customTheme.primary }}>
            <a href={institutionUrl} target="_blank" rel="noreferrer">
              {institution}
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
