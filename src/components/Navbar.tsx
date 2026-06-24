import { useEffect, useState } from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
// import logo from '../assets/logo.png';
import { navLinks } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-[84px] z-[200] flex items-center border-b transition-colors duration-500 ${
        scrolled
          ? 'bg-ink/50 backdrop-blur-md border-ink/10'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-[1320px] w-full mx-auto px-6 sm:px-10 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 font-display text-4xl">
          <img src="https://res.cloudinary.com/dszlo11rt/image/upload/v1769000047/bbbb_gjoyzl.png" alt="Captura Media" className=" w-40" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10 text-[0.92rem] font-medium text-white">
          {navLinks.map((link) => (
            <RouterNavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative py-1 after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-shutter after:transition-all after:duration-300 ${
                  isActive ? 'text-shutter after:w-full' : 'after:w-0 hover:after:w-full'
                }`
              }
            >
              {link.label}
            </RouterNavLink>
          ))}
        </nav>

        {/* Mobile slide-out nav */}
        <nav
          className={`md:hidden fixed top-0 right-0 h-screen w-[min(78vw,360px)] bg-ink text-white flex flex-col justify-center items-start gap-7 px-12 font-display text-2xl uppercase transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] z-[205] ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navLinks.map((link) => (
            <RouterNavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `relative py-1 after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-shutter after:transition-all after:duration-300 ${
                  isActive ? 'text-shutter after:w-full' : 'after:w-0 hover:after:w-full'
                }`
              }
            >
              {link.label}
            </RouterNavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/booking"
            className="inline-flex items-center gap-2.5 font-mono text-[0.78rem] tracking-[0.08em] uppercase px-7 py-4 bg-ink text-white border border-ink rounded-full transition-all duration-300 hover:bg-shutter hover:border-shutter hover:-translate-y-0.5"
          >
            Book a session
            <span className="block w-0 h-0 border-y-4 border-y-transparent border-l-[6px] border-l-current" />
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden flex flex-col gap-[5px] w-6 z-[210]"
        >
          <span
            className={`h-[2px] bg-ink transition-transform duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
          />
          <span className={`h-[2px] bg-ink transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span
            className={`h-[2px] bg-ink transition-transform duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
          />
        </button>
      </div>
    </header>
  );
}
