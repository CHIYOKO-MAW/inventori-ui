import { useEffect, useState } from "react"

export default function useTheme() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  )

  useEffect(() => {
    const root = document.documentElement
    theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark")

    localStorage.setItem("theme", theme)
  }, [theme])

  return { theme, setTheme }
}
