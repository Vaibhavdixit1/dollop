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
        <section className="bg-white py-32 md:py-48 px-4 sm:px-6 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-start">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="text-[10px] sm:text-xs font-black tracking-[0.5em] text-neutral-400 uppercase">The Expedition Standard</span>
                        <h2 className="mt-8 text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-neutral-900 uppercase leading-[0.9]">
                            ELEVATING <br /> HOW YOU <br /> DISCOVER
                        </h2>
                        <p className="mt-12 max-w-md text-xl font-medium leading-relaxed text-neutral-600">
                            We view global exploration not just as a getaway, but as an investment into your legacy. Time is your ultimate luxury; we ensure not a second is wasted.
                        </p>
                        <div className="mt-16 relative aspect-[4/5] lg:aspect-square max-w-md overflow-hidden rounded-[40px] md:rounded-[56px] shadow-2xl">
                            <motion.img
                                initial={{ scale: 1.2 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=1000"
                                alt="Luxury Lifestyle"
                                className="h-full w-full object-cover grayscale opacity-90 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none"></div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-8 md:gap-12 mt-12 lg:mt-0">
                        {features.map((feature, i) => (
                            <motion.div 
                                key={feature.title} 
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="group flex flex-col items-start p-10 md:p-14 rounded-[40px] border border-black/5 bg-neutral-50 transition-all hover:bg-neutral-950 hover:shadow-2xl"
                            >
                                <div className="flex items-center gap-6 mb-8">
                                    <span className="text-4xl md:text-5xl font-black tracking-tighter text-neutral-200 group-hover:text-white/20 transition-colors">{feature.icon}</span>
                                    <div className="h-px w-8 bg-neutral-200 group-hover:bg-white/20 transition-colors"></div>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-neutral-900 group-hover:text-white uppercase transition-colors">{feature.title}</h3>
                                <p className="mt-6 text-base font-medium leading-relaxed text-neutral-500 group-hover:text-white/50 transition-colors">
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
