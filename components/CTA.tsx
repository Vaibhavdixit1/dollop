'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className="relative overflow-hidden bg-white py-24 md:py-32 px-4 sm:px-6 lg:px-12">
            {/* Abstract Background Element */}
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-neutral-400/10 blur-[120px]"></div>
            <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-neutral-200/50 blur-[100px]"></div>

            <div className="relative z-10 mx-auto max-w-5xl text-center">
                <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5 }}
                    className="text-[10px] sm:text-xs font-black tracking-[0.5em] text-neutral-400 uppercase"
                >
                    THE EVENT HORIZON
                </motion.span>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mt-6 md:mt-8 text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-neutral-900 uppercase leading-[1.1] md:leading-[0.9]"
                >
                    SEEK THE <br />
                    <span className="text-neutral-400">UNATTAINABLE.</span>
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mx-auto mt-8 md:mt-12 max-w-2xl text-lg md:text-xl font-medium leading-relaxed text-neutral-600"
                >
                    The world is shrinking. True isolation is the last remaining luxury. Secure your passage into the unmapped sectors of existence.
                </motion.p>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 md:mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row"
                >
                    <Link href="/signup" className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-neutral-900 px-10 md:px-12 py-5 md:py-6 text-sm font-black uppercase tracking-widest text-white transition-all hover:scale-105 hover:bg-neutral-800 active:scale-95 shadow-2xl">
                        <span className="relative z-10">SECURE PASSAGE</span>
                    </Link>
                    <Link href="/about" className="group flex items-center gap-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-900 transition-all hover:gap-6">
                        THE MANIFESTO
                        <span className="h-[1px] w-8 sm:w-12 bg-black/10 transition-all group-hover:w-16 group-hover:bg-black"></span>
                    </Link>
                </motion.div>
            </div>

            {/* Floating stats */}
            <div className="mt-20 md:mt-24 grid grid-cols-2 gap-8 border-t border-black/5 pt-16 md:pt-24 sm:grid-cols-4">
                {[
                    { label: 'ACTIVE SECTORS', value: '150+' },
                    { label: 'VETTED PATRONS', value: '2k+' },
                    { label: 'CURATED SANCTUARIES', value: '500+' },
                    { label: 'SUCCESSFUL EXPEDITIONS', value: '12k+' },
                ].map((stat, i) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                        key={stat.label} 
                        className="text-center"
                    >
                        <p className="text-2xl md:text-3xl font-black text-neutral-900">{stat.value}</p>
                        <p className="mt-1 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-neutral-400">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default CTA;
