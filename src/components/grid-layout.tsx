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
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Lignes horizontales - visibles sur tous les écrans */}
      <motion.div
        className="absolute left-2 right-2 top-16 h-px bg-neutral-300 dark:bg-neutral-800"
        initial="hidden"
        animate="visible"
        variants={lineVariants}
        transition={{ delay: 0.1 }}
      />
      <motion.div
        className="absolute bottom-8 left-2 right-2 h-px bg-neutral-300 dark:bg-neutral-800"
        initial="hidden"
        animate="visible"
        variants={lineVariants}
        transition={{ delay: 0.2 }}
      />

      {/* Lignes verticales - cachées sur mobile, visibles sur desktop */}
      <motion.div
        className="absolute left-6 top-0 hidden h-full w-px bg-neutral-300 dark:bg-neutral-800 md:block"
        initial="hidden"
        animate="visible"
        variants={lineVariants}
        transition={{ delay: 0.3 }}
      />
      <motion.div
        className="absolute left-[25%] top-0 hidden h-full w-px bg-neutral-300 dark:bg-neutral-800 md:block"
        initial="hidden"
        animate="visible"
        variants={lineVariants}
        transition={{ delay: 0.4 }}
      />
      <motion.div
        className="absolute left-[58.33%] top-0 hidden h-full w-px bg-neutral-300 dark:bg-neutral-800 md:block"
        initial="hidden"
        animate="visible"
        variants={lineVariants}
        transition={{ delay: 0.5 }}
      />
      <motion.div
        className="absolute right-6 top-0 hidden h-full w-px bg-neutral-300 dark:bg-neutral-800 md:block"
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
