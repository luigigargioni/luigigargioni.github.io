import React from 'react'

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
      <>
        <p>
          Internship outside the university carried out during the period of
          study. Occasional project work in 2020/2021.
        </p>
        <ul>
          <li>
            Software development and debugging in Microsoft and Web environment
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    company: 'Kline',
    companyUrl: 'https://www.kline.it/',
    jobtitle: 'Web Developer',
    startYear: '11/2019',
    endYear: '11/2022',
    description: (
      <>
        <p>
          Kline develops and manufactures integrated software platforms,
          technological solutions and services for financial intermediaries.
        </p>
        <ul>
          <li>Reengineering existing application</li>
          <li>Product Owner of two outsourced projects</li>
          <li>Recruitment</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    company: 'Antares Vision',
    companyUrl: 'https://it.antaresvision.com/',
    jobtitle: 'PhD Student',
    startYear: '12/2022',
    endYear: 'Present',
    description: <p>Telemedicine and Digitization of Health Services</p>,
  },
  {
    id: 4,
    company: 'Freelance',
    companyUrl: '',
    jobtitle: 'Web Developer & IT Solutions',
    startYear: '07/2023',
    endYear: 'Present',
    description: (
      <p>
        Digital solutions tailored to customers&apos; needs, with expertise in
        the design, development and maintenance of web applications and
        information systems
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
      <>
        <p>
          Tirocinio extra-universitario svolto durante il periodo di studio.
          Lavoro occasionale a progetto nel 2020/2021.
        </p>
        <ul>
          <li>Sviluppo software e debugging in ambiente Microsoft e Web</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    company: 'Kline',
    companyUrl: 'https://www.kline.it/',
    jobtitle: 'Sviluppatore Web',
    startYear: '11/2019',
    endYear: '11/2022',
    description: (
      <>
        <p>
          Kline sviluppa piattaforme software integrate, soluzioni tecnologiche
          e servizi per gli intermediari finanziari.
        </p>
        <ul>
          <li>Reingegnerizzazione dell&apos;applicazione esistente</li>
          <li>Product Owner di due progetti in outsourcing</li>
          <li>Selezione del personale</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    company: 'Antares Vision',
    companyUrl: 'https://it.antaresvision.com/',
    jobtitle: 'Dottorato di Ricerca',
    startYear: '12/2022',
    endYear: 'Attuale',
    description: <p>Telemedicina e Digitalizzazione dei Servizi Sanitari</p>,
  },
  {
    id: 4,
    company: 'Libero Professionista',
    companyUrl: '',
    jobtitle: 'Sviluppo Web & Soluzioni IT',
    startYear: '07/2023',
    endYear: 'Attuale',
    description: (
      <p>
        Soluzioni digitali su misura per le esigenze dei clienti, con esperienza
        nella progettazione, sviluppo e manutenzione di applicazioni web e
        sistemi informatici
      </p>
    ),
  },
]
