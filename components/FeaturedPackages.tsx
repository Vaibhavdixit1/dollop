'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const packages = [
    {
        id: 'pk-1',
        title: 'THE ANTARCTIC SILENCE',
        duration: '14 Days',
        description: 'Journey to the edge of the world. Private icebreaker expedition with extreme-luxury geodesic dome stays on the frozen continent.',
        price: 'From $45,000',
        spots: 'Only 8 spots remaining',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200'
    },
    {
        id: 'pk-2',
        title: 'NAMIBIAN STARSCAPES',
        duration: '9 Days',
        description: 'Fly-in safari across the oldest desert on Earth. Sleep under the darkest skies in a private luxury camp reachable only by helicopter.',
        price: 'From $32,000',
        spots: 'Waitlist available',
        image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&q=80&w=1200'
    }
];

const FeaturedPackages = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="bg-neutral-900 py-24 md:py-32 px-4 sm:px-6 lg:px-12 text-white">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                        className="max-w-xl"
                    >
                        <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] text-white/50 uppercase">Extremely Limited</span>
                        <h2 className="mt-6 md:mt-8 text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
                            SIGNATURE <br /> EXPEDITIONS
                        </h2>
                    </motion.div>
                    <motion.button
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group flex cursor-pointer items-center gap-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-white transition-all hover:gap-6"
                    >
                        View All Packages
                        <span className="h-[1px] w-8 sm:w-12 bg-white transition-all group-hover:w-16"></span>
                    </motion.button>
                </div>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {packages.map((pkg, i) => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="group flex flex-col overflow-hidden rounded-[32px] md:rounded-[48px] bg-neutral-800 border border-white/5"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img
                                    src={pkg.image}
                                    alt={pkg.title}
                                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale hover:grayscale-0"
                                />
                                <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 backdrop-blur-md border border-white/10">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white">{pkg.duration}</span>
                                </div>
                            </div>

                            <div className="p-8 md:p-12">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">{pkg.spots}</span>
                                <h3 className="mt-4 text-2xl md:text-3xl font-black tracking-tight text-white uppercase leading-tight group-hover:underline underline-offset-8 transition-all">
                                    {pkg.title}
                                </h3>
                                <p className="mt-6 text-base font-medium leading-relaxed text-white/60 line-clamp-2">
                                    {pkg.description}
                                </p>

                                <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-between">
                                    <p className="text-xl md:text-2xl font-black text-white">{pkg.price}</p>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-neutral-900 transition-transform group-hover:scale-110 cursor-pointer">
                                        <span className="text-xl">→</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedPackages;
