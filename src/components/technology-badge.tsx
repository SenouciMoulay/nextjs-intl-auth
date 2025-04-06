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
  nextjs: <SiNextdotjs className="h-4 w-4" />,
  typescript: <SiTypescript className="h-4 w-4" />,
  tailwind: <SiTailwindcss className="h-4 w-4" />,
  postgresql: <SiPostgresql className="h-4 w-4" />,
  stripe: <SiStripe className="h-4 w-4" />,
  clerk: <RiShieldKeyholeFill className="h-4 w-4" />,
  java: <FaJava className="h-4 w-4" />,
  angular: <SiAngular className="h-4 w-4" />,
  ionic: <SiIonic className="h-4 w-4" />,
  nestjs: <SiNestjs className="h-4 w-4" />,
  react: <SiReact className="h-4 w-4" />,
  docker: <SiDocker className="h-4 w-4" />,
  vite: <SiVite className="h-4 w-4" />,
  vercel: <SiVercel className="h-4 w-4" />,
}

interface TechnologyBadgeProps {
  technology: Technology
}

export function TechnologyBadge({ technology }: TechnologyBadgeProps) {
  return (
    <div className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs">
      <div className="text-[hsl(var(--detail-color))]">
        {iconMap[technology.icon] || technology.name[0]}
      </div>
      <span className="text-[hsl(var(--detail-color))]">{technology.name}</span>
    </div>
  )
}

interface TechnologiesBadgeListProps {
  technologies: Technology[]
}

export function TechnologiesBadgeList({ technologies }: TechnologiesBadgeListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <TechnologyBadge key={tech.name} technology={tech} />
      ))}
    </div>
  )
}
