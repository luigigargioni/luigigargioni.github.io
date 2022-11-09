import React, { useContext } from 'react'
import Fade from 'react-reveal/Fade'
import { styled } from '@mui/material/styles'

import { ThemeContext } from '../../contexts/ThemeContext'

import { AiOutlineFolder } from 'react-icons/ai'

import './Achievement.css'
import { AchievementType } from 'data/achievementData'
import { themeData } from 'data/themeData'

const AchievementCardStyled = styled('div')(() => ({
  backgroundColor: themeData.theme.primary30,
  '&:hover': {
    backgroundColor: themeData.theme.primary50,
  },
}))

export const AchievementCard = ({
  id,
  title,
  details,
  date,
  field,
  image,
}: AchievementType) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Fade bottom>
      <AchievementCardStyled key={id} className="achievement-card">
        <div className="achievecard-content">
          <div className="achievecard-details1">
            <h2 style={{ color: theme.tertiary }}>{title}</h2>
            <p style={{ color: theme.tertiary80 }}>{details}</p>
          </div>
          <div
            className="achievecard-details2"
            style={{ color: theme.primary }}
          >
            <h5>{date}</h5>
            <div className="achievecard-field">
              <AiOutlineFolder />
              <h5>{field}</h5>
            </div>
          </div>
        </div>
        <div className="achievecard-imgcontainer">
          <img src={image} alt="" />
        </div>
      </AchievementCardStyled>
    </Fade>
  )
}
