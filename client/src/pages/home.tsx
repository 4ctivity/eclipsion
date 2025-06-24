import AnimatedBackground from "@/components/animated-background";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import NewsSection from "@/components/news-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <AnimatedBackground />
      <Navigation />
      <HeroSection />
      <NewsSection />
      <Footer />
    </div>
  );
}
