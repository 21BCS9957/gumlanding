import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import ClientResults from "@/components/ClientResults";
import ScreenshotProof from "@/components/ScreenshotProof";
import WhyNotWorking from "@/components/WhyNotWorking";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <Navbar />
      <Hero />
      <VideoSection />
      <ClientResults />
      <ScreenshotProof />
      <WhyNotWorking />
      <HowItWorks />
      <Footer />
    </main>
  );
}
