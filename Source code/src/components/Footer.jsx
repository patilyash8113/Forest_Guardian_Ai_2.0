import { Link } from 'react-router-dom';
import { Leaf, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Footer() {
  return (
    <footer className="bg-canopy-950 text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-canopy-900">
                <Leaf size={16} strokeWidth={2.5} />
              </span>
              <span className="font-display text-base font-semibold text-white">
                Forest Guardian AI
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Giving every citizen a direct line to report forest incidents — and giving every
              report an AI-assessed risk score authorities can act on.
            </p>
          </div>

          <div>
            <p className="eyebrow !text-moss-400">Navigate</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/report" className="hover:text-amber-400 transition-colors">Report Incident</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow !text-moss-400">Connect</p>
            <div className="mt-4 flex gap-3">
              <a
                href="mailto:contact@forestguardian.ai"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-amber-400 hover:text-amber-400"
              >
                <Mail size={17} />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-amber-400 hover:text-amber-400"
              >
                <GithubIcon size={17} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-amber-400 hover:text-amber-400"
              >
                <LinkedinIcon size={17} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© 2026 Forest Guardian AI. All rights reserved.</p>
          <p>Developed as an SDG 15 Project — Life on Land</p>
        </div>
      </div>
    </footer>
  );
}
