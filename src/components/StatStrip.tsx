interface Stat {
  value: string;
  label: string;
}

interface StatStripProps {
  stats: Stat[];
}

export default function StatStrip({ stats }: StatStripProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-white/10">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`py-8 sm:py-12 px-4 text-center border-white/10
            ${i % 2 === 0 ? 'border-l-0' : 'border-l'}
            sm:border-l ${i === 0 ? 'sm:border-l-0' : ''}`}
        >
          <b className="block font-display text-[clamp(2.2rem,5vw,3.6rem)] text-shutter">{stat.value}</b>
          <span className="font-mono text-[0.7rem] tracking-[0.08em] uppercase text-white/55">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
