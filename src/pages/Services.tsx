import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import IrisDivider from '../components/IrisDivider';
import Button from '../components/Button';
import { heroImages, services, catalogItems } from '../data/content';

const packages = [
  {
    tag: 'Photography',
    title: 'Essential',
    text: '4-hour single-photographer coverage with edited gallery delivery.',
    bullets: ['Up to 4 hours coverage', '200+ edited images', 'Online gallery delivery', '7–10 day turnaround'],
    highlight: false,
  },
  {
    tag: 'Videography',
    title: 'Story Film',
    text: 'Full-day coverage with a graded highlight film and raw footage handoff.',
    bullets: ['Full-day coverage', '3–5 min highlight film', 'Color graded & scored', '14-day turnaround'],
    highlight: true,
  },
  {
    tag: 'Design',
    title: 'Brand Set',
    text: 'A flyer or poster set sized for both print and social, two revision rounds included.',
    bullets: ['Up to 3 design concepts', 'Print & social-ready sizes', '2 revision rounds', '3–5 day turnaround'],
    highlight: false,
  },
];

const serviceImages = [catalogItems[1].image, catalogItems[0].image, catalogItems[7].image];

export default function Services() {
  return (
    <>
      <PageHero image={heroImages[2]} crumb="Services" title="Three crafts, fully covered" />

      {services.map((service, i) => {
        const reversed = i === 1;
        const textBlock = (
          <>
            <span className="font-mono text-shutter text-[0.8rem]">
              {service.exifLabel} — Service 0{i + 1}
            </span>
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] mt-3 mb-6">{service.title}</h2>
            <p className="text-[1.05rem] mb-7 text-slate">{service.description}</p>
            <ul className="flex flex-col gap-3">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2.5 items-baseline">
                  <span className="w-[6px] h-[6px] rounded-full bg-shutter flex-shrink-0 translate-y-[-2px]" />
                  {bullet}
                </li>
              ))}
            </ul>
          </>
        );

        const imageBlock = (
          <Reveal variant="scale" className="aspect-[4/5] rounded-sm overflow-hidden img-mask">
            <div className="img-mask-inner">
              <img
                src={serviceImages[i]}
                alt={`${service.title} sample work`}
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        );

        return (
          <div key={service.id}>
            <section id={service.id} className={`py-16 sm:py-28 ${i % 2 === 1 ? 'bg-paper-dim' : ''}`}>
              <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
                <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-16">
                  {reversed ? (
                    <>
                      <div className="order-2 lg:order-1">{imageBlock}</div>
                      <Reveal variant="right" className="order-1 lg:order-2">
                        {textBlock}
                      </Reveal>
                    </>
                  ) : (
                    <>
                      <Reveal variant="left">{textBlock}</Reveal>
                      {imageBlock}
                    </>
                  )}
                </div>
              </div>
            </section>
            {i < services.length - 1 && <IrisDivider />}
          </div>
        );
      })}

      {/* Packages */}
      <section className="py-16 sm:py-28 bg-paper-dim">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
          <Reveal className="flex justify-between items-end gap-8 flex-wrap mb-12 sm:mb-16">
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)]">Starting packages</h2>
            <p className="max-w-[360px] text-[1.02rem] text-slate">
              A baseline to plan from — every quote is adjusted to the actual brief once we talk.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {packages.map((pkg, i) => (
              <Reveal
                key={pkg.title}
                delay={i * 90}
                className={`border rounded-sm p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1.5 ${
                  pkg.highlight ? 'border-ink' : 'border-ink/10 hover:border-ink'
                }`}
              >
                <span className="block font-mono text-[0.75rem] text-shutter mb-5">{pkg.tag}</span>
                <h3 className="text-[1.6rem] mb-3">{pkg.title}</h3>
                <p className="text-[0.95rem] mb-5 text-slate">{pkg.text}</p>
                <ul className="flex flex-col gap-2">
                  {pkg.bullets.map((b) => (
                    <li key={b} className="text-[0.86rem] text-slate flex items-baseline gap-2.5">
                      <span className="w-[5px] h-[5px] rounded-full bg-shutter flex-shrink-0 translate-y-[-2px]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-10">
            <p className="text-[0.9rem] text-slate">
              Need two services together — say a wedding shoot and film?{' '}
              <Link to="/booking" className="text-shutter underline">
                Bundle them in your booking request.
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-28">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-10 text-center">
          <Reveal variant="scale">
            <span className="exif-tag justify-center mb-5">Not sure what you need yet?</span>
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] max-w-[18ch] mx-auto mt-5 mb-8">
              Walk us through the brief.
            </h2>
            <Button to="/booking" variant="primary" className="px-9 py-5 text-[0.85rem]">
              Start a booking
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
