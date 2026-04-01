'use client';

import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const packages = [
    {
        id: 'pk-1',
        title: 'THE ANTARCTIC SILENCE',
        duration: '14 Days',
        description:
            'Journey to the edge of the world. Private icebreaker expedition with extreme-luxury geodesic dome stays on the frozen continent.',
        price: 'From $45,000',
        spots: 'Only 8 spots remaining',
        image:
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200',
    },
    {
        id: 'pk-2',
        title: 'NAMIBIAN STARSCAPES',
        duration: '9 Days',
        description:
            'Fly-in safari across the oldest desert on Earth. Sleep under the darkest skies in a private luxury camp reachable only by helicopter.',
        price: 'From $32,000',
        spots: 'Waitlist available',
        image:
            'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&q=80&w=1200',
    },
    {
        id: 'pk-3',
        title: 'ALPINE SUMMIT RETREAT',
        duration: '7 Days',
        description:
            'Private helicopter access to the most secluded alpine resorts. Luxury chalets, guided glacier hikes, and gourmet mountain dining.',
        price: 'From $21,000',
        spots: 'Only 6 spots remaining',
        image:
            'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1200',
    },
];

type FeaturedPackagesProps = {
    limit?: number;
    buttonLabel?: string;
};

const FeaturedPackages = ({ limit, buttonLabel }: FeaturedPackagesProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [selectedPkg, setSelectedPkg] = useState<typeof packages[0] | null>(null);

    useEffect(() => {
        if (selectedPkg !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedPkg]);

    const visiblePackages = limit ? packages.slice(0, limit) : packages;
    const ctaLabel = buttonLabel ?? (limit ? 'Show more' : 'View All Packages');

    return (
        <section className="bg-neutral-900 py-32 md:py-48 px-4 sm:px-6 lg:px-12 text-white">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end mb-24 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-xl"
                    >
                        <span className="text-[10px] sm:text-xs font-black tracking-[0.5em] text-white/40 uppercase">Extremely Limited</span>
                        <h2 className="mt-8 text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9]">
                            SIGNATURE <br /> EXPEDITIONS
                        </h2>
                    </motion.div>
                </div>

                <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                    {visiblePackages.map((pkg, i) => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative flex flex-col overflow-hidden rounded-[40px] bg-neutral-800 border border-white/5 cursor-pointer"
                            onClick={() => setSelectedPkg(pkg)}
                        >
                            <div className="relative aspect-[10/12] overflow-hidden">
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                    src={pkg.image}
                                    alt={pkg.title}
                                    className="h-full w-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-linear-to-b from-transparent via-neutral-900/20 to-neutral-900/80"></div>
                                
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-[9px] font-black tracking-[0.2em] px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white/80 border border-white/10 uppercase">
                                            {pkg.duration}
                                        </span>
                                        <span className="h-px w-8 bg-white/20"></span>
                                        <span className="text-[9px] font-black tracking-[0.2em] text-white/40 uppercase">Limited Available</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-white uppercase leading-[0.9]">
                                        {pkg.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="p-8 md:p-10">
                                <p className="text-sm font-medium leading-relaxed text-white/50 line-clamp-2">
                                    {pkg.description}
                                </p>
                                <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-8">
                                    <p className="text-xl md:text-2xl font-black text-white">{pkg.price}</p>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-neutral-900 transition-all group-hover:scale-110 active:scale-95">
                                        <span className="text-xl">→</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Premium Modal */}
            <AnimatePresence>
                {selectedPkg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-12"
                        onClick={() => setSelectedPkg(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 50, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-6xl overflow-hidden rounded-[40px] bg-neutral-900 border border-white/5 shadow-2xl flex flex-col md:flex-row"
                        >
                            <button
                                onClick={() => setSelectedPkg(null)}
                                className="absolute right-8 top-8 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white backdrop-blur-md transition-colors hover:bg-white/10"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="md:w-1/2 aspect-square md:aspect-auto relative group">
                                <img
                                    src={selectedPkg.image}
                                    alt={selectedPkg.title}
                                    className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-neutral-900/40"></div>
                            </div>

                            <div className="flex flex-col p-12 md:p-20 md:w-1/2 justify-center">
                                <div className="space-y-8">
                                    <div>
                                        <span className="text-[10px] font-black tracking-[0.4em] text-white/30 uppercase">Exclusive Expedition</span>
                                        <h3 className="mt-4 text-4xl sm:text-6xl font-black tracking-tighter text-white uppercase leading-[0.9]">
                                            {selectedPkg.title}
                                        </h3>
                                    </div>
                                    <p className="text-xl font-medium leading-relaxed text-white/60">
                                        {selectedPkg.description}
                                    </p>
                                    <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                                        <div>
                                            <p className="text-[10px] font-black tracking-[0.4em] text-white/30 mb-2 uppercase">Starting from</p>
                                            <p className="text-4xl md:text-5xl font-black text-white">{selectedPkg.price}</p>
                                        </div>
                                        <Link
                                            href={`/packages/${selectedPkg.id}`}
                                            className="rounded-full bg-white px-12 py-6 text-sm font-black uppercase tracking-[0.2em] text-neutral-900 transition-all hover:bg-neutral-200 active:scale-95"
                                        >
                                            Inquire Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default FeaturedPackages;
