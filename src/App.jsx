import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import FeaturedWork from './components/FeaturedWork';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] font-sans">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <section id="services" className="bg-[#0B0B0B] text-[#F5F5F5]">
          <div className="mx-auto max-w-7xl px-4 py-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Services</h2>
            <p className="mt-2 text-[#F5F5F5]/70 max-w-2xl">Design Systems • Full‑stack Dev • Migrations • Performance Audits • Maintenance</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { t: 'Design Systems', c: 'Consistent UI kits, tokens, and components.' },
                { t: 'Full‑stack Development', c: 'From idea to production with CI/CD.' },
                { t: 'Migrations', c: 'Legacy to modern stacks with zero downtime.' },
                { t: 'Performance Audits', c: 'Score 95+ with actionable fixes.' },
                { t: 'Maintenance', c: 'SLA-backed support and improvements.' },
                { t: 'APIs', c: 'Secure, well-documented, scalable.' },
              ].map((s) => (
                <div key={s.t} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:-translate-y-1 transition will-change-transform">
                  <h3 className="font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm text-[#F5F5F5]/75">{s.c}</p>
                  <div className="mt-4 text-xs font-mono text-[#FFC400]/90">// fast, typed, tested</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <FeaturedWork />
        <section id="booking" className="bg-[#0B0B0B] text-[#F5F5F5]">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold">Got an idea? Let’s build it.</h3>
            <p className="mt-2 text-[#F5F5F5]/70">Book a slot and we’ll get back within 24 hours.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#booking" className="rounded-lg px-6 py-3 font-semibold bg-[#FFC400] text-black hover:bg-[#FFB000]">Book a Call</a>
              <a href="#work" className="rounded-lg px-6 py-3 font-semibold border border-[#FFC400] text-[#FFC400] hover:bg-[#FFC400]/10">View Portfolio</a>
            </div>
            <div className="mt-8 mx-auto max-w-3xl aspect-video border border-white/10 rounded-xl bg-white/5 flex items-center justify-center">
              <span className="text-[#F5F5F5]/70">Calendly embed placeholder</span>
            </div>
          </div>
        </section>
        <footer className="bg-black text-[#F5F5F5] border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-80">© {new Date().getFullYear()} Flames Studio. Made with ♥ + GSAP.</p>
            <div className="flex items-center gap-4 text-sm opacity-80">
              <a href="#" className="hover:text-[#FFC400]">Privacy</a>
              <a href="#" className="hover:text-[#FFC400]">Terms</a>
              <span>We’re currently booking for {new Date(new Date().setMonth(new Date().getMonth()+1)).toLocaleString(undefined,{ month:'long'})}</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
