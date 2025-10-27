import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-md bg-black/50 border-b border-white/10 py-2' : 'py-4'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-[#FFC400]" />
          <span className="font-semibold text-[#F5F5F5] tracking-tight">Flames Studio</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#F5F5F5]/80 hover:text-[#FFC400] transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#FFC400] hover:after:w-full after:transition-all"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold bg-[#FFC400] text-black hover:bg-[#FFB000] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD84D]"
          >
            Book a Call
          </a>
        </div>

        <button
          className="md:hidden p-2 text-[#F5F5F5]"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="rounded-lg border border-white/10 bg-black/70 backdrop-blur p-4 space-y-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-[#F5F5F5] py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="block text-center rounded-full px-4 py-2 font-semibold bg-[#FFC400] text-black"
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
