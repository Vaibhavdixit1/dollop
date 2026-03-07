import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DestinationGrid from "@/components/DestinationGrid";

export default function DestinationsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-neutral-200">
            <Header />
            <main className="flex-grow pt-32 pb-20 px-6 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <h1 className="text-8xl font-black tracking-tighter text-neutral-900 uppercase">ALL <br /> DESTINATIONS</h1>
                    <p className="mt-8 max-w-2xl text-xl font-bold text-neutral-500 uppercase tracking-widest leading-relaxed">EXPLORE THE FULL RANGE OF OUR CURATED EXPERIENCES ACROSS THE GLOBE.</p>
                </div>
                <DestinationGrid />
            </main>
            <Footer />
        </div>
    );
}
