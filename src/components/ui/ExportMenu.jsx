import { FileDown } from "lucide-react"
import { motion } from "framer-motion"

export default function ExportMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <button
        onClick={() => alert("Simulasi export PDF / Excel")}
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm
                   bg-primary text-white shadow-soft hover:opacity-90"
      >
        <FileDown size={16} />
        Export
      </button>
    </motion.div>
  )
}
