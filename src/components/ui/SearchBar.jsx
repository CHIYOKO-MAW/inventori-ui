import { Search } from "lucide-react"

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-72">
      <Search
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
      />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Cari barang..."
        className="w-full pl-9 pr-3 py-2 rounded-lg border border-border text-sm
                   focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  )
}
