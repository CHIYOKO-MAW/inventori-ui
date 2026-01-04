import { motion } from "framer-motion"
import DataTable from "../components/ui/DataTable"
import SearchBar from "../components/ui/SearchBar"
import Button from "../components/ui/Button"

export default function Transaksi() {
  const data = [
    { kode: "TRX001", barang: "Semen", jumlah: 10, tanggal: "2026-01-02" },
    { kode: "TRX002", barang: "Pasir", jumlah: 3, tanggal: "2026-01-02" },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <div>
          <h1>Transaksi</h1>
          <p>Kelola data transaksi</p>
        </div>

        <Button>Tambah Transaksi</Button>
      </div>

      <SearchBar />

      <DataTable
        data={data}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    </motion.section>
  )
}
