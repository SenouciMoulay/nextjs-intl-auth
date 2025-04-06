'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useExperience } from '@/context/experience-context'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TechnologiesBadgeList } from './technology-badge'

export default function RightSidebar() {
  const { activeExperience, setActiveExperience } = useExperience()

  const handleClose = () => {
    setActiveExperience(null)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      x: 300,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        duration: 0.5,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  }

  const formatDate = (date: Date | 'present') => {
    if (date === 'present') return 'Present'
    return format(date, 'MMM yyyy', { locale: fr })
  }

  return (
    <div className="flex h-full flex-col gap-4 overflow-hidden px-6 pt-5">
      <div className="flex items-center justify-between">
        <AnimatePresence mode="wait">
          <motion.h1
            key={activeExperience ? activeExperience.id : 'empty'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="text-xl font-medium"
          >
            {activeExperience ? activeExperience.company : 'Projets'}
          </motion.h1>
        </AnimatePresence>

        {activeExperience && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClose}
            className="flex h-8 w-8 items-center justify-center pr-4 transition-colors hover:text-muted-foreground"
          >
            <X size={16} />
          </motion.button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {activeExperience ? (
          <motion.div
            key={activeExperience.id}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col gap-6 pt-16"
          >
            <motion.div variants={childVariants} className="flex flex-col gap-1">
              <p
                className={cn(
                  'text-muted-foreground',
                  activeExperience.endDate === 'present' &&
                    'animate-pulse text-[hsl(var(--detail-color))]'
                )}
              >
                {formatDate(activeExperience.startDate)} - {formatDate(activeExperience.endDate)}
              </p>
              <p className="mt-1 text-muted-foreground">
                {activeExperience.title} · {activeExperience.workType} · {activeExperience.location}
              </p>
            </motion.div>

            <motion.div variants={childVariants} className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">Description</h3>
              <p className="text-muted-foreground">{activeExperience.description}</p>
            </motion.div>

            <motion.div variants={childVariants} className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">Technologies</h3>
              <TechnologiesBadgeList technologies={activeExperience.technologies} />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="empty-state"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mt-4 flex flex-col gap-2"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
