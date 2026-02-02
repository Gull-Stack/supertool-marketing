"use client";

import { useRef, useEffect, useState } from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const plans = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    description: "Everything you need to get online and start growing.",
    features: [
      "Premium website with custom domain",
      "Before/after gallery",
      "Basic analytics dashboard",
      "Online appointment requests",
      "Email support",
      "2 team members",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$599",
    period: "/month",
    description: "Full-featured practice management for growing practices.",
    features: [
      "Everything in Starter",
      "HIPAA-compliant scheduling",
      "GA4 analytics with AI summaries",
      "Billing & payment processing",
      "Email campaigns & templates",
      "Concierge request system",
      "10 team members",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For multi-location practices that need everything.",
    features: [
      "Everything in Professional",
      "Multi-location support",
      "Custom integrations",
      "Dedicated account manager",
      "Custom reporting",
      "White-label options",
      "Unlimited team members",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" ref={ref} className="relative py-32 px-6">
      <div className="glow-line w-full max-w-lg mx-auto mb-16" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, <span className="text-gradient">transparent</span> pricing
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            No hidden fees. No long-term contracts. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } ${
                plan.popular
                  ? "bg-gradient-to-b from-indigo-500/10 to-violet-500/5 border-2 border-indigo-500/30 scale-[1.02]"
                  : "glow-border"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                <p className="text-sm text-white/40">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-white/40">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-white/60"
                  >
                    <svg
                      className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.popular ? (
                <ShimmerButton className="w-full h-12">
                  <span className="text-sm font-semibold text-white">
                    {plan.cta}
                  </span>
                </ShimmerButton>
              ) : (
                <button className="w-full h-12 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-sm font-semibold">
                  {plan.cta}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
