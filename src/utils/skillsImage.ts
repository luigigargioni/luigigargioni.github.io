import html from '../assets/svg/skills/html.svg'
import docker from '../assets/svg/skills/docker.svg'
import css from '../assets/svg/skills/css.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import react from '../assets/svg/skills/react.svg'
import typescript from '../assets/svg/skills/typescript.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import mysql from '../assets/svg/skills/mysql.png'
import python from '../assets/svg/skills/python.svg'
import django from '../assets/svg/skills/django.svg'
import git from '../assets/svg/skills/git.svg'
import materialui from '../assets/svg/skills/materialui.svg'
import numpy from '../assets/svg/skills/numpy.svg'
import opencv from '../assets/svg/skills/opencv.svg'
import nodejs from '../assets/svg/skills/nodejs.svg'
import express from '../assets/svg/skills/express.png'
import webpack from '../assets/svg/skills/webpack.svg'
import redux from '../assets/svg/skills/redux.svg'
import styledcomponents from '../assets/svg/skills/styledcomponents.png'
import cypress from '../assets/svg/skills/cypress.png'
import jest from '../assets/svg/skills/jest.svg'
import sequelize from '../assets/svg/skills/sequelize.svg'
import antdesign from '../assets/svg/skills/antdesign.svg'
import oracle from '../assets/svg/skills/oracle.svg'
import sqllite from '../assets/svg/skills/sqlite.png'
import sqlserver from '../assets/svg/skills/sqlserver.png'
import visualbasic from '../assets/svg/skills/visualbasic.svg'
import electron from '../assets/svg/skills/electron.svg'
import mariadb from '../assets/svg/skills/mariadb.svg'
import swagger from '../assets/svg/skills/swagger.svg'

export enum SkillsEnum {
  HTML = 'HTML',
  CSS = 'CSS',
  JAVASCRIPT = 'Javascript',
  TYPESCRIPT = 'Typescript',
  REACT = 'React',
  WEBPACK = 'Webpack',
  REDUX = 'Redux',
  NODEJS = 'Node.js',
  EXPRESS = 'Express',
  STYLEDCOMPONENTS = 'CSS-in-JS',
  CYPRESS = 'Cypress',
  JEST = 'Jest',
  SEQUELIZE = 'Sequelize',
  ANTDESIGN = 'Ant Design',
  MATERIALUI = 'Material UI',
  BOOTSTRAP = 'Bootstrap',
  PYTHON = 'Python',
  DJANGO = 'Django',
  NUMPY = 'Numpy',
  OPENCV = 'OpenCV',
  DOCKER = 'Docker',
  GIT = 'Git',
  MYSQL = 'MySQL',
  ORACLE = 'Oracle DB',
  SQLLITE = 'SQL Lite',
  SQLSERVER = 'SQL Server',
  VISUALBASIC = 'VisualBasic',
  ELECTRON = 'Electron',
  MARIADB = 'MariaDB',
  SWAGGER = 'Swagger',
}

export const skillsImage = (skill: SkillsEnum) => {
  switch (skill) {
    case SkillsEnum.NODEJS:
      return nodejs
    case SkillsEnum.HTML:
      return html
    case SkillsEnum.DOCKER:
      return docker
    case SkillsEnum.CSS:
      return css
    case SkillsEnum.JAVASCRIPT:
      return javascript
    case SkillsEnum.TYPESCRIPT:
      return typescript
    case SkillsEnum.REACT:
      return react
    case SkillsEnum.WEBPACK:
      return webpack
    case SkillsEnum.REDUX:
      return redux
    case SkillsEnum.EXPRESS:
      return express
    case SkillsEnum.STYLEDCOMPONENTS:
      return styledcomponents
    case SkillsEnum.CYPRESS:
      return cypress
    case SkillsEnum.JEST:
      return jest
    case SkillsEnum.SEQUELIZE:
      return sequelize
    case SkillsEnum.ANTDESIGN:
      return antdesign
    case SkillsEnum.BOOTSTRAP:
      return bootstrap
    case SkillsEnum.PYTHON:
      return python
    case SkillsEnum.DJANGO:
      return django
    case SkillsEnum.NUMPY:
      return numpy
    case SkillsEnum.OPENCV:
      return opencv
    case SkillsEnum.MYSQL:
      return mysql
    case SkillsEnum.ORACLE:
      return oracle
    case SkillsEnum.SQLLITE:
      return sqllite
    case SkillsEnum.SQLSERVER:
      return sqlserver
    case SkillsEnum.VISUALBASIC:
      return visualbasic
    case SkillsEnum.ELECTRON:
      return electron
    case SkillsEnum.MARIADB:
      return mariadb
    case SkillsEnum.SWAGGER:
      return swagger
    case SkillsEnum.MATERIALUI:
      return materialui
    case SkillsEnum.GIT:
      return git
    default:
      return undefined
  }
}
