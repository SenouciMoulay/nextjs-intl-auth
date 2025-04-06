'use client'

import { Experience } from '@/types/experience'
import { createContext, useContext, useState, ReactNode } from 'react'

type ExperienceContextType = {
  activeExperience: Experience | null
  hoveredExperienceId: string | null
  setActiveExperience: (experience: Experience | null) => void
  setHoveredExperienceId: (id: string | null) => void
}

const ExperienceContext = createContext<ExperienceContextType | undefined>(undefined)

export function ExperienceProvider({ children }: { children: ReactNode }) {
  const [activeExperience, setActiveExperience] = useState<Experience | null>(null)
  const [hoveredExperienceId, setHoveredExperienceId] = useState<string | null>(null)

  return (
    <ExperienceContext.Provider
      value={{
        activeExperience,
        hoveredExperienceId,
        setActiveExperience,
        setHoveredExperienceId,
      }}
    >
      {children}
    </ExperienceContext.Provider>
  )
}

export function useExperience() {
  const context = useContext(ExperienceContext)
  if (context === undefined) {
    throw new Error('useExperience must be used within an ExperienceProvider')
  }
  return context
}
