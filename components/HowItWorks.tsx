'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleX = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);

    return (
        <section ref={containerRef} className="bg-neutral-100 py-32 md:py-48 px-4 sm:px-6 lg:px-12 overflow-hidden">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-end mb-24 md:mb-32">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-2xl"
                    >
                        <span className="text-[10px] sm:text-xs font-black tracking-[0.6em] text-neutral-400 uppercase">The Protocol</span>
                        <h2 className="mt-8 text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-neutral-900 uppercase leading-[0.9]">
                            THE VOYAGE <br /> MANIFESTO
                        </h2>
                    </motion.div>
                </div>

                <div className="relative">
                    {/* Progress line */}
                    <div className="hidden lg:block absolute top-[60px] left-0 w-full h-[2px] bg-neutral-200">
                        <motion.div 
                            style={{ scaleX }}
                            className="h-full w-full bg-neutral-900 origin-left"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {steps.map((item, i) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative flex flex-col pt-20"
                            >
                                <div className="absolute top-0 left-0 flex h-14 w-14 items-center justify-center rounded-3xl bg-white border border-neutral-200 text-neutral-900 font-black text-xl shadow-sm group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 transition-all duration-500 z-10">
                                    {item.step}
                                </div>
                                
                                <h3 className="text-2xl font-black tracking-tighter text-neutral-900 uppercase mb-6">{item.title}</h3>
                                <p className="text-base font-medium leading-relaxed text-neutral-500 group-hover:text-neutral-900 transition-colors duration-500">
                                    {item.description}
                                </p>
                                
                                <div className="mt-8 pt-8 border-t border-neutral-200 border-dashed">
                                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-400">{item.detail}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
