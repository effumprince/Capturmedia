const words = ['Photography', 'Videography', 'Graphic Design', 'Branding'];

export default function Marquee() {
  // duplicate the list once so the looping translateX(-50%) animation is seamless
  const items = [...words, ...words];

  return (
    <div className="bg-ink text-white overflow-hidden whitespace-nowrap py-4 border-y border-white/10">
      <div className="inline-flex animate-marquee">
        {items.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="font-display text-[clamp(1.2rem,2.6vw,1.8rem)] uppercase px-8 flex items-center gap-8"
          >
            {word}
            <span className="text-shutter">—</span>
          </span>
        ))}
      </div>
    </div>
  );
}
