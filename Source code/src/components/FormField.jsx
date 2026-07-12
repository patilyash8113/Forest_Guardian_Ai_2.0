export default function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  required = false,
  as = 'input',
  rows,
  icon: Icon,
  children,
}) {
  const baseClasses =
    'w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-canopy-900 placeholder:text-canopy-900/35 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400/60';
  const stateClasses = error
    ? 'border-rust-500 focus:border-rust-500'
    : 'border-canopy-100 focus:border-canopy-400';

  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-canopy-800">
        {label} {required && <span className="text-rust-500">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <Icon size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-canopy-400" />
        )}
        {as === 'textarea' ? (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows || 5}
            className={`${baseClasses} ${stateClasses} resize-none ${Icon ? 'pl-11' : ''}`}
          />
        ) : as === 'file' ? (
          children
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`${baseClasses} ${stateClasses} ${Icon ? 'pl-11' : ''}`}
          />
        )}
      </div>
      {error && <p className="mt-1.5 text-xs font-medium text-rust-500">{error}</p>}
    </div>
  );
}
