'use client';

import Link from 'next/link';

const CTA = () => {
    return (
        <section className="relative overflow-hidden bg-white py-32 px-6 lg:px-12">
            {/* Abstract Background Element */}
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px]"></div>
            <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-neutral-200/50 blur-[100px]"></div>

            <div className="relative z-10 mx-auto max-w-5xl text-center">
                <span className="text-xs font-black tracking-[0.5em] text-neutral-400 uppercase">Your Next Chapter</span>
                <h2 className="mt-8 text-6xl font-black tracking-tighter text-neutral-900 sm:text-7xl md:text-8xl uppercase leading-[0.9]">
                    READY TO ESCAPE <br />
                    <span className="text-neutral-400">THE ORDINARY?</span>
                </h2>
                <p className="mx-auto mt-12 max-w-2xl text-xl font-medium leading-relaxed text-neutral-600">
                    Join over 25,000+ luxury travelers who explore the world with VOYAGE. Unlock exclusive access to hidden gems and private escapes.
                </p>
                <div className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
                    <Link href="/signup" className="group relative overflow-hidden rounded-full bg-neutral-900 px-12 py-6 text-sm font-black uppercase tracking-widest text-white transition-all hover:scale-105 active:scale-95 shadow-2xl">
                        <span className="relative z-10">Start Your Journey</span>
                    </Link>
                    <Link href="/about" className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-neutral-900 transition-all hover:gap-6">
                        Learn our story
                        <span className="h-[1px] w-12 bg-black/10 transition-all group-hover:w-16 group-hover:bg-black"></span>
                    </Link>
                </div>
            </div>

            {/* Floating stats */}
            <div className="mt-24 grid grid-cols-2 gap-8 border-t border-black/5 pt-24 sm:grid-cols-4">
                {[
                    { label: 'Destinations', value: '150+' },
                    { label: 'Happy Travelers', value: '25k+' },
                    { label: 'Luxury Hotels', value: '500+' },
                    { label: 'Years Experience', value: '12+' },
                ].map((stat) => (
                    <div key={stat.label} className="text-center">
                        <p className="text-3xl font-black text-neutral-900">{stat.value}</p>
                        <p className="mt-1 text-[10px] font-black uppercase tracking-widest text-neutral-400">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CTA;
