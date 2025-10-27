import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import WhyUs from './components/WhyUs.jsx';
import FeaturedWork from './components/FeaturedWork.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <FeaturedWork />
      </main>
      <footer className="border-t border-white/10 bg-[#0B0B0B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-white/60">
          © {new Date().getFullYear()} Flames Agency. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
