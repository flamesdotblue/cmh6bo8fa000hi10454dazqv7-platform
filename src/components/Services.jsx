import React from 'react';
import { Megaphone, Palette, LineChart, Target } from 'lucide-react';

const services = [
  {
    icon: Megaphone,
    title: 'Performance Marketing',
    desc: 'Full-funnel paid media across Meta, Google, and LinkedIn with creative that converts.'
  },
  {
    icon: Palette,
    title: 'Brand & Creative',
    desc: 'Identity systems, guidelines, and asset production that elevate your market presence.'
  },
  {
    icon: LineChart,
    title: 'CRO & Web',
    desc: 'High-speed websites and optimization sprints to turn traffic into revenue.'
  },
  {
    icon: Target,
    title: 'Go-To-Market',
    desc: 'Positioning, messaging, and launch playbooks that align teams and win categories.'
  }
];

function Services() {
  return (
    <section id="services" className="py-20 border-t border-neutral-200 bg-neutral-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">What we do</h2>
            <p className="mt-2 text-neutral-600 max-w-2xl">Integrated strategy, creative, and execution to meet ambitious growth targets without sacrificing brand integrity.</p>
          </div>
          <a href="#work" className="text-sm font-medium text-neutral-900 hover:opacity-80">View case studies →</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group relative rounded-xl border border-neutral-200 bg-white p-6 shadow-sm overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br from-neutral-50 to-white" />
              <div className="h-10 w-10 rounded-md bg-neutral-900 text-white grid place-items-center">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
              <div className="mt-6 text-sm font-medium text-neutral-900">Learn more →</div>
            </div>
          ))}
        </div>

        <div id="work" className="mt-16">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-neutral-900">Selected work</h3>
            <a href="#contact" className="text-sm font-medium text-neutral-900 hover:opacity-80">Start a project →</a>
          </div>
          <div className="mt-6 grid lg:grid-cols-3 gap-6">
            <CaseStudyCard
              tag="B2B SaaS"
              title="North — Rebrand & demand engine"
              stat="+124% SQLs in 90 days"
              image="linear-gradient(135deg,#111,#222)"
            />
            <CaseStudyCard
              tag="Ecommerce"
              title="Sphere — CRO and paid social"
              stat="-36% CPA, +48% ROAS"
              image="linear-gradient(135deg,#0f172a,#111827)"
            />
            <CaseStudyCard
              tag="Fintech"
              title="Beacon — GTM launch website"
              stat="From 0→1 in 4 weeks"
              image="linear-gradient(135deg,#111827,#0a0a0a)"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ tag, title, stat, image }) {
  return (
    <a className="group block rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
      <div className="aspect-[16/10] w-full" style={{ background: image }}>
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,.08),transparent_40%)]" />
      </div>
      <div className="p-5">
        <div className="inline-flex text-[11px] uppercase tracking-wide text-neutral-500 border border-neutral-200 rounded px-2 py-0.5">{tag}</div>
        <h4 className="mt-2 font-semibold text-neutral-900">{title}</h4>
        <p className="mt-1 text-sm text-neutral-600">{stat}</p>
      </div>
    </a>
  );
}

export default Services;
