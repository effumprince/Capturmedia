import HeroSlider from '../components/HeroSlider';
import Marquee from '../components/Marquee';
import Reveal from '../components/Reveal';
import IrisDivider from '../components/IrisDivider';
import ServiceCard from '../components/ServiceCard';
import StatStrip from '../components/StatStrip';
import Button from '../components/Button';
import { services, catalogItems } from '../data/content';

const homeStats = [
  { value: '50+', label: 'Projects delivered' },
  { value: '2', label: 'Years in business' },
  { value: '20+', label: 'Weddings shot' },
  { value: '98%', label: 'Client satisfaction' },
];

export default function Home() {
  // const teaserItems = catalogItems.slice(0, 8); // Show the first 8 items in the catalog as a teaser

  return (
    <>
      <HeroSlider />
      <Marquee />

      {/* Intro / about teaser */}
      <section className="py-16 sm:py-28">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
          <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-16">
            <Reveal variant="left">
              <span className="exif-tag mb-5">01 — Who we are</span>
              <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] mt-5 mb-6">
                One studio.
                <br />
                Three crafts.
                <br />
                <span className="text-shutter">One story.</span>
              </h2>
              <p className="max-w-[480px] text-[1.05rem] mb-8 text-slate">
                Most clients come to us for one thing and stay for all three. A wedding shoot becomes
                a highlight film. A highlight film needs a poster. We built Captura so that hand-off
                never has to happen — your story stays with one team from first frame to final flyer.
              </p>
              <Button to="/about" variant="ghost">More about us</Button>
            </Reveal>
            <Reveal variant="scale" className="aspect-[4/5] rounded-sm overflow-hidden img-mask">
              <div className="img-mask-inner">
                <img
                  src={catalogItems[1].image}
                  alt={catalogItems[1].alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <IrisDivider />

      {/* Services */}
      <section className="py-16 sm:py-28 bg-paper-dim">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
          <Reveal className="flex justify-between items-end gap-8 flex-wrap mb-12 sm:mb-16">
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)]">What we do</h2>
            <p className="max-w-[360px] text-[1.02rem] text-slate">
              Three disciplines, one continuous process — from the first shutter click to the final
              exported file.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={i * 90}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-12">
            <Button to="/services" variant="primary">See full service list</Button>
          </Reveal>
        </div>
      </section>

      {/* Catalog teaser */}
      <section className="py-25" id="catalog">
        <div className=" py-20 mx-auto px-6  sm:px-10">
          <Reveal className="items-center">
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] text-white text-center">VIEW ALL OUR WORKS</h2>
            
          </Reveal>
          {/* <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-7">
            {teaserItems.map((item, i) => (
              <Reveal key={item.id} delay={i * 90} className="aspect-[4/5] rounded-sm overflow-hidden img-mask">
                <div className="img-mask-inner">
                  <img src={item.image} alt={item.alt} className="w-full h-full object-cover" />
                </div>
              </Reveal>
            ))}
          </div> */}
          <Reveal className="text-center mt-12">
            <Button to="/catalog" className='bg-transparent border-2 border-white  py-5 px-5'>
                <p className='text-[18px]'>View full catalog</p>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink text-white">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
          <Reveal>
            <StatStrip stats={homeStats} />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-28">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-10 text-center">
          <Reveal variant="scale">
            <span className="exif-tag justify-center mb-5">Ready when you are</span>
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] max-w-[16ch] mx-auto mt-5 mb-8">
              Let's put your story in frame.
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
