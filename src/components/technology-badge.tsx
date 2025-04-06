'use client'

import { Technology } from '@/types/experience'
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiStripe,
  SiVercel,
  SiAngular,
  SiIonic,
  SiNestjs,
  SiReact,
  SiDocker,
  SiVite,
} from 'react-icons/si'
import { RiShieldKeyholeFill } from 'react-icons/ri'
import { FaJava } from 'react-icons/fa'

const iconMap: Record<string, React.ReactNode> = {
  nextjs: <SiNextdotjs className="h-6 w-6" />,
  typescript: <SiTypescript className="h-6 w-6" />,
  tailwind: <SiTailwindcss className="h-6 w-6" />,
  postgresql: <SiPostgresql className="h-6 w-6" />,
  stripe: <SiStripe className="h-6 w-6" />,
  clerk: <RiShieldKeyholeFill className="h-6 w-6" />,
  java: <FaJava className="h-6 w-6" />,
  angular: <SiAngular className="h-6 w-6" />,
  ionic: <SiIonic className="h-6 w-6" />,
  nestjs: <SiNestjs className="h-6 w-6" />,
  react: <SiReact className="h-6 w-6" />,
  docker: <SiDocker className="h-6 w-6" />,
  vite: <SiVite className="h-6 w-6" />,
  vercel: <SiVercel className="h-6 w-6" />,
}

interface TechnologyBadgeProps {
  technology: Technology
}

export function TechnologyBadge({ technology }: TechnologyBadgeProps) {
  return (
    <div className="flex items-center gap-1.5">
      {iconMap[technology.icon] || technology.name[0]}
    </div>
  )
}

interface TechnologiesBadgeListProps {
  technologies: Technology[]
}

export function TechnologiesBadgeList({ technologies }: TechnologiesBadgeListProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((tech) => (
        <TechnologyBadge key={tech.name} technology={tech} />
      ))}
    </div>
  )
}
