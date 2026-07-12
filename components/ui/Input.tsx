type InputProps = {
  label?: string;
  placeholder?: string;
};

export function Input({ label, placeholder }: InputProps) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-slate-300">
      {label ? <span>{label}</span> : null}
      <input className="rounded-xl border border-white/10 bg-[#111827] px-4 py-3 text-slate-100 outline-none ring-0 transition focus:border-sky-400/50 focus:bg-[#0f172a]" placeholder={placeholder} />
    </label>
  );
}
