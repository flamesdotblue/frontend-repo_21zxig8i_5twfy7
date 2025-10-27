import { useEffect, useMemo, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

// Lightweight text scramble effect without external deps
function useScramble(targetText, { speed = 18, characters = '!<>-_\/[]{}—=+*^?#________', delay = 0 } = {}) {
  const [text, setText] = useState('');
  const frameRef = useRef(0);
  const queueRef = useRef([]);
  const resolveRef = useRef(null);

  const set = (newText) => {
    const from = text;
    const length = Math.max(from.length, newText.length);
    const queue = [];
    for (let i = 0; i < length; i++) {
      const fromChar = from[i] || '';
      const toChar = newText[i] || '';
      const start = Math.floor(Math.random() * speed);
      const end = start + Math.floor(Math.random() * speed) + speed;
      queue.push({ from: fromChar, to: toChar, start, end });
    }
    queueRef.current = queue;

    cancelAnimationFrame(frameRef.current);
    let frame = 0;
    const update = () => {
      let output = '';
      let complete = 0;
      for (let i = 0; i < queue.length; i++) {
        let { from, to, start, end, char } = queue[i];
        if (frame >= end) {
          complete++;
          output += to;
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = characters[Math.floor(Math.random() * characters.length)];
            queue[i].char = char;
          }
          output += char;
        } else {
          output += from;
        }
      }
      setText(output);
      if (complete === queue.length) {
        if (resolveRef.current) resolveRef.current();
      } else {
        frameRef.current = requestAnimationFrame(update);
        frame++;
      }
    };
    if (delay) {
      setTimeout(() => {
        frameRef.current = requestAnimationFrame(update);
      }, delay);
    } else {
      frameRef.current = requestAnimationFrame(update);
    }

    return new Promise((res) => {
      resolveRef.current = res;
    });
  };

  useEffect(() => {
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return { text, set };
}

export default function Hero() {
  const headline = 'We build products that ship.';
  const { text, set } = useScramble('', { speed: 16, delay: 150 });

  useEffect(() => {
    set(headline);
  }, []); // run once on mount

  // Sub copy cycling (gentle)
  const terms = useMemo(
    () => ['fast', 'accessible', 'robust', 'beautiful'],
    []
  );
  const [termIndex, setTermIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTermIndex((i) => (i + 1) % terms.length), 2200);
    return () => clearInterval(id);
  }, [terms.length]);

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center">
      {/* Spline background cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soften background with subtle dark gradients to reduce visual noise */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.7)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F5F5F5] leading-tight">
            <span className="block">
              {text}
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/80">
            We ship {terms[termIndex]} web apps for teams that care about speed, DX, and outcomes.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#book"
              className="inline-flex items-center justify-center rounded-full bg-[#FFC400] px-5 py-3 text-sm font-medium text-black hover:bg-[#FFB000] transition"
            >
              Book a Call
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
            >
              View Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
