import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col bg-neutral-200">
            <Header />
            <main className="flex-grow pt-40">
                <div className="mx-auto max-w-4xl px-6 lg:px-12 pb-20">
                    <span className="text-xs font-black tracking-[0.4em] text-neutral-400 uppercase">Our Story</span>
                    <h1 className="mt-8 text-8xl font-black tracking-tighter text-neutral-900 uppercase">BEYOND <br /> HORIZONS</h1>
                    <div className="mt-16 space-y-12">
                        <p className="text-4xl font-bold leading-tight text-neutral-900 tracking-tight">At VOYAGE, we believe travel is not just about the destination, but the elevation of the soul. Since 2024, we've redefined luxury through curation and connection.</p>
                        <p className="text-xl font-medium leading-relaxed text-neutral-600">We search for the hidden, the authentic, and the extraordinary. Each VOYAGE experience is hand-picked to ensure it meets our rigorous standards of design, service, and emotional impact.</p>
                    </div>
                </div>
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
