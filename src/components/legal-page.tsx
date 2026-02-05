import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">{title}</span>
            </h1>
            <p className="text-white/50">
              Last Updated: {lastUpdated}
            </p>
          </div>
          <div className="prose prose-invert prose-lg max-w-none
            prose-headings:text-white prose-headings:font-semibold
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-2
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-white/60 prose-p:leading-relaxed
            prose-li:text-white/60
            prose-strong:text-white/80
            prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:text-indigo-300
          ">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
