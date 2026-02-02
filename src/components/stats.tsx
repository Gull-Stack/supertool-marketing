"use client";

import { useRef, useEffect, useState } from "react";
import { NumberTicker } from "@/components/ui/number-ticker";

const stats = [
  { value: 341, suffix: "+", label: "Surgeons Onboarded", icon: "🏥" },
  { value: 98, suffix: "%", label: "Patient Satisfaction", icon: "⭐" },
  { value: 40, suffix: "%", label: "Fewer No-Shows", icon: "📉" },
  { value: 24, suffix: "hr", label: "Setup to Live", icon: "⚡" },
];

export default function Stats() {
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
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {visible ? (
                  <>
                    <NumberTicker value={stat.value} />
                    <span>{stat.suffix}</span>
                  </>
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <div className="text-sm text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
