'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
    {
        step: '01',
        title: 'TELL US YOUR DREAM',
        description: 'Share your vision — from a secluded tropical escape to an alpine adventure. Our curators listen to every detail.',
        detail: 'Personal consultation',
    },
    {
        step: '02',
        title: 'WE CURATE THE PERFECT PLAN',
        description: 'Our expert team handcrafts a bespoke itinerary with curated stays, private transfers, and exclusive experiences.',
        detail: 'Custom itinerary',
    },
    {
        step: '03',
        title: 'PACK AND DEPART',
        description: 'Everything is handled — from visa support to airport concierge. Just arrive and begin your story.',
        detail: 'Zero friction',
    },
    {
        step: '04',
        title: 'LIVE THE EXPERIENCE',
        description: 'With 24/7 concierge support and local insiders, every moment is elevated. Create memories that last forever.',
        detail: 'Full support',
    },
];

const HowItWorks = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="bg-neutral-200 py-24 md:py-32 px-4 sm:px-6 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end mb-16 md:mb-24">
                    <div className="max-w-xl">
                        <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] text-neutral-400 uppercase">The Process</span>
                        <h2 className="mt-6 md:mt-8 text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-neutral-900 uppercase leading-none">
                            HOW VOYAGE <br /> WORKS
                        </h2>
                    </div>
                    <p className="max-w-sm text-lg md:text-xl font-medium text-neutral-600 leading-relaxed">
                        From dream to departure in four simple steps. We handle the complexity so you can focus on the experience.
                    </p>
                </div>

                <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {steps.map((item, i) => (
                        <motion.div
                            key={item.step}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="group relative flex flex-col rounded-[32px] md:rounded-[40px] bg-white border border-black/5 p-8 md:p-10 transition-all hover:bg-neutral-900 hover:border-neutral-900 shadow-sm hover:shadow-2xl"
                        >
                            {/* Connecting line on desktop */}
                            {i < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 md:-right-4 w-8 h-px bg-neutral-200 z-20"></div>
                            )}

                            <div className="flex items-center justify-between">
                                <span className="text-4xl md:text-5xl font-black tracking-tighter text-neutral-200 group-hover:text-white/10 transition-colors">
                                    {item.step}
                                </span>
                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-400 group-hover:text-white/30 transition-colors rounded-full border border-black/5 group-hover:border-white/10 px-3 py-1.5">
                                    {item.detail}
                                </span>
                            </div>

                            <h3 className="mt-8 md:mt-10 text-xl md:text-2xl font-black tracking-tight text-neutral-900 group-hover:text-white transition-colors leading-tight">
                                {item.title}
                            </h3>
                            <p className="mt-4 md:mt-6 text-sm font-medium leading-relaxed text-neutral-500 group-hover:text-white/60 transition-colors">
                                {item.description}
                            </p>

                            {/* Arrow icon */}
                            <div className="mt-8 md:mt-10 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl md:rounded-2xl bg-neutral-50 group-hover:bg-white/10 transition-colors">
                                <span className="text-xl text-neutral-400 group-hover:text-white transition-colors">→</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
