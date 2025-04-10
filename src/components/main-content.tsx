'use client'

import { ExperiencesList } from './experiences-list'
import { motion } from 'framer-motion'

export default function MainContent() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <div className="grid h-full grid-rows-[auto_1fr_auto]">
      {/* Section du haut - Titre */}
      <motion.div
        className="flex items-center border-b border-neutral-200 bg-transparent px-4 py-4 dark:border-neutral-800"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1 className="text-xl font-medium" variants={fadeIn}>
          Full Stack Developer
        </motion.h1>
      </motion.div>

      {/* Section du milieu - Contenu principal */}
      <motion.div
        className="flex flex-col gap-4 overflow-auto bg-transparent px-4 py-4 pt-16"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div className="flex flex-col gap-4" variants={fadeIn}>
          <h1 className="text-lg font-medium text-[hsl(var(--detail-color))]">Info</h1>
          <p className="text-lg font-medium">
            Hello I'm Moulay. A passionate Freelance fullstack web developer with 2+ years of
            experience, building dynamic and user-friendly applications with TypeScript, React,
            Next.js, Postgres, Java, and more.
          </p>
          <p className="text-lg font-medium">
            I specialize in developing scalable web applications that prioritize user engagement and
            seamless interactions.
          </p>
        </motion.div>
        <motion.div className="flex flex-col gap-4 pt-10" variants={fadeIn}>
          <h1 className="text-lg font-medium text-[hsl(var(--detail-color))]">
            Selected Experiences
          </h1>
          <div>
            <ExperiencesList />
          </div>
        </motion.div>
      </motion.div>

      {/* Section du bas - Zone vide */}
      <motion.div
        className="border-t border-neutral-200 bg-transparent py-4 dark:border-neutral-800"
        initial="hidden"
        animate="visible"
      ></motion.div>
    </div>
  )
}
