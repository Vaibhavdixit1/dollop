'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const team = [
    {
        name: 'ELARA VOSS',
        role: 'Founder & Chief Curator',
        bio: 'Former luxury concierge at The Peninsula. 15+ years crafting one-of-a-kind travel experiences across 60 countries.',
        avatar: 'https://i.pravatar.cc/400?u=elara',
    },
    {
        name: 'DANIEL OKORO',
        role: 'Head of Destinations',
        bio: 'National Geographic contributor turned travel architect. Specializes in off-grid luxury escapes and sustainable tourism.',
        avatar: 'https://i.pravatar.cc/400?u=daniel',
    },
    {
        name: 'MAYA SØRENSEN',
        role: 'Experience Designer',
        bio: 'Hospitality design graduate from EHL Lausanne. Creates immersive cultural itineraries that connect travelers to local artisans.',
        avatar: 'https://i.pravatar.cc/400?u=maya',
    },
    {
        name: 'JAMES HARTLEY',
        role: 'Client Relations Director',
        bio: 'Former private banking advisor. Ensures every VOYAGE member receives white-glove attention before, during, and after every trip.',
        avatar: 'https://i.pravatar.cc/400?u=james',
    },
];

const TeamSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="bg-neutral-200 py-24 md:py-32 px-4 sm:px-6 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end mb-16 md:mb-24">
                    <div className="max-w-xl">
                        <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] text-neutral-400 uppercase">The Collective</span>
                        <h2 className="mt-6 md:mt-8 text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-neutral-900 uppercase leading-none">
                            THE MINDS <br /> BEHIND VOYAGE
                        </h2>
                    </div>
                    <p className="max-w-sm text-lg md:text-xl font-medium text-neutral-600 leading-relaxed">
                        A small, obsessive team of travel connoisseurs dedicated to elevating your every journey.
                    </p>
                </div>

                <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {team.map((member, i) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.12 }}
                            className="group flex flex-col rounded-[32px] md:rounded-[40px] bg-white border border-black/5 overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-2"
                        >
                            <div className="aspect-[4/5] overflow-hidden">
                                <img
                                    src={member.avatar}
                                    alt={member.name}
                                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                />
                            </div>
                            <div className="p-6 md:p-8">
                                <h3 className="text-lg md:text-xl font-black tracking-tight text-neutral-900 uppercase">
                                    {member.name}
                                </h3>
                                <p className="mt-1 text-[10px] md:text-xs font-black text-neutral-400 uppercase tracking-[0.2em]">
                                    {member.role}
                                </p>
                                <p className="mt-4 md:mt-6 text-sm font-medium leading-relaxed text-neutral-500">
                                    {member.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
