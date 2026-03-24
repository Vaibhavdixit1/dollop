'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
    { value: 85, suffix: '+', label: 'Vetted Private Estates', description: 'Off-market properties' },
    { value: 99, suffix: '%', label: 'Discretion Guarantee', description: 'Absolute client anonymity' },
    { value: 24, suffix: '/7', label: 'Shadow Concierge', description: 'Global rapid response' },
    { value: 15, suffix: '+', label: 'Years of Intelligence', description: 'Unrivaled global network' },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isInView, target]);

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    );
}

const TravelStats = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: '-50px' });

    return (
        <section className="relative bg-neutral-900 py-24 md:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden">
            {/* Subtle texture overlays */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,transparent_60%)]"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>

            <div ref={containerRef} className="relative z-10 mx-auto max-w-7xl">
                <div className="text-center mb-16 md:mb-24">
                    <span className="text-[10px] sm:text-xs font-black tracking-[0.5em] text-white/30 uppercase">The Infrastructure</span>
                    <h2 className="mt-4 md:mt-6 text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
                        UNMATCHED <br /> CAPABILITY
                    </h2>
                </div>

                <div className="grid grid-cols-2 gap-8 md:gap-0 lg:grid-cols-4">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="relative flex flex-col items-center text-center px-4 md:px-8"
                        >
                            {/* Divider between stats on desktop */}
                            {i > 0 && (
                                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-20 w-px bg-white/10"></div>
                            )}
                            <span className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white">
                                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                            </span>
                            <h3 className="mt-4 md:mt-6 text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-white/60">
                                {stat.label}
                            </h3>
                            <p className="mt-2 text-[10px] sm:text-xs font-medium text-white/30 tracking-wider uppercase">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TravelStats;
