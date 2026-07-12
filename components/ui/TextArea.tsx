type TextAreaProps = {
  label?: string;
  placeholder?: string;
};

export function TextArea({ label, placeholder }: TextAreaProps) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-slate-300">
      {label ? <span>{label}</span> : null}
      <textarea className="min-h-32 rounded-xl border border-white/10 bg-[#111827] px-4 py-3 text-slate-100 outline-none ring-0" placeholder={placeholder} />
    </label>
  );
}
