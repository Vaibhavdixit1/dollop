import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TravelGallery from "@/components/TravelGallery";
import CTA from "@/components/CTA";

export default function GalleryPage() {
    return (
        <div className="flex min-h-screen flex-col bg-neutral-200">
            <Header />
            <main className="flex-grow pt-32 md:pt-40">
                {/* Hero section for Gallery */}
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-12 pb-16 md:pb-20">
                    <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] text-neutral-400 uppercase">Our Collection</span>
                    <h1 className="mt-6 md:mt-8 text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-neutral-900 uppercase leading-[1.1]">VISUAL <br /> JOURNEYS</h1>
                    <div className="mt-12 md:mt-16 space-y-8 md:space-y-12">
                        <p className="text-2xl md:text-4xl font-bold leading-tight text-neutral-900 tracking-tight">A curated collection of moments captured across the globe. From the silence of the Antarctic to the vibrant pulse of urban luxury.</p>
                    </div>
                </div>

                <TravelGallery />
                
                <div className="pb-24">
                    <CTA />
                </div>
            </main>
            <Footer />
        </div>
    );
}
