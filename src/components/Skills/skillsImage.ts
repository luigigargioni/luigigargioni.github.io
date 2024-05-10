import html from 'assets/skills/html.svg'
import docker from 'assets/skills/docker.svg'
import css from 'assets/skills/css.svg'
import javascript from 'assets/skills/javascript.svg'
import react from 'assets/skills/react.svg'
import typescript from 'assets/skills/typescript.svg'
import bootstrap from 'assets/skills/bootstrap.svg'
import mysql from 'assets/skills/mysql.png'
import python from 'assets/skills/python.svg'
import django from 'assets/skills/django.svg'
import git from 'assets/skills/git.svg'
import gitlab from 'assets/skills/gitlab.svg'
import materialui from 'assets/skills/materialui.svg'
import numpy from 'assets/skills/numpy.svg'
import opencv from 'assets/skills/opencv.svg'
import nodejs from 'assets/skills/nodejs.svg'
import express from 'assets/skills/express.png'
import webpack from 'assets/skills/webpack.svg'
import redux from 'assets/skills/redux.svg'
import styledcomponents from 'assets/skills/styledcomponents.png'
import cypress from 'assets/skills/cypress.png'
import jest from 'assets/skills/jest.svg'
import sequelize from 'assets/skills/sequelize.svg'
import antdesign from 'assets/skills/antdesign.svg'
import oracle from 'assets/skills/oracle.svg'
import sqllite from 'assets/skills/sqlite.png'
import sqlserver from 'assets/skills/sqlserver.png'
import visualbasic from 'assets/skills/visualbasic.svg'
import electron from 'assets/skills/electron.svg'
import mariadb from 'assets/skills/mariadb.svg'
import swagger from 'assets/skills/swagger.svg'
import go from 'assets/skills/go.svg'
import vue from 'assets/skills/vue.svg'
import mongodb from 'assets/skills/mongodb.svg'
import php from 'assets/skills/php.svg'
import vitejs from 'assets/skills/vitejs.svg'
import poetry from 'assets/skills/poetry.svg'
import postman from 'assets/skills/postman.svg'
import strapi from 'assets/skills/strapi.svg'

export enum SkillsEnum {
  HTML = 'HTML',
  CSS = 'CSS',
  JAVASCRIPT = 'Javascript',
  TYPESCRIPT = 'Typescript',
  REACT = 'React',
  WEBPACK = 'Webpack',
  REDUX = 'Redux',
  NODEJS = 'Node',
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
  GITLAB = 'GitLab',
  MYSQL = 'MySQL',
  ORACLE = 'Oracle DB',
  SQLLITE = 'SQL Lite',
  SQLSERVER = 'SQL Server',
  VISUALBASIC = 'VisualBasic',
  ELECTRON = 'Electron',
  MARIADB = 'MariaDB',
  SWAGGER = 'Swagger',
  GO = 'Go',
  VUE = 'Vue',
  MONGODB = 'MongoDB',
  PHP = 'PHP',
  VITEJS = 'Vite',
  POETRY = 'Poetry',
  POSTMAN = 'Postman',
  STRAPI = 'Strapi',
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
    case SkillsEnum.GITLAB:
      return gitlab
    case SkillsEnum.GO:
      return go
    case SkillsEnum.VUE:
      return vue
    case SkillsEnum.MONGODB:
      return mongodb
    case SkillsEnum.PHP:
      return php
    case SkillsEnum.VITEJS:
      return vitejs
    case SkillsEnum.POETRY:
      return poetry
    case SkillsEnum.POSTMAN:
      return postman
    case SkillsEnum.STRAPI:
      return strapi
    default:
      return undefined
  }
}
