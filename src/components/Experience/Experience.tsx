import React from 'react'

import './Experience.css'

import { customTheme } from 'style/theme'
import { experienceData } from 'data/experienceData'
import { ExperienceCard } from './ExperienceCard'

export const Experience = () => (
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
        <h1 style={{ color: customTheme.primary }}>Experience</h1>
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
