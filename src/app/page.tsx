import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ScrollAnimation from "@/components/scroll-animation";
import Features from "@/components/features";
import Stats from "@/components/stats";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ScrollAnimation />
      <Features />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
