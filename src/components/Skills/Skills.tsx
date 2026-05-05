import React from 'react'
import MarqueeModule from 'react-fast-marquee'
import { useTranslation } from 'react-i18next'

import './Skills.css'

import { useCustomTheme } from 'style/themeProvider'
import { skillsData, skillsData2 } from 'data/skillsData'
import { SkillsEnum, skillsImage } from 'components/Skills/skillsImage'

const Marquee = (MarqueeModule as any).default || MarqueeModule

export const Skills = () => {
  const { t } = useTranslation()
  const customTheme = useCustomTheme()

  const skillBoxStyle = () => ({
    backgroundColor: customTheme.secondary,
    boxShadow: `0px 0px 30px ${customTheme.primary30}`,
  })

  const getImageClass = (skill: SkillsEnum) =>
    skill === SkillsEnum.ROS ? 'ros-img' : ''

  return (
    <div
      id="skills"
      className="skills"
      style={{ backgroundColor: customTheme.secondary }}
    >
      <div className="skillsHeader">
        <h2 style={{ color: customTheme.primary }}>{t('skills.title')}</h2>
      </div>
      <div className="skillsContainer">
        <div className="skill--scroll">
          <Marquee
            gradient={false}
            speed={100}
            pauseOnHover
            pauseOnClick
            delay={0}
            play
            direction="left"
          >
            {skillsData.map((skill) => (
              <div className="skill--box" key={skill} style={skillBoxStyle()}>
                <img
                  src={skillsImage(skill)}
                  alt={skill}
                  className={getImageClass(skill)}
                />
                <h3 style={{ color: customTheme.tertiary }}>{skill}</h3>
              </div>
            ))}
          </Marquee>
          <Marquee
            gradient={false}
            speed={100}
            pauseOnHover
            pauseOnClick
            delay={0}
            play
            direction="right"
          >
            {skillsData2.map((skill) => (
              <div className="skill--box" key={skill} style={skillBoxStyle()}>
                <img
                  src={skillsImage(skill)}
                  alt={skill}
                  className={getImageClass(skill)}
                />
                <h3 style={{ color: customTheme.tertiary }}>{skill}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  )
}
