"use client";

import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Particles } from "@/components/ui/particles";

export default function CTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <Particles
        className="absolute inset-0"
        quantity={60}
        color="#6366f1"
        staticity={30}
        ease={50}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ready to{" "}
          <span className="text-gradient">transform</span>
          <br />
          your practice?
        </h2>
        <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
          Join hundreds of plastic surgeons who&apos;ve switched to SuperTool.
          14-day free trial, no credit card required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ShimmerButton className="h-14 px-10">
            <span className="text-lg font-semibold text-white">
              Start Your Free Trial →
            </span>
          </ShimmerButton>
        </div>

        <p className="mt-6 text-sm text-white/30">
          Setup takes less than 10 minutes. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
