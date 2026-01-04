import { Inbox } from "lucide-react";

export default function EmptyState({ title, description }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 p-10 text-center">
      <Inbox className="h-10 w-10 text-slate-400" />
      <h3 className="mt-4 text-sm font-semibold text-slate-800">{title}</h3>
      <p className="mt-1 text-sm text-slate-500">{description}</p>
    </div>
  );
}
