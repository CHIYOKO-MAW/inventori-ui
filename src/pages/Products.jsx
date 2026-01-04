import React from "react";
import { Plus, Search, ImageOff, Pencil, Trash2 } from "lucide-react";

/**
 * UI ONLY — dummy data statis
 * Nanti diganti Supabase tanpa ubah struktur UI
 */
const PRODUCTS = [
  {
    id: 1,
    code: "SMN-001",
    name: "Semen Tiga Roda 40kg",
    category: "Semen",
    supplier: "PT Semen Nusantara",
    unit: "sak",
    stock: 120,
    min_stock: 30,
    image_url: "https://via.placeholder.com/64",
  },
  {
    id: 2,
    code: "BSI-002",
    name: "Besi Beton 12mm",
    category: "Besi",
    supplier: "UD Baja Sentosa",
    unit: "batang",
    stock: 18,
    min_stock: 20,
    image_url: "",
  },
];

export default function Products() {
  const isEmpty = PRODUCTS.length === 0;

  return (
    <div className="space-y-6">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Data Barang
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Manajemen master data produk material
          </p>
        </div>

        <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
          <Plus className="h-4 w-4" />
          Tambah Barang
        </button>
      </div>

      {/* ================= FILTER BAR ================= */}
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Cari nama atau kode barang..."
              className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
            />
          </div>

          <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
            <option>Semua Kategori</option>
            <option>Semen</option>
            <option>Besi</option>
            <option>Pasir</option>
            <option>Cat</option>
          </select>

          <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
            <option>Semua Supplier</option>
            <option>PT Semen Nusantara</option>
            <option>UD Baja Sentosa</option>
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
                  <th className="px-5 py-3 font-medium">Produk</th>
                  <th className="px-5 py-3 font-medium">Kategori</th>
                  <th className="px-5 py-3 font-medium">Supplier</th>
                  <th className="px-5 py-3 font-medium">Stok</th>
                  <th className="px-5 py-3 font-medium text-right">
                    Aksi
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {PRODUCTS.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        {/* IMAGE */}
                        {p.image_url ? (
                          <img
                            src={p.image_url}
                            alt={p.name}
                            className="h-12 w-12 rounded-lg object-cover border border-slate-200"
                          />
                        ) : (
                          <div className="h-12 w-12 rounded-lg border border-dashed border-slate-300 flex items-center justify-center">
                            <ImageOff className="h-4 w-4 text-slate-400" />
                          </div>
                        )}

                        {/* INFO */}
                        <div>
                          <p className="font-medium text-slate-900">
                            {p.name}
                          </p>
                          <p className="text-xs text-slate-500">
                            {p.code} · {p.unit}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4 text-slate-700">
                      {p.category}
                    </td>

                    <td className="px-5 py-4 text-slate-700">
                      {p.supplier}
                    </td>

                    <td className="px-5 py-4">
                      <StockBadge
                        stock={p.stock}
                        min={p.min_stock}
                      />
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

function StockBadge({ stock, min }) {
  let color =
    stock <= min
      ? "bg-red-50 text-red-700 border-red-200"
      : stock <= min + 10
      ? "bg-amber-50 text-amber-700 border-amber-200"
      : "bg-emerald-50 text-emerald-700 border-emerald-200";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${color}`}
    >
      {stock} unit
    </span>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center">
        <ImageOff className="h-6 w-6 text-slate-400" />
      </div>
      <h3 className="mt-4 text-sm font-medium text-slate-900">
        Belum ada data barang
      </h3>
      <p className="mt-1 text-xs text-slate-500 max-w-xs">
        Tambahkan produk material untuk mulai mengelola inventori.
      </p>
      <button className="mt-5 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
        <Plus className="h-4 w-4" />
        Tambah Barang
      </button>
    </div>
  );
}
