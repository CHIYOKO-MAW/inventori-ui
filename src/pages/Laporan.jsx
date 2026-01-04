import { motion } from "framer-motion"
import SummaryCard from "../components/ui/SummaryCard"
import ExportMenu from "../components/ui/ExportMenu"

export default function Laporan() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <div>
          <h1>Laporan</h1>
          <p>Ringkasan laporan transaksi</p>
        </div>

        <ExportMenu />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard title="Total Transaksi" value="210" />
        <SummaryCard title="Total Barang Keluar" value="3.200" />
        <SummaryCard title="Total Nilai" value="Rp 21.500.000" />
      </div>
    </motion.section>
  )
}
