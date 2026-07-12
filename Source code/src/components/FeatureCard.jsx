export default function FeatureCard({ icon: Icon, title, description, index }) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-canopy-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-canopy-900/10 animate-riseIn"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-canopy-50 transition-transform duration-500 group-hover:scale-150" />
      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-canopy-500 text-white shadow-md shadow-canopy-500/30">
          <Icon size={22} strokeWidth={2} />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-canopy-900">{title}</h3>
        <p className="mt-2.5 text-[15px] leading-relaxed text-canopy-700/80">{description}</p>
      </div>
    </div>
  );
}
