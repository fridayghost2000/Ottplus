import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

export function MainLayout() {
  return (
    <div className="min-h-screen bg-white text-[#181D27] flex flex-col font-sans selection:bg-[#7A5AF8] selection:text-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
