import React from "react";
import {
  Package,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* ================= HEADER ================= */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Dashboard
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Ringkasan kondisi inventori material
        </p>
      </div>

      {/* ================= KPI CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <KpiCard
          title="Total Produk"
          value="32"
          icon={Package}
          gradient="from-indigo-500/10 to-indigo-500/0"
        />
        <KpiCard
          title="Total Stok"
          value="1.284"
          icon={TrendingUp}
          gradient="from-emerald-500/10 to-emerald-500/0"
        />
        <KpiCard
          title="Stok Menipis"
          value="4"
          icon={AlertTriangle}
          gradient="from-amber-500/10 to-amber-500/0"
          danger
        />
        <KpiCard
          title="Transaksi Bulan Ini"
          value="68"
          icon={TrendingDown}
          gradient="from-sky-500/10 to-sky-500/0"
        />
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* ===== LEFT (65%) ===== */}
        <div className="xl:col-span-2 bg-white rounded-xl border border-slate-200">
          <div className="px-6 py-4 border-b border-slate-200">
            <h2 className="text-sm font-semibold text-slate-900">
              Barang dengan Stok Rendah
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Produk yang berada di bawah batas minimum stok
            </p>
          </div>

          {/* EMPTY STATE */}
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-slate-400" />
            </div>
            <h3 className="mt-4 text-sm font-medium text-slate-900">
              Tidak ada barang kritis
            </h3>
            <p className="mt-1 text-xs text-slate-500 max-w-xs">
              Semua stok barang saat ini berada dalam batas aman.
            </p>
          </div>
        </div>

        {/* ===== RIGHT (35%) ===== */}
        <div className="space-y-6">
          {/* BARANG MASUK */}
          <MiniPanel
            title="Barang Masuk"
            subtitle="7 hari terakhir"
            icon={TrendingUp}
            emptyText="Belum ada transaksi barang masuk."
          />

          {/* BARANG KELUAR */}
          <MiniPanel
            title="Barang Keluar"
            subtitle="7 hari terakhir"
            icon={TrendingDown}
            emptyText="Belum ada transaksi barang keluar."
          />
        </div>
      </div>
    </div>
  );
}

/* ================= SUB COMPONENTS ================= */

function KpiCard({ title, value, icon: Icon, gradient, danger }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient}`}
      />
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-slate-500">
            {title}
          </p>
          <p
            className={`mt-1 text-2xl font-semibold ${
              danger ? "text-amber-600" : "text-slate-900"
            }`}
          >
            {value}
          </p>
        </div>
        <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center">
          <Icon className="h-5 w-5 text-slate-600" />
        </div>
      </div>
    </div>
  );
}

function MiniPanel({ title, subtitle, icon: Icon, emptyText }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200">
      <div className="px-5 py-4 border-b border-slate-200 flex items-center gap-2">
        <Icon className="h-4 w-4 text-slate-500" />
        <div>
          <h3 className="text-sm font-semibold text-slate-900">
            {title}
          </h3>
          <p className="text-xs text-slate-500">{subtitle}</p>
        </div>
      </div>

      {/* EMPTY */}
      <div className="px-5 py-10 text-center">
        <p className="text-xs text-slate-500">{emptyText}</p>
      </div>
    </div>
  );
}
