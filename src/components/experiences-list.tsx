'use client'

import { experiences } from '@/data/experiences'
import { ExperienceItem } from './experience-item'
import { motion } from 'framer-motion'

export function ExperiencesList() {
  return (
    <motion.div className="flex flex-col pt-2">
      {experiences.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience} />
      ))}
    </motion.div>
  )
}
