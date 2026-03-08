import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DestinationGrid from "@/components/DestinationGrid";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-200">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <DestinationGrid />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
