'use client'

import { useState } from 'react'
import { experiences } from '@/data/experiences'
import { ExperienceItem } from './experience-item'
import { motion } from 'framer-motion'

export function ExperiencesList() {
  const [activeExperience, setActiveExperience] = useState<string | null>(null)

  const handleHover = (id: string) => {
    setActiveExperience(id)
  }

  const handleMouseLeave = () => {
    setActiveExperience(null)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      onMouseLeave={handleMouseLeave}
    >
      {experiences.map((experience, index) => (
        <motion.div
          key={experience.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 100,
                damping: 12,
              },
            },
          }}
        >
          <ExperienceItem
            experience={experience}
            isActive={activeExperience === experience.id}
            onHover={handleHover}
            anyHovered={activeExperience !== null}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}
