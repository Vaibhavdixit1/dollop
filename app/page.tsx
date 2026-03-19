import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import DestinationGrid from "@/components/DestinationGrid";
import FeaturedPackages from "@/components/FeaturedPackages";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import TravelStats from "@/components/TravelStats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import RegionCategories from "@/components/RegionCategories";
import Philosophy from "@/components/Philosophy";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-200">
      <Header />
      <main className="grow">
        <Hero />
        <Partners />
        <Features />
        <Philosophy />
        <HowItWorks />
        <RegionCategories />
        <DestinationGrid />
        <FeaturedPackages limit={2} buttonLabel="Show more" />
        <InfiniteMarquee />
        <TravelStats />
        <Testimonials />
        <FAQ />
        <Newsletter />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
