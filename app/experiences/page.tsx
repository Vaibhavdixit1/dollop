'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { motion } from 'framer-motion';

const experiences = [
    {
        id: 1,
        title: 'PRIVATE ISLAND DINNER UNDER THE STARS',
        location: 'Maldives',
        duration: '1 Evening',
        category: 'DINING',
        price: 'From $3,200',
        description: 'A secluded sandbank transforms into your private dining room. A Michelin-starred chef prepares a 7-course tasting menu as the Indian Ocean laps at your feet under a blanket of stars.',
        image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1200',
    },
    {
        id: 2,
        title: 'HELICOPTER WINE TOUR OF CAPE TOWN',
        location: 'South Africa',
        duration: '2 Days',
        category: 'ADVENTURE',
        price: 'From $5,800',
        description: 'Soar above the Winelands in a private helicopter, landing at three award-winning estates. Exclusive cellar tastings, vineyard lunches, and a sunset flight over Table Mountain.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1200',
    },
    {
        id: 3,
        title: 'ANCIENT TEMPLE CEREMONY AT DAWN',
        location: 'Kyoto, Japan',
        duration: '1 Morning',
        category: 'CULTURE',
        price: 'From $1,400',
        description: 'Join a Zen monk at a 600-year-old temple for a private meditation session and tea ceremony before the gates open to the public. A rare window into centuries of spiritual tradition.',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200',
    },
    {
        id: 4,
        title: 'NORTHERN LIGHTS GLASS IGLOO RETREAT',
        location: 'Finnish Lapland',
        duration: '3 Nights',
        category: 'NATURE',
        price: 'From $7,500',
        description: 'Sleep beneath the aurora borealis in a heated glass igloo. Days are spent on husky safaris and ice fishing; nights glow with the celestial dance above the Arctic Circle.',
        image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1200',
    },
    {
        id: 5,
        title: 'PRIVATE YACHT THROUGH THE GREEK ISLANDS',
        location: 'Cyclades, Greece',
        duration: '7 Days',
        category: 'LUXURY',
        price: 'From $18,000',
        description: 'Captain a 60-foot luxury yacht through Santorini, Mykonos, Milos, and Paros. A private chef, onboard spa therapist, and local island guides ensure an unforgettable week at sea.',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=1200',
    },
    {
        id: 6,
        title: 'SAHARA DESERT LUXURY CAMP EXPEDITION',
        location: 'Morocco',
        duration: '4 Days',
        category: 'ADVENTURE',
        price: 'From $4,200',
        description: 'Traverse the golden dunes of the Sahara by camelback and 4x4. Nights are spent in bespoke luxury tents with Persian carpets, candlelit dinners, and Berber musical performances.',
        image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?auto=format&fit=crop&q=80&w=1200',
    },
];

const categories = ['ALL', 'DINING', 'ADVENTURE', 'CULTURE', 'NATURE', 'LUXURY'];

export default function ExperiencesPage() {
    return (
        <div className="flex min-h-screen flex-col bg-neutral-200">
            <Header />
            <main className="flex-grow pt-32 md:pt-40">
                {/* Hero */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 pb-16 md:pb-20"
                >
                    <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] text-neutral-400 uppercase">Beyond Ordinary</span>
                    <h1 className="mt-6 md:mt-8 text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-neutral-900 uppercase leading-[1.1]">
                        CURATED <br /> EXPERIENCES
                    </h1>
                    <p className="mt-8 md:mt-12 max-w-2xl text-lg md:text-xl font-medium leading-relaxed text-neutral-600">
                        These aren&apos;t tours. They&apos;re once-in-a-lifetime moments designed to leave a permanent imprint on your soul. Every experience is exclusive to VOYAGE members.
                    </p>
                </motion.div>

                {/* Category filters */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 pb-12 md:pb-16"
                >
                    <div className="flex flex-wrap gap-3">
                        {categories.map((cat, i) => (
                            <button
                                key={cat}
                                className={`rounded-full px-5 md:px-6 py-2.5 md:py-3 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-all cursor-pointer ${
                                    i === 0
                                        ? 'bg-neutral-900 text-white shadow-lg'
                                        : 'bg-white/60 text-neutral-500 border border-black/5 hover:bg-neutral-900 hover:text-white hover:border-neutral-900'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Experiences Grid */}
                <section className="bg-white py-24 md:py-32 px-4 sm:px-6 lg:px-12">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            {experiences.map((exp, i) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-50px' }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="group flex flex-col overflow-hidden rounded-[32px] md:rounded-[40px] border border-black/5 bg-neutral-50 transition-all hover:shadow-2xl hover:-translate-y-1"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <img
                                            src={exp.image}
                                            alt={exp.title}
                                            className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                        />
                                        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2">
                                            <span className="rounded-full bg-white/80 backdrop-blur-md px-3 py-1.5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-neutral-900 shadow-md">
                                                {exp.category}
                                            </span>
                                            <span className="rounded-full bg-white/80 backdrop-blur-md px-3 py-1.5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-neutral-900 shadow-md">
                                                {exp.duration}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col flex-grow p-8 md:p-10">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">{exp.location}</p>
                                                <h3 className="mt-2 md:mt-3 text-xl md:text-2xl font-black tracking-tight text-neutral-900 uppercase leading-tight">
                                                    {exp.title}
                                                </h3>
                                            </div>
                                        </div>
                                        <p className="mt-4 md:mt-6 text-sm md:text-base font-medium leading-relaxed text-neutral-500 flex-grow">
                                            {exp.description}
                                        </p>
                                        <div className="mt-8 md:mt-10 flex items-center justify-between border-t border-black/5 pt-6">
                                            <p className="text-xl md:text-2xl font-black text-neutral-900">{exp.price}</p>
                                            <Link
                                                href="/contact"
                                                className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl md:rounded-2xl bg-neutral-100 text-neutral-600 transition-colors group-hover:bg-neutral-900 group-hover:text-white"
                                            >
                                                <span className="text-xl">→</span>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Full-width visual break */}
                <section className="relative h-[40vh] md:h-[60vh] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=2000"
                        alt="Luxury infinity pool"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                        <div>
                            <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.5em] text-white/60">Members Only</p>
                            <h2 className="mt-4 text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
                                CAN&apos;T FIND YOUR <br /> PERFECT EXPERIENCE?
                            </h2>
                            <p className="mt-6 md:mt-8 text-base md:text-lg font-medium text-white/70 max-w-xl mx-auto">
                                Our curators can design a completely custom experience tailored to your exact vision.
                            </p>
                            <Link
                                href="/contact"
                                className="mt-8 md:mt-10 inline-block rounded-full bg-white px-10 md:px-12 py-4 md:py-5 text-sm font-black uppercase tracking-widest text-neutral-900 shadow-2xl transition-all hover:scale-105 active:scale-95"
                            >
                                Request Custom Experience
                            </Link>
                        </div>
                    </div>
                </section>

                <CTA />
            </main>
            <Footer />
        </div>
    );
}
