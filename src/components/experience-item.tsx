'use client'

import { Experience } from '@/types/experience'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import { motion } from 'framer-motion'
import { useExperience } from '@/context/experience-context'

interface ExperienceItemProps {
  experience: Experience
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  const { activeExperience, hoveredExperienceId, setActiveExperience, setHoveredExperienceId } =
    useExperience()

  const isActive = hoveredExperienceId === experience.id
  const anyHovered = hoveredExperienceId !== null
  const isSelected = activeExperience?.id === experience.id

  const handleMouseEnter = () => {
    setHoveredExperienceId(experience.id)
  }

  const handleMouseLeave = () => {
    setHoveredExperienceId(null)
  }

  const handleClick = () => {
    setActiveExperience(isSelected ? null : experience)
  }

  const formatDate = (date: Date | 'present') => {
    if (date === 'present') return 'présent'
    return format(date, 'MMM yyyy', { locale: fr })
  }

  const startYear = new Date(experience.startDate).getFullYear()

  return (
    <div
      className={cn(
        'group relative cursor-pointer transition-all duration-300 ease-in-out',
        anyHovered && !isActive && 'text-foreground',
        isSelected && 'text-primary',
        isActive && 'text-[hsl(var(--detail-color))]',
        isSelected && 'text-[hsl(var(--detail-color))]'
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onClick={handleClick}
    >
      <div className="w-12/12 relative flex flex-col md:flex-row md:items-center md:justify-between lg:w-9/12">
        <div className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{
              opacity: isActive || isSelected ? 1 : 0,
              x: isActive || isSelected ? 0 : -10,
            }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
            className="absolute -left-4 text-lg font-medium text-red-600 md:-left-24"
          >
            {startYear}
          </motion.div>

          <h3 className={cn('text-lg font-medium', isSelected && 'font-semibold')}>
            {experience.company}
          </h3>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{
            opacity: isActive || isSelected ? 1 : 0,
            x: isActive || isSelected ? 0 : 10,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
          className="mt-1 text-left text-lg font-medium md:mt-0 md:text-right"
        >
          — {experience.location}
        </motion.div>
      </div>
    </div>
  )
}
