type InputProps = {
  label?: string;
  placeholder?: string;
};

export function Input({ label, placeholder }: InputProps) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
      {label ? <span>{label}</span> : null}
      <input className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0" placeholder={placeholder} />
    </label>
  );
}
