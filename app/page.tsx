import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import DestinationGrid from "@/components/DestinationGrid";
import TravelGallery from "@/components/TravelGallery";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import TravelStats from "@/components/TravelStats";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-200">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Partners />
        <Features />
        <HowItWorks />
        <DestinationGrid />
        <TravelGallery />
        <InfiniteMarquee />
        <TravelStats />
        <Testimonials />
        <Newsletter />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
