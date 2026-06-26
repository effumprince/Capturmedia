// import { useState, type FormEvent, type ReactNode } from 'react';
// import PageHero from '../components/PageHero';
// import Reveal from '../components/Reveal';
// import { heroImages } from '../data/content';
// import type { BookingFormState, ServiceCategory } from '../types';

// const serviceOptions: { id: ServiceCategory; label: string }[] = [
//   { id: 'photography', label: 'Photography' },
//   { id: 'videography', label: 'Videography' },
//   { id: 'design', label: 'Graphic Design' },
// ];

// const eventTypes = [
//   'Wedding',
//   'Portrait session',
//   'Corporate / event',
//   'Brand video',
//   'Flyer / poster design',
//   'Other',
// ];

// const initialState: BookingFormState = {
//   services: [],
//   name: '',
//   email: '',
//   phone: '',
//   date: '',
//   eventType: eventTypes[0],
//   message: '',
// };

// const inputClass =
//   'w-full px-4 py-3.5 border border-ink/10 rounded-sm bg-white font-body text-[0.96rem] text-ink transition-colors duration-300 focus:outline-none focus:border-shutter';

// const labelClass = 'block font-mono text-[0.72rem] tracking-[0.08em] uppercase text-slate mb-2.5';

// export default function Booking() {
//   const [form, setForm] = useState<BookingFormState>(initialState);
//   const [submitted, setSubmitted] = useState(false);

//   const toggleService = (id: ServiceCategory) => {
//     setForm((prev) => ({
//       ...prev,
//       services: prev.services.includes(id)
//         ? prev.services.filter((s) => s !== id)
//         : [...prev.services, id],
//     }));
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // In production this would POST to a backend or booking service.
//     // Wired here as a client-side success state since no backend is connected yet.
//     setSubmitted(true);
//   };

//   return (
//     <>
//       <PageHero
//         image={heroImages[1]}
//         crumb="Booking & Contact"
//         title="Let's get this booked"
//         heightClass="h-[48vh] min-h-[360px] max-h-[600px]"
//       />

//       <section id="contact" className="py-16 sm:py-28">
//         <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
//           <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">
//             {/* Info side */}
//             <Reveal variant="left">
//               <span className="exif-tag mb-5">Reach us directly</span>
//               <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] mt-5 mb-5">
//                 Prefer to talk first? <span className="text-shutter">That works too.</span>
//               </h2>
//               <p className="mb-8 text-slate">
//                 Fill out the form for a formal booking request, or reach us directly through any of
//                 the channels below — most messages get a reply within a day.
//               </p>

//               <div className="border border-ink/10 rounded-sm p-8 mb-6">
//                 <InfoRow title="Email">
//                   <a href="mailto:capturamedia2025@gmail.com" className="hover:text-shutter">
//                     capturamedia2025@gmail.com
//                   </a>
//                 </InfoRow>
//                 <InfoRow title="Phone & WhatsApp">
//                   <a href="tel:+233537117760" className="hover:text-shutter">
//                     +233 537 117 760 /
//                     +233 509 254 431
//                   </a>
//                 </InfoRow>
//                 <InfoRow title="Studio">Accra, Ghana — by appointment</InfoRow>
//                 <InfoRow title="Hours" last>
//                   Mon – Sat, 9am – 6pm GMT
//                 </InfoRow>
//               </div>

//               <p className="text-[0.85rem] text-slate">
//                 Booking dates fill up fastest for weekend weddings — for Saturday dates, we recommend
//                 reaching out at least 4–6 weeks ahead.
//               </p>
//             </Reveal>

//             {/* Form side */}
//             <Reveal variant="right">
//               {!submitted ? (
//                 <form onSubmit={handleSubmit} className="border border-ink/10 rounded-sm p-7 sm:p-11">
//                   <div className="mb-6">
//                     <label className={labelClass}>Which service(s)?</label>
//                     <div className="flex gap-2.5 flex-wrap">
//                       {serviceOptions.map((opt) => {
//                         const checked = form.services.includes(opt.id);
//                         return (
//                           <button
//                             type="button"
//                             key={opt.id}
//                             onClick={() => toggleService(opt.id)}
//                             aria-pressed={checked}
//                             className={`px-5 py-2.5 border rounded-full text-[0.82rem] transition-all duration-300 ${
//                               checked
//                                 ? 'bg-ink text-white border-ink'
//                                 : 'border-ink/10 hover:border-ink'
//                             }`}
//                           >
//                             {opt.label}
//                           </button>
//                         );
//                       })}
//                     </div>
//                   </div>

//                   <div className="grid sm:grid-cols-2 gap-5 mb-6">
//                     <div>
//                       <label htmlFor="name" className={labelClass}>Full name</label>
//                       <input
//                         id="name"
//                         type="text"
//                         required
//                         placeholder="Ama Owusu"
//                         className={inputClass}
//                         value={form.name}
//                         onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="email" className={labelClass}>Email</label>
//                       <input
//                         id="email"
//                         type="email"
//                         required
//                         placeholder="you@email.com"
//                         className={inputClass}
//                         value={form.email}
//                         onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
//                       />
//                     </div>
//                   </div>

//                   <div className="grid sm:grid-cols-2 gap-5 mb-6">
//                     <div>
//                       <label htmlFor="phone" className={labelClass}>Phone / WhatsApp</label>
//                       <input
//                         id="phone"
//                         type="tel"
//                         placeholder="+233 00 000 0000"
//                         className={inputClass}
//                         value={form.phone}
//                         onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="date" className={labelClass}>Preferred date</label>
//                       <input
//                         id="date"
//                         type="date"
//                         className={inputClass}
//                         value={form.date}
//                         onChange={(e) => setForm((p) => ({ ...p, date: e.target.value }))}
//                       />
//                     </div>
//                   </div>

//                   <div className="mb-6">
//                     <label htmlFor="eventType" className={labelClass}>Project type</label>
//                     <select
//                       id="eventType"
//                       className={inputClass}
//                       value={form.eventType}
//                       onChange={(e) => setForm((p) => ({ ...p, eventType: e.target.value }))}
//                     >
//                       {eventTypes.map((t) => (
//                         <option key={t} value={t}>{t}</option>
//                       ))}
//                     </select>
//                   </div>

//                   <div className="mb-7">
//                     <label htmlFor="message" className={labelClass}>Tell us about the project</label>
//                     <textarea
//                       id="message"
//                       rows={5}
//                       required
//                       placeholder="Date, location, what you have in mind..."
//                       className={inputClass}
//                       value={form.message}
//                       onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     className="group w-full flex items-center justify-center gap-2.5 bg-ink text-white font-mono text-[0.85rem] tracking-[0.08em] uppercase py-4 rounded-full transition-all duration-300 hover:bg-shutter"
//                   >
//                     Send booking request
//                     <span className="block w-0 h-0 border-y-4 border-y-transparent border-l-[6px] border-l-current transition-transform duration-300 group-hover:translate-x-0.5" />
//                   </button>
//                 </form>
//               ) : (
//                 <div className="border border-ink/10 rounded-sm p-10 sm:p-14 text-center">
//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.6"
//                     className="w-14 h-14 mx-auto mb-5 text-shutter"
//                   >
//                     <circle cx="12" cy="12" r="10" />
//                     <path d="M8 12.5l2.7 2.7L16 9.5" />
//                   </svg>
//                   <h3 className="text-2xl mb-3">Request received</h3>
//                   <p className="text-slate">
//                     Thanks — we'll get back to you within a day to confirm details and availability.
//                   </p>
//                 </div>
//               )}
//             </Reveal>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// function InfoRow({ title, children, last = false }: { title: string; children: ReactNode; last?: boolean }) {
//   return (
//     <div className={`flex gap-4 py-4 ${last ? '' : 'border-b border-ink/10'}`}>
//       <div className="w-[38px] h-[38px] rounded-full bg-paper-dim flex items-center justify-center flex-shrink-0 text-shutter font-mono text-xs">
//         ●
//       </div>
//       <div>
//         <h4 className="font-body font-semibold text-[0.95rem] normal-case mb-0.5">{title}</h4>
//         <p className="text-[0.88rem] text-slate">{children}</p>
//       </div>
//     </div>
//   );
// }


import { useState, type FormEvent, type ReactNode } from 'react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { heroImages } from '../data/content';
import type { BookingFormState, ServiceCategory } from '../types';

const serviceOptions: { id: ServiceCategory; label: string }[] = [
  { id: 'photography', label: 'Photography' },
  { id: 'videography', label: 'Videography' },
  { id: 'design', label: 'Graphic Design' },
];

const eventTypes = [
  'Wedding',
  'Portrait session',
  'Corporate / event',
  'Brand video',
  'Flyer / poster design',
  'Other',
];

const initialState: BookingFormState = {
  services: [],
  name: '',
  email: '',
  phone: '',
  date: '',
  eventType: eventTypes[0],
  message: '',
};

const inputClass =
  'w-full px-4 py-3.5 border border-ink/10 rounded-sm bg-white font-body text-[0.96rem] text-ink transition-colors duration-300 focus:outline-none focus:border-shutter';

const labelClass =
  'block font-mono text-[0.72rem] tracking-[0.08em] uppercase text-slate mb-2.5';

export default function Booking() {
  const [form, setForm] = useState<BookingFormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ ADDED

  const toggleService = (id: ServiceCategory) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter((s) => s !== id)
        : [...prev.services, id],
    }));
  };

  // ✅ ONLY CHANGE IS HERE (API CALL)
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("https://YOUR_API_URL_HERE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send booking request");

      setSubmitted(true);
      setForm(initialState); // reset form after success
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        image={heroImages[1]}
        crumb="Booking & Contact"
        title="Let's get this booked"
        heightClass="h-[48vh] min-h-[360px] max-h-[600px]"
      />

      <section id="contact" className="py-16 sm:py-28">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">

                  <Reveal variant="left">
               <span className="exif-tag mb-5">Reach us directly</span>
               <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] mt-5 mb-5">
                 Prefer to talk first? <span className="text-shutter">That works too.</span>
               </h2>
               <p className="mb-8 text-slate">
                 Fill out the form for a formal booking request, or reach us directly through any of
               the channels below — most messages get a reply within a day.
             </p>

              <div className="border border-ink/10 rounded-sm p-8 mb-6">
                 <InfoRow title="Email">
                   <a href="mailto:capturamedia2025@gmail.com" className="hover:text-shutter">
                    capturamedia2025@gmail.com
                  </a>
                </InfoRow>
                <InfoRow title="Phone & WhatsApp">
                  <a href="tel:+233537117760" className="hover:text-shutter">
                     +233 537 117 760 /
                    +233 509 254 431
                  </a>
                </InfoRow>
                <InfoRow title="Studio">Accra, Ghana — by appointment</InfoRow>
                <InfoRow title="Hours" last>
                 Mon – Sat, 9am – 6pm GMT
               </InfoRow>
             </div>

              <p className="text-[0.85rem] text-slate">
               Booking dates fill up fastest for weekend weddings — for Saturday dates, we recommend
               reaching out at least 4–6 weeks ahead.
             </p>
            </Reveal>

            <Reveal variant="right">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="border border-ink/10 rounded-sm p-7 sm:p-11">

                  {/* SERVICES */}
                  <div className="mb-6">
                    <label className={labelClass}>Which service(s)?</label>
                    <div className="flex gap-2.5 flex-wrap">
                      {serviceOptions.map((opt) => {
                        const checked = form.services.includes(opt.id);
                        return (
                          <button
                            type="button"
                            key={opt.id}
                            onClick={() => toggleService(opt.id)}
                            className={`px-5 py-2.5 border rounded-full text-[0.82rem] transition-all duration-300 ${
                              checked
                                ? 'bg-ink text-white border-ink'
                                : 'border-ink/10 hover:border-ink'
                            }`}
                          >
                            {opt.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* NAME + EMAIL */}
                  <div className="grid sm:grid-cols-2 gap-5 mb-6">
                    <input
                      className={inputClass}
                      placeholder="Full name"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                    />

                    <input
                      className={inputClass}
                      placeholder="Email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                    />
                  </div>

                  {/* PHONE + DATE */}
                  <div className="grid sm:grid-cols-2 gap-5 mb-6">
                    <input
                      className={inputClass}
                      placeholder="Phone"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, phone: e.target.value }))
                      }
                    />

                    <input
                      type="date"
                      className={inputClass}
                      value={form.date}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, date: e.target.value }))
                      }
                    />
                  </div>

                  {/* EVENT TYPE */}
                  <select
                    className={inputClass}
                    value={form.eventType}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, eventType: e.target.value }))
                    }
                  >
                    {eventTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>

                  {/* MESSAGE */}
                  <textarea
                    className={inputClass + " mt-6"}
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                  />

                  {/* BUTTON */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-6 bg-ink text-white py-4 rounded-full"
                  >
                    {loading ? "Sending..." : "Send booking request"}
                  </button>
                </form>
              ) : (
                <div className="border border-ink/10 rounded-sm p-10 text-center">
                  <h3 className="text-2xl mb-3">Request received</h3>
                  <p className="text-slate">
                    We'll get back to you within a day.
                  </p>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({ title, children, last = false }: { title: string; children: ReactNode; last?: boolean }) {
  return (
    <div className={`flex gap-4 py-4 ${last ? '' : 'border-b border-ink/10'}`}>
      <div className="w-[38px] h-[38px] rounded-full bg-paper-dim flex items-center justify-center text-shutter font-mono text-xs">
        ●
      </div>
      <div>
        <h4 className="font-body font-semibold text-[0.95rem] mb-0.5">{title}</h4>
        <p className="text-[0.88rem] text-slate">{children}</p>
      </div>
    </div>
  );
}