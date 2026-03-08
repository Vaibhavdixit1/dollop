import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PackageTiers from "@/components/PackageTiers";
import CTA from "@/components/CTA";

export default function PackagesPage() {
    return (
        <div className="flex min-h-screen flex-col bg-neutral-200">
            <Header />
            <main className="flex-grow pt-40">
                <div className="mx-auto max-w-7xl px-6 lg:px-12">
                    <h1 className="text-8xl font-black tracking-tighter text-neutral-900 uppercase">EXCLUSIVE <br /> PACKAGES</h1>
                    <p className="mt-8 max-w-2xl text-xl font-bold text-neutral-500 uppercase tracking-widest leading-relaxed">CURATED DEALS DESIGNED FOR THE ULTIMATE TRAVEL EXPERIENCE.</p>

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[1, 2].map((i) => (
                            <div key={i} className="rounded-[48px] bg-white border border-black/5 p-12 aspect-video flex flex-col justify-end shadow-xl transition-all hover:-translate-y-2 group cursor-pointer overflow-hidden relative">
                                <div className="absolute inset-0 bg-neutral-100 translate-y-full transition-transform duration-500 group-hover:translate-y-0 opacity-50"></div>
                                <div className="relative z-10">
                                    <span className="text-xs font-black tracking-[0.4em] text-neutral-400 uppercase mb-4 block">Limited Edition</span>
                                    <h2 className="text-4xl font-black text-neutral-900 uppercase tracking-tighter">PACIFIC PARADISE ESCAPE</h2>
                                    <p className="mt-4 text-xl text-neutral-600 font-medium tracking-tight">7 Days of luxury in the Maldives.</p>
                                    <button className="mt-10 w-fit cursor-pointer rounded-2xl bg-neutral-900 px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-neutral-800">View Details</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-32">
                    <PackageTiers />
                    <CTA />
                </div>
            </main>
            <Footer />
        </div>
    );
}
