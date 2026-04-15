import React, { JSX } from 'react'

export const educationTitleEN = 'Education'
export const educationTitleIT = 'Formazione'

export type EducationType = {
  id: number
  institution: string
  institutionUrl: string
  course: string
  courseUrl: string
  startYear: string
  endYear: string
  description: JSX.Element | null
}

export const educationDataEN: EducationType[] = [
  /*   {
    id: 1,
    institution: 'University of Brescia',
    institutionUrl: 'https://www.unibs.it/en',
    course: 'Bachelor Degree, Computer Engineering',
    courseUrl: 'https://corsi.unibs.it/en/computer-science',
    startYear: '',
    endYear: '10/2017',
    description: (
      <p>
        Thesis: &quot;Vulnerability checking of systems: general concepts and
        analysis of the OpenVAS tool&quot;
      </p>
    ),
  }, */
  {
    id: 2,
    institution: 'University of Brescia',
    institutionUrl: 'https://www.unibs.it/en',
    course: 'Master Degree, Computer Engineering',
    courseUrl: 'https://corsi.unibs.it/en/computer-science-engineering',
    startYear: '',
    endYear: '10/2019',
    description: (
      <p>
        Thesis: &quot;A Domain-Independent Environment for User-Oriented
        Programming of Collaborative Robots&quot;
      </p>
    ),
  },
  {
    id: 3,
    institution: 'University of Brescia',
    institutionUrl: 'https://www.unibs.it/en',
    course: 'Professional Practice Exam',
    courseUrl: 'https://www.unibs.it/en/education/post-lauream/state-exams',
    startYear: '',
    endYear: '07/2020',
    description: null,
  },
  {
    id: 4,
    institution: 'LAAS-CNRS (Toulouse, France)',
    institutionUrl: 'https://www.laas.fr/en/',
    course: 'Visiting PhD Student, Robotics and Interaction',
    courseUrl: 'https://www.laas.fr/en/teams/ris/',
    startYear: '09/2024',
    endYear: '03/2025',
    description: (
      <p>Theory of Mind and Large Language Models in Human-Robot Interaction</p>
    ),
  },
  {
    id: 5,
    institution: 'University of Brescia',
    institutionUrl: 'https://www.unibs.it/en',
    course: 'PhD Student, Technology for Health',
    courseUrl: 'https://tech4health.unibs.it/',
    startYear: '12/2022',
    endYear: '01/2026',
    description: (
      <p>Human-Robot Interaction and Human-Centred Artificial Intelligence</p>
    ),
  },
]

export const educationDataIT: EducationType[] = [
  /*   {
    id: 1,
    institution: 'Università degli Studi di Brescia',
    institutionUrl: 'https://www.unibs.it/it',
    course: 'Laurea Triennale, Ingegneria Informatica',
    courseUrl: 'https://corsi.unibs.it/it/ingegneriainformatica',
    startYear: '',
    endYear: '10/2017',
    description: (
      <p>
        Tesi: &quot;Verifica di vulnerabilità dei sistemi: concetti generali e
        analisi dello strumento OpenVAS&quot;
      </p>
    ),
  }, */
  {
    id: 2,
    institution: 'Università degli Studi di Brescia',
    institutionUrl: 'https://www.unibs.it/it',
    course: 'Laurea Magistrale, Ingegneria Informatica',
    courseUrl: 'https://corsi.unibs.it/it/ingegneriainformaticamagistrale',
    startYear: '',
    endYear: '10/2019',
    description: (
      <p>
        Tesi: &quot;Un ambiente generalizzato per la programmazione di robot
        collaborativi da parte degli utenti finali&quot;
      </p>
    ),
  },
  {
    id: 3,
    institution: 'Università degli Studi di Brescia',
    institutionUrl: 'https://www.unibs.it/it',
    course: 'Esame di abilitazione professionale',
    courseUrl: 'https://www.unibs.it/it/didattica/post-laurea/esami-di-stato',
    startYear: '',
    endYear: '07/2020',
    description: null,
  },
  {
    id: 4,
    institution: 'LAAS-CNRS (Tolosa, Francia)',
    institutionUrl: 'https://www.laas.fr/en/',
    course: 'Dottorando in visita, Robotics and Interaction',
    courseUrl: 'https://www.laas.fr/en/teams/ris/',
    startYear: '09/2024',
    endYear: '03/2025',
    description: (
      <p>
        Teoria della Mente e Large Language Models in Interazione Uomo-Robot
      </p>
    ),
  },
  {
    id: 5,
    institution: 'Università degli Studi di Brescia',
    institutionUrl: 'https://www.unibs.it/it',
    course: 'Dottorato di Ricerca, Technology for Health',
    courseUrl: 'https://tech4health.unibs.it/',
    startYear: '12/2022',
    endYear: '01/2026',
    description: (
      <p>
        Interazione Uomo-Robot ed Intelligenza Artificiale Centrata
        sull&apos;Uomo
      </p>
    ),
  },
]
