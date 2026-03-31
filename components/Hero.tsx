'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Magnetic from './Magnetic';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();
    
    // Parallax effects
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section ref={containerRef} className="relative flex flex-col items-center justify-center overflow-hidden bg-neutral-200 px-4 pt-32 pb-24 md:px-6 md:pt-40 md:pb-32 md:min-h-screen lg:px-12">
            {/* Cinematic Background Elements */}
            <motion.div 
                style={{ y: y1 }}
                className="absolute top-1/4 -left-48 h-[600px] w-[600px] rounded-full bg-white/40 blur-[120px]"
            ></motion.div>
            <motion.div 
                style={{ y: y2 }}
                className="absolute bottom-1/4 -right-48 h-[600px] w-[600px] rounded-full bg-neutral-400/10 blur-[120px]"
            ></motion.div>

            <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-6xl text-center">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8 md:mb-10 inline-flex items-center rounded-full border border-black/5 bg-white/20 px-4 py-1.5 sm:px-6 sm:py-2 backdrop-blur-md cursor-pointer hover:bg-white/40 transition-colors"
                >
                    <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-neutral-900 animate-pulse"></span>
                    <span className="ml-2 sm:ml-3 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-neutral-600">
                        Discover the Unseen
                    </span>
                </motion.div>

                <div className="overflow-hidden">
                    <motion.h1 
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-balance text-4xl font-black leading-[1.05] tracking-tighter text-neutral-900 sm:text-7xl md:text-[10rem] uppercase"
                    >
                        YOUR JOURNEY
                    </motion.h1>
                </div>
                <div className="overflow-hidden mb-8 md:mb-12">
                    <motion.h1 
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-balance text-4xl font-black leading-[1.05] tracking-tighter sm:text-7xl md:text-[10rem] uppercase text-transparent bg-clip-text bg-linear-to-b from-neutral-400 to-neutral-900"
                    >
                        Starts Here.
                    </motion.h1>
                </div>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mx-auto max-w-2xl text-balance text-lg font-medium leading-relaxed text-neutral-600 sm:text-2xl"
                >
                    Experience luxury travel like never before. From hidden tropical paradises to majestic mountain peaks, we curate the world&apos;s most exclusive escapes.
                </motion.p>

                {/* Floating Search Widget */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-12 md:mt-20 w-full max-w-5xl rounded-[32px] md:rounded-[40px] border border-black/5 bg-white/70 p-3 md:p-4 backdrop-blur-3xl shadow-2xl transition-all hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)]"
                >
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-4 md:gap-4">
                        <div className="group flex flex-col items-start px-6 py-4 md:px-8 md:py-6 text-left border-b md:border-b-0 md:border-r border-black/5 last:border-0 hover:bg-black/5 transition-all rounded-[24px] cursor-pointer">
                            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-neutral-400 group-hover:text-neutral-900 transition-colors">Destination</span>
                            <span className="mt-1 text-base md:text-xl font-black text-neutral-900">Where to?</span>
                        </div>
                        <div className="group flex flex-col items-start px-6 py-4 md:px-8 md:py-6 text-left border-b md:border-b-0 md:border-r border-black/5 last:border-0 hover:bg-black/5 transition-all rounded-[24px] cursor-pointer">
                            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-neutral-400 group-hover:text-neutral-900 transition-colors">Check-in</span>
                            <span className="mt-1 text-base md:text-xl font-black text-neutral-900">Add dates</span>
                        </div>
                        <div className="group flex flex-col items-start px-6 py-4 md:px-8 md:py-6 text-left border-b md:border-b-0 md:border-r border-black/5 last:border-0 hover:bg-black/5 transition-all rounded-[24px] cursor-pointer">
                            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-neutral-400 group-hover:text-neutral-900 transition-colors">Guests</span>
                            <span className="mt-1 text-base md:text-xl font-black text-neutral-900">Add guests</span>
                        </div>
                        <div className="flex items-center justify-center p-1 md:p-2">
                            <Magnetic>
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="/destinations"
                                    className="inline-flex h-full w-[200px] cursor-pointer items-center justify-center rounded-[24px] bg-neutral-900 py-5 text-sm font-black uppercase tracking-widest text-white shadow-xl transition-all"
                                >
                                    Explore Now
                                </motion.a>
                            </Magnetic>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
