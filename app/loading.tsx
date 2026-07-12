export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A] text-slate-100">
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-300 backdrop-blur">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-sky-400" />
        Preparing portfolio experience...
      </div>
    </div>
  );
}
