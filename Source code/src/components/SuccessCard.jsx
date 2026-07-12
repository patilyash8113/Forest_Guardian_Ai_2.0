import { CheckCircle2, RotateCcw } from 'lucide-react';

// Maps a raw API response into the labeled fields we want to display.
// Falls back gracefully if the API doesn't return every field.
function extractField(data, keys) {
  for (const key of keys) {
    if (data?.[key] !== undefined && data?.[key] !== null && data?.[key] !== '') {
      return data[key];
    }
  }
  return null;
}

const RISK_STYLES = {
  low: 'bg-canopy-100 text-canopy-700 border-canopy-300',
  moderate: 'bg-amber-100 text-amber-700 border-amber-300',
  medium: 'bg-amber-100 text-amber-700 border-amber-300',
  high: 'bg-rust-100 text-rust-600 border-rust-300',
  critical: 'bg-rust-500/10 text-rust-600 border-rust-500',
};

function riskBadgeClass(riskLabel) {
  const key = String(riskLabel || '').toLowerCase();
  return RISK_STYLES[key] || 'bg-canopy-100 text-canopy-700 border-canopy-300';
}

export default function SuccessCard({ response, onReset }) {
  const incidentType = extractField(response, ['incident_type', 'incidentType', 'type']);
  const risk = extractField(response, ['risk', 'risk_level', 'riskLevel']);
  const priority = extractField(response, ['priority', 'priority_level']);
  const riskScore = extractField(response, ['risk_score', 'riskScore', 'score']);
  const recommendation = extractField(response, ['recommendation', 'recommended_action']);
  const summary = extractField(response, ['summary', 'ai_summary']);

  const rows = [
    { label: 'Incident Type', value: incidentType },
    { label: 'Risk', value: risk, badge: true },
    { label: 'Priority', value: priority },
    { label: 'Risk Score', value: riskScore },
  ].filter((r) => r.value !== null);

  return (
    <div className="animate-riseIn rounded-3xl border border-canopy-100 bg-white p-8 shadow-xl shadow-canopy-900/5 sm:p-10">
      <div className="flex flex-col items-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-canopy-50 text-canopy-500">
          <CheckCircle2 size={34} strokeWidth={2} />
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-canopy-900">
          Report Submitted Successfully
        </h2>
        <p className="mt-2 max-w-md text-sm text-canopy-700/70">
          Thank you — your report has been sent for AI analysis. Here's what the system found.
        </p>
      </div>

      {(rows.length > 0 || recommendation || summary) && (
        <div className="mt-8 space-y-5">
          {rows.length > 0 && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {rows.map((row) => (
                <div key={row.label} className="rounded-xl border border-canopy-100 bg-canopy-50/60 px-4 py-3">
                  <p className="eyebrow !text-canopy-500/70">{row.label}</p>
                  {row.badge ? (
                    <span
                      className={`mt-1.5 inline-block rounded-full border px-3 py-1 text-sm font-semibold ${riskBadgeClass(row.value)}`}
                    >
                      {String(row.value)}
                    </span>
                  ) : (
                    <p className="mt-1 font-mono text-lg font-semibold text-canopy-900">
                      {String(row.value)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {recommendation && (
            <div className="rounded-xl border border-amber-300/60 bg-amber-50 px-5 py-4">
              <p className="eyebrow !text-amber-600">Recommendation</p>
              <p className="mt-1.5 text-sm leading-relaxed text-canopy-900">{String(recommendation)}</p>
            </div>
          )}

          {summary && (
            <div className="rounded-xl border border-canopy-100 bg-white px-5 py-4">
              <p className="eyebrow">Summary</p>
              <p className="mt-1.5 text-sm leading-relaxed text-canopy-800">{String(summary)}</p>
            </div>
          )}
        </div>
      )}

      <div className="mt-9 flex justify-center">
        <button onClick={onReset} className="btn-outline-dark">
          <RotateCcw size={16} /> Submit Another Report
        </button>
      </div>
    </div>
  );
}
