'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const milestones = [
    {
        year: '2014',
        title: 'THE SEED',
        description: 'Founder Elara Voss quits her concierge career at The Peninsula Hong Kong with a vision: to build a travel company that feels more like a trusted friend than a service provider.',
    },
    {
        year: '2016',
        title: 'FIRST 100 MEMBERS',
        description: 'VOYAGE reaches its first 100 members through word-of-mouth alone. Early adopters praise the deeply personal approach to trip planning and the quality of hand-picked properties.',
    },
    {
        year: '2018',
        title: 'GLOBAL EXPANSION',
        description: 'The team grows to 12 curators across 4 continents. VOYAGE launches partnerships with Aman Resorts, Four Seasons, and Belmond, unlocking exclusive member-only rates and upgrades.',
    },
    {
        year: '2020',
        title: 'THE PIVOT',
        description: 'During the global travel pause, VOYAGE pivots to virtual cultural experiences and domestic luxury escapes. Membership retention stays above 94%, proving the community\'s strength.',
    },
    {
        year: '2022',
        title: 'ELITE TIER LAUNCH',
        description: 'The invite-only Elite membership launches with private jet booking access, personal travel butlers, and access to properties not listed on any public platform.',
    },
    {
        year: '2024',
        title: '25,000 TRAVELERS',
        description: 'VOYAGE crosses 25,000 cumulative travelers across 150+ destinations. Named "Best Luxury Travel Curator" by Condé Nast Traveller for the second consecutive year.',
    },
];

const Timeline = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <section className="bg-neutral-900 py-24 md:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.02)_0%,transparent_60%)]"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="relative z-10 mx-auto max-w-5xl">
                <div className="text-center mb-16 md:mb-24">
                    <span className="text-[10px] sm:text-xs font-black tracking-[0.5em] text-white/30 uppercase">Our Journey</span>
                    <h2 className="mt-4 md:mt-6 text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
                        A DECADE OF <br /> EXTRAORDINARY
                    </h2>
                </div>

                <div ref={ref} className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px"></div>

                    <div className="space-y-12 md:space-y-16">
                        {milestones.map((milestone, i) => (
                            <motion.div
                                key={milestone.year}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-0 ${
                                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                            >
                                {/* Dot on line */}
                                <div className="absolute left-8 md:left-1/2 top-1 md:top-3 w-3 h-3 rounded-full bg-white/40 border-2 border-white/20 -translate-x-1/2 z-10"></div>

                                {/* Content */}
                                <div className={`flex-1 pl-16 md:pl-0 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                                    <span className="text-4xl md:text-5xl font-black tracking-tighter text-white/10">
                                        {milestone.year}
                                    </span>
                                    <h3 className="mt-2 md:mt-3 text-xl md:text-2xl font-black tracking-tight text-white uppercase">
                                        {milestone.title}
                                    </h3>
                                    <p className="mt-3 md:mt-4 text-sm md:text-base font-medium leading-relaxed text-white/50">
                                        {milestone.description}
                                    </p>
                                </div>

                                {/* Spacer for opposite side */}
                                <div className="hidden md:block flex-1"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
