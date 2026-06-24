import type { ServiceSummary } from '../types';

interface ServiceCardProps {
  service: ServiceSummary;
  highlight?: boolean;
}

export default function ServiceCard({ service, highlight = false }: ServiceCardProps) {
  return (
    <div
      className={`border rounded-sm p-7 sm:p-9 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.18)] ${
        highlight ? 'border-ink' : 'border-ink/10 hover:border-ink'
      }`}
    >
      <span className="block font-mono text-[0.75rem] text-shutter mb-5">{service.exifLabel}</span>
      <h3 className="text-[1.7rem] mb-3">{service.title}</h3>
      <p className="text-[0.95rem] mb-5 text-slate">{service.description}</p>
      <ul className="flex flex-col gap-2">
        {service.bullets.map((bullet) => (
          <li key={bullet} className="text-[0.86rem] text-slate flex items-baseline gap-2.5">
            <span className="w-[5px] h-[5px] rounded-full bg-shutter flex-shrink-0 translate-y-[-2px]" />
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
