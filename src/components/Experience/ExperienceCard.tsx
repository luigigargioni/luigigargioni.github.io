import React, { useContext } from 'react'
import { makeStyles } from '@mui/material'
import Fade from 'react-reveal/Fade'

import { ThemeContext } from '../../contexts/ThemeContext'

import expImgWhite from '../../assets/svg/expImgWhite.svg'

import './Experience.css'
import { ExperienceType } from 'data/experienceData'

export const ExperienceCard = ({
  id,
  company,
  jobtitle,
  startYear,
  endYear,
}: ExperienceType) => {
  const { theme } = useContext(ThemeContext)

  const useStyles: any = makeStyles((t) => ({
    experienceCard: {
      backgroundColor: theme.primary30,
      '&:hover': {
        backgroundColor: theme.primary50,
      },
    },
  }))

  const classes = useStyles()

  return (
    <Fade bottom>
      <div key={id} className={`experience-card ${classes.experienceCard}`}>
        <div className="expcard-img" style={{ backgroundColor: theme.primary }}>
          <img src={expImgWhite} alt="" />
        </div>
        <div className="experience-details">
          <h6 style={{ color: theme.primary }}>
            {startYear}-{endYear}
          </h6>
          <h4 style={{ color: theme.tertiary }}>{jobtitle}</h4>
          <h5 style={{ color: theme.tertiary80 }}>{company}</h5>
        </div>
      </div>
    </Fade>
  )
}
