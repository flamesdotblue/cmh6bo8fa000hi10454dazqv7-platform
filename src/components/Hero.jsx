import React from 'react';
import { Rocket, Star, ArrowRight } from 'lucide-react';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-neutral-200/50 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-neutral-100 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600 mb-6">
              <Star className="h-3.5 w-3.5 text-yellow-500" />
              Growth-focused marketing for modern brands
            </div>
            <h1 className="font-semibold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-neutral-900">
              We design and scale brands that customers love
            </h1>
            <p className="mt-5 text-neutral-600 text-base sm:text-lg max-w-2xl">
              A boutique marketing studio crafting high-converting campaigns, timeless brand systems, and performance websites that turn attention into revenue.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-neutral-800 transition-colors">
                <Rocket className="h-4 w-4" />
                Start a project
              </a>
              <a href="#work" className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-50 transition-colors">
                See our work
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-10">
              <p className="text-xs uppercase tracking-wide text-neutral-500">Trusted by teams at</p>
              <div className="mt-4 grid grid-cols-3 sm:grid-cols-5 gap-6 items-center opacity-80">
                <Logo text="Acme" />
                <Logo text="North" />
                <Logo text="Sphere" />
                <Logo text="Nova" />
                <Logo text="Beacon" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white overflow-hidden shadow-sm">
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-medium text-neutral-500">Selected Highlights</h3>
                  <ul className="mt-4 space-y-3 text-sm text-neutral-700">
                    <li className="flex items-start gap-2"><span className="h-1.5 w-1.5 mt-2 rounded-full bg-neutral-900" />$12M+ client revenue influenced in 2024</li>
                    <li className="flex items-start gap-2"><span className="h-1.5 w-1.5 mt-2 rounded-full bg-neutral-900" />Avg. 38% reduction in CPA across paid channels</li>
                    <li className="flex items-start gap-2"><span className="h-1.5 w-1.5 mt-2 rounded-full bg-neutral-900" />Launch to v1 websites in under 4 weeks</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-neutral-900 text-white p-5">
                  <p className="text-sm">“Mono helped us reposition and scale. The new site and campaigns doubled our qualified pipeline in two quarters.”</p>
                  <div className="mt-3 text-xs text-neutral-300">— Jordan, VP Growth at North</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Logo({ text }) {
  return (
    <div className="h-10 rounded-md border border-neutral-200 bg-white grid place-items-center text-sm font-medium text-neutral-500">
      {text}
    </div>
  );
}

export default Hero;
