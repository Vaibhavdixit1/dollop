'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
    {
        step: '01',
        title: 'INITIAL DOSSIER',
        description: 'We conduct an in-depth profiling of your travel history, architectural preferences, and dietary requirements to establish your bespoke traveler identity.',
        detail: 'Private profiling',
    },
    {
        step: '02',
        title: 'ARCHITECTING THE PATH',
        description: 'Our global intelligence network secures off-market estates, private airstrips, and heavily restricted nature reserves.',
        detail: 'Asset securing',
    },
    {
        step: '03',
        title: 'THE DISPATCH',
        description: 'You receive a classified itinerary brief. From here, our logistics team manages airspace regulations, ground security, and staff vetting.',
        detail: 'Pre-flight prep',
    },
    {
        step: '04',
        title: 'COMPLETE IMMERSION',
        description: 'Upon arrival, the world is yours. Our shadow-concierge team works invisibly in the background to ensure absolute perfection.',
        detail: 'Shadow support',
    },
];

const HowItWorks = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="bg-neutral-200 py-24 md:py-32 px-4 sm:px-6 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end mb-16 md:mb-24">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                        className="max-w-xl"
                    >
                        <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] text-neutral-400 uppercase">Our Protocol</span>
                        <h2 className="mt-6 md:mt-8 text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-neutral-900 uppercase leading-none">
                            THE VOYAGE <br /> MANIFESTO
                        </h2>
                    </motion.div>
                    <motion.p 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-sm text-lg md:text-xl font-medium text-neutral-600 leading-relaxed"
                    >
                        Precision logistics masked as effortless magic. Our operation runs on four highly guarded principles.
                    </motion.p>
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
