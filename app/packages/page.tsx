import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PackageTiers from "@/components/PackageTiers";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import FeaturedPackages from "@/components/FeaturedPackages";

export default function PackagesPage() {
    return (
        <div className="flex min-h-screen flex-col bg-neutral-200">
            <Header />
            <main className="flex-grow pt-32 md:pt-40">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
                    <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] text-neutral-400 uppercase">Membership Plans</span>
                    <h1 className="mt-6 md:mt-8 text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-neutral-900 uppercase leading-[1.1]">EXCLUSIVE <br /> PACKAGES</h1>
                    <p className="mt-6 md:mt-8 max-w-2xl text-lg md:text-xl font-medium text-neutral-600 leading-relaxed">Choose the membership tier that fits your travel ambitions. Every plan unlocks curated destinations, personal curation, and world-class service.</p>

                    <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {[
                            {
                                tag: 'Limited Edition',
                                title: 'PACIFIC PARADISE ESCAPE',
                                desc: '7 Days of luxury in the Maldives — overwater villa, private chef, sunset cruise, and spa.',
                                price: 'From $12,500',
                            },
                            {
                                tag: 'Signature Collection',
                                title: 'ALPINE GRAND TOUR',
                                desc: '10 Days across Switzerland & Austria — first-class rail, mountain lodges, and Michelin dining.',
                                price: 'From $18,200',
                            },
                        ].map((pkg) => (
                            <div key={pkg.title} className="rounded-[32px] md:rounded-[48px] bg-white border border-black/5 p-8 md:p-12 aspect-video flex flex-col justify-end shadow-xl transition-all hover:-translate-y-2 group cursor-pointer overflow-hidden relative">
                                <div className="absolute inset-0 bg-neutral-100 translate-y-full transition-transform duration-500 group-hover:translate-y-0 opacity-50"></div>
                                <div className="relative z-10">
                                    <span className="text-[10px] md:text-xs font-black tracking-[0.4em] text-neutral-400 uppercase mb-3 md:mb-4 block">{pkg.tag}</span>
                                    <h2 className="text-2xl md:text-4xl font-black text-neutral-900 uppercase tracking-tighter">{pkg.title}</h2>
                                    <p className="mt-3 md:mt-4 text-base md:text-lg text-neutral-600 font-medium tracking-tight">{pkg.desc}</p>
                                    <div className="mt-6 md:mt-8 flex items-center justify-between">
                                        <p className="text-xl md:text-2xl font-black text-neutral-900">{pkg.price}</p>
                                        <button className="cursor-pointer rounded-2xl bg-neutral-900 px-6 md:px-8 py-3.5 md:py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-neutral-800 shadow-lg active:scale-95">View Details</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-24 md:mt-32">
                    <FeaturedPackages />
                    <PackageTiers />
                    <FAQ />
                    <CTA />
                </div>
            </main>
            <Footer />
        </div>
    );
}
