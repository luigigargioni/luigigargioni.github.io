import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { FaPlay, FaCode } from 'react-icons/fa'
import Fade from 'react-reveal/Fade'

import './SingleProject.css'
import { ProjectType } from 'data/projectsData'
import { ThemeType } from 'theme/theme'

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
  const useStyles = makeStyles((t) => ({
    iconBtn: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: 50,
      border: `2px solid ${theme.tertiary}`,
      color: theme.tertiary,
      transition: 'all 0.2s',
      '&:hover': {
        backgroundColor: theme.secondary,
        color: theme.primary,
        transform: 'scale(1.1)',
        border: `2px solid ${theme.secondary}`,
      },
    },
    icon: {
      fontSize: '1.1rem',
      transition: 'all 0.2s',
      '&:hover': {},
    },
  }))

  const classes = useStyles()

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
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className={classes.iconBtn}
              aria-labelledby={`${projectName
                .replace(' ', '-')
                .toLowerCase()} ${projectName
                .replace(' ', '-')
                .toLowerCase()}-demo`}
            >
              <FaPlay
                id={`${projectName.replace(' ', '-').toLowerCase()}-demo`}
                className={classes.icon}
                aria-label="Demo"
              />
            </a>
            <a
              href={code}
              target="_blank"
              rel="noreferrer"
              className={classes.iconBtn}
              aria-labelledby={`${projectName
                .replace(' ', '-')
                .toLowerCase()} ${projectName
                .replace(' ', '-')
                .toLowerCase()}-code`}
            >
              <FaCode
                id={`${projectName.replace(' ', '-').toLowerCase()}-code`}
                className={classes.icon}
                aria-label="Code"
              />
            </a>
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
