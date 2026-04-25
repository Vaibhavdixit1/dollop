'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const values = [
    {
        title: 'ARCHITECTURAL TRUTH',
        description: 'We believe that space is sacred. Every domain in our portfolio is selected for its structural integrity, aesthetic weight, and its ability to vanish into the landscape.',
    },
    {
        title: 'THE ART OF INVISIBILITY',
        description: 'Privacy is not a feature; it is our foundation. We manage complex itineraries with surgical precision, ensuring our guests remain unseen and untouched.',
    },
    {
        title: 'ECOLOGICAL STEWARDSHIP',
        description: 'We do not just visit; we protect. Our operations are designed to leave no trace, while actively funding the restoration of the world\'s most fragile ecosystems.',
    },
];

const Philosophy = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={containerRef} className="bg-white py-32 md:py-48 px-4 sm:px-6 lg:px-12 overflow-hidden">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col items-start gap-12 md:gap-24 lg:flex-row lg:items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:w-1/2"
                    >
                        <span className="text-[10px] sm:text-xs font-black tracking-[0.6em] text-neutral-400 uppercase">Our DNA</span>
                        <div className="overflow-hidden mt-8">
                            <motion.h2 
                                initial={{ y: "100%" }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-neutral-900 uppercase leading-[0.9]"
                            >
                                THE VOYAGE <br /> PHILOSOPHY
                            </motion.h2>
                        </div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:w-1/2"
                    >
                        <p className="text-2xl md:text-3xl font-black leading-tight text-neutral-900 tracking-tight">
                            We reject the formulaic. True luxury is not found in the crowd, but in the profound silence of the unvisited.
                        </p>
                    </motion.div>
                </div>

                <div className="mt-32 md:mt-48 grid grid-cols-1 gap-12 md:grid-cols-3">
                    {values.map((v, i) => (
                        <motion.div 
                            key={v.title} 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative flex flex-col"
                        >
                            <span className="text-[10px] font-black tracking-[0.4em] text-neutral-300 mb-6 uppercase">Principle 0{i + 1}</span>
                            <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-neutral-900 uppercase">{v.title}</h3>
                            <div className="h-px w-full bg-neutral-100 my-8">
                                <motion.div 
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ duration: 1, delay: i * 0.2 }}
                                    className="h-full w-full bg-neutral-900 origin-left"
                                />
                            </div>
                            <p className="text-lg font-medium leading-relaxed text-neutral-600">
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
