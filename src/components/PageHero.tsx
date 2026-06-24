import { Link } from 'react-router-dom';

interface PageHeroProps {
  image: string;
  crumb: string;
  title: string;
  heightClass?: string;
}

export default function PageHero({ image, crumb, title, heightClass = 'h-[62vh] min-h-[460px] max-h-[820px]' }: PageHeroProps) {
  return (
    <section className={`relative ${heightClass} flex items-end overflow-hidden text-white`}>
      <div
        className="absolute inset-0 animate-slowpan bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/50 to-ink/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/50 to-ink/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.5),transparent_60%)]" />
      <div className="relative z-[2] w-full px-6 sm:px-10 py-10 sm:py-14">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex gap-2 items-center font-mono text-[0.72rem] tracking-[0.1em] uppercase text-white/60 mb-4">
            <Link to="/" className="hover:text-shutter transition-colors">Home</Link>
            <span>/</span>
            <span>{crumb}</span>
          </div>
          <h1 className="text-[clamp(2.4rem,8vh,6.5rem)] leading-[0.98] max-w-[22ch]">{title}</h1>
        </div>
      </div>
    </section>
  );
}
