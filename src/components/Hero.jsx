import { useEffect, useMemo, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins once
if (typeof window !== 'undefined' && gsap && !gsap.core.globals()._flamesRegistered) {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
  // mark to avoid re-register
  // @ts-ignore
  gsap.core.globals()._flamesRegistered = true;
}

const terms = ['Websites', 'Web Apps', 'Dashboards', 'eCommerce', 'APIs'];

export default function Hero() {
  const titleRef = useRef(null);
  const flipRef = useRef(null);
  const badgesRef = useRef(null);
  const prefersReduced = useMemo(() =>
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  []);

  useEffect(() => {
    if (!titleRef.current) return;

    if (!prefersReduced) {
      gsap.fromTo(
        titleRef.current,
        { text: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
        { text: 'We build products that ship.', duration: 1.2, ease: 'power2.out', delay: 0.3 }
      );
    }
  }, [prefersReduced]);

  useEffect(() => {
    if (!flipRef.current) return;
    if (prefersReduced) {
      flipRef.current.textContent = terms[0];
      return;
    }

    let idx = 0;
    const el = flipRef.current;
    const cycle = () => {
      const next = terms[idx % terms.length];
      const tl = gsap.timeline();
      tl.to(el, { yPercent: -100, opacity: 0, duration: 0.3, ease: 'power2.in' })
        .call(() => { el.textContent = next; })
        .set(el, { yPercent: 100 })
        .to(el, { yPercent: 0, opacity: 1, duration: 0.4, ease: 'power2.out' });
      idx += 1;
    };

    cycle();
    const id = setInterval(cycle, 2000);
    return () => clearInterval(id);
  }, [prefersReduced]);

  useEffect(() => {
    if (!badgesRef.current) return;
    if (prefersReduced) return;

    gsap.from(badgesRef.current.children, {
      opacity: 0,
      y: 16,
      stagger: 0.08,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: badgesRef.current,
        start: 'top 85%'
      }
    });
  }, [prefersReduced]);

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#0B0B0B] text-[#F5F5F5]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-24 flex flex-col items-start">
        <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          We build products that ship.
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-[#F5F5F5]/80">
          <span className="sr-only">Full-stack web development for teams that can’t miss deadlines.</span>
          <span aria-hidden="true" className="inline-flex h-7 sm:h-8 items-center overflow-hidden align-baseline">
            <span ref={flipRef} className="inline-block will-change-transform">Websites</span>
          </span>
          <span className="ml-2">for teams that can’t miss deadlines.</span>
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-stretch gap-3">
          <a href="#booking" className="group inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold bg-[#FFC400] text-black hover:bg-[#FFB000] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD84D]">
            Book a Call
          </a>
          <a href="#work" className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold border border-[#FFC400] text-[#FFC400] hover:bg-[#FFC400]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD84D]">
            View Portfolio
          </a>
        </div>

        <div className="mt-10 flex items-center gap-6 opacity-90" ref={badgesRef}>
          {['Acme', 'NovaBank', 'Pixelly', 'Therma', 'Flowbyte'].map((b) => (
            <div key={b} className="text-xs sm:text-sm text-[#F5F5F5]/60 grayscale hover:grayscale-0 transition">
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
