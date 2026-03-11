'use client';

import Link from 'next/link';

const CTA = () => {
    return (
        <section className="relative overflow-hidden bg-white py-24 md:py-32 px-4 sm:px-6 lg:px-12">
            {/* Abstract Background Element */}
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px]"></div>
            <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-neutral-200/50 blur-[100px]"></div>

            <div className="relative z-10 mx-auto max-w-5xl text-center">
                <span className="text-[10px] sm:text-xs font-black tracking-[0.5em] text-neutral-400 uppercase">Your Next Chapter</span>
                <h2 className="mt-6 md:mt-8 text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-neutral-900 uppercase leading-[1.1] md:leading-[0.9]">
                    READY TO ESCAPE <br />
                    <span className="text-neutral-400">THE ORDINARY?</span>
                </h2>
                <p className="mx-auto mt-8 md:mt-12 max-w-2xl text-lg md:text-xl font-medium leading-relaxed text-neutral-600">
                    Join over 25,000+ luxury travelers who explore the world with VOYAGE. Unlock exclusive access to hidden gems and private escapes.
                </p>
                <div className="mt-12 md:mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
                    <Link href="/signup" className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-neutral-900 px-10 md:px-12 py-5 md:py-6 text-sm font-black uppercase tracking-widest text-white transition-all hover:scale-105 active:scale-95 shadow-2xl">
                        <span className="relative z-10">Start Your Journey</span>
                    </Link>
                    <Link href="/about" className="group flex items-center gap-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-900 transition-all hover:gap-6">
                        Learn our story
                        <span className="h-[1px] w-8 sm:w-12 bg-black/10 transition-all group-hover:w-16 group-hover:bg-black"></span>
                    </Link>
                </div>
            </div>

            {/* Floating stats */}
            <div className="mt-20 md:mt-24 grid grid-cols-2 gap-8 border-t border-black/5 pt-16 md:pt-24 sm:grid-cols-4">
                {[
                    { label: 'Destinations', value: '150+' },
                    { label: 'Happy Travelers', value: '25k+' },
                    { label: 'Luxury Hotels', value: '500+' },
                    { label: 'Years Experience', value: '12+' },
                ].map((stat) => (
                    <div key={stat.label} className="text-center">
                        <p className="text-2xl md:text-3xl font-black text-neutral-900">{stat.value}</p>
                        <p className="mt-1 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-neutral-400">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CTA;
