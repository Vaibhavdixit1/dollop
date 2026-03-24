'use client';

import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center overflow-hidden bg-neutral-200 px-4 pt-32 pb-24 md:px-6 md:pt-40 md:pb-32 md:min-h-screen lg:px-12">
            {/* Cinematic Background Elements */}
            <div className="absolute top-1/4 -left-48 h-[600px] w-[600px] rounded-full bg-white/40 blur-[120px]"></div>
            <div className="absolute bottom-1/4 -right-48 h-[600px] w-[600px] rounded-full bg-neutral-400/10 blur-[120px] animate-pulse"></div>

            <div className="relative z-10 mx-auto max-w-6xl text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 md:mb-10 inline-flex items-center rounded-full border border-black/5 bg-white/20 px-4 py-1.5 sm:px-6 sm:py-2 backdrop-blur-md cursor-pointer hover:bg-white/40 transition-colors"
                >
                    <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-neutral-900 animate-pulse"></span>
                    <span className="ml-2 sm:ml-3 text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-neutral-600">
                        Discover the Unseen
                    </span>
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-balance text-4xl font-black leading-[1.1] tracking-tighter text-neutral-900 sm:text-7xl md:text-9xl"
                >
                    YOUR JOURNEY <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-neutral-600 to-neutral-900 uppercase">Starts Here.</span>
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mx-auto mt-8 md:mt-12 max-w-3xl text-balance text-lg font-medium leading-relaxed text-neutral-700 sm:text-2xl"
                >
                    Experience luxury travel like never before. From hidden tropical paradises to majestic mountain peaks, we curate the world&apos;s most exclusive escapes.
                </motion.p>

                {/* Floating Search Widget */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 md:mt-20 w-full max-w-5xl rounded-[32px] md:rounded-[40px] border border-black/5 bg-white/70 p-3 md:p-4 backdrop-blur-3xl shadow-2xl transition-all hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)]"
                >
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-4 md:gap-4">
                        <div className="group flex flex-col items-start px-6 py-3 md:px-8 md:py-4 text-left border-b md:border-b-0 md:border-r border-black/5 last:border-0 hover:bg-black/5 transition-all rounded-2xl cursor-pointer hover:-translate-y-0.5">
                            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-neutral-400 group-hover:text-neutral-600 transition-colors">Destination</span>
                            <span className="mt-0.5 md:mt-1 text-base md:text-lg font-bold text-neutral-900">Where to?</span>
                        </div>
                        <div className="group flex flex-col items-start px-6 py-3 md:px-8 md:py-4 text-left border-b md:border-b-0 md:border-r border-black/5 last:border-0 hover:bg-black/5 transition-all rounded-2xl cursor-pointer hover:-translate-y-0.5">
                            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-neutral-400 group-hover:text-neutral-600 transition-colors">Check-in</span>
                            <span className="mt-0.5 md:mt-1 text-base md:text-lg font-bold text-neutral-900">Add dates</span>
                        </div>
                        <div className="group flex flex-col items-start px-6 py-3 md:px-8 md:py-4 text-left border-b md:border-b-0 md:border-r border-black/5 last:border-0 hover:bg-black/5 transition-all rounded-2xl cursor-pointer hover:-translate-y-0.5">
                            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-neutral-400 group-hover:text-neutral-600 transition-colors">Guests</span>
                            <span className="mt-0.5 md:mt-1 text-base md:text-lg font-bold text-neutral-900">Add guests</span>
                        </div>
                        <div className="flex items-center justify-center p-1 md:p-2">
                            <a
                                href="/destinations"
                                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl md:rounded-3xl bg-neutral-900 py-4 text-sm font-black uppercase tracking-widest text-white shadow-xl transition-all hover:scale-[1.02] active:scale-95"
                            >
                                Explore Now
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Trusted By / Stats */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 md:mt-32"
                >
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">Over 2M+ Travelers Trusted Us</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
