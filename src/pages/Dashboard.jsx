import {
  Package,
  ArrowDownCircle,
  ArrowUpCircle,
  AlertTriangle,
} from "lucide-react";

import StatCard from "../components/ui/StatCard";
import Card from "../components/ui/Card";
import StockByCategoryChart from "../components/charts/StockByCategoryChart";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1>Dashboard</h1>
        <p>Monitoring stok dan aktivitas inventori material.</p>
      </div>

      {/* Stat */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Barang" value="128" icon={Package} />
        <StatCard label="Barang Masuk" value="32" icon={ArrowDownCircle} />
        <StatCard label="Barang Keluar" value="21" icon={ArrowUpCircle} />
        <StatCard label="Stok Kritis" value="5" icon={AlertTriangle} />
      </div>

      {/* Chart */}
      <Card title="Distribusi Stok per Kategori">
        <StockByCategoryChart />
      </Card>

      {/* Insight bawah */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card title="Peringatan Stok">
          <div className="rounded-lg bg-amber-50 p-4 text-sm text-amber-800">
            ⚠️ Terdapat 5 item dengan stok di bawah batas minimum.
          </div>
        </Card>

        <Card title="Insight Sistem">
          <p className="text-sm text-slate-600">
            Kategori <b>Semen</b> memiliki jumlah stok tertinggi dan perlu
            pengawasan distribusi agar tidak terjadi penumpukan.
          </p>
        </Card>
      </div>
    </div>
  );
}
