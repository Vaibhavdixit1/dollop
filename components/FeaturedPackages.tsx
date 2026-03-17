'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
    {
        id: 'pk-4',
        title: 'SAHARA ROYAL CARAVAN',
        duration: '10 Days',
        description:
            'Ride through golden dunes in a private desert caravan with luxury nomad tents, sunset camel journeys, and starlit banquets.',
        price: 'From $18,000',
        spots: 'Only 10 spots remaining',
        image:
            'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=1200',
    },
    {
        id: 'pk-5',
        title: 'PACIFIC ISLAND ESCAPE',
        duration: '8 Days',
        description:
            'Stay in a private overwater villa in the Pacific. Crystal waters, yacht excursions, and chef-curated island dining experiences.',
        price: 'From $24,000',
        spots: 'Only 5 spots remaining',
        image:
            'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200',
    },
    {
        id: 'pk-6',
        title: 'NORWEGIAN FJORD VOYAGE',
        duration: '11 Days',
        description:
            'Sail through dramatic fjords aboard a luxury expedition yacht. Witness northern lights, glaciers, and remote Nordic villages.',
        price: 'From $29,000',
        spots: 'Only 7 spots remaining',
        image:
            'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200',
    },
];

type FeaturedPackagesProps = {
    limit?: number;
    buttonLabel?: string;
};

const FeaturedPackages = ({ limit, buttonLabel }: FeaturedPackagesProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const visiblePackages = limit ? packages.slice(0, limit) : packages;
    const ctaLabel = buttonLabel ?? (limit ? 'Show more' : 'View All Packages');

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
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Link
                            href="/packages"
                            className="group flex cursor-pointer items-center gap-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-white transition-all hover:gap-6"
                        >
                            {ctaLabel}
                            <span className="h-[1px] w-8 sm:w-12 bg-white transition-all group-hover:w-16"></span>
                        </Link>
                    </motion.div>
                </div>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {visiblePackages.map((pkg, i) => (
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
