'use client'

import { motion } from 'framer-motion'

export default function LeftSidebar() {
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

  return (
    <div className="relative grid h-full grid-rows-[auto_1fr_auto]">
      {/* Barre verticale sur toute la hauteur */}
      <div className="absolute bottom-0 left-6 top-0 w-px bg-neutral-200 dark:bg-neutral-800"></div>

      {/* Section du haut - Nom */}
      <motion.div
        className="flex items-center border-b border-neutral-200 bg-transparent px-6 py-4 dark:border-neutral-800 md:pl-10"
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-xl font-medium" variants={fadeIn}>
          Senouci Moulay
        </motion.h1>
      </motion.div>

      {/* Section du milieu - Potentiellement pour des liens de navigation ou une bio */}
      <motion.div
        className="flex flex-col gap-4 bg-transparent px-6 py-4 md:pl-10"
        initial="hidden"
        animate="visible"
      >
        {/* Contenu futur ici */}
      </motion.div>

      {/* Section du bas - Zone vide ou potentiellement pour des informations de contact */}
      <motion.div
        className="border-t border-neutral-200 bg-transparent py-4 dark:border-neutral-800"
        initial="hidden"
        animate="visible"
      >
        {/* Contenu futur ici */}
      </motion.div>
    </div>
  )
}
