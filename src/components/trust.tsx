"use client";

import { useRef, useEffect, useState } from "react";

const trustItems = [
  {
    icon: "🔒",
    title: "Privacy Policy",
    description:
      "CCPA & GDPR compliant. Your patient data stays protected with clear policies on collection, use, and retention.",
    link: "/privacy",
    gradient: "from-indigo-500/20 to-blue-500/20",
    border: "border-indigo-500/20",
    accent: "text-indigo-400",
  },
  {
    icon: "📜",
    title: "Terms of Service",
    description:
      "Clear, fair terms that protect both you and your patients. No hidden clauses, no surprises.",
    link: "/terms",
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/20",
    accent: "text-emerald-400",
  },
  {
    icon: "🛡️",
    title: "Security Policy",
    description:
      "Enterprise-grade security with encryption at rest and in transit, regular audits, and incident response procedures.",
    link: "/security",
    gradient: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-500/20",
    accent: "text-violet-400",
  },
  {
    icon: "💳",
    title: "Payment Processing",
    description:
      "Stripe-powered payments with PCI DSS Level 1 compliance. We never store your card details on our servers.",
    link: "/payment-terms",
    gradient: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/20",
    accent: "text-amber-400",
  },
];

const complianceBadges = [
  { label: "CCPA", description: "California Consumer Privacy Act" },
  { label: "GDPR", description: "General Data Protection Regulation" },
  { label: "PCI DSS", description: "Payment Card Industry Data Security" },
  { label: "SOC 2", description: "Service Organization Control (In Progress)" },
];

function TrustCard({
  item,
  index,
}: {
  item: (typeof trustItems)[0];
  index: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={item.link}
      ref={ref}
      className={`feature-card glow-border rounded-2xl p-6 transition-all duration-700 block hover:scale-[1.02] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} border ${item.border} flex items-center justify-center mb-4`}
      >
        <span className="text-2xl">{item.icon}</span>
      </div>
      <h3 className={`text-lg font-semibold mb-2 ${item.accent}`}>
        {item.title}
      </h3>
      <p className="text-sm text-white/50 leading-relaxed">
        {item.description}
      </p>
      <div className="mt-4 flex items-center gap-2 text-sm text-white/30 group-hover:text-white/50">
        <span>Read policy</span>
        <span>→</span>
      </div>
    </a>
  );
}

export default function Trust() {
  return (
    <section id="trust" className="relative py-32 px-6">
      {/* Glow line */}
      <div className="glow-line w-full max-w-lg mx-auto mb-16" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built on <span className="text-gradient">trust</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Your patients trust you with their health. You can trust us with your data.
            Transparent policies, enterprise security, real compliance.
          </p>
        </div>

        {/* HIPAA Notice */}
        <div className="max-w-3xl mx-auto mb-12 p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-500/20 to-pink-500/20 border border-rose-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-xl">⚕️</span>
            </div>
            <div>
              <h4 className="font-semibold text-rose-400 mb-1">Important: HIPAA Clarification</h4>
              <p className="text-sm text-white/50 leading-relaxed">
                GullStack Trust is <strong className="text-white/70">not</strong> a HIPAA covered entity.
                We do not store, process, or transmit Protected Health Information (PHI).
                Patient medical data stays in your practice management system.
                SuperTool handles business operations: websites, scheduling metadata, billing, and analytics.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {trustItems.map((item, i) => (
            <TrustCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Compliance Badges */}
        <div className="flex flex-wrap justify-center gap-4">
          {complianceBadges.map((badge) => (
            <div
              key={badge.label}
              className="px-6 py-3 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group cursor-default"
            >
              <div className="text-sm font-semibold text-white/70 group-hover:text-white/90">
                {badge.label}
              </div>
              <div className="text-xs text-white/30">{badge.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
