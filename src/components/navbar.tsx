"use client";

import { useState, useEffect } from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090b]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="font-bold text-lg">
            Super<span className="text-gradient">Tool</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-white/60 hover:text-white transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm text-white/60 hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#pricing" className="text-sm text-white/60 hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#testimonials" className="text-sm text-white/60 hover:text-white transition-colors">
            Testimonials
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
            Log In
          </a>
          <ShimmerButton className="h-9 px-4">
            <span className="text-sm font-medium text-white">Get Started Free</span>
          </ShimmerButton>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white/60"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#09090b]/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 space-y-3">
          <a href="#features" className="block text-sm text-white/60 hover:text-white">Features</a>
          <a href="#how-it-works" className="block text-sm text-white/60 hover:text-white">How It Works</a>
          <a href="#pricing" className="block text-sm text-white/60 hover:text-white">Pricing</a>
          <a href="#testimonials" className="block text-sm text-white/60 hover:text-white">Testimonials</a>
          <div className="pt-2 border-t border-white/5">
            <ShimmerButton className="w-full h-10">
              <span className="text-sm font-medium text-white">Get Started Free</span>
            </ShimmerButton>
          </div>
        </div>
      )}
    </nav>
  );
}
