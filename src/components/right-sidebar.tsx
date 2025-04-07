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
    <div className="relative grid h-full grid-rows-[auto_1fr_auto]">
      {/* Barre verticale sur toute la hauteur */}
      <div className="absolute bottom-0 right-6 top-0 w-px bg-neutral-200 dark:bg-neutral-800"></div>

      {/* Section du haut - Titre */}
      <motion.div
        className="flex items-center border-b border-neutral-200 bg-transparent px-6 py-4 dark:border-neutral-800"
        initial="hidden"
        animate="visible"
      >
        <div className="flex w-full items-center justify-between">
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
        </div>
      </motion.div>

      {/* Section du milieu - Contenu principal */}
      <div className="overflow-auto bg-transparent px-6 py-4 pt-16">
        <AnimatePresence mode="wait">
          {activeExperience ? (
            <motion.div
              key={activeExperience.id}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col gap-6"
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
                  {activeExperience.title} · {activeExperience.workType} ·{' '}
                  {activeExperience.location}
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
              className="flex flex-col gap-2"
            >
              <p className="text-muted-foreground">
                Sélectionnez une expérience pour voir les détails
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Section du bas - Zone vide */}
      <motion.div
        className="border-t border-neutral-200 bg-transparent py-4 dark:border-neutral-800"
        initial="hidden"
        animate="visible"
      ></motion.div>
    </div>
  )
}
