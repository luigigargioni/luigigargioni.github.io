export type AchievementType = {
  id: number
  title: string
  details: string
  date: string
  field: string
  image: string
}

export type AchievementDataType = {
  bio: string
  achievements: AchievementType[]
}

export const achievementData: AchievementDataType = {
  bio: 'The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn. - Alvin Toffler',
  achievements: [],
}

// Do not remove any fields.
// Leave it blank instead.

/*

    {
      id: 4,
      title: 'R Programming A-Z: R For Data Science With Real Exercises!',
      details: 'R Programming Language Course from Udemy',
      date: 'Feb 28, 2021',
      field: 'Data Science',
      image:
        'https://udemy-certificate.s3.amazonaws.com/image/UC-8f5ff8e8-b6a4-4efd-a3fc-7fb63b29e77f.jpg?v=1614489452000',
    },

*/
