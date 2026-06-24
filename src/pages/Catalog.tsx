import { useState, useMemo } from 'react';
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

  // Only surface subcategory pills that actually have at least one catalog
  // item, so a click never lands on an empty grid.
  const availableSubs = useMemo(() => {
    if (activeCategory === 'all') return [];
    return subcategoriesByCategory[activeCategory].filter((sub) =>
      catalogItems.some((item) => item.subcategories.includes(sub.id))
    );
  }, [activeCategory]);

  const handleCategoryClick = (id: Filter) => {
    setActiveCategory(id);
    setActiveSub('all'); // reset subcategory whenever the top-level category changes
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
          {/* Top-level category filter */}
          <Reveal className="flex gap-3 flex-wrap mb-5">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => handleCategoryClick(f.id)}
                className={`font-mono text-[0.75rem] tracking-[0.06em] uppercase px-5 py-3 border rounded-full transition-all duration-300 ${
                  activeCategory === f.id
                    ? 'bg-ink text-white border-ink'
                    : 'border-ink/10 hover:border-ink'
                }`}
              >
                {f.label}
              </button>
            ))}
          </Reveal>

          {/* Subcategory filter — only appears once a top-level category is picked */}
          {availableSubs.length > 0 && (
            <div className="flex gap-2.5 flex-wrap mb-10 sm:mb-14 pl-1">
              <button
                onClick={() => setActiveSub('all')}
                className={`text-[0.78rem] px-4 py-2 rounded-full border transition-all duration-300 ${
                  activeSub === 'all'
                    ? 'border-shutter text-shutter bg-shutter/5'
                    : 'border-ink/10 text-slate hover:border-ink hover:text-ink'
                }`}
              >
                All {filters.find((f) => f.id === activeCategory)?.label.toLowerCase()}
              </button>
              {availableSubs.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setActiveSub(sub.id)}
                  className={`text-[0.78rem] px-4 py-2 rounded-full border transition-all duration-300 ${
                    activeSub === sub.id
                      ? 'border-shutter text-shutter bg-shutter/5'
                      : 'border-ink/10 text-slate hover:border-ink hover:text-ink'
                  }`}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          )}

          {!availableSubs.length && <div className="mb-10 sm:mb-14" />}

          {/* Result count */}
          <Reveal className="mb-6">
            <p className="font-mono text-[0.7rem] tracking-[0.08em] uppercase text-slate">
              {visibleItems.length} {visibleItems.length === 1 ? 'piece' : 'pieces'}
            </p>
          </Reveal>

          {visibleItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
              {visibleItems.map((item) => (
                <Reveal
                  key={item.id}
                  variant="scale"
                  className="group relative rounded-sm overflow-hidden aspect-[4/5]"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div>
                      <div className="font-mono text-[0.68rem] tracking-[0.08em] uppercase text-shutter mb-1">
                        {item.categories.join(' / ')}
                      </div>
                      <div className="font-display text-xl text-white">{item.title}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal className="text-center py-16 border border-ink/10 rounded-sm">
              <p className="text-slate">No work in this category yet — check back soon.</p>
            </Reveal>
          )}
        </div>
      </section>

      <section className="py-16 sm:py-28 bg-paper-dim">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-10 text-center">
          <Reveal variant="scale">
            <span className="exif-tag justify-center mb-5">Liked what you saw?</span>
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] max-w-[18ch] mx-auto mt-5 mb-8">
              Let's add your project to the catalog.
            </h2>
            <Button to="/booking" variant="primary" className="px-9 py-5 text-[0.85rem]">
              Book with us
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
