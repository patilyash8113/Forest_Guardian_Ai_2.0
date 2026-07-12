import { AlertTriangle, X } from 'lucide-react';

export default function ErrorAlert({ message, onDismiss }) {
  return (
    <div className="animate-riseIn flex items-start gap-3 rounded-2xl border border-rust-500/30 bg-rust-500/5 px-5 py-4">
      <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-rust-500/10 text-rust-600">
        <AlertTriangle size={18} />
      </div>
      <div className="flex-1">
        <p className="font-semibold text-rust-600">Report could not be submitted</p>
        <p className="mt-1 text-sm leading-relaxed text-canopy-800/80">{message}</p>
      </div>
      <button
        onClick={onDismiss}
        aria-label="Dismiss error"
        className="mt-0.5 flex-shrink-0 text-canopy-400 transition-colors hover:text-canopy-700"
      >
        <X size={18} />
      </button>
    </div>
  );
}
