import React, { JSX } from 'react'

export type ExperienceType = {
  /** Display order: the highest id comes first. */
  id: number
  company: string
  /** Empty when there is nothing to link. */
  companyUrl: string
  jobtitle: string
  /** MM/YYYY */
  startYear: string
  /** MM/YYYY, or a word ("Present") for an ongoing position. */
  endYear: string
  description: JSX.Element
}

export const experienceDataEN: ExperienceType[] = [
  {
    id: 1,
    company: 'C&B Servizi Informatici',
    companyUrl: 'https://www.cebweb.it/',
    jobtitle: 'Software Engineer',
    startYear: '11/2016',
    endYear: '06/2017',
    description: (
      <p>
        Development and debugging of business applications in Microsoft and web
        environments
      </p>
    ),
  },
  {
    id: 2,
    company: 'Kline',
    companyUrl: 'https://www.kline.it/',
    jobtitle: 'Software Engineer & R&D Developer',
    startYear: '11/2019',
    endYear: '11/2022',
    description: (
      <p>
        Re-engineering of an enterprise platform for financial intermediaries
        towards a modern web architecture
      </p>
    ),
  },
  {
    id: 3,
    company: 'Freelance',
    companyUrl: '',
    jobtitle: 'Software Development Engineer, Full-Stack',
    startYear: '12/2022',
    endYear: 'Present',
    description: (
      <p>
        Web applications, management systems, CRMs and B2B e-commerce, from
        design to deployment
      </p>
    ),
  },
  {
    id: 4,
    company: 'University of Brescia',
    companyUrl: 'https://www.unibs.it/en',
    jobtitle: 'Research Fellow',
    startYear: '12/2025',
    endYear: '03/2026',
    description: (
      <p>
        End-User Development and Large Language Models for human-robot
        collaboration
      </p>
    ),
  },
  {
    id: 5,
    company: 'University of Milano-Bicocca',
    companyUrl: 'https://www.unimib.it/',
    jobtitle: 'Postdoctoral Researcher',
    startYear: '04/2026',
    endYear: 'Present',
    description: (
      <>
        <p>Research Fellow for the month of 04/2026 only</p>
        <p>
          Developing conversational interfaces using Generative AI and Machine
          Learning for screening and training systems
        </p>
      </>
    ),
  },
]

export const experienceDataIT: ExperienceType[] = [
  {
    id: 1,
    company: 'C&B Servizi Informatici',
    companyUrl: 'https://www.cebweb.it/',
    jobtitle: 'Ingegnere del Software',
    startYear: '11/2016',
    endYear: '06/2017',
    description: (
      <p>
        Sviluppo e debugging di applicativi gestionali in ambiente Microsoft e
        web
      </p>
    ),
  },
  {
    id: 2,
    company: 'Kline',
    companyUrl: 'https://www.kline.it/',
    jobtitle: 'Ingegnere del Software & Sviluppatore R&D',
    startYear: '11/2019',
    endYear: '11/2022',
    description: (
      <p>
        Reingegnerizzazione di una piattaforma enterprise per intermediari
        finanziari verso un&apos;architettura web moderna
      </p>
    ),
  },
  {
    id: 3,
    company: 'Libero Professionista',
    companyUrl: '',
    jobtitle: 'Ingegnere dello Sviluppo Software, Full-Stack',
    startYear: '12/2022',
    endYear: 'Attuale',
    description: (
      <p>
        Applicazioni web, gestionali, CRM ed e-commerce B2B, dalla progettazione
        al rilascio
      </p>
    ),
  },
  {
    id: 4,
    company: 'Università degli Studi di Brescia',
    companyUrl: 'https://www.unibs.it/it',
    jobtitle: 'Assegnista di Ricerca',
    startYear: '12/2025',
    endYear: '03/2026',
    description: (
      <p>
        End-User Development e Large Language Models per la collaborazione
        uomo-robot
      </p>
    ),
  },
  {
    id: 5,
    company: 'Università degli Studi di Milano-Bicocca',
    companyUrl: 'https://www.unimib.it/',
    jobtitle: 'Ricercatore Post-Dottorato',
    startYear: '04/2026',
    endYear: 'Attuale',
    description: (
      <>
        <p>Assegnista di Ricerca per il solo mese di 04/2026</p>
        <p>
          Sviluppo di interfacce conversazionali utilizzando AI Generative e
          Machine Learning per sistemi di screening e addestramento
        </p>
      </>
    ),
  },
]
