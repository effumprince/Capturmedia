import { useEffect, useState } from 'react';
import { heroImages } from '../data/content';

const SLIDE_INTERVAL = 5000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % heroImages.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-screen min-h-[640px] max-h-[1100px] flex items-center overflow-hidden text-white">
      {/* Crossfading background slides */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((src, i) => (
          <div
            key={src}
            className={`hero-slide ${i === current ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      {/* Gradient overlays — vertical depth gradient plus a darker corner
          vignette so the title/foreground text stays readable no matter
          which photo is active underneath it */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-ink/55 via-ink/55 to-ink/55" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-ink/55 via-ink/55 to-ink/55" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.55),transparent_60%)]" />
      <div className="absolute inset-0 z-[1] hero-grid-overlay pointer-events-none" />

      {/* Dot navigation */}
      <div className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 z-[3] hidden sm:flex flex-col gap-3">
        {heroImages.map((src, i) => (
          <button
            key={src}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? 'bg-shutter scale-125' : 'bg-white/35'
            }`}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <div className="absolute left-6 sm:left-10 bottom-6 sm:bottom-10 z-[3] hidden sm:flex items-center gap-3 font-mono text-[0.68rem] tracking-[0.1em] uppercase text-white/70">
        <span className="scroll-cue-line" />
        Scroll
      </div>

      {/* Foreground content */}
      <div className="relative z-[2] w-full px-6 sm:px-10  sm:py-14">
        <div className="max-w-[1320px] mx-auto">
          <div className="animate-rise mb-4" style={{ animationDelay: '300ms' }}>
            <span className="exif-tag">Photography — Videography — Graphic Design</span>
          </div>

          <h1 className="lg:text-[clamp(2.9rem,17vh,9rem)] md:text-[clamp(1.5rem,15vh,5rem)] sm:text-[clamp(1.5rem,13vh,5rem)] text-[clamp(1.5rem,10vh,5rem)] leading-[0.95] max-w-[18ch]">
            <span className="hero-title-line">
              <b style={{ animationDelay: '450ms' }}>Creating Visually</b>
            </span>
            <span className="hero-title-line">
              <b style={{ animationDelay: '600ms', color: 'var(--color-shutter)' }}>Appealing Design</b>
            </span>
            <span className="hero-title-line">
              <b style={{ animationDelay: '750ms' }}>People Love.</b>
            </span>
          </h1>

          <div
            className="flex justify-between items-end mt-6 sm:mt-10 gap-8 flex-wrap animate-rise"
            style={{ animationDelay: '1000ms' }}
          >
            <p className="max-w-[420px] text-white/80 text-base">
             We amplify brands through authentic visual storytelling, crafting impactful multimedia experience that spark meaningful connections
             drive business growth, and leave a lasting impression on their audiences
            </p>
            <div className="flex gap-6 sm:gap-10 font-mono text-[0.72rem] tracking-[0.06em] uppercase text-white/65">
              <div>
                Founded
                <b className="block text-white font-mono text-[0.95rem] mt-1 font-medium">2025</b>
              </div>
              <div>
                Based
                <b className="block text-white font-mono text-[0.95rem] mt-1 font-medium">Accra, GH</b>
              </div>
              <div>
                Projects
                <b className="block text-white font-mono text-[0.95rem] mt-1 font-medium">40+</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
