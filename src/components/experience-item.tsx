'use client'

import { Experience } from '@/types/experience'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import { motion } from 'framer-motion'

interface ExperienceItemProps {
  experience: Experience
  isActive: boolean
  onHover: (id: string) => void
  anyHovered: boolean
}

export function ExperienceItem({ experience, isActive, onHover, anyHovered }: ExperienceItemProps) {
  const handleMouseEnter = () => {
    onHover(experience.id)
  }

  const formatDate = (date: Date | 'present') => {
    if (date === 'present') return 'présent'
    return format(date, 'MMM yyyy', { locale: fr })
  }

  const startYear = new Date(experience.startDate).getFullYear()

  return (
    <div
      className={cn(
        'group relative transition-all duration-300 ease-in-out',
        anyHovered && !isActive && 'text-muted-foreground'
      )}
      onMouseEnter={handleMouseEnter}
      onFocus={handleMouseEnter}
    >
      <div className="relative flex w-7/12 select-none items-center justify-between">
        <div className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{
              opacity: isActive ? 1 : 0,
              x: isActive ? 0 : -10,
            }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
            className="absolute -left-24 text-xl font-medium"
          >
            {startYear}
          </motion.div>

          <h3 className="text-xl font-medium">{experience.company}</h3>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{
            opacity: isActive ? 1 : 0,
            x: isActive ? 0 : 10,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
          className="text-right text-xl font-medium"
        >
          — {experience.workType} / {experience.location}
        </motion.div>
      </div>
    </div>
  )
}
