import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Package,
  ArrowDownCircle,
  ArrowUpCircle,
  AlertTriangle,
} from "lucide-react";

const statCards = [
  {
    title: "Total Barang",
    value: 128,
    icon: Package,
    bg: "bg-slate-100",
  },
  {
    title: "Barang Masuk",
    value: 32,
    icon: ArrowDownCircle,
    bg: "bg-emerald-50",
  },
  {
    title: "Barang Keluar",
    value: 21,
    icon: ArrowUpCircle,
    bg: "bg-blue-50",
  },
  {
    title: "Stok Menipis",
    value: 5,
    icon: AlertTriangle,
    bg: "bg-yellow-50",
  },
];

const stokKategori = [
  { name: "Semen", stok: 420 },
  { name: "Pasir", stok: 300 },
  { name: "Batu Bata", stok: 260 },
  { name: "Besi", stok: 180 },
  { name: "Cat", stok: 140 },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-800">
          Dashboard
        </h1>
        <p className="text-sm text-slate-500">
          Ringkasan kondisi inventori material
        </p>
      </div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {statCards.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className={`rounded-xl p-5 border border-slate-200 ${item.bg}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">
                    {item.title}
                  </p>
                  <p className="text-2xl font-bold text-slate-800">
                    {item.value}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-white shadow-sm">
                  <Icon className="w-5 h-5 text-yellow-500" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* CHART */}
        <div className="xl:col-span-2 rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Stok per Kategori
          </h2>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stokKategori}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="stok" fill="#facc15" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AKTIVITAS */}
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Aktivitas Terakhir
          </h2>

          <div className="flex flex-col items-center justify-center h-56 text-center text-slate-400 border border-dashed rounded-lg">
            <p className="text-sm">
              Belum ada aktivitas terbaru
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
