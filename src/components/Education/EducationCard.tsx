import React, { useContext } from 'react'
import Fade from 'react-reveal/Fade'

import { ThemeContext } from '../../contexts/ThemeContext'

import eduImgWhite from '../../assets/svg/eduImgWhite.svg'
import './Education.css'
import { EducationType } from 'data/educationData'
import { themeData } from 'data/themeData'

export const EducationCard = ({
  id,
  institution,
  course,
  startYear,
  endYear,
}: EducationType) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Fade bottom>
      <div key={id} className="education-card">
        <div className="educard-img" style={{ backgroundColor: theme.primary }}>
          <img src={eduImgWhite} alt="" />
        </div>
        <div className="education-details">
          <h6 style={{ color: theme.primary }}>
            {startYear}-{endYear}
          </h6>
          <h4 style={{ color: theme.tertiary }}>{course}</h4>
          <h5 style={{ color: theme.tertiary80 }}>{institution}</h5>
        </div>
      </div>
    </Fade>
  )
}
