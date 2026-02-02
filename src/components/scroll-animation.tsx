"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-triggered frame sequence animation.
 * 
 * When real JPEG frames are available, pass them via the `frames` prop.
 * Until then, renders a CSS-driven dashboard assembly animation
 * controlled by scroll position.
 */

// Dashboard mockup that assembles as you scroll
function DashboardAssembly({ progress }: { progress: number }) {
  return (
    <div className="relative w-full max-w-4xl mx-auto perspective-[1200px]">
      {/* Main dashboard shell */}
      <div
        className="dashboard-mockup transition-all duration-100"
        style={{
          opacity: Math.min(1, progress * 3),
          transform: `
            scale(${0.8 + progress * 0.2})
            rotateX(${(1 - progress) * 15}deg)
            translateY(${(1 - progress) * 60}px)
          `,
        }}
      >
        {/* Browser bar */}
        <div className="dashboard-mockup-bar">
          <div className="dashboard-mockup-dot bg-red-500/60" />
          <div className="dashboard-mockup-dot bg-yellow-500/60" />
          <div className="dashboard-mockup-dot bg-green-500/60" />
          <div className="ml-4 flex-1 h-5 bg-white/5 rounded-full max-w-xs" />
        </div>

        {/* Dashboard content */}
        <div className="p-6 space-y-4">
          {/* Top nav */}
          <div
            className="flex gap-3 transition-all duration-300"
            style={{
              opacity: progress > 0.1 ? Math.min(1, (progress - 0.1) * 5) : 0,
              transform: `translateX(${progress > 0.1 ? 0 : -30}px)`,
            }}
          >
            <div className="h-8 w-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
              <div className="h-4 w-4 rounded bg-indigo-500/60" />
            </div>
            <div className="flex gap-4 items-center">
              {["Dashboard", "Patients", "Analytics", "Billing"].map((item, i) => (
                <div
                  key={item}
                  className="h-4 rounded bg-white/10 px-2 text-[10px] text-white/40 flex items-center"
                  style={{
                    opacity: progress > 0.15 + i * 0.05 ? 1 : 0,
                    transition: "opacity 0.3s",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div
            className="grid grid-cols-4 gap-3 transition-all duration-300"
            style={{
              opacity: progress > 0.25 ? Math.min(1, (progress - 0.25) * 4) : 0,
              transform: `translateY(${progress > 0.25 ? 0 : 20}px)`,
            }}
          >
            {[
              { label: "Patients", value: "1,247", color: "bg-indigo-500/20", accent: "text-indigo-400" },
              { label: "Revenue", value: "$284K", color: "bg-emerald-500/20", accent: "text-emerald-400" },
              { label: "Bookings", value: "89", color: "bg-violet-500/20", accent: "text-violet-400" },
              { label: "Rating", value: "4.9★", color: "bg-amber-500/20", accent: "text-amber-400" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`${stat.color} rounded-lg p-3 border border-white/5`}
                style={{
                  opacity: progress > 0.3 + i * 0.05 ? 1 : 0,
                  transform: `scale(${progress > 0.3 + i * 0.05 ? 1 : 0.8})`,
                  transition: "all 0.4s ease",
                }}
              >
                <div className="text-[10px] text-white/40">{stat.label}</div>
                <div className={`text-lg font-bold ${stat.accent}`}>{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Chart area */}
          <div
            className="flex gap-4 transition-all duration-500"
            style={{
              opacity: progress > 0.5 ? Math.min(1, (progress - 0.5) * 3) : 0,
              transform: `translateY(${progress > 0.5 ? 0 : 30}px)`,
            }}
          >
            {/* Main chart */}
            <div className="flex-1 bg-white/[0.02] rounded-lg p-4 border border-white/5">
              <div className="text-xs text-white/40 mb-3">Revenue Overview</div>
              <div className="flex items-end gap-1 h-24">
                {[35, 52, 45, 68, 55, 78, 62, 85, 72, 92, 88, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-indigo-500/40 to-indigo-500/80"
                    style={{
                      height: `${progress > 0.55 ? h : 0}%`,
                      transition: `height 0.5s ease ${i * 0.05}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div
              className="w-48 space-y-2"
              style={{
                opacity: progress > 0.65 ? Math.min(1, (progress - 0.65) * 4) : 0,
                transform: `translateX(${progress > 0.65 ? 0 : 20}px)`,
                transition: "all 0.4s ease",
              }}
            >
              <div className="bg-white/[0.02] rounded-lg p-3 border border-white/5">
                <div className="text-[10px] text-white/40 mb-2">Upcoming</div>
                {["9:00 Consultation", "11:30 Follow-up", "2:00 Surgery"].map((apt, i) => (
                  <div key={i} className="flex items-center gap-2 py-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    <span className="text-[10px] text-white/60">{apt}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white/[0.02] rounded-lg p-3 border border-white/5">
                <div className="text-[10px] text-white/40 mb-2">Recent Reviews</div>
                <div className="text-amber-400 text-xs">★★★★★</div>
                <div className="text-[10px] text-white/50 mt-1">&quot;Dr. Smith changed my life...&quot;</div>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div
            className="grid grid-cols-3 gap-3 transition-all duration-500"
            style={{
              opacity: progress > 0.8 ? Math.min(1, (progress - 0.8) * 5) : 0,
              transform: `translateY(${progress > 0.8 ? 0 : 20}px)`,
            }}
          >
            <div className="bg-white/[0.02] rounded-lg p-3 border border-white/5">
              <div className="text-[10px] text-white/40">Website Traffic</div>
              <div className="text-sm font-semibold text-emerald-400 mt-1">↑ 34%</div>
            </div>
            <div className="bg-white/[0.02] rounded-lg p-3 border border-white/5">
              <div className="text-[10px] text-white/40">Conversion Rate</div>
              <div className="text-sm font-semibold text-violet-400 mt-1">12.4%</div>
            </div>
            <div className="bg-white/[0.02] rounded-lg p-3 border border-white/5">
              <div className="text-[10px] text-white/40">Patient Satisfaction</div>
              <div className="text-sm font-semibold text-amber-400 mt-1">98%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements that converge */}
      <div
        className="absolute -top-8 -right-8 w-16 h-16 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center"
        style={{
          opacity: progress > 0.2 ? Math.max(0, 1 - (progress - 0.2) * 3) : progress * 5,
          transform: `translate(${(1 - progress) * 80}px, ${(1 - progress) * -60}px) rotate(${(1 - progress) * 15}deg)`,
          transition: "transform 0.1s linear",
        }}
      >
        <span className="text-2xl">📊</span>
      </div>
      <div
        className="absolute -bottom-6 -left-6 w-14 h-14 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center"
        style={{
          opacity: progress > 0.3 ? Math.max(0, 1 - (progress - 0.3) * 3) : progress * 4,
          transform: `translate(${(1 - progress) * -70}px, ${(1 - progress) * 50}px) rotate(${(1 - progress) * -20}deg)`,
          transition: "transform 0.1s linear",
        }}
      >
        <span className="text-xl">🗓️</span>
      </div>
      <div
        className="absolute top-1/3 -left-12 w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center"
        style={{
          opacity: progress > 0.4 ? Math.max(0, 1 - (progress - 0.4) * 3) : progress * 3,
          transform: `translate(${(1 - progress) * -100}px, ${(1 - progress) * 20}px) rotate(${(1 - progress) * 10}deg)`,
          transition: "transform 0.1s linear",
        }}
      >
        <span className="text-lg">💊</span>
      </div>
      <div
        className="absolute top-1/4 -right-10 w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center"
        style={{
          opacity: progress > 0.35 ? Math.max(0, 1 - (progress - 0.35) * 3) : progress * 3.5,
          transform: `translate(${(1 - progress) * 90}px, ${(1 - progress) * -30}px) rotate(${(1 - progress) * -12}deg)`,
          transition: "transform 0.1s linear",
        }}
      >
        <span className="text-lg">💳</span>
      </div>
    </div>
  );
}

// Canvas-based frame sequence player (for when real frames are available)
function FrameSequencePlayer({ frames }: { frames: string[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    // Preload all frames
    imagesRef.current = frames.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });
  }, [frames]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / maxScroll;
      const frameIndex = Math.min(
        frames.length - 1,
        Math.floor(progress * frames.length)
      );

      const img = imagesRef.current[frameIndex];
      if (img && img.complete) {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [frames]);

  return (
    <canvas
      ref={canvasRef}
      className="max-w-full max-h-[80vh] object-contain"
    />
  );
}

export default function ScrollAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Calculate how far through the scroll container we are
      const scrolled = -rect.top;
      const scrollable = containerHeight - viewportHeight;
      const p = Math.max(0, Math.min(1, scrolled / scrollable));
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative" style={{ height: "300vh" }}>
      <div className="scroll-canvas-container">
        <div className="w-full max-w-5xl px-4">
          {/* Headline that fades out */}
          <div
            className="text-center mb-8 transition-all duration-200"
            style={{
              opacity: Math.max(0, 1 - progress * 4),
              transform: `translateY(${progress * -50}px)`,
            }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Everything your practice needs.
              <br />
              <span className="text-gradient">One platform.</span>
            </h2>
            <p className="text-white/50 text-lg">Scroll to see it come together ↓</p>
          </div>
          
          <DashboardAssembly progress={progress} />

          {/* Caption that fades in at end */}
          <div
            className="text-center mt-8 transition-all duration-300"
            style={{
              opacity: progress > 0.85 ? Math.min(1, (progress - 0.85) * 7) : 0,
              transform: `translateY(${progress > 0.85 ? 0 : 20}px)`,
            }}
          >
            <p className="text-white/60 text-sm">
              Your complete practice command center — live in minutes, not months.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export for future use when AI-generated frames are ready
export { FrameSequencePlayer };
