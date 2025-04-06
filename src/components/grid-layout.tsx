'use client'

import { motion } from 'framer-motion'

export default function GridLayout({ children }: { children: React.ReactNode }) {
  // Variantes d'animation pour les lignes
  const lineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Lignes horizontales */}
      <motion.div
        className="absolute left-6 top-0 h-px w-full bg-gray-300"
        initial="hidden"
        animate="visible"
        variants={lineVariants}
      />
      <motion.div
        className="absolute left-0 top-16 h-px w-full bg-gray-300"
        initial="hidden"
        animate="visible"
        variants={lineVariants}
        transition={{ delay: 0.1 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-px w-full bg-gray-300"
        initial="hidden"
        animate="visible"
        variants={lineVariants}
        transition={{ delay: 0.2 }}
      />

      <motion.div
        className="absolute left-6 top-0 h-full w-px bg-gray-300"
        initial="hidden"
        animate="visible"
        variants={lineVariants}
        transition={{ delay: 0.3 }}
      />
      <motion.div
        className="absolute left-[25%] top-0 h-full w-px bg-gray-300"
        initial="hidden"
        animate="visible"
        variants={lineVariants}
        transition={{ delay: 0.4 }}
      />
      <motion.div
        className="absolute left-[58.33%] top-0 h-full w-px bg-gray-300"
        initial="hidden"
        animate="visible"
        variants={lineVariants}
        transition={{ delay: 0.5 }}
      />
      <motion.div
        className="absolute right-0 top-0 h-full w-px bg-gray-300"
        initial="hidden"
        animate="visible"
        variants={lineVariants}
        transition={{ delay: 0.7 }}
      />

      {/* Contenu */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
