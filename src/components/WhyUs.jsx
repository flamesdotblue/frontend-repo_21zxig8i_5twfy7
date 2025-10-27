import { Shield, Zap, Star } from 'lucide-react';

const items = [
  {
    icon: Zap,
    title: 'Speed without tradeoffs',
    desc: 'We move fast and keep quality high with robust tooling, reviews, and playbooks.'
  },
  {
    icon: Shield,
    title: 'Production-first',
    desc: 'Design, build, and deploy with observability and performance from day one.'
  },
  {
    icon: Star,
    title: 'Outcomes > outputs',
    desc: 'Measurable impact: conversions, retention, and reliability — not just pixels.'
  }
];

export default function WhyUs() {
  return (
    <section id="why" className="relative bg-[#0B0B0B] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#F5F5F5]">
            Why teams choose us
          </h2>
          <p className="mt-3 text-white/70">
            Focused on reliability, speed, and a clean developer experience.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition hover:border-white/20 hover:from-white/[0.06]"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFC400] text-black">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-medium text-[#F5F5F5]">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
