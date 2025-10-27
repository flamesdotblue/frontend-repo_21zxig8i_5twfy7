import { Rocket, Shield, Zap } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined' && gsap && !gsap.core.globals()._flamesWU) {
  gsap.registerPlugin(ScrollTrigger);
  // @ts-ignore
  gsap.core.globals()._flamesWU = true;
}

const items = [
  {
    icon: Rocket,
    title: 'Velocity',
    desc: 'Ship faster with opinionated systems, automation, and relentless focus on outcomes.',
  },
  {
    icon: Shield,
    title: 'Reliability',
    desc: 'Battle-tested patterns, robust QA, and observability to keep you online.',
  },
  {
    icon: Zap,
    title: 'Performance',
    desc: 'Lighthouse 95+ targets out of the box. We sweat the milliseconds.',
  },
];

export default function WhyUs() {
  const wrapRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!wrapRef.current || prefersReduced) return;
    gsap.from(wrapRef.current.children, {
      opacity: 0,
      y: 24,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.12,
      scrollTrigger: { trigger: wrapRef.current, start: 'top 85%' },
    });
  }, []);

  return (
    <section id="why" className="bg-[#0B0B0B] text-[#F5F5F5]">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Why choose us</h2>
          <p className="mt-2 text-[#F5F5F5]/70 max-w-2xl">Performance, Reliability, Velocity — the pillars behind everything we build.</p>
        </div>
        <div ref={wrapRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-transform will-change-transform hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(255,196,0,0.25)]">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-[#FFC400] text-black">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-[#F5F5F5]/75">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
