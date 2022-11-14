import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ThemeContext } from '../../contexts/ThemeContext'
import { projectsData } from '../../data/projectsData'

import './Projects.css'
import { SingleProject } from './SingleProject/SingleProject'
import { ViewAllBtn, ViewArr } from './Projects.style'

export const Projects = () => {
  const { theme } = useContext(ThemeContext)

  return projectsData.length > 0 ? (
    <div
      className="projects"
      id="projects"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="projects--header">
        <h1 style={{ color: theme.primary }}>Projects</h1>
      </div>
      <div className="projects--body">
        <div className="projects--bodyContainer">
          {projectsData.slice(0, 4).map((project) => (
            <SingleProject
              theme={theme}
              key={project.id}
              id={project.id}
              projectName={project.projectName}
              projectDesc={project.projectDesc}
              tags={project.tags}
              code={project.code}
              demo={project.demo}
              image={project.image}
            />
          ))}
        </div>

        {projectsData.length > 3 && (
          <div className="projects--viewAll">
            <Link to="/projects">
              <ViewAllBtn>
                View All
                <ViewArr />
              </ViewAllBtn>
            </Link>
          </div>
        )}
      </div>
    </div>
  ) : null
}
