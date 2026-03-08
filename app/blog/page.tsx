import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogExplorer from "@/components/BlogExplorer";
import CTA from "@/components/CTA";

export default function BlogPage() {
    return (
        <div className="flex min-h-screen flex-col bg-neutral-200">
            <Header />
            <main className="flex-grow pt-40">
                <div className="mx-auto max-w-7xl px-6 lg:px-12 pb-32">
                    <span className="text-xs font-black tracking-[0.4em] text-neutral-400 uppercase">Voyage Journal</span>
                    <h1 className="mt-8 text-8xl font-black tracking-tighter text-neutral-900 uppercase">THE INSIDER <br /> TRAVEL STORIES</h1>

                    <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="aspect-[16/10] overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-lg transition-all hover:shadow-2xl">
                                    <div className="h-full w-full bg-gradient-to-br from-neutral-100 to-neutral-300 group-hover:scale-105 transition-transform duration-700 opacity-50"></div>
                                </div>
                                <div className="mt-8 px-2">
                                    <span className="text-[10px] font-black tracking-[0.3em] text-neutral-400 uppercase">February 20, 2026</span>
                                    <h2 className="mt-4 text-3xl font-black text-neutral-900 group-hover:underline underline-offset-8 transition-all uppercase tracking-tighter">THE SECRET BEACHES OF SOUTHERN JAPAN</h2>
                                    <p className="mt-6 text-lg font-medium text-neutral-600 leading-relaxed line-clamp-2">Discover the untouched coastal paradises of Okinawa, where luxury meets the emerald sea in ways you've never imagined.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <BlogExplorer />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
