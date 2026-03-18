'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const galleryImages = [
    {
        src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800',
        alt: 'Luxury pool overlooking mountains',
        span: 'row-span-2',
    },
    {
        src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800',
        alt: 'Overwater bungalow at sunset',
        span: '',
    },
    {
        src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=800',
        alt: 'Luxury hotel lobby',
        span: '',
    },
    {
        src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800',
        alt: 'Boutique hotel exterior',
        span: 'row-span-2',
    },
    {
        src: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=800',
        alt: 'Mountain retreat',
        span: '',
    },
    {
        src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800',
        alt: 'Spa and wellness center',
        span: '',
    },

    {
        src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&q=80&w=800',
        alt: 'Desert adventure landscape',
        span: '',
    },
    {
        src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800',
        alt: 'Mountain hiking adventure',
        span: 'row-span-2',
    },
    {
        src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
        alt: 'Road trip through mountains',
        span: '',
    },
    {
        src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800',
        alt: 'Cliffside tropical beach',
        span: '',
    },
    {
        src: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=800',
        alt: 'Desert sunset dunes',
        span: '',
    },
    {
        src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
        alt: 'Ocean tropical paradise',
        span: '',
    },
    {
        src: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?auto=format&fit=crop&q=80&w=800',
        alt: 'Private yacht in turquoise bay',
        span: '',
    },
    {
        src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=800',
        alt: 'Night city skyline from rooftop pool',
        span: 'row-span-2',
    },
    {
        src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
        alt: 'Snowy cabin under northern lights',
        span: '',
    },
    {
        src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800',
        alt: 'Wildlife safari at sunrise',
        span: 'row-span-2',
    },
    {
        src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800',
        alt: 'Scenic mountain lake reflected',
        span: '',
    },
    {
        src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=800',
        alt: 'Tropical waterfall in the jungle',
        span: '',
    },
    {
        src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800',
        alt: 'Eiffel Tower at sunset',
        span: 'row-span-2',
    },
    {
        src: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800',
        alt: 'Hidden Nordic cabin',
        span: '',
    },
    {
        src: 'https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&q=80&w=800',
        alt: 'Ancient temple ruins',
        span: '',
    },
    {
        src: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&q=80&w=800',
        alt: 'Cobblestone streets of Havana',
        span: 'row-span-2',
    },
    {
        src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
        alt: 'Jagged peaks of the Andes',
        span: '',
    },
    {
        src: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&q=80&w=800',
        alt: 'Morning mist over Lake Louise',
        span: '',
    },
    {
        src: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800',
        alt: 'Santorini blue domes',
        span: 'row-span-2',
    },
    {
        src: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800',
        alt: 'Camping under a starry sky',
        span: '',
    },
];

const TravelGallery = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

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
                            className={`group relative overflow-hidden rounded-[24px] md:rounded-[32px] cursor-pointer ${image.span}`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-sm font-black uppercase tracking-widest text-white drop-shadow-lg">
                                    {image.alt}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TravelGallery;
