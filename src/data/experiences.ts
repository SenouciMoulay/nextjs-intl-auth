import { Experience } from '@/types/experience'

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    startDate: new Date('2024-10-01'),
    endDate: 'present',
    title: 'Fullstack developer',
    company: 'HasanatPlus',
    description:
      'Developed a simplified donation platform enabling users to fund multiple organizations through a single payment, with direct allocation of funds. Provided users with access to a dashboard featuring graphical representations of their donations and the ability to download invoices.',
    technologies: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'TailwindCSS', icon: 'tailwind' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Stripe', icon: 'stripe' },
      { name: 'Clerk', icon: 'clerk' },
    ],
    workType: 'Remote',
    location: 'Toulouse',
    type: 'Freelance',
  },
  {
    id: 'exp-2',
    startDate: new Date('2024-09-01'),
    endDate: new Date('2024-10-01'),
    title: 'Fullstack Developer',
    company: 'Air France',
    description:
      'Developed web applications and iPad interfaces by gathering, analyzing, and translating business requirements into functional solutions, enhancing user experience and operational efficiency.',
    technologies: [
      { name: 'Java', icon: 'java' },
      { name: 'Angular', icon: 'angular' },
      { name: 'Ionic', icon: 'ionic' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'PostgreSQL', icon: 'postgresql' },
    ],
    workType: 'Hybrid',
    location: 'Toulouse',
    type: 'Full-time',
  },
  {
    id: 'exp-3',
    startDate: new Date('2023-09-01'),
    endDate: new Date('2024-09-01'),
    title: 'Fullstack Developer',
    company: 'Reactomatic',
    description:
      'Created web application designed to allow both professional and individual users to configure a PC by selecting a component, after which the application suggests only compatible components based on the initial selection.',
    technologies: [
      { name: 'NestJS', icon: 'nestjs' },
      { name: 'React', icon: 'react' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Vite', icon: 'vite' },
    ],
    workType: 'On-Site',
    location: 'Toulouse',
    type: 'Student Project',
  },
  {
    id: 'exp-4',
    startDate: new Date('2022-09-01'),
    endDate: new Date('2023-09-01'),
    title: 'Fullstack Developer',
    company: 'Kaleidoscope',
    description:
      "Developed and monitored an application with a modern UI/UX design, aimed at showcasing the most stunning cinematic masterpieces through captivating images from the films. The experience is centered around colors, highlighting various tones and shades, and is uniquely branded as 'Kaleidoscope'.",
    technologies: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'Vite', icon: 'vite' },
    ],
    workType: 'On-Site',
    location: 'Toulouse',
    type: 'Student Project',
  },
]
