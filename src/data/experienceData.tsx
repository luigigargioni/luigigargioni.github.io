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
          study: after the established period, possibility of recruitment not
          accepted for choice to continue the studies and start of the master's
          degree course in computer engineering. Occasional project work in
          2020/2021.
        </p>
        <ul>
          <li>
            Software development and debugging in Microsoft an Web environment:
            Visual Basic .NET, Visual Basic 6, ASP:NET, Javascript, Microsoft
            SQL Server and Access
          </li>
          <li>
            Installation and maintenance of local networks, departmental servers
            and network equipment
          </li>
          <li>
            Supporting personnel in installation and maintenance of personal
            computers and peripherals both at our headquarters and at the
            customer's premises
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
          <li>
            Reengineering existing application with functional programming
            paradigm and web technologies: JavaScript, TypeScript, Webpack and
            React (Redux, Styled Components, Jest, ...)
          </li>
          <li>
            Product Owner of two outsourced projects, collaborating with an
            international company
          </li>
          <li>Recruitment</li>
        </ul>
        <br />
        <p>Previously:</p>
        <ul>
          <li>Functional analysis of banking and financial procedures</li>
          <li>
            Implementation of modules in Delphi, Java and PL/SQL (Oracle DB)
          </li>
          <li>
            Customer support activities in relation to the applications
            developed and distributed
          </li>
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
    //description: 'Telemedicine and Digitization of Health Services',
    description: <p>Telemedicine and Digitization of Health Services</p>,
  },
]
