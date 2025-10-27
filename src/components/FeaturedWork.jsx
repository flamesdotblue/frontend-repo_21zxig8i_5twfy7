const work = [
  { title: 'Fintech Dashboard', tag: 'Fintech', image: 'https://images.unsplash.com/photo-1748439435495-722cc1728b7e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaW50ZWNoJTIwRGFzaGJvYXJkfGVufDB8MHx8fDE3NjE1NTUxMzh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { title: 'SaaS Marketing', tag: 'SaaS', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600&auto=format&fit=crop' },
  { title: 'eCommerce PDP', tag: 'eCom', image: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Analytics Platform', tag: 'SaaS', image: 'https://images.unsplash.com/photo-1748439435495-722cc1728b7e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaW50ZWNoJTIwRGFzaGJvYXJkfGVufDB8MHx8fDE3NjE1NTUxMzh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
];

const filters = ['All', 'Fintech', 'SaaS', 'eCom'];

import { useMemo, useState } from 'react';

export default function FeaturedWork() {
  const [active, setActive] = useState('All');
  const filtered = useMemo(
    () => (active === 'All' ? work : work.filter((w) => w.tag === active)),
    [active]
  );

  return (
    <section id="work" className="relative bg-[#0B0B0B] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#F5F5F5]">
              Featured work
            </h2>
            <p className="mt-3 text-white/70">Select projects shipped for fast-moving teams.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-3 py-1 text-sm transition ${
                  active === f
                    ? 'border-[#FFC400] bg-[#FFC400] text-black'
                    : 'border-white/15 bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 sm:hidden flex items-center gap-2 overflow-x-auto pb-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`whitespace-nowrap rounded-full border px-3 py-1 text-sm transition ${
                active === f
                  ? 'border-[#FFC400] bg-[#FFC400] text-black'
                  : 'border-white/15 bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-medium">{item.title}</h3>
                  <span className="rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-xs text-white/80">
                    {item.tag}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
