import { motion } from "framer-motion"

export default function SummaryCard({ title, value }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 250 }}
      className="bg-panel dark:bg-darkPanel
                 border border-border dark:border-darkBorder
                 rounded-xl p-5 shadow-soft"
    >
      <p className="text-sm text-muted">{title}</p>
      <p className="text-2xl font-semibold mt-1">{value}</p>
    </motion.div>
  )
}
