import React from 'react';

function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <div className="h-8 w-8 rounded-md bg-neutral-900 text-white grid place-items-center text-sm">MA</div>
            <span className="text-neutral-900">Mono Agency</span>
          </div>
          <p className="mt-4 text-sm text-neutral-600 max-w-sm">We partner with founders and marketing teams to build brands, websites, and campaigns that compound growth.</p>
          <p className="mt-4 text-xs text-neutral-500">© {new Date().getFullYear()} Mono Agency. All rights reserved.</p>
        </div>
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-neutral-200 p-6 bg-neutral-50/60">
            <h3 className="text-lg font-semibold text-neutral-900">Let’s build something great</h3>
            <p className="mt-1 text-sm text-neutral-600">Tell us about your goals and we’ll craft a tailored growth plan.</p>
            <form className="mt-4 grid sm:grid-cols-2 gap-3">
              <input className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10" placeholder="Your name" />
              <input type="email" className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10" placeholder="Email" />
              <input className="sm:col-span-2 rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10" placeholder="Company / Website" />
              <textarea rows={4} className="sm:col-span-2 rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10" placeholder="What are you looking to achieve?" />
              <div className="sm:col-span-2 flex items-center justify-between gap-3">
                <p className="text-xs text-neutral-500">We’ll get back within 1 business day.</p>
                <button type="button" className="inline-flex items-center rounded-md bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800">Request proposal</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
