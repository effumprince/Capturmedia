import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import IrisDivider from '../components/IrisDivider';
import StatStrip from '../components/StatStrip';
import Button from '../components/Button';
import { heroImages, catalogItems, coreValues, teamMembers } from '../data/content';

const processSteps = [
  { num: '01', title: 'Brief', text: "We talk through what the day, the brand, or the message actually needs — before any gear comes out." },
  { num: '02', title: 'Capture', text: "Shoot day. One point of contact, a shot list, and a crew that's done this before." },
  { num: '03', title: 'Craft', text: 'Editing, grading and design happen in-house, so nothing gets lost moving between vendors.' },
  { num: '04', title: 'Deliver', text: "Final files, formatted for wherever they're going — print, screen, or feed." },
];

const aboutStats = [
  { value: '150+', label: 'Projects delivered' },
  { value: '4', label: 'Years in business' },
  { value: '3', label: 'Disciplines, one team' },
  { value: '98%', label: 'Client satisfaction' },
];

export default function About() {
  return (
    <>
      <PageHero image={heroImages[1]} crumb="About" title="The studio behind the shutter" />

      {/* Our story */}
      <section className="py-16 sm:py-28">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
          <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-16">
            <Reveal variant="left">
              <span className="exif-tag mb-5">Our story</span>
              <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] mt-5 mb-6">
                Started with one camera and a deadline to keep.
              </h2>
              <p className="text-[1.05rem] mb-5 text-slate">
                Captura Media began in 2021 the way most studios do — one person, one camera, and a
                wedding to shoot on a Saturday with no backup plan. What's changed since is everything
                around that camera: a team, an edit suite, a design desk, and a list of clients who now
                call us for more than one thing at a time.
              </p>
              <p className="text-[1.05rem] text-slate">
                We're still based in Accra, still hands-on with every booking, and still built around
                the same idea — that the people behind the lens, the edit, and the layout should be
                talking to each other, not handing files between agencies.
              </p>
            </Reveal>
            <Reveal variant="scale" className="aspect-[4/5] rounded-sm overflow-hidden img-mask">
              <div className="img-mask-inner">
                <img
                  src={catalogItems[0].image}
                  alt="Captura Media wedding photography in a golden field"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <IrisDivider />

      {/* Vision & Mission */}
      <section className="py-16 sm:py-28 bg-paper-dim">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
          <Reveal className="mb-12 sm:mb-16">
            <span className="exif-tag mb-5">Where we're headed</span>
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] mt-5">Vision &amp; Mission</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-10">
            <Reveal variant="left" className="border border-ink/10 rounded-sm p-8 sm:p-10 bg-paper">
              <span className="block font-mono text-[0.75rem] text-shutter mb-5">Vision</span>
              <h3 className="text-[1.6rem] mb-4">
                To be West Africa's go-to studio for stories worth keeping.
              </h3>
              <p className="text-slate">
                We want Captura to be the first name that comes up when someone's planning a wedding,
                launching a brand, or putting on an event — because the work speaks for itself, long
                after the day is over.
              </p>
            </Reveal>
            <Reveal variant="right" delay={90} className="border border-ink/10 rounded-sm p-8 sm:p-10 bg-paper">
              <span className="block font-mono text-[0.75rem] text-shutter mb-5">Mission</span>
              <h3 className="text-[1.6rem] mb-4">
                One team, three crafts, zero hand-offs.
              </h3>
              <p className="text-slate">
                We exist to give clients photography, video, and design from a single team that
                already knows the brief — so nothing gets lost in translation between vendors, and
                every deliverable feels like it came from the same story.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-28">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
          <Reveal className="flex justify-between items-end gap-8 flex-wrap mb-12 sm:mb-16">
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)]">How we work</h2>
            <p className="max-w-[360px] text-[1.02rem] text-slate">
              The same four-step rhythm whether the job is a wedding, a brand video, or a single flyer.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7">
            {processSteps.map((step, i) => (
              <Reveal
                key={step.num}
                delay={i * 90}
                className="border border-ink/10 rounded-sm p-7 hover:border-ink hover:-translate-y-1.5 transition-all duration-300"
              >
                <span className="block font-mono text-[0.75rem] text-shutter mb-5">{step.num}</span>
                <h3 className="text-[1.3rem] mb-3">{step.title}</h3>
                <p className="text-[0.9rem] text-slate">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <IrisDivider />

      {/* Core Values */}
      <section className="py-16 sm:py-28 bg-paper-dim">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
          <Reveal className="flex justify-between items-end gap-8 flex-wrap mb-12 sm:mb-16">
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)]">Core values</h2>
            <p className="max-w-[360px] text-[1.02rem] text-slate">
              A short list of the things that don't get compromised on, job to job.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-8 sm:gap-10">
            {coreValues.map((value, i) => (
              <Reveal key={value.tag} delay={i * 90}>
                <span className="exif-tag mb-4">{value.tag}</span>
                <h3 className="text-[1.5rem] mt-4 mb-3">{value.title}</h3>
                <p className="text-slate">{value.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-28">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
          <Reveal className="flex justify-between items-end gap-8 flex-wrap mb-12 sm:mb-16">
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)]">The team</h2>
            <p className="max-w-[360px] text-[1.02rem] text-slate">
              A small crew that covers all three crafts — and talks to each other before, during, and
              after every shoot.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member, i) => (
              <Reveal key={member.id} delay={i * 90}>
                <div className="aspect-[4/5] rounded-sm overflow-hidden img-mask mb-5">
                  <div className="img-mask-inner">
                    <img
                      src={member.image}
                      alt={`${member.role} at Captura Media`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <span className="block font-mono text-[0.7rem] tracking-[0.08em] uppercase text-shutter mb-1.5">
                  {member.department}
                </span>
                <h3 className="text-[1.3rem] mb-2 normal-case font-body font-semibold">{member.role}</h3>
                <p className="text-[0.9rem] text-slate">{member.bio}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <p className="text-[0.82rem] text-slate/80 italic">
              Team photos and names placeholder — swap in real headshots and bios when ready.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
          <Reveal>
            <StatStrip stats={aboutStats} />
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-28">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-10 text-center">
          <Reveal variant="scale">
            <span className="exif-tag justify-center mb-5">Want to work with us?</span>
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] max-w-[18ch] mx-auto mt-5 mb-8">
              Tell us what you're planning.
            </h2>
            <Button to="/booking" variant="primary" className="px-9 py-5 text-[0.85rem]">
              Get in touch
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
