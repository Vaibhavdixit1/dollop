'use client';

import { motion } from 'framer-motion';
const values = [
    {
        title: 'ARCHITECTURAL INTEGRITY',
        description: 'We do not compromise on aesthetics. Every property we represent is vetted for its architectural significance, interior mastery, and harmony with its environment.',
    },
    {
        title: 'TOTAL ANONYMITY',
        description: 'For our elite client roster, privacy is non-negotiable. We execute deeply confidential itineraries, utilizing ghost flights and secure, off-the-grid domains.',
    },
    {
        title: 'ECOLOGICAL STEWARDSHIP',
        description: 'True luxury safeguards next generations. A mandatory percentage of our proceeds funds marine preservation, aggressive wildlife protection, and local artisan heritage.',
    },
];

const Philosophy = () => {
    return (
        <section className="bg-white py-24 md:py-32 px-4 sm:px-6 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col items-start gap-12 md:gap-16 lg:flex-row lg:items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2"
                    >
                        <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] text-neutral-400 uppercase">Our DNA</span>
                        <h2 className="mt-6 md:mt-8 text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-neutral-900 uppercase leading-none">
                            THE VOYAGE <br /> PHILOSOPHY
                        </h2>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-1/2"
                    >
                        <p className="text-xl md:text-2xl font-bold leading-tight text-neutral-900 tracking-tight">
                            We reject mass tourism and formulaic vacations. The modern traveler requires scarcity, authenticity, and profound isolation away from the crowds.
                        </p>
                    </motion.div>
                </div>

                <div className="mt-20 md:mt-32 grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-3">
                    {values.map((v, i) => (
                        <motion.div 
                            key={v.title} 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="group rounded-[32px] md:rounded-[40px] border border-black/5 p-8 md:p-12 transition-all hover:bg-neutral-50 shadow-sm hover:shadow-md"
                        >
                            <h3 className="text-xl md:text-2xl font-black tracking-tight text-neutral-900 uppercase">{v.title}</h3>
                            <p className="mt-4 md:mt-6 text-base md:text-lg font-medium leading-relaxed text-neutral-600">
                                {v.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
