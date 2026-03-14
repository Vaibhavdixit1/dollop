'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ImageBand = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

    return (
        <section ref={ref} className="relative h-[40vh] md:h-[60vh] overflow-hidden">
            <motion.img
                style={{ y }}
                src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=2000"
                alt="Ocean view from a luxury resort"
                className="absolute inset-0 h-[140%] w-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <motion.div 
                style={{ opacity }}
                className="absolute inset-0 flex flex-col items-center justify-center p-4"
            >
                <div className="h-20 w-px bg-white/50 mb-8"></div>
                <p className="text-2xl sm:text-4xl md:text-6xl font-black tracking-tighter text-white uppercase text-center leading-tight">
                    &ldquo;TRAVEL IS THE ONLY THING YOU BUY <br className="hidden md:block" /> THAT MAKES YOU RICHER.&rdquo;
                </p>
                <div className="h-20 w-px bg-white/50 mt-8"></div>
            </motion.div>
        </section>
    );
};

export default ImageBand;
