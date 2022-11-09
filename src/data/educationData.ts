export type EducationType = {
  id: number
  institution: string
  institutionUrl: string
  course: string
  courseUrl: string
  startYear: string
  endYear: string
}

export const educationData: EducationType[] = [
  {
    id: 1,
    institution: 'University of Brescia',
    institutionUrl: 'https://www.unibs.it/it',
    course: 'Bachelor Degree, Computer Engineering',
    courseUrl: 'https://corsi.unibs.it/it/ingegneriainformatica',
    startYear: '',
    endYear: '10/2017',
  },
  {
    id: 2,
    institution: 'University of Brescia',
    institutionUrl: 'https://www.unibs.it/it',
    course: 'Master Degree, Computer Engineering',
    courseUrl: 'https://corsi.unibs.it/it/ingegneriainformaticamagistrale',
    startYear: '',
    endYear: '10/2019',
  },
  {
    id: 3,
    institution: 'University of Brescia',
    institutionUrl: 'https://www.unibs.it/it',
    course: 'Professional Practice Exam',
    courseUrl: 'https://www.unibs.it/it/didattica/post-laurea/esami-di-stato',
    startYear: '',
    endYear: '07/2020',
  },
  {
    id: 4,
    institution: 'University of Brescia',
    institutionUrl: 'https://www.unibs.it/it',
    course: 'PhD Candidate Technology for Health',
    courseUrl: 'https://tech4health.unibs.it/',
    startYear: '',
    endYear: 'Present',
  },
]
