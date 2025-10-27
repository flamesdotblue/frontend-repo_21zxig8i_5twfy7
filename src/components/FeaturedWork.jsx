import { useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined' && gsap && !gsap.core.globals()._flamesFW) {
  gsap.registerPlugin(ScrollTrigger);
  // @ts-ignore
  gsap.core.globals()._flamesFW = true;
}

const allItems = [
  { id: 1, title: 'Finbank', tag: 'Fintech', img: 'https://images.unsplash.com/photo-1640340434865-5f5f2fdbef98?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Nova Commerce', tag: 'eCom', img: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'SaaSify', tag: 'SaaS', img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: 'FlowOps', tag: 'SaaS', img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, title: 'RapidPay', tag: 'Fintech', img: 'https://images.unsplash.com/photo-1518544801976-3e188bc774df?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, title: 'Marketly', tag: 'eCom', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop' },
];

const tags = ['All', 'Fintech', 'SaaS', 'eCom'];

export default function FeaturedWork() {
  const [active, setActive] = useState('All');
  const gridRef = useRef(null);
  const prefersReduced = useMemo(() =>
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  []);

  const items = useMemo(() => {
    if (active === 'All') return allItems;
    return allItems.filter((i) => i.tag === active);
  }, [active]);

  useEffect(() => {
    if (!gridRef.current || prefersReduced) return;
    gsap.from(gridRef.current.children, {
      opacity: 0,
      y: 20,
      stagger: 0.08,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: { trigger: gridRef.current, start: 'top 85%' },
    });
  }, [items, prefersReduced]);

  return (
    <section id="work" className="bg-[#0B0B0B] text-[#F5F5F5]">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Featured work</h2>
            <p className="mt-2 text-[#F5F5F5]/70">A peek into products we helped ship.</p>
          </div>
          <div className="flex items-center gap-2">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`rounded-full px-3 py-1.5 text-sm border ${
                  active === t ? 'bg-[#FFC400] text-black border-transparent' : 'border-white/15 text-[#F5F5F5]/80 hover:border-[#FFC400]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div ref={gridRef} className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((card) => (
            <a key={card.id} href="#" className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img
                src={`${card.img}`}
                alt={card.title}
                loading="lazy"
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{card.title}</h3>
                  <p className="text-xs text-[#F5F5F5]/70">{card.tag}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-black/60 border border-white/10">Case Study</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
