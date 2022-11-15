import React from 'react'

import './Education.css'
import { customTheme } from 'style/theme'
import { EducationCard } from './EducationCard'

import { educationData } from 'data/educationData'

export const Education = () => (
  <div
    className="education"
    id="education"
    style={{ backgroundColor: customTheme.secondary }}
  >
    <div className="education-body">
      <div className="education-description">
        <h1 style={{ color: customTheme.primary }}>Education</h1>
        {educationData
          .sort((a, b) => b.id - a.id)
          .map((edu) => (
            <EducationCard
              key={edu.id}
              id={edu.id}
              institution={edu.institution}
              institutionUrl={edu.institutionUrl}
              course={edu.course}
              courseUrl={edu.courseUrl}
              startYear={edu.startYear}
              endYear={edu.endYear}
              description={edu.description}
            />
          ))}
      </div>
      <div className="education-image">
        <img src={customTheme.eduimg} alt="" />
      </div>
    </div>
  </div>
)
