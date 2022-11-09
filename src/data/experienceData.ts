export type ExperienceType = {
  id: number
  company: string
  companyUrl: string
  jobtitle: string
  startYear: string
  endYear: string
}

export const experienceData: ExperienceType[] = [
  {
    id: 1,
    company: 'C&B Servizi Informatici',
    companyUrl: 'https://www.cebweb.it/',
    jobtitle: 'Software Developer',
    startYear: '12/2016',
    endYear: '06/2017',
  },
  {
    id: 2,
    company: 'Kline',
    companyUrl: 'https://www.kline.it/',
    jobtitle: 'Web Developer',
    startYear: '11/2019',
    endYear: '11/2022',
  },
  {
    id: 3,
    company: 'Antares Vision',
    companyUrl: 'https://it.antaresvision.com/',
    jobtitle: 'PhD Intern',
    startYear: '12/2022',
    endYear: 'Present',
  },
]
