import React from 'react';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <div className="h-8 w-8 rounded-md bg-neutral-900 text-white grid place-items-center text-sm">MA</div>
          <span className="text-neutral-900">Mono Agency</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
          <a href="#services" className="hover:text-neutral-900 transition-colors">Services</a>
          <a href="#work" className="hover:text-neutral-900 transition-colors">Work</a>
          <a href="#about" className="hover:text-neutral-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-neutral-900 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-neutral-800 transition-colors">Get a proposal</a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
