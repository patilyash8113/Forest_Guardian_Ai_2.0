import { Sprout, Zap, Database } from 'lucide-react';
import Treeline from '../components/Treeline';
import { GithubIcon } from '../components/BrandIcons';

const TECH_STACK = [
  { name: 'React', role: 'Frontend interface' },
  { name: 'Vite', role: 'Build tooling' },
  { name: 'n8n', role: 'Workflow automation' },
  { name: 'OpenAI', role: 'Incident analysis & scoring' },
  { name: 'Google Sheets', role: 'Report storage' },
  { name: 'Power BI', role: 'Monitoring dashboards' },
  { name: 'GitHub', role: 'Version control' },
];

const VALUES = [
  {
    icon: Sprout,
    title: 'Built for citizens',
    description:
      'Anyone who spots illegal logging, a fire, poaching, or pollution should be able to report it in under two minutes, from any phone.',
  },
  {
    icon: Zap,
    title: 'AI does the triage',
    description:
      'Rather than every report needing manual review first, AI reads each one and produces a risk score and priority the moment it arrives.',
  },
  {
    icon: Database,
    title: 'Data that compounds',
    description:
      'Every report feeds a shared record, so patterns and hotspots become visible over weeks and months, not just one incident at a time.',
  },
];

export default function About() {
  return (
    <div>
      <section className="relative overflow-hidden bg-canopy-gradient px-6 pb-32 pt-36 text-white lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow !text-moss-300">About the project</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
            A direct line between the forest and the people protecting it
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-white/75">
            Forest Guardian AI is an AI-powered environmental incident reporting platform. It
            helps citizens report forest incidents while automatically assessing risk using AI —
            turning a scattered stream of tips into structured, prioritized reports that
            authorities can act on quickly.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32">
          <Treeline className="h-full w-full" variant="dark" />
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-canopy-100 bg-white p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-canopy-500 text-white">
                  <v.icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-canopy-900">{v.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-canopy-700/80">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-canopy-50 px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Why it matters</p>
            <h2 className="mt-3 text-3xl font-semibold text-canopy-900 sm:text-4xl">
              Forests can't call for help. People can.
            </h2>
            <p className="mt-5 leading-relaxed text-canopy-700/80">
              Most forest damage is first seen by someone nearby — a farmer, a hiker, a resident
              of a bordering village — long before any official patrol arrives. Forest Guardian AI
              gives that person a fast, structured way to report what they saw, and gives
              authorities a consistent way to judge what needs attention first.
            </p>
            <p className="mt-4 leading-relaxed text-canopy-700/80">
              This project supports UN Sustainable Development Goal 15 — Life on Land — which
              calls for protecting, restoring, and promoting sustainable use of terrestrial
              ecosystems.
            </p>
          </div>
          <div className="rounded-3xl border border-canopy-100 bg-white p-8 shadow-glass">
            <div className="flex items-center gap-2 text-canopy-500">
              <GithubIcon size={18} />
              <span className="eyebrow !text-canopy-500">Technologies used</span>
            </div>
            <ul className="mt-5 divide-y divide-canopy-100">
              {TECH_STACK.map((t) => (
                <li key={t.name} className="flex items-center justify-between py-3">
                  <span className="font-medium text-canopy-900">{t.name}</span>
                  <span className="text-sm text-canopy-700/60">{t.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
