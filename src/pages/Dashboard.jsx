import { motion } from "framer-motion"
import StatCard from "../components/ui/StatCard"

export default function Dashboard() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="space-y-6"
    >
      <h1>Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Barang" value="128" />
        <StatCard title="Transaksi Hari Ini" value="12" />
        <StatCard title="Stok Menipis" value="4" />
      </div>
    </motion.section>
  )
}
