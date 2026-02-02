"use client";

import { useRef, useEffect, useState } from "react";

const features = [
  {
    icon: "🌐",
    title: "Premium Websites",
    description:
      "Stunning, conversion-optimized websites built for plastic surgeons. Before/after galleries, procedure pages, and patient testimonials — all managed through a simple config.",
    gradient: "from-indigo-500/20 to-blue-500/20",
    border: "border-indigo-500/20",
    accent: "text-indigo-400",
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    description:
      "Google Analytics 4 integrated with plain-English summaries. Know exactly where your patients come from, what they click, and how to get more of them.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/20",
    accent: "text-emerald-400",
  },
  {
    icon: "🗓️",
    title: "Smart Scheduling",
    description:
      "HIPAA-compliant appointment booking that syncs with your calendar. Automated reminders via text and email reduce no-shows by up to 40%.",
    gradient: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-500/20",
    accent: "text-violet-400",
  },
  {
    icon: "💳",
    title: "Billing & Payments",
    description:
      "Accept payments, manage invoices, process insurance claims, and track revenue — all from one dashboard. Stripe-powered for security.",
    gradient: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/20",
    accent: "text-amber-400",
  },
  {
    icon: "🏥",
    title: "Domain Management",
    description:
      "Custom domain setup with step-by-step DNS guides for every major registrar. Auto-verification polling so you never wonder if it worked.",
    gradient: "from-rose-500/20 to-pink-500/20",
    border: "border-rose-500/20",
    accent: "text-rose-400",
  },
  {
    icon: "🛎️",
    title: "Concierge Requests",
    description:
      "Your personal request inbox. Need a copy change? New photo? Service update? Submit it and we handle the rest — with preview before publish.",
    gradient: "from-cyan-500/20 to-sky-500/20",
    border: "border-cyan-500/20",
    accent: "text-cyan-400",
  },
  {
    icon: "👥",
    title: "Team Permissions",
    description:
      "7 role-based access levels from Practice Owner to Viewer. Invite your office manager, billing specialist, or marketing coordinator — everyone sees exactly what they need.",
    gradient: "from-fuchsia-500/20 to-pink-500/20",
    border: "border-fuchsia-500/20",
    accent: "text-fuchsia-400",
  },
  {
    icon: "📧",
    title: "Email Campaigns",
    description:
      "Mailchimp-style email builder with patient segmentation. Send appointment reminders, promotions, or newsletters — beautifully branded to your practice.",
    gradient: "from-lime-500/20 to-green-500/20",
    border: "border-lime-500/20",
    accent: "text-lime-400",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
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
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`feature-card glow-border rounded-2xl p-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty(
          "--mouse-x",
          `${e.clientX - rect.left}px`
        );
        e.currentTarget.style.setProperty(
          "--mouse-y",
          `${e.clientY - rect.top}px`
        );
      }}
    >
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} border ${feature.border} flex items-center justify-center mb-4`}
      >
        <span className="text-2xl">{feature.icon}</span>
      </div>
      <h3 className={`text-lg font-semibold mb-2 ${feature.accent}`}>
        {feature.title}
      </h3>
      <p className="text-sm text-white/50 leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      {/* Glow line */}
      <div className="glow-line w-full max-w-lg mx-auto mb-16" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything under <span className="text-gradient">one roof</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Stop juggling 8 different tools. SuperTool replaces your website builder,
            analytics platform, scheduling software, and billing system — all purpose-built for plastic surgery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
