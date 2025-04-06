import LeftSidebar from '@/components/left-sidebar'
import MainContent from '@/components/main-content'
import GridLayout from '@/components/grid-layout'
import RightSidebar from '@/components/right-sidebar'

export default function Home() {
  return (
    <GridLayout>
      <div className="relative">
        <main className="grid h-screen grid-cols-12">
          <div className="relative col-span-3">
            <LeftSidebar />
          </div>
          <div className="relative col-span-4">
            <MainContent />
          </div>
          <div className="relative col-span-5">
            <RightSidebar />
          </div>
        </main>
      </div>
    </GridLayout>
  )
}
