import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@forestguardian.ai',
    href: 'mailto:contact@forestguardian.ai',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/forest-guardian-ai',
    href: 'https://github.com/',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/company/forest-guardian-ai',
    href: 'https://linkedin.com/',
  },
];

export default function Contact() {
  return (
    <div className="bg-canopy-50 pb-24 pt-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center">
          <p className="eyebrow justify-center">Get in touch</p>
          <h1 className="mt-3 text-4xl font-semibold text-canopy-900 sm:text-5xl">
            We'd like to hear from you
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-canopy-700/80">
            Questions about the platform, partnership interest, or feedback on a report you
            filed — reach us through any of the channels below.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {CONTACT_METHODS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-4 rounded-2xl border border-canopy-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-canopy-900/10"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-canopy-500 text-white transition-transform duration-300 group-hover:scale-110">
                <c.icon size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="eyebrow">{c.label}</p>
                <p className="mt-0.5 truncate font-medium text-canopy-900">{c.value}</p>
              </div>
              <ArrowUpRight
                size={18}
                className="flex-shrink-0 text-canopy-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber-500"
              />
            </a>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-canopy-100 bg-white p-8 text-center shadow-sm sm:p-10">
          <h2 className="text-xl font-semibold text-canopy-900">Reporting an active emergency?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-canopy-700/75">
            For fires or incidents in progress, contact local emergency services directly, then
            file a report here so it's on record.
          </p>
        </div>
      </div>
    </div>
  );
}
