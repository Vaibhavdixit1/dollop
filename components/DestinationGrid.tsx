'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Magnetic from './Magnetic';

const destinations = [
    { 
        id: 1, 
        name: 'Bora Bora', 
        location: 'French Polynesia', 
        price: '$2,400', 
        rating: 4.9, 
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
        description: 'Experience the ultimate overwater luxury in the heart of French Polynesia. Crystal clear lagoons and emerald-green peaks await.',
        bestTime: 'May to October',
        highlights: ['Private Boat Tour', 'Snorkeling with Manta Rays', 'Underwater Dining'],
    },
    { 
        id: 2, 
        name: 'Swiss Alps', 
        location: 'Switzerland', 
        price: '$1,850', 
        rating: 4.8, 
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800',
        description: 'Pristine slopes, cozy chalets, and breathtaking mountain vistas. Perfect for both adventure seekers and those looking for mountain peace.',
        bestTime: 'December to March',
        highlights: ['Glacier Express Ride', 'Luxury Spas', 'Off-piste Skiing'],
    },
    { 
        id: 3, 
        name: 'Santorini', 
        location: 'Greece', 
        price: '$1,200', 
        rating: 4.7, 
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800',
        description: 'Iconic blue-domed churches and white-washed buildings overlooking the caldera. Famous for the world\'s most beautiful sunsets.',
        bestTime: 'September or June',
        highlights: ['Private Yacht Sunset Cruise', 'Wine Tasting', 'Oia Village Walk'],
    },
    { 
        id: 4, 
        name: 'Kyoto', 
        location: 'Japan', 
        price: '$950', 
        rating: 4.9, 
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
        description: 'A city where tradition meets modernity. Explore thousand-year-old temples, tranquil Zen gardens, and historic Geisha districts.',
        bestTime: 'April or November',
        highlights: ['Zen Gardens', 'Traditional Tea Ceremony', 'Historic Arashiyama'],
    },
];

const DestinationGrid = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [selectedDest, setSelectedDest] = useState<typeof destinations[0] | null>(null);

    useEffect(() => {
        if (selectedDest) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [selectedDest]);

    return (
        <section className="bg-neutral-200 py-32 md:py-48 px-4 sm:px-6 lg:px-12 overflow-hidden">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-end mb-24 md:mb-32">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-xl"
                    >
                        <span className="text-[10px] sm:text-xs font-black tracking-[0.6em] text-neutral-400 uppercase">Curated Discovery</span>
                        <h2 className="mt-8 text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-neutral-900 uppercase leading-[0.9]">
                            POPULAR <br /> DESTINATIONS
                        </h2>
                    </motion.div>
                </div>

                <div ref={ref} className="grid grid-cols-1 gap-8 md:gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    {destinations.map((dest, i) => (
                        <motion.div 
                            key={dest.id} 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            onClick={() => setSelectedDest(dest)}
                            whileHover={{ y: -15 }}
                            className="group relative flex flex-col overflow-hidden rounded-[40px] bg-white border border-black/5 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                    src={dest.image}
                                    alt={dest.name}
                                    className="h-full w-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0"
                                />
                                <div className="absolute top-6 right-6 flex items-center gap-1.5 rounded-full bg-white/70 px-4 py-2 backdrop-blur-md">
                                    <span className="text-[10px] font-black text-neutral-900 uppercase tracking-tighter">★ {dest.rating}</span>
                                </div>
                            </div>
                            <div className="p-10">
                                <div className="flex flex-col gap-2">
                                    <span className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.3em]">{dest.location}</span>
                                    <h3 className="text-2xl font-black tracking-tighter text-neutral-900 uppercase">{dest.name}</h3>
                                </div>
                                <div className="mt-10 flex items-end justify-between border-t border-black/5 pt-8">
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-black uppercase tracking-widest text-neutral-300">Starts at</span>
                                        <span className="text-2xl font-black text-neutral-900">{dest.price}</span>
                                    </div>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-900 text-white shadow-xl transition-transform group-hover:translate-x-2">
                                        <span className="text-xl">→</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedDest && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[2000] flex items-center justify-center p-4"
                        onClick={() => setSelectedDest(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.8 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-neutral-950 backdrop-blur-3xl"
                        />
                        <motion.div
                            initial={{ scale: 0.9, y: 50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 50, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative w-full max-w-6xl overflow-hidden rounded-[40px] bg-white shadow-2xl flex flex-col md:flex-row"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedDest(null)}
                                className="absolute right-8 top-8 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-900 transition-colors hover:bg-neutral-200"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="md:w-1/2 aspect-square md:aspect-auto">
                                <img src={selectedDest.image} alt={selectedDest.name} className="h-full w-full object-cover grayscale" />
                            </div>
                            <div className="flex flex-col p-12 md:p-20 md:w-1/2 justify-center">
                                <div className="space-y-8">
                                    <div>
                                        <span className="text-[10px] font-black tracking-[0.4em] text-neutral-400 uppercase">{selectedDest.location}</span>
                                        <h3 className="mt-4 text-4xl sm:text-6xl font-black tracking-tighter text-neutral-900 uppercase leading-[0.9]">
                                            {selectedDest.name}
                                        </h3>
                                    </div>
                                    <p className="text-xl font-medium leading-relaxed text-neutral-600">
                                        {selectedDest.description}
                                    </p>
                                    <div className="pt-8 border-t border-neutral-100 flex items-center justify-between">
                                        <div>
                                            <p className="text-[10px] font-black tracking-[0.4em] text-neutral-400 mb-2 uppercase">Starting at</p>
                                            <p className="text-4xl md:text-5xl font-black text-neutral-900">{selectedDest.price}</p>
                                        </div>
                                        <Magnetic>
                                            <Link
                                                href="/signup"
                                                className="rounded-full bg-neutral-900 px-12 py-6 text-sm font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-neutral-800 active:scale-95 shadow-2xl"
                                            >
                                                Book Now
                                            </Link>
                                        </Magnetic>
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

export default DestinationGrid;
