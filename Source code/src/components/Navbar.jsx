import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/report', label: 'Report' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/dashboard', label: 'Dashboard' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu on route change / resize back to desktop
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-amber-400' : 'text-white/85 hover:text-amber-300'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-canopy-900/90 backdrop-blur-lg shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-canopy-900 transition-transform duration-300 group-hover:rotate-12">
            <Leaf size={18} strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            Forest Guardian <span className="text-amber-400">AI</span>
          </span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass} end={link.to === '/'}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/report" className="hidden lg:inline-flex btn-primary !px-5 !py-2.5 text-sm">
          Report Incident
        </Link>

        {/* Mobile hamburger */}
        <button
          className="text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-canopy-900/97 backdrop-blur-lg`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-6 pt-2">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                    isActive ? 'bg-white/10 text-amber-400' : 'text-white/85 hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <Link to="/report" onClick={() => setOpen(false)} className="btn-primary w-full">
              Report Incident
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
