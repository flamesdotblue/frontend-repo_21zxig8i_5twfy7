import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-[#0B0B0B]/70 border-b border-white/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-yellow-400 to-amber-500 text-black">
              <Rocket size={18} />
            </div>
            <span className="font-semibold tracking-tight text-[#F5F5F5]">Flames Agency</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-sm text-white/80 hover:text-white transition">Work</a>
            <a href="#services" className="text-sm text-white/80 hover:text-white transition">Services</a>
            <a href="#about" className="text-sm text-white/80 hover:text-white transition">About</a>
            <a href="#contact" className="text-sm text-white/80 hover:text-white transition">Contact</a>
          </div>

          <div className="hidden md:block">
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full bg-[#FFC400] px-4 py-2 text-sm font-medium text-black shadow-[0_0_0_2px_rgba(0,0,0,0.2)_inset] hover:bg-[#FFB000] transition"
            >
              Book a Call
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 flex flex-col gap-4">
            <a href="#work" className="text-white/80 hover:text-white transition">Work</a>
            <a href="#services" className="text-white/80 hover:text-white transition">Services</a>
            <a href="#about" className="text-white/80 hover:text-white transition">About</a>
            <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
            <a href="#book" className="mt-2 inline-flex items-center justify-center rounded-full bg-[#FFC400] px-4 py-2 text-sm font-medium text-black hover:bg-[#FFB000] transition">
              Book a Call
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
