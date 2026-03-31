'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

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
        <span ref={ref} className="tabular-nums">
            {count}{suffix}
        </span>
    );
}

const TravelStats = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: '-50px' });

    return (
        <section className="relative bg-neutral-950 py-32 md:py-48 px-4 sm:px-6 lg:px-12 overflow-hidden">
            {/* Architectural Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,transparent_70%)]"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></div>

            <div ref={containerRef} className="relative z-10 mx-auto max-w-7xl">
                <div className="flex flex-col items-center justify-center text-center mb-24 md:mb-32">
                        <motion.span 
                        initial={{ opacity: 0, letterSpacing: "0.1em" }}
                        whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
                        transition={{ duration: 1 }}
                        className="text-[10px] sm:text-xs font-black tracking-[0.5em] text-white/40 uppercase"
                    >
                        The Infrastructure
                    </motion.span>
                    <div className="overflow-hidden mt-6">
                        <motion.h2 
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9]"
                        >
                            UNMATCHED <br /> CAPABILITY
                        </motion.h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-[40px] overflow-hidden border border-white/10">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="group relative bg-neutral-950 p-12 md:p-16 flex flex-col items-center text-center hover:bg-neutral-900 transition-colors duration-500"
                        >
                            <span className="text-6xl md:text-8xl font-black tracking-tighter text-white">
                                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                            </span>
                            <div className="mt-8 flex flex-col items-center gap-4">
                                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/80 group-hover:text-white transition-colors">
                                    {stat.label}
                                </h3>
                                <div className="h-px w-8 bg-white/20 group-hover:w-16 transition-all duration-500"></div>
                                <p className="text-[10px] font-bold text-white/30 tracking-widest uppercase">
                                    {stat.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TravelStats;
