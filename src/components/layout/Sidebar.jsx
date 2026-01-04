import { NavLink } from "react-router-dom"
import { LayoutDashboard, Receipt, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"

const menu = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Transaksi", path: "/transaksi", icon: Receipt },
  { name: "Laporan", path: "/laporan", icon: BarChart3 },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-panel dark:bg-darkPanel border-r border-border dark:border-darkBorder px-4 py-6">
      <h1 className="text-lg font-semibold text-primary mb-8">
        Proskipaika
      </h1>

      <nav className="space-y-1">
        {menu.map((item) => {
          const Icon = item.icon
          return (
            <NavLink key={item.path} to={item.path}>
              {({ isActive }) => (
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm cursor-pointer
                    ${
                      isActive
                        ? "bg-primary text-white shadow-soft"
                        : "text-muted dark:text-gray-400 hover:bg-surface dark:hover:bg-darkSurface"
                    }`}
                >
                  <Icon size={18} />
                  {item.name}
                </motion.div>
              )}
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}
