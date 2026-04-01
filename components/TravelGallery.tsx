'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const galleryImages = [
    {
        src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200',
        alt: 'MINIMALIST ALPINE PEAK',
        span: 'md:col-span-2 md:row-span-2',
        category: 'Alpine',
    },
    {
        src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1200',
        alt: 'PACIFIC HORIZON',
        span: 'md:col-span-1 md:row-span-1',
        category: 'Ocean',
    },
    {
        src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=1200',
        alt: 'ARCHITECTURAL LOBBY',
        span: 'md:col-span-1 md:row-span-1',
        category: 'Modern',
    },
    {
        src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1200',
        alt: 'DESERT HAVEN',
        span: 'md:col-span-1 md:row-span-2',
        category: 'Modern',
    },
    {
        src: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=1200',
        alt: 'MOUNTAIN MIST',
        span: 'md:col-span-2 md:row-span-1',
        category: 'Retreat',
    },
    {
        src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200',
        alt: 'WELLNESS SANCTUARY',
        span: 'md:col-span-1 md:row-span-1',
        category: 'Retreat',
    },
];

const categories = ['All', 'Alpine', 'Ocean', 'Modern', 'Retreat'];

const TravelGallery = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredImages = activeCategory === 'All' 
        ? galleryImages 
        : galleryImages.filter(img => img.category === activeCategory);

    useEffect(() => {
        if (selectedImage !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [selectedImage]);

    return (
        <section className="bg-white py-32 md:py-48 px-4 sm:px-6 lg:px-12 overflow-hidden">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-end mb-24 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-2xl"
                    >
                        <span className="text-[10px] sm:text-xs font-black tracking-[0.6em] text-neutral-400 uppercase">Aesthetic Archives</span>
                        <h2 className="mt-8 text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-neutral-900 uppercase leading-[0.9]">
                            MOMENTS <br /> CAPTURED
                        </h2>
                    </motion.div>
                </div>

                <div className="mb-16 flex flex-wrap gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`whitespace-nowrap px-8 py-3 text-[10px] font-black uppercase tracking-[0.3em] transition-all border rounded-full ${
                                activeCategory === cat 
                                    ? 'bg-neutral-900 border-neutral-900 text-white shadow-2xl' 
                                    : 'bg-transparent border-neutral-100 text-neutral-400 hover:border-neutral-900 hover:text-neutral-900'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] md:auto-rows-[350px] gap-6 md:gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredImages.map((image, i) => (
                            <motion.div
                                key={image.src}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                onClick={() => setSelectedImage(galleryImages.indexOf(image))}
                                className={`group relative overflow-hidden rounded-[40px] md:rounded-[56px] cursor-pointer ${image.span} shadow-sm transition-all hover:shadow-2xl active:scale-[0.98] outline-none`}
                            >
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                    src={image.src}
                                    alt={image.alt}
                                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/20 transition-all duration-500"></div>
                                <div className="absolute bottom-10 left-10 right-10 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[0.16,1,0.3,1]">
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50 mb-2 block">0{i + 1} // {image.category}</span>
                                    <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter">{image.alt}</h4>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Cinematic Lightbox */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[5000] flex items-center justify-center bg-black/98 backdrop-blur-3xl p-4 sm:p-24"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="absolute top-12 right-12 z-[60] text-white hover:text-neutral-400 p-4 transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </motion.button>

                        <div className="relative w-full h-full flex flex-col items-center justify-center">
                            <motion.img
                                key={selectedImage}
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                src={galleryImages[selectedImage].src}
                                alt={galleryImages[selectedImage].alt}
                                className="max-h-[70vh] w-auto object-contain rounded-[40px] shadow-3xl grayscale transition-all duration-1000 hover:grayscale-0"
                            />
                            
                            <motion.div 
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="mt-16 text-center"
                            >
                                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 mb-4 block">Archived Moment</span>
                                <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-[0.1em]">{galleryImages[selectedImage].alt}</h3>
                                <p className="mt-6 text-white/40 text-xs font-black uppercase tracking-[0.4em]">
                                    Sequence // 0{selectedImage + 1}
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default TravelGallery;
