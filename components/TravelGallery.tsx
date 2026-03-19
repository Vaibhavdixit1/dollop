'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const galleryImages = [
    {
        src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200',
        alt: 'Luxury pool overlooking mountains',
        span: 'row-span-2',
    },
    {
        src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1200',
        alt: 'Overwater bungalow at sunset',
        span: '',
    },
    {
        src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=1200',
        alt: 'Luxury hotel lobby',
        span: '',
    },
    {
        src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1200',
        alt: 'Boutique hotel exterior',
        span: 'row-span-2',
    },
    {
        src: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=1200',
        alt: 'Mountain retreat',
        span: '',
    },
    {
        src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200',
        alt: 'Spa and wellness center',
        span: '',
    },
    {
        src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&q=80&w=1200',
        alt: 'Desert adventure landscape',
        span: '',
    },
    {
        src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200',
        alt: 'Mountain hiking adventure',
        span: 'row-span-2',
    },
    {
        src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200',
        alt: 'Road trip through mountains',
        span: '',
    },
    {
        src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1200',
        alt: 'Cliffside tropical beach',
        span: '',
    },
    {
        src: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=1200',
        alt: 'Desert sunset dunes',
        span: '',
    },
    {
        src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200',
        alt: 'Ocean tropical paradise',
        span: '',
    },
];

const TravelGallery = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    // Lock scroll when lightbox is open
    useEffect(() => {
        if (selectedImage !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [selectedImage]);

    const handleNext = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % galleryImages.length);
        }
    };

    const handlePrev = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
        }
    };

    return (
        <section className="bg-white py-24 md:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                        className="max-w-xl"
                    >
                        <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] text-neutral-400 uppercase">Visual Stories</span>
                        <h2 className="mt-6 md:mt-8 text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-neutral-900 uppercase leading-none">
                            MOMENTS <br /> CAPTURED
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-sm text-lg md:text-xl font-medium text-neutral-600 leading-relaxed"
                    >
                        A glimpse into the extraordinary experiences curated by VOYAGE for our members.
                    </motion.p>
                </div>

                <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[250px] gap-4 md:gap-6">
                    {galleryImages.map((image, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            onClick={() => setSelectedImage(i)}
                            className={`group relative overflow-hidden rounded-[24px] md:rounded-[32px] cursor-pointer ${image.span} shadow-lg transition-all hover:shadow-2xl active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-black/10`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-md rounded-full px-6 py-2 text-[10px] font-black uppercase text-white tracking-widest border border-white/20">
                                    Expand
                                </span>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white drop-shadow-xl bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
                                    {image.alt}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-12"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute top-8 right-8 z-[60] text-white hover:text-neutral-400 p-4 transition-colors focus:outline-none"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </motion.button>

                        <motion.button
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="absolute left-4 sm:left-12 z-[60] text-white p-4 hover:bg-white/10 rounded-full transition-all"
                            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                        >
                            <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </motion.button>

                        <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="absolute right-4 sm:right-12 z-[60] text-white p-4 hover:bg-white/10 rounded-full transition-all"
                            onClick={(e) => { e.stopPropagation(); handleNext(); }}
                        >
                            <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.button>

                        <motion.div
                            key={selectedImage}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center gap-6"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={galleryImages[selectedImage].src}
                                alt={galleryImages[selectedImage].alt}
                                className="max-h-[80vh] w-auto object-contain rounded-2xl shadow-2xl"
                            />
                            <div className="text-center">
                                <p className="text-white text-lg md:text-2xl font-bold uppercase tracking-widest bg-black/40 backdrop-blur-md px-8 py-4 rounded-3xl border border-white/10 select-none">
                                    {galleryImages[selectedImage].alt}
                                </p>
                                <p className="mt-4 text-white/40 text-xs font-black uppercase tracking-[0.4em]">
                                    {selectedImage + 1} / {galleryImages.length}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default TravelGallery;
