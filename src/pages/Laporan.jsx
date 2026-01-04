import React from "react";
import {
  FileText,
  Calendar,
  Filter,
  Download,
  FileSpreadsheet,
} from "lucide-react";

/**
 * UI ONLY — dummy statis
 * Struktur final, aman untuk integrasi Supabase nanti
 */

const REPORTS = [
  {
    id: 1,
    date: "2026-01-03",
    type: "Masuk",
    product: "Semen Tiga Roda 40kg",
    supplier: "PT Semen Nusantara",
    qty: 50,
  },
  {
    id: 2,
    date: "2026-01-04",
    type: "Keluar",
    product: "Besi Beton 12mm",
    supplier: "-",
    qty: 10,
  },
];

export default function Laporan() {
  const isEmpty = REPORTS.length === 0;

  return (
    <div className="space-y-6">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Laporan Inventori
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Rekapitulasi transaksi dan stok barang
          </p>
        </div>

        {/* EXPORT ACTIONS */}
        <div className="flex gap-2">
          <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
            <FileSpreadsheet className="h-4 w-4" />
            Export Excel
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800">
            <Download className="h-4 w-4" />
            Export PDF
          </button>
        </div>
      </div>

      {/* ================= FILTER PANEL ================= */}
      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <div className="mb-4 flex items-center gap-2">
          <Filter className="h-4 w-4 text-slate-500" />
          <h2 className="text-sm font-semibold text-slate-900">
            Filter Laporan
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          {/* DATE FROM */}
          <div>
            <label className="text-xs font-medium text-slate-600">
              Dari Tanggal
            </label>
            <div className="relative mt-1">
              <Calendar className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="date"
                className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
              />
            </div>
          </div>

          {/* DATE TO */}
          <div>
            <label className="text-xs font-medium text-slate-600">
              Sampai Tanggal
            </label>
            <div className="relative mt-1">
              <Calendar className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="date"
                className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
              />
            </div>
          </div>

          {/* TYPE */}
          <div>
            <label className="text-xs font-medium text-slate-600">
              Jenis Transaksi
            </label>
            <select className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
              <option>Semua</option>
              <option>Barang Masuk</option>
              <option>Barang Keluar</option>
            </select>
          </div>

          {/* PRODUCT */}
          <div>
            <label className="text-xs font-medium text-slate-600">
              Produk
            </label>
            <select className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
              <option>Semua Produk</option>
              <option>Semen Tiga Roda 40kg</option>
              <option>Besi Beton 12mm</option>
            </select>
          </div>
        </div>
      </div>

      {/* ================= TABLE / EMPTY ================= */}
      <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-200 flex items-center gap-2">
          <FileText className="h-4 w-4 text-slate-500" />
          <h2 className="text-sm font-semibold text-slate-900">
            Hasil Laporan
          </h2>
        </div>

        {!isEmpty ? (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr className="text-left text-slate-500">
                  <th className="px-5 py-3 font-medium">Tanggal</th>
                  <th className="px-5 py-3 font-medium">Jenis</th>
                  <th className="px-5 py-3 font-medium">Produk</th>
                  <th className="px-5 py-3 font-medium">Supplier</th>
                  <th className="px-5 py-3 font-medium">Jumlah</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {REPORTS.map((r) => (
                  <tr key={r.id} className="hover:bg-slate-50">
                    <td className="px-5 py-4 text-slate-700">
                      {r.date}
                    </td>
                    <td className="px-5 py-4">
                      <TypeBadge type={r.type} />
                    </td>
                    <td className="px-5 py-4 text-slate-900 font-medium">
                      {r.product}
                    </td>
                    <td className="px-5 py-4 text-slate-700">
                      {r.supplier}
                    </td>
                    <td className="px-5 py-4 text-slate-700">
                      {r.qty}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}

/* ================= SUB COMPONENTS ================= */

function TypeBadge({ type }) {
  const styles =
    type === "Masuk"
      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
      : "bg-amber-50 text-amber-700 border-amber-200";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${styles}`}
    >
      {type}
    </span>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center">
        <FileText className="h-6 w-6 text-slate-400" />
      </div>
      <h3 className="mt-4 text-sm font-medium text-slate-900">
        Tidak ada data laporan
      </h3>
      <p className="mt-1 text-xs text-slate-500 max-w-xs">
        Gunakan filter untuk menampilkan laporan transaksi inventori.
      </p>
    </div>
  );
}
