export default function Card({ title, children, className = "" }) {
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white shadow-sm
      hover:shadow-md transition ${className}`}
    >
      {title && (
        <div className="px-5 py-4 border-b border-slate-100">
          <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
        </div>
      )}
      <div className="p-5">{children}</div>
    </div>
  );
}
