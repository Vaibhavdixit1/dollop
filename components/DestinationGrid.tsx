'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

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
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [selectedDest, setSelectedDest] = useState<typeof destinations[0] | null>(null);

    // Lock scroll when modal is open
    useEffect(() => {
        if (selectedDest) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [selectedDest]);

    return (
        <section className="bg-neutral-200 py-24 md:py-32 px-4 sm:px-6 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                        className="max-w-xl"
                    >
                        <h2 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-neutral-400">Curated for You</h2>
                        <p className="mt-4 text-4xl sm:text-6xl font-black tracking-tighter text-neutral-900 uppercase">
                            POPULAR <br /> DESTINATIONS
                        </p>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Link
                            href="/destinations"
                            className="group flex cursor-pointer items-center gap-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-900 transition-all hover:gap-6"
                        >
                            View All Destinations
                            <span className="h-px w-8 sm:w-12 bg-neutral-900 transition-all group-hover:w-16"></span>
                        </Link>
                    </motion.div>
                </div>

                <div ref={ref} className="mt-16 md:mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {destinations.map((dest, i) => (
                        <motion.div 
                            key={dest.id} 
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            onClick={() => setSelectedDest(dest)}
                            whileHover={{ 
                                y: -10,
                                scale: 1.02,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            className="group relative flex flex-col overflow-hidden rounded-[32px] md:rounded-[40px] border border-black/5 bg-white shadow-sm hover:shadow-2xl cursor-pointer transition-all"
                        >
                            <div className="relative aspect-4/5 overflow-hidden">
                                <img
                                    src={dest.image}
                                    alt={dest.name}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-1 rounded-full bg-white/70 px-2 sm:px-3 py-1 backdrop-blur-md">
                                    <span className="text-[10px] sm:text-xs font-bold text-neutral-900">★ {dest.rating}</span>
                                </div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                    <span className="opacity-0 group-hover:opacity-100 transition-all bg-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-neutral-900 shadow-xl translate-y-4 group-hover:translate-y-0">
                                        Quick View
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 md:p-8">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-black tracking-tight text-neutral-900">{dest.name}</h3>
                                        <p className="mt-1 text-[10px] md:text-sm font-bold text-neutral-500 uppercase tracking-widest">{dest.location}</p>
                                    </div>
                                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl md:rounded-2xl bg-neutral-100 text-neutral-600 transition-colors group-hover:bg-neutral-900 group-hover:text-white">
                                        <span className="text-xl">→</span>
                                    </div>
                                </div>
                                <div className="mt-6 md:mt-8 flex items-end justify-between border-t border-black/5 pt-4 md:pt-6">
                                    <p className="text-[9px] md:text-xs font-black uppercase tracking-widest text-neutral-400">Starting from</p>
                                    <p className="text-xl md:text-2xl font-black text-neutral-900">{dest.price}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Quick View Modal */}
            <AnimatePresence>
                {selectedDest && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[2000] flex items-center justify-center p-4 transition-all"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedDest(null)}
                            className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm transition-all"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-4xl overflow-hidden rounded-[40px] bg-white shadow-2xl"
                        >
                            <button
                                onClick={() => setSelectedDest(null)}
                                className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-900 transition-colors hover:bg-neutral-200"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/2 aspect-4/5 md:aspect-auto">
                                    <img
                                        src={selectedDest.image}
                                        alt={selectedDest.name}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col justify-between p-8 md:p-12 md:w-1/2">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">{selectedDest.location}</span>
                                            <span className="h-px w-8 bg-neutral-200" />
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-900">★ {selectedDest.rating} Rating</span>
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral-900 uppercase leading-none">
                                            {selectedDest.name}
                                        </h2>
                                        <p className="mt-8 text-lg text-neutral-600 font-medium leading-relaxed">
                                            {selectedDest.description}
                                        </p>
                                        
                                        <div className="mt-12 grid grid-cols-2 gap-8">
                                            <div>
                                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Duration</p>
                                                <p className="mt-2 text-xl font-black text-neutral-900">7 Days / 6 Nights</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Travel Style</p>
                                                <p className="mt-2 text-xl font-black text-neutral-900">Luxury Premium</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Best time to visit</p>
                                                <p className="mt-2 text-xl font-black text-neutral-900">{selectedDest.bestTime}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Exclusive highlights</p>
                                                <div className="mt-2 flex flex-wrap gap-2">
                                                    {selectedDest.highlights?.map((h, i) => (
                                                        <span key={i} className="text-xs font-bold text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full uppercase tracking-tighter">{h}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-12 flex items-center justify-between border-t border-neutral-100 pt-8">
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Investment</p>
                                            <p className="mt-1 text-4xl font-black text-neutral-900">{selectedDest.price}</p>
                                        </div>
                                        <Link
                                            href="/signup"
                                            className="rounded-full bg-neutral-900 px-10 py-5 text-sm font-black uppercase tracking-[0.1em] text-white transition-all hover:bg-neutral-800 active:scale-95 shadow-xl"
                                        >
                                            Reserve Now
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

export default DestinationGrid;
