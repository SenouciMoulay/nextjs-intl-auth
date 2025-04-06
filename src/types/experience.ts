export type Technology = {
  name: string
  icon: string
}

export type WorkType = 'Remote' | 'Hybrid' | 'On-Site'

export type Experience = {
  id: string
  startDate: Date
  endDate: Date | 'present'
  title: string
  company: string
  description: string
  technologies: Technology[]
  workType: WorkType
  location: string
  type: 'Freelance' | 'Full-time' | 'Student Project'
}
