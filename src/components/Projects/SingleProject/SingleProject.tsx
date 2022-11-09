import React from 'react'
import Fade from 'react-reveal/Fade'

import './SingleProject.css'
import { ProjectType } from 'data/projectsData'
import { ThemeType } from 'theme/theme'
import { IconBtn, IconFaCode, IconFaPlay } from './SingleProject.style'

export const SingleProject = ({
  id,
  projectName,
  projectDesc,
  tags,
  code,
  demo,
  image,
  theme,
}: ProjectType & { theme: ThemeType }) => {
  return (
    <Fade bottom>
      <div
        key={id}
        className="singleProject"
        style={{ backgroundColor: theme.primary400 }}
      >
        <div className="projectContent">
          <h2
            id={projectName.replace(' ', '-').toLowerCase()}
            style={{ color: theme.tertiary }}
          >
            {projectName}
          </h2>
          <img src={image} alt={projectName} />
          <div className="project--showcaseBtn">
            <IconBtn
              href={demo}
              target="_blank"
              rel="noreferrer"
              aria-labelledby={`${projectName
                .replace(' ', '-')
                .toLowerCase()} ${projectName
                .replace(' ', '-')
                .toLowerCase()}-demo`}
            >
              <IconFaPlay
                id={`${projectName.replace(' ', '-').toLowerCase()}-demo`}
                aria-label="Demo"
              />
            </IconBtn>
            <IconBtn
              href={code}
              target="_blank"
              rel="noreferrer"
              aria-labelledby={`${projectName
                .replace(' ', '-')
                .toLowerCase()} ${projectName
                .replace(' ', '-')
                .toLowerCase()}-code`}
            >
              <IconFaCode
                id={`${projectName.replace(' ', '-').toLowerCase()}-code`}
                aria-label="Code"
              />
            </IconBtn>
          </div>
        </div>
        <p
          className="project--desc"
          style={{
            background: theme.secondary,
            color: theme.tertiary,
          }}
        >
          {projectDesc}
        </p>
        <div
          className="project--lang"
          style={{
            background: theme.secondary,
            color: theme.tertiary80,
          }}
        >
          {tags.map((tag, id) => (
            <span key={id}>{tag}</span>
          ))}
        </div>
      </div>
    </Fade>
  )
}
