import React from 'react'

import './About.css'
import { customTheme } from 'style/theme'
import { aboutData } from 'data/aboutData'

export const About = () => (
  <div
    className="about"
    id="about"
    style={{ backgroundColor: customTheme.secondary }}
  >
    <div className="line-styling">
      <div
        className="style-circle"
        style={{ backgroundColor: customTheme.primary }}
      />
      <div
        className="style-circle"
        style={{ backgroundColor: customTheme.primary }}
      />
      <div
        className="style-line"
        style={{ backgroundColor: customTheme.primary }}
      />
    </div>
    <div className="about-body">
      <div className="about-description">
        <h2 style={{ color: customTheme.primary }}>{aboutData.title}</h2>
        <p style={{ color: customTheme.tertiary80 }}>
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
        <img src={customTheme.aboutimg1} alt="" />
      </div>
    </div>
  </div>
)
