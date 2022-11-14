import React, { useContext } from 'react'

import './About.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { aboutData } from '../../data/aboutData'

export const About = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      className="about"
      id="about"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="line-styling">
        <div
          className="style-circle"
          style={{ backgroundColor: theme.primary }}
        />
        <div
          className="style-circle"
          style={{ backgroundColor: theme.primary }}
        />
        <div
          className="style-line"
          style={{ backgroundColor: theme.primary }}
        />
      </div>
      <div className="about-body">
        <div className="about-description">
          <h2 style={{ color: theme.primary }}>{aboutData.title}</h2>
          <p style={{ color: theme.tertiary80 }}>
            {aboutData.description.map((paragraph) => (
              <span key={paragraph}>
                {paragraph}
                <br />
                <br />
              </span>
            ))}
          </p>
        </div>
        <div className="about-img">
          <img src={theme.aboutimg1} alt="" />
        </div>
      </div>
    </div>
  )
}
