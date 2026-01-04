import { Calendar } from "lucide-react"

export default function LaporanFilter({ filter, setFilter }) {
  return (
    <div className="flex flex-wrap gap-4 items-end
                    bg-panel dark:bg-darkPanel
                    border border-border dark:border-darkBorder
                    rounded-xl p-4 shadow-soft">

      <div className="relative">
        <Calendar
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
        />
        <input
          type="date"
          value={filter.from}
          onChange={(e) =>
            setFilter({ ...filter, from: e.target.value })
          }
          className="pl-9 pr-3 py-2 rounded-lg border border-border dark:border-darkBorder
                     bg-white dark:bg-darkPanel text-sm"
        />
      </div>

      <div className="relative">
        <Calendar
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
        />
        <input
          type="date"
          value={filter.to}
          onChange={(e) =>
            setFilter({ ...filter, to: e.target.value })
          }
          className="pl-9 pr-3 py-2 rounded-lg border border-border dark:border-darkBorder
                     bg-white dark:bg-darkPanel text-sm"
        />
      </div>
    </div>
  )
}
