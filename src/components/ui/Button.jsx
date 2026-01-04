export default function Button({ children, variant = "primary", ...props }) {
  const base =
    "px-4 py-2 rounded-lg text-sm font-medium transition focus:outline-none"

  const variants = {
    primary:
      "bg-primary text-white shadow-soft hover:opacity-90",
    secondary:
      "border border-border dark:border-darkBorder hover:bg-surface dark:hover:bg-darkSurface",
  }

  return (
    <button
      {...props}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </button>
  )
}
