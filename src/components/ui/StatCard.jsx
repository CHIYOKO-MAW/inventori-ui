export default function StatCard({ label, value, icon: Icon, color }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5">
      <div
        className={`absolute inset-0 opacity-5 bg-gradient-to-br ${color}`}
      />

      <div className="relative flex items-center gap-4">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${color} text-white`}
        >
          <Icon className="h-5 w-5" />
        </div>

        <div>
          <p className="text-xs font-medium text-slate-500">{label}</p>
          <p className="text-xl font-semibold text-slate-900">{value}</p>
        </div>
      </div>
    </div>
  );
}
