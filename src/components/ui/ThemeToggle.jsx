import { Moon, Sun } from "lucide-react"

export default function ThemeToggle({ theme, toggle }) {
  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg border border-border dark:border-darkBorder
                 hover:bg-surface dark:hover:bg-darkPanel transition"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={16} />
      ) : (
        <Moon size={16} />
      )}
    </button>
  )
}
