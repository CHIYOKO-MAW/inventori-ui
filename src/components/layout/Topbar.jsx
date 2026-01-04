import { Moon, Sun } from "lucide-react"
import useTheme from "../../hooks/useTheme"

export default function Topbar() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="h-14 px-6 flex items-center justify-between
      bg-panel dark:bg-darkPanel
      border-b border-border dark:border-darkBorder">

      <p className="text-sm text-muted dark:text-gray-400">
        Sistem Informasi Inventori
      </p>

      <button
        onClick={() =>
          setTheme(theme === "dark" ? "light" : "dark")
        }
        className="p-2 rounded-lg border border-border dark:border-darkBorder
                   hover:bg-surface dark:hover:bg-darkSurface transition"
      >
        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    </header>
  )
}
