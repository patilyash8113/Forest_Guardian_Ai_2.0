import { BarChart3 } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-canopy-50 px-6 pt-24">
      <div className="max-w-lg rounded-3xl border border-canopy-100 bg-white p-10 text-center shadow-glass">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-canopy-500 text-white">
          <BarChart3 size={26} />
        </div>
        <h1 className="mt-6 text-2xl font-semibold text-canopy-900">Monitoring Dashboard</h1>
        <p className="mt-3 text-sm leading-relaxed text-canopy-700/75">
          The live Power BI dashboard — tracking report volume, risk trends, and forest hotspots
          — connects here. Embed your published Power BI report URL in{' '}
          <code className="rounded bg-canopy-50 px-1.5 py-0.5 font-mono text-xs text-canopy-800">
            src/pages/Dashboard.jsx
          </code>{' '}
          to bring it live.
        </p>
      </div>
    </div>
  );
}
