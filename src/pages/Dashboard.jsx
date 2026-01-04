import { Package, ArrowDownCircle, ArrowUpCircle, AlertTriangle } from "lucide-react";
import StatCard from "../components/ui/StatCard";
import Card from "../components/ui/Card";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1>Dashboard</h1>
        <p>Ringkasan kondisi inventori material.</p>
      </div>

      {/* Stat Cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Total Barang"
          value="128"
          icon={Package}
          color="from-slate-700 to-slate-900"
        />
        <StatCard
          label="Barang Masuk"
          value="32"
          icon={ArrowDownCircle}
          color="from-emerald-500 to-emerald-600"
        />
        <StatCard
          label="Barang Keluar"
          value="21"
          icon={ArrowUpCircle}
          color="from-blue-500 to-blue-600"
        />
        <StatCard
          label="Stok Menipis"
          value="5"
          icon={AlertTriangle}
          color="from-amber-500 to-orange-500"
        />
      </div>

      {/* Section bawah */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card title="Peringatan Stok">
          <div className="rounded-lg border border-dashed border-slate-300 p-6 text-center text-slate-500">
            Belum ada peringatan stok kritis.
          </div>
        </Card>

        <Card title="Aktivitas Terakhir">
          <div className="rounded-lg border border-dashed border-slate-300 p-6 text-center text-slate-500">
            Belum ada transaksi terbaru.
          </div>
        </Card>
      </div>
    </div>
  );
}
