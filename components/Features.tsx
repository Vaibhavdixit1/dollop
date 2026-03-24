'use client';

import { motion } from 'framer-motion';
const features = [
    {
        title: 'VERIFIED EXCELLENCE',
        description: 'Our scouts personally inspect and certify every property, from private island villas to remote alpine chalets, ensuring an uncompromising standard of luxury.',
        icon: '01'
    },
    {
        title: 'UNLISTED ITINERARIES',
        description: 'Gain access to heavily guarded local secrets, historical estates closed to the public, and dining experiences absent from any guidebook.',
        icon: '02'
    },
    {
        title: 'DISCREET CONCIERGE',
        description: 'A devoted lifestyle manager is assigned to your journey, anticipating your needs and managing complex logistics with absolute anonymity and zero friction.',
        icon: '03'
    },
    {
        title: 'PRIVATE AVIATION',
        description: 'Bypass commercial routing entirely. We orchestrate direct helicopter transfers, private jet charters, and seamless tarmac-to-estate arrivals.',
        icon: '04'
    }
];

const Features = () => {
    return (
        <section className="bg-white py-24 md:py-32 px-4 sm:px-6 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] text-neutral-400 uppercase">The Expedition Standard</span>
                        <h2 className="mt-6 md:mt-8 text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-neutral-900 uppercase leading-none">
                            ELEVATING <br /> HOW YOU <br /> DISCOVER
                        </h2>
                        <p className="mt-8 md:mt-12 max-w-md text-lg md:text-xl font-medium leading-relaxed text-neutral-600">
                            We view global exploration not just as a getaway, but as an investment into your legacy. Time is your ultimate luxury; we ensure not a second is wasted.
                        </p>
                        <div className="mt-12 md:mt-16 aspect-[16/9] lg:aspect-square max-w-sm md:max-w-md overflow-hidden rounded-[32px] md:rounded-[48px]">
                            <img
                                src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=1000"
                                alt="Luxury Lifestyle"
                                className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                        {features.map((feature, i) => (
                            <motion.div 
                                key={feature.title} 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                className="group flex flex-col items-start p-6 md:p-8 rounded-[32px] md:rounded-[40px] border border-black/5 bg-neutral-50 transition-all hover:bg-neutral-900 hover:text-white"
                            >
                                <span className="text-3xl md:text-4xl font-black tracking-tighter opacity-20 group-hover:opacity-40">{feature.icon}</span>
                                <h3 className="mt-6 md:mt-8 text-xl md:text-2xl font-black tracking-tight">{feature.title}</h3>
                                <p className="mt-3 md:mt-4 text-sm font-medium leading-relaxed opacity-60">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
