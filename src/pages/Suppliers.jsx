import React from "react";
import { Plus, Search, Phone, MapPin, Pencil, Trash2 } from "lucide-react";

/**
 * UI ONLY — dummy statis
 * Struktur final, aman untuk integrasi Supabase nanti
 */

const SUPPLIERS = [
  {
    id: 1,
    name: "PT Semen Nusantara",
    phone: "0813-5556-6677",
    address: "Cilegon, Banten",
    status: "active",
  },
  {
    id: 2,
    name: "UD Baja Sentosa",
    phone: "0821-1222-3333",
    address: "Serang, Banten",
    status: "inactive",
  },
];

export default function Suppliers() {
  const isEmpty = SUPPLIERS.length === 0;

  return (
    <div className="space-y-6">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Data Supplier
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Manajemen sumber pemasok barang
          </p>
        </div>

        <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
          <Plus className="h-4 w-4" />
          Tambah Supplier
        </button>
      </div>

      {/* ================= FILTER BAR ================= */}
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Cari nama supplier..."
              className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
            />
          </div>

          <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
            <option>Semua Status</option>
            <option>Aktif</option>
            <option>Tidak Aktif</option>
          </select>
        </div>
      </div>

      {/* ================= TABLE / EMPTY ================= */}
      <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
        {!isEmpty ? (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr className="text-left text-slate-500">
                  <th className="px-5 py-3 font-medium">Nama Supplier</th>
                  <th className="px-5 py-3 font-medium">Kontak</th>
                  <th className="px-5 py-3 font-medium">Alamat</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                  <th className="px-5 py-3 font-medium text-right">
                    Aksi
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {SUPPLIERS.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50">
                    <td className="px-5 py-4">
                      <p className="font-medium text-slate-900">
                        {s.name}
                      </p>
                    </td>

                    <td className="px-5 py-4 text-slate-700">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-slate-400" />
                        {s.phone}
                      </div>
                    </td>

                    <td className="px-5 py-4 text-slate-700">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-slate-400" />
                        {s.address}
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <StatusBadge status={s.status} />
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2">
                        <button className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:bg-slate-100">
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button className="rounded-lg border border-slate-200 p-2 text-red-600 hover:bg-red-50">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
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

function StatusBadge({ status }) {
  const styles =
    status === "active"
      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
      : "bg-slate-100 text-slate-600 border-slate-200";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${styles}`}
    >
      {status === "active" ? "Aktif" : "Tidak Aktif"}
    </span>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center">
        <MapPin className="h-6 w-6 text-slate-400" />
      </div>
      <h3 className="mt-4 text-sm font-medium text-slate-900">
        Belum ada data supplier
      </h3>
      <p className="mt-1 text-xs text-slate-500 max-w-xs">
        Tambahkan supplier untuk mengelola sumber pasokan barang.
      </p>
      <button className="mt-5 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
        <Plus className="h-4 w-4" />
        Tambah Supplier
      </button>
    </div>
  );
}
