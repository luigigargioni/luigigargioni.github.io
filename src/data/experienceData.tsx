import React, { JSX } from 'react'

export const experienceTitleEN = 'Experience'
export const experienceTitleIT = 'Esperienze'

export type ExperienceType = {
  id: number
  company: string
  companyUrl: string
  jobtitle: string
  startYear: string
  endYear: string
  description: JSX.Element
}

export const experienceDataEN: ExperienceType[] = [
  {
    id: 1,
    company: 'C&B Servizi Informatici',
    companyUrl: 'https://www.cebweb.it/',
    jobtitle: 'Software Developer',
    startYear: '12/2016',
    endYear: '06/2017',
    description: (
      <></>
      /*       <p>
        Internship outside the university carried out during the period of
        study. Occasional project work in 2020/2021. Software development and
        debugging in Microsoft and Web environment.
      </p> */
    ),
  },
  {
    id: 2,
    company: 'Kline',
    companyUrl: 'https://www.kline.it/',
    jobtitle: 'Research & Development Engineer',
    startYear: '11/2019',
    endYear: '11/2022',
    description: (
      <></>
      /*       <p>
        Kline develops and manufactures integrated software platforms,
        technological solutions and services for financial intermediaries.
        Reengineering existing application, Product Owner of two outsourced
        projects and Recruitment.
      </p> */
    ),
  },
  {
    id: 3,
    company: 'Freelance',
    companyUrl: '',
    jobtitle: 'Full Stack Developer',
    startYear: '07/2023',
    endYear: 'Present',
    description: (
      <></>
      /*       <p>
        Digital solutions tailored to customers&apos; needs, with expertise in
        the design, development and maintenance of web applications and
        information systems
      </p> */
    ),
  },
  /*
  {
    id: 4,
    company: 'University of Brescia',
    companyUrl: 'https://www.unibs.it/en',
    jobtitle: 'Teaching Support',
    startYear: '01/2024',
    endYear: 'Present',
    description: (
      <ul>
        <li>Robotics: 2023/2024 - 2024/2025 - 2025/2026</li>
        <li>Coding for Data Science and Analytics: 2025/2026</li>
      </ul>
    ),
  },
  */
  {
    id: 5,
    company: 'University of Brescia',
    companyUrl: 'https://www.unibs.it/en',
    jobtitle: 'Postdoctoral Researcher',
    startYear: '12/2025',
    endYear: '03/2026',
    description: (
      <p>Human-Robot Interaction and Human-Centred Artificial Intelligence</p>
    ),
  },
  {
    id: 6,
    company: 'University of Milano-Bicocca',
    companyUrl: 'https://www.unimib.it/',
    jobtitle: 'Postdoctoral Researcher',
    startYear: '04/2026',
    endYear: 'Present',
    description: (
      <p>
        Developing conversational interfaces using Generative AI and Machine
        Learning for screening and training systems
      </p>
    ),
  },
]

export const experienceDataIT: ExperienceType[] = [
  {
    id: 1,
    company: 'C&B Servizi Informatici',
    companyUrl: 'https://www.cebweb.it/',
    jobtitle: 'Sviluppatore Software',
    startYear: '12/2016',
    endYear: '06/2017',
    description: (
      <></>
      /*       <p>
        Tirocinio extra-universitario svolto durante il periodo di studio.
        Lavoro occasionale a progetto nel 2020/2021. Sviluppo software e
        debugging in ambiente Microsoft e Web.
      </p> */
    ),
  },
  {
    id: 2,
    company: 'Kline',
    companyUrl: 'https://www.kline.it/',
    jobtitle: 'Ingegnere Ricerca & Sviluppo',
    startYear: '11/2019',
    endYear: '11/2022',
    description: (
      <></>
      /*       <p>
        Kline sviluppa piattaforme software integrate, soluzioni tecnologiche e
        servizi per gli intermediari finanziari. Reingegnerizzazione
        dell&apos;applicazione esistente, Product Owner di due progetti in
        outsourcing e Selezione del personale.
      </p> */
    ),
  },
  {
    id: 3,
    company: 'Libero Professionista',
    companyUrl: '',
    jobtitle: 'Sviluppatore Full Stack',
    startYear: '07/2023',
    endYear: 'Attuale',
    description: (
      <></>
      /*       <p>
        Soluzioni digitali su misura per le esigenze dei clienti, con esperienza
        nella progettazione, sviluppo e manutenzione di applicazioni web e
        sistemi informatici
      </p> */
    ),
  },
  /*
  {
    id: 4,
    company: 'Università degli Studi di Brescia',
    companyUrl: 'https://www.unibs.it/it',
    jobtitle: 'Supporto alla Didattica',
    startYear: '01/2024',
    endYear: 'Attuale',
    description: (
      <ul>
        <li>Robotica: 2023/2024 - 2024/2025 - 2025/2026</li>
        <li>Coding for Data Science and Analytics: 2025/2026</li>
      </ul>
    ),
  },
  */
  {
    id: 5,
    company: 'Università degli Studi di Brescia',
    companyUrl: 'https://www.unibs.it',
    jobtitle: 'Ricercatore Post-Dottorato',
    startYear: '12/2025',
    endYear: '03/2026',
    description: (
      <p>
        Interazione Uomo-Robot e Intelligenza Artificiale Centrata
        sull&apos;Uomo
      </p>
    ),
  },
  {
    id: 6,
    company: 'Università degli Studi di Milano-Bicocca',
    companyUrl: 'https://www.unimib.it/',
    jobtitle: 'Ricercatore Post-Dottorato',
    startYear: '04/2026',
    endYear: 'Attuale',
    description: (
      <p>
        Sviluppo di interfacce conversazionali utilizzando AI Generative e
        Machine Learning per sistemi di screening e addestramento
      </p>
    ),
  },
]
