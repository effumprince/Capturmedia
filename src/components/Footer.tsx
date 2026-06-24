import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-16 sm:pt-24 pb-8">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 lg:gap-12 pb-10 sm:pb-16 border-b border-white/10">
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logo} alt="Captura Media" className="h-7 w-auto brightness-0 invert" />
            </Link>
            <p className="max-w-[280px] text-sm text-white/70">
              A creative studio for photography, videography and graphic design — based in Accra, working everywhere.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[0.72rem] tracking-[0.1em] uppercase text-white/45 mb-4 font-medium">
              Sitemap
            </h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="text-white/80 text-[0.95rem] hover:text-shutter transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/80 text-[0.95rem] hover:text-shutter transition-colors">About</Link></li>
              <li><Link to="/services" className="text-white/80 text-[0.95rem] hover:text-shutter transition-colors">Services</Link></li>
              <li><Link to="/catalog" className="text-white/80 text-[0.95rem] hover:text-shutter transition-colors">Catalog</Link></li>
              <li><Link to="/booking" className="text-white/80 text-[0.95rem] hover:text-shutter transition-colors">Booking</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[0.72rem] tracking-[0.1em] uppercase text-white/45 mb-4 font-medium">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/services#photography" className="text-white/80 text-[0.95rem] hover:text-shutter transition-colors">Photography</Link></li>
              <li><Link to="/services#videography" className="text-white/80 text-[0.95rem] hover:text-shutter transition-colors">Videography</Link></li>
              <li><Link to="/services#design" className="text-white/80 text-[0.95rem] hover:text-shutter transition-colors">Graphic Design</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[0.72rem] tracking-[0.1em] uppercase text-white/45 mb-4 font-medium">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li><a href="mailto:hello@capturamedia.studio" className="text-white/80 text-[0.95rem] hover:text-shutter transition-colors">hello@capturamedia.studio</a></li>
              <li><a href="tel:+233000000000" className="text-white/80 text-[0.95rem] hover:text-shutter transition-colors">+233 00 000 0000</a></li>
              <li><Link to="/booking#contact" className="text-white/80 text-[0.95rem] hover:text-shutter transition-colors">Accra, Ghana</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-4 pt-7 text-[0.8rem] text-white/45">
          <span>© 2026 Captura Media. All rights reserved.</span>
          <div className="flex gap-3">
            {['IG', 'YT', 'FB'].map((label) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-[38px] h-[38px] rounded-full border border-white/15 flex items-center justify-center text-xs transition-colors hover:bg-shutter hover:border-shutter"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
