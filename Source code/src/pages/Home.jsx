import { Link } from 'react-router-dom';
import { ArrowRight, BrainCircuit, Radar, ShieldCheck, FileWarning, Cpu, Gauge, Send } from 'lucide-react';
import Treeline from '../components/Treeline';
import FeatureCard from '../components/FeatureCard';

const FEATURES = [
  {
    icon: BrainCircuit,
    title: 'AI Incident Analysis',
    description:
      'Every report is read and classified automatically — logging, fire, poaching, pollution, or encroachment — so nothing sits unsorted in an inbox.',
  },
  {
    icon: Radar,
    title: 'Real-Time Risk Assessment',
    description:
      'Reports are scored the moment they arrive, weighing severity, location sensitivity, and urgency into a single risk score authorities can trust.',
  },
  {
    icon: ShieldCheck,
    title: 'Environmental Monitoring',
    description:
      'Patterns across reports surface hotspots over time, turning scattered citizen tips into a live picture of forest health.',
  },
];

const STEPS = [
  {
    icon: FileWarning,
    title: 'Citizen reports incident',
    description: 'A resident submits what they saw — location, description, and a photo if they have one.',
  },
  {
    icon: Cpu,
    title: 'AI analyzes report',
    description: 'The system reads the description and classifies the incident type automatically.',
  },
  {
    icon: Gauge,
    title: 'Risk score generated',
    description: 'Severity and urgency are weighed into a risk score and priority level.',
  },
  {
    icon: Send,
    title: 'Authorities receive recommendation',
    description: 'Forest officers get the report, the score, and a recommended response — ready to act on.',
  },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-canopy-gradient pb-40 pt-40 text-white">
        {/* Ambient drifting leaves — decorative only */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[8%] top-[22%] h-2 w-2 rounded-full bg-amber-400/40 animate-drift" />
          <div className="absolute left-[75%] top-[35%] h-3 w-3 rounded-full bg-moss-400/30 animate-drift [animation-delay:1.2s]" />
          <div className="absolute left-[40%] top-[15%] h-2 w-2 rounded-full bg-amber-300/30 animate-drift [animation-delay:2.4s]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(116,165,127,0.18),transparent_60%)]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 !text-moss-300">
            SDG 15 · Life on Land
          </span>

          <h1 className="mt-7 font-display text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Forest Guardian <span className="text-amber-400">AI</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            AI-Powered Forest Incident Reporting and Risk Assessment Platform
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/report" className="btn-primary w-full sm:w-auto">
              Report Incident <ArrowRight size={18} />
            </Link>
            <a href="#how-it-works" className="btn-secondary w-full sm:w-auto">
              Learn More
            </a>
          </div>
        </div>

        {/* Signature treeline silhouette anchoring the hero to its subject */}
        <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-48">
          <Treeline className="h-full w-full" variant="dark" />
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="relative -mt-20 px-6 pb-24 lg:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-canopy-50 px-6 py-24 lg:px-10 scroll-mt-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">How it works</p>
            <h2 className="mt-3 text-3xl font-semibold text-canopy-900 sm:text-4xl">
              From a citizen's report to a ranger's action
            </h2>
            <p className="mt-4 text-canopy-700/80">
              Four steps take a report from your phone to the desk of the people who can respond.
            </p>
          </div>

          <div className="relative mt-16">
            {/* Connecting trail line, desktop only */}
            <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-canopy-300 to-transparent lg:block" />

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((step, i) => (
                <div key={step.title} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border-4 border-canopy-50 bg-canopy-500 text-white shadow-lg shadow-canopy-500/25">
                    <step.icon size={28} strokeWidth={2} />
                  </div>
                  <span className="mt-4 font-mono text-xs font-semibold tracking-widest text-moss-500">
                    STEP {i + 1}
                  </span>
                  <h3 className="mt-1.5 text-lg font-semibold text-canopy-900">{step.title}</h3>
                  <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-canopy-700/75">
                    {step.description}
                  </p>
                  {i < STEPS.length - 1 && (
                    <span className="mt-4 text-canopy-300 sm:hidden" aria-hidden="true">
                      ↓
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-canopy-900 px-6 py-20 text-center text-white lg:px-10">
        <h2 className="text-3xl font-semibold sm:text-4xl">Seen something wrong in the forest?</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          It takes less than two minutes to file a report — and it could be the reason a response
          arrives in time.
        </p>
        <Link to="/report" className="btn-primary mt-8 inline-flex">
          Report Incident <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
