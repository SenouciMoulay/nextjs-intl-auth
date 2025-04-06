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
    <motion.div
      className="flex flex-col gap-4 px-6 pt-5 md:pl-10"
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="text-xl font-medium" variants={fadeIn}>
        Senouci Moulay
      </motion.h1>
    </motion.div>
  )
}
