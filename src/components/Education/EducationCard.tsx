import React, { useContext } from 'react'
import { Fade } from 'react-awesome-reveal'

import { ThemeContext } from '../../contexts/ThemeContext'

import eduImgWhite from '../../assets/svg/eduImgWhite.svg'
import './Education.css'
import { EducationType } from 'data/educationData'
import { themeData } from 'data/themeData'

export const EducationCard = ({
  id,
  institution,
  institutionUrl,
  course,
  courseUrl,
  startYear,
  endYear,
}: EducationType) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Fade direction="down" triggerOnce style={{ width: '100%' }}>
      <div key={id} className="education-card">
        <div className="educard-img" style={{ backgroundColor: theme.primary }}>
          <img src={eduImgWhite} alt="" />
        </div>
        <div className="education-details">
          <h6 style={{ color: theme.primary }}>
            {startYear ? `${startYear}-${endYear}` : endYear}
          </h6>
          <h4 style={{ color: theme.tertiary }}>
            <a href={courseUrl} target="_blank">
              {course}
            </a>
          </h4>
          <h5 style={{ color: theme.tertiary80 }}>
            <a href={institutionUrl} target="_blank">
              {institution}
            </a>
          </h5>
        </div>
      </div>
    </Fade>
  )
}
