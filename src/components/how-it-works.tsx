"use client";

import { useRef, useEffect, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Connect Your Practice",
    description:
      "Sign up, tell us about your practice, and connect your domain. We'll configure everything — your custom website, analytics, and scheduling — in under 24 hours.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-3.758a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364L4.343 8.52" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Customize & Launch",
    description:
      "Upload your photos, choose your services, and personalize your site. No coding required — just fill in the config and watch your premium website go live.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Grow on Autopilot",
    description:
      "Patients book online, payments process automatically, and your dashboard shows exactly what's working. Focus on surgery — we handle the rest.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(-1);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = steps.map((_, i) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep((prev) => Math.max(prev, i));
          }
        },
        { threshold: 0.5 }
      );
      if (stepsRef.current[i]) observer.observe(stepsRef.current[i]!);
      return observer;
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="how-it-works" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Live in <span className="text-gradient">three steps</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            From signup to seeing patients — in less time than a rhinoplasty consultation.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              ref={(el) => { stepsRef.current[i] = el; }}
              className={`relative flex items-start gap-8 mb-20 last:mb-0 transition-all duration-700 ${
                activeStep >= i
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* Step number circle */}
              <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    activeStep >= i
                      ? "bg-indigo-500/20 border-indigo-500/40 text-indigo-400 animate-pulse-glow"
                      : "bg-white/5 border-white/10 text-white/30"
                  } border`}
                >
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <div
                className={`flex-1 ${
                  i % 2 === 0
                    ? "md:pr-[calc(50%+3rem)] md:text-right"
                    : "md:pl-[calc(50%+3rem)]"
                }`}
              >
                <div className="text-xs font-mono text-indigo-400/60 mb-1">
                  STEP {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/50 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
