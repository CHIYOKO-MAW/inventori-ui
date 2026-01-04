import Sidebar from "../components/layout/Sidebar"
import Topbar from "../components/layout/Topbar"
import PageWrapper from "../components/layout/PageWrapper"

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-surface dark:bg-darkSurface">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        {/* 🔒 GLOBAL WRAPPER DI SINI */}
        <main className="flex-1 p-6 text-gray-900 dark:text-gray-100">
          <PageWrapper>
            {children}
          </PageWrapper>
        </main>
      </div>
    </div>
  )
}
