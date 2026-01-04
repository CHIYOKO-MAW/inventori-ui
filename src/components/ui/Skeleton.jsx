import { motion } from "framer-motion"

export default function Skeleton({ className = "" }) {
  return (
    <motion.div
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 1.2, repeat: Infinity }}
      className={`rounded-lg bg-gray-200 dark:bg-gray-700 ${className}`}
    />
  )
}
