import LeftSidebar from '@/components/left-sidebar'
import MainContent from '@/components/main-content'
import RightSidebar from '@/components/right-sidebar'
import { ExperienceProvider } from '@/context/experience-context'

export default function Home() {
  return (
    <ExperienceProvider>
      <div className="relative">
        <main className="grid min-h-screen grid-cols-1 md:grid-cols-12">
          <div className="border-r border-neutral-200 dark:border-neutral-800 md:col-span-3">
            <LeftSidebar />
          </div>
          <div className="border-r border-neutral-200 dark:border-neutral-800 md:col-span-4">
            <MainContent />
          </div>
          <div className="md:col-span-5">
            <RightSidebar />
          </div>
        </main>
      </div>
    </ExperienceProvider>
  )
}
