// import { useState, useMemo } from 'react';
// import PageHero from '../components/PageHero';
// import Reveal from '../components/Reveal';
// import Button from '../components/Button';
// import { heroImages, catalogItems, subcategoriesByCategory } from '../data/content';
// import type { ServiceCategory, Subcategory } from '../types';

// type Filter = 'all' | ServiceCategory;

// const filters: { id: Filter; label: string }[] = [
//   { id: 'all', label: 'All work' },
//   { id: 'photography', label: 'Photography' },
//   { id: 'videography', label: 'Videography' },
//   { id: 'design', label: 'Graphic Design' },
// ];

// export default function Catalog() {
//   const [activeCategory, setActiveCategory] = useState<Filter>('all');
//   const [activeSub, setActiveSub] = useState<Subcategory | 'all'>('all');

//   // Only surface subcategory pills that actually have at least one catalog
//   // item, so a click never lands on an empty grid.
//   const availableSubs = useMemo(() => {
//     if (activeCategory === 'all') return [];
//     return subcategoriesByCategory[activeCategory].filter((sub) =>
//       catalogItems.some((item) => item.subcategories.includes(sub.id))
//     );
//   }, [activeCategory]);

//   const handleCategoryClick = (id: Filter) => {
//     setActiveCategory(id);
//     setActiveSub('all'); // reset subcategory whenever the top-level category changes
//   };

//   const visibleItems = useMemo(() => {
//     let items = catalogItems;
//     if (activeCategory !== 'all') {
//       items = items.filter((item) => item.categories.includes(activeCategory));
//     }
//     if (activeSub !== 'all') {
//       items = items.filter((item) => item.subcategories.includes(activeSub));
//     }
//     return items;
//   }, [activeCategory, activeSub]);

//   return (
//     <>
//       <PageHero
//         image={heroImages[0]}
//         crumb="Catalog"
//         title="The catalog"
//         heightClass="h-[48vh] min-h-[360px] max-h-[600px]"
//       />

//       <section className="py-16 sm:py-28">
//         <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
//           {/* Top-level category filter */}
//           <Reveal className="flex gap-3 flex-wrap mb-5">
//             {filters.map((f) => (
//               <button
//                 key={f.id}
//                 onClick={() => handleCategoryClick(f.id)}
//                 className={`font-mono text-[0.75rem] tracking-[0.06em] uppercase px-5 py-3 border rounded-full transition-all duration-300 ${
//                   activeCategory === f.id
//                     ? 'bg-ink text-white border-ink'
//                     : 'border-ink/10 hover:border-ink'
//                 }`}
//               >
//                 {f.label}
//               </button>
//             ))}
//           </Reveal>

//           {/* Subcategory filter — only appears once a top-level category is picked */}
//           {availableSubs.length > 0 && (
//             <div className="flex gap-2.5 flex-wrap mb-10 sm:mb-14 pl-1">
//               <button
//                 onClick={() => setActiveSub('all')}
//                 className={`text-[0.78rem] px-4 py-2 rounded-full border transition-all duration-300 ${
//                   activeSub === 'all'
//                     ? 'border-shutter text-shutter bg-shutter/5'
//                     : 'border-ink/10 text-slate hover:border-ink hover:text-ink'
//                 }`}
//               >
//                 All {filters.find((f) => f.id === activeCategory)?.label.toLowerCase()}
//               </button>
//               {availableSubs.map((sub) => (
//                 <button
//                   key={sub.id}
//                   onClick={() => setActiveSub(sub.id)}
//                   className={`text-[0.78rem] px-4 py-2 rounded-full border transition-all duration-300 ${
//                     activeSub === sub.id
//                       ? 'border-shutter text-shutter bg-shutter/5'
//                       : 'border-ink/10 text-slate hover:border-ink hover:text-ink'
//                   }`}
//                 >
//                   {sub.label}
//                 </button>
//               ))}
//             </div>
//           )}

//           {!availableSubs.length && <div className="mb-10 sm:mb-14" />}

//           {/* Result count */}
//           <Reveal className="mb-6">
//             <p className="font-mono text-[0.7rem] tracking-[0.08em] uppercase text-slate">
//               {visibleItems.length} {visibleItems.length === 1 ? 'piece' : 'pieces'}
//             </p>
//           </Reveal>

//           {visibleItems.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
//               {visibleItems.map((item) => (
//                 <Reveal
//                   key={item.id}
//                   variant="scale"
//                   className="group relative rounded-sm overflow-hidden aspect-[4/5]"
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.alt}
//                     className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
//                     <div>
//                       <div className="font-mono text-[0.68rem] tracking-[0.08em] uppercase text-shutter mb-1">
//                         {item.categories.join(' / ')}
//                       </div>
//                       <div className="font-display text-xl text-white">{item.title}</div>
//                     </div>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           ) : (
//             <Reveal className="text-center py-16 border border-ink/10 rounded-sm">
//               <p className="text-slate">No work in this category yet — check back soon.</p>
//             </Reveal>
//           )}
//         </div>
//       </section>

//       <section className="py-16 sm:py-28 bg-paper-dim">
//         <div className="max-w-[1320px] mx-auto px-6 sm:px-10 text-center">
//           <Reveal variant="scale">
//             <span className="exif-tag justify-center mb-5">Liked what you saw?</span>
//             <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] max-w-[18ch] mx-auto mt-5 mb-8">
//               Let's add your project to the catalog.
//             </h2>
//             <Button to="/booking" variant="primary" className="px-9 py-5 text-[0.85rem]">
//               Book with us
//             </Button>
//           </Reveal>
//         </div>
//       </section>
//     </>
//   );
// }


// import { useState, useMemo } from 'react';
// import PageHero from '../components/PageHero';
// import Reveal from '../components/Reveal';
// import Button from '../components/Button';
// import { heroImages, catalogItems, subcategoriesByCategory } from '../data/content';
// import type { ServiceCategory, Subcategory } from '../types';

// type Filter = 'all' | ServiceCategory;

// const filters: { id: Filter; label: string }[] = [
//   { id: 'all', label: 'All work' },
//   { id: 'photography', label: 'Photography' },
//   { id: 'videography', label: 'Videography' },
//   { id: 'design', label: 'Graphic Design' },
// ];

// export default function Catalog() {
//   const [activeCategory, setActiveCategory] = useState<Filter>('all');
//   const [activeSub, setActiveSub] = useState<Subcategory | 'all'>('all');

//   // ✅ ADDED (modal state)
//   const [selectedImage, setSelectedImage] = useState<any>(null);

//   const availableSubs = useMemo(() => {
//     if (activeCategory === 'all') return [];
//     return subcategoriesByCategory[activeCategory].filter((sub) =>
//       catalogItems.some((item) => item.subcategories.includes(sub.id))
//     );
//   }, [activeCategory]);

//   const handleCategoryClick = (id: Filter) => {
//     setActiveCategory(id);
//     setActiveSub('all');
//   };

//   const visibleItems = useMemo(() => {
//     let items = catalogItems;
//     if (activeCategory !== 'all') {
//       items = items.filter((item) => item.categories.includes(activeCategory));
//     }
//     if (activeSub !== 'all') {
//       items = items.filter((item) => item.subcategories.includes(activeSub));
//     }
//     return items;
//   }, [activeCategory, activeSub]);

//   return (
//     <>
//       <PageHero
//         image={heroImages[0]}
//         crumb="Catalog"
//         title="The catalog"
//         heightClass="h-[48vh] min-h-[360px] max-h-[600px]"
//       />

//       <section className="py-16 sm:py-28">
//         <div className="max-w-[1320px] mx-auto px-6 sm:px-10">

//           {/* Top-level category filter */}
//           <Reveal className="flex gap-3 flex-wrap mb-5">
//             {filters.map((f) => (
//               <button
//                 key={f.id}
//                 onClick={() => handleCategoryClick(f.id)}
//                 className={`font-mono text-[0.75rem] tracking-[0.06em] uppercase px-5 py-3 border rounded-full transition-all duration-300 ${
//                   activeCategory === f.id
//                     ? 'bg-ink text-white border-ink'
//                     : 'border-ink/10 hover:border-ink'
//                 }`}
//               >
//                 {f.label}
//               </button>
//             ))}
//           </Reveal>

//           {/* Subcategory filter */}
//           {availableSubs.length > 0 && (
//             <div className="flex gap-2.5 flex-wrap mb-10 sm:mb-14 pl-1">
//               <button
//                 onClick={() => setActiveSub('all')}
//                 className={`text-[0.78rem] px-4 py-2 rounded-full border transition-all duration-300 ${
//                   activeSub === 'all'
//                     ? 'border-shutter text-shutter bg-shutter/5'
//                     : 'border-ink/10 text-slate hover:border-ink hover:text-ink'
//                 }`}
//               >
//                 All {filters.find((f) => f.id === activeCategory)?.label.toLowerCase()}
//               </button>

//               {availableSubs.map((sub) => (
//                 <button
//                   key={sub.id}
//                   onClick={() => setActiveSub(sub.id)}
//                   className={`text-[0.78rem] px-4 py-2 rounded-full border transition-all duration-300 ${
//                     activeSub === sub.id
//                       ? 'border-shutter text-shutter bg-shutter/5'
//                       : 'border-ink/10 text-slate hover:border-ink hover:text-ink'
//                   }`}
//                 >
//                   {sub.label}
//                 </button>
//               ))}
//             </div>
//           )}

//           {!availableSubs.length && <div className="mb-10 sm:mb-14" />}

//           {/* Result count */}
//           <Reveal className="mb-6">
//             <p className="font-mono text-[0.7rem] tracking-[0.08em] uppercase text-slate">
//               {visibleItems.length} {visibleItems.length === 1 ? 'piece' : 'pieces'}
//             </p>
//           </Reveal>

//           {visibleItems.length > 0 ? (
//             <>
//               {/* ✅ SLIDER */}
//               <div className="relative">
//                 <div
//                   id="slider"
//                   className="flex overflow-x-auto scroll-smooth gap-5 sm:gap-7 pb-4"
//                   style={{ scrollSnapType: 'x mandatory' }}
//                 >
//                   {visibleItems.map((item) => (
//                     <div
//                       key={item.id}
//                       className="min-w-[80%] sm:min-w-[45%] lg:min-w-[30%]"
//                       style={{ scrollSnapAlign: 'start' }}
//                     >
//                       <div
//                         className="group relative rounded-sm overflow-hidden aspect-[4/5] cursor-pointer"
//                         onClick={() => setSelectedImage(item)}
//                       >
//                         <Reveal variant="scale" className="h-full">
//                           <img
//                             src={item.image}
//                             alt={item.alt}
//                             className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
//                           />

//                           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
//                             <div>
//                               <div className="font-mono text-[0.68rem] tracking-[0.08em] uppercase text-shutter mb-1">
//                                 {item.categories.join(' / ')}
//                               </div>
//                               <div className="font-display text-xl text-white">
//                                 {item.title}
//                               </div>
//                             </div>
//                           </div>
//                         </Reveal>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* ✅ BUTTONS */}
//                 <div className="flex justify-between mt-4">
//                   <button
//                     onClick={() =>
//                       document.getElementById('slider')?.scrollBy({ left: -300, behavior: 'smooth' })
//                     }
//                     className="px-4 py-2 border border-ink/20 rounded"
//                   >
//                     Prev
//                   </button>

//                   <button
//                     onClick={() =>
//                       document.getElementById('slider')?.scrollBy({ left: 300, behavior: 'smooth' })
//                     }
//                     className="px-4 py-2 border border-ink/20 rounded"
//                   >
//                     Next
//                   </button>
//                 </div>

//                 {/* ✅ PAGINATION DOTS */}
//                 <div className="flex justify-center gap-2 mt-4">
//                   {visibleItems.map((_, index) => (
//                     <div key={index} className="w-2.5 h-2.5 bg-ink/30 rounded-full" />
//                   ))}
//                 </div>
//               </div>

//               {/* ✅ MODAL */}
//               {selectedImage && (
//                 <div
//                   className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
//                   onClick={() => setSelectedImage(null)}
//                 >
//                   <img
//                     src={selectedImage.image}
//                     alt={selectedImage.alt}
//                     className="max-w-[90%] max-h-[90%] object-contain"
//                   />
//                 </div>
//               )}
//             </>
//           ) : (
//             <Reveal className="text-center py-16 border border-ink/10 rounded-sm">
//               <p className="text-slate">No work in this category yet — check back soon.</p>
//             </Reveal>
//           )}
//         </div>
//       </section>

//       <section className="py-16 sm:py-28 bg-paper-dim">
//         <div className="max-w-[1320px] mx-auto px-6 sm:px-10 text-center">
//           <Reveal variant="scale">
//             <span className="exif-tag justify-center mb-5">Liked what you saw?</span>
//             <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] max-w-[18ch] mx-auto mt-5 mb-8">
//               Let's add your project to the catalog.
//             </h2>
//             <Button to="/booking" variant="primary" className="px-9 py-5 text-[0.85rem]">
//               Book with us
//             </Button>
//           </Reveal>
//         </div>
//       </section>
//     </>
//   );
// }


import { useState, useMemo, useEffect } from 'react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import { heroImages, catalogItems, subcategoriesByCategory } from '../data/content';
import type { ServiceCategory, Subcategory } from '../types';

type Filter = 'all' | ServiceCategory;

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All work' },
  { id: 'photography', label: 'Photography' },
  { id: 'videography', label: 'Videography' },
  { id: 'design', label: 'Graphic Design' },
];

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState<Filter>('all');
  const [activeSub, setActiveSub] = useState<Subcategory | 'all'>('all');

  const [currentIndex, setCurrentIndex] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const availableSubs = useMemo(() => {
    if (activeCategory === 'all') return [];
    return subcategoriesByCategory[activeCategory].filter((sub) =>
      catalogItems.some((item) => item.subcategories.includes(sub.id))
    );
  }, [activeCategory]);

  const handleCategoryClick = (id: Filter) => {
    setActiveCategory(id);
    setActiveSub('all');
    setCurrentIndex(3);
  };

  const visibleItems = useMemo(() => {
    let items = catalogItems;
    if (activeCategory !== 'all') {
      items = items.filter((item) => item.categories.includes(activeCategory));
    }
    if (activeSub !== 'all') {
      items = items.filter((item) => item.subcategories.includes(activeSub));
    }
    return items;
  }, [activeCategory, activeSub]);

  // 🔥 CLONE ITEMS FOR INFINITE SCROLL
  const extendedItems = useMemo(() => {
    if (visibleItems.length === 0) return [];

    const firstClones = visibleItems.slice(0, 3);
    const lastClones = visibleItems.slice(-3);

    return [...lastClones, ...visibleItems, ...firstClones];
  }, [visibleItems]);

  // AUTO SLIDE
  useEffect(() => {
    if (extendedItems.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [extendedItems.length]);

  // 🔥 HANDLE LOOP RESET (INVISIBLE)
  useEffect(() => {
    if (visibleItems.length === 0) return;

    if (currentIndex === extendedItems.length - 3) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(3);
      }, 1000);
    }

    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(visibleItems.length);
      }, 1000);
    }
  }, [currentIndex, extendedItems.length, visibleItems.length]);

  return (
    <>
      <PageHero
        image={heroImages[0]}
        crumb="Catalog"
        title="The catalog"
        heightClass="h-[48vh] min-h-[360px] max-h-[600px]"
      />

      <section className="py-16 sm:py-28">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-10">

          {/* FILTERS */}
          <Reveal className="flex gap-3 flex-wrap mb-5">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => handleCategoryClick(f.id)}
                className={`font-mono text-[0.75rem] tracking-[0.06em] uppercase px-5 py-3 border rounded-full ${
                  activeCategory === f.id
                    ? 'bg-ink text-white border-ink'
                    : 'border-ink/10'
                }`}
              >
                {f.label}
              </button>
            ))}
          </Reveal>

          {/* SUB FILTER */}
          {availableSubs.length > 0 && (
            <div className="flex gap-2.5 flex-wrap mb-10 sm:mb-14 pl-1">
              <button onClick={() => setActiveSub('all')} className="px-4 py-2 border rounded-full">
                All
              </button>
              {availableSubs.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setActiveSub(sub.id)}
                  className="px-4 py-2 border rounded-full"
                >
                  {sub.label}
                </button>
              ))}
            </div>
          )}

          {/* 🔥 SLIDER */}
          {visibleItems.length > 0 ? (
            <div className="w-full max-w-[1100px] mx-auto">

              <div className="overflow-hidden">
                <div
                 className={`flex ${isTransitioning ? 'transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)]' : ''}`}
style={{
  transform: `translateX(-${currentIndex * (100 / 3)}%)`,
  willChange: 'transform',
}}
                  onTransitionEnd={() => setIsTransitioning(true)}
                >
                  {extendedItems.map((item, index) => (
                    <div
                      key={index}
                      className="lg:w-1/3 md:w-2/4 sm:w-3/4 w-3/4 flex-shrink-0 px-2 cursor-pointer"
                      onClick={() => setSelectedImage(item.image)}
                    >
                      <div className="relative rounded-md overflow-hidden aspect-[4/5]">
                        <img src={item.image} className="w-full h-full object-cover" />

                        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex items-end p-4">
                          <div>
                            <div className="text-xs text-gray-300">
                              {item.categories.join(' / ')}
                            </div>
                            <div className="text-white text-lg">
                              {item.title}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={() => setCurrentIndex((prev) => prev - 1)}
                  className="w-10 h-10 rounded-full border border-ink"
                >
                  ←
                </button>

                <button
                  onClick={() => setCurrentIndex((prev) => prev + 1)}
                  className="w-10 h-10 rounded-full border border-ink"
                >
                  →
                </button>
              </div>
            </div>
          ) : (
            <Reveal className="text-center py-16 border border-ink/10 rounded-sm">
              <p>No work in this category yet</p>
            </Reveal>
          )}

        </div>
      </section>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-[90%] max-h-[90%] object-contain"
          />
        </div>
      )}

      <section className="py-16 sm:py-28 bg-paper-dim text-center">
         <Reveal variant="scale">
             <span className="exif-tag justify-center mb-5">Liked what you saw?</span>
             <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] max-w-[18ch] mx-auto mt-5 mb-8">
               Let's add your project to the catalog.
             </h2>
             <Button to="/booking" variant="primary" className="px-9 py-5 text-[0.85rem]">
               Book with us
             </Button>
         </Reveal>
      </section>
    </>
  );
}