import LeftSidebar from '@/components/left-sidebar'
import MainContent from '@/components/main-content'
import RightSidebar from '@/components/right-sidebar'
import GridLayout from '@/components/grid-layout'
import { ExperienceProvider } from '@/context/experience-context'

export default function Home() {
  return (
    <ExperienceProvider>
      <GridLayout>
        <div className="relative">
          <main className="grid min-h-screen grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-3">
              <LeftSidebar />
            </div>
            <div className="md:col-span-4">
              <MainContent />
            </div>
            <div className="md:col-span-5">
              <RightSidebar />
            </div>
          </main>
        </div>
      </GridLayout>
    </ExperienceProvider>
  )
}
