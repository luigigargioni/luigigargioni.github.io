import React from 'react'

export type ExperienceType = {
  id: number
  company: string
  companyUrl: string
  jobtitle: string
  startYear: string
  endYear: string
  description: JSX.Element
}

export const experienceData: ExperienceType[] = [
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
    jobtitle: 'PhD Intern',
    startYear: '12/2022',
    endYear: 'Present',
    description: <p>Telemedicine and Digitization of Health Services</p>,
  },
]
