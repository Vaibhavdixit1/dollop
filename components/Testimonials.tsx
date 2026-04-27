'use client';

import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "The coordinates were exact. The silence was absolute. They found a way into the unfindable.",
        author: "Julian Chen",
        role: "Spatial Architect",
        avatar: "https://i.pravatar.cc/150?u=julian",
        rating: 5
    },
    {
        quote: "Total architectural isolation. I've never experienced anything that felt so... deliberate.",
        author: "Sarah & Mark",
        role: "Estate Collectors",
        avatar: "https://i.pravatar.cc/150?u=sarah",
        rating: 5
    },
    {
        quote: "Off-manifest travel requires a level of trust most agencies can't provide. Voyage is the exception.",
        author: "Elena Rodriguez",
        role: "Visual Archivist",
        avatar: "https://i.pravatar.cc/150?u=elena",
        rating: 5
    },
    {
        quote: "The transition from the known world to the unknown was seamless. A masterclass in logistics.",
        author: "James Wilson",
        role: "Protocol Director",
        avatar: "https://i.pravatar.cc/150?u=james",
        rating: 5
    },
    {
        quote: "Privacy is no longer a luxury; it's a necessity. They understand the value of the void.",
        author: "Sophie Laurent",
        role: "Heritage Curator",
        avatar: "https://i.pravatar.cc/150?u=sophie",
        rating: 5
    },
    {
        quote: "We existed on the periphery of the map for three weeks. It was the first time I felt truly present.",
        author: "David Kim",
        role: "Systems Designer",
        avatar: "https://i.pravatar.cc/150?u=david",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="bg-neutral-200 py-24 md:py-32 px-4 sm:px-6 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center"
                >
                    <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] text-neutral-400 uppercase">Voices of Voyage</span>
                    <h2 className="mt-6 md:mt-8 text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-neutral-900 uppercase">SHARED MEMORIES</h2>
                </motion.div>

                {/* hide-scrollbar class can be added in global CSS or just use standard tailwind classes */}
                <div className="relative mt-16 md:mt-24">
                    <div className="flex overflow-x-auto pb-12 snap-x snap-mandatory gap-6 md:gap-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    {testimonials.map((t, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="relative min-w-[85vw] md:min-w-[600px] snap-center rounded-[32px] md:rounded-[48px] bg-white border border-black/5 p-8 md:p-12 shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl flex flex-col justify-between shrink-0 cursor-grab active:cursor-grabbing"
                        >
                            <div>
                                <div className="flex gap-1 mb-8">
                                    {[...Array(5)].map((_, starIndex) => (
                                        <svg 
                                            key={starIndex} 
                                            className={`w-5 h-5 ${starIndex < t.rating ? 'text-neutral-900' : 'text-neutral-200'}`} 
                                            fill="currentColor" 
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <div className="absolute top-6 right-8 md:top-10 md:right-16 text-6xl md:text-8xl font-black text-neutral-50/50 uppercase select-none leading-none">&quot;</div>
                                <p className="relative z-10 text-xl md:text-2xl font-bold leading-tight text-neutral-900 tracking-tight">
                                    {t.quote}
                                </p>
                            </div>
                            <div className="mt-10 md:mt-12 flex items-center gap-4 md:gap-6 border-t border-neutral-100 pt-8">
                                <div className="h-12 w-12 md:h-14 md:w-14 overflow-hidden rounded-xl md:rounded-2xl grayscale">
                                    <img src={t.avatar} alt={t.author} className="h-full w-full object-cover" />
                                </div>
                                <div className="text-left">
                                    <p className="text-sm md:text-base font-black text-neutral-900 uppercase tracking-wide">{t.author}</p>
                                    <p className="text-[10px] md:text-xs font-bold text-neutral-400 uppercase tracking-[0.2em]">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    </div>
                    
                    {/* Progress Indicator */}
                    <div className="mt-8 flex justify-center gap-2">
                        {testimonials.map((_, i) => (
                            <div 
                                key={i} 
                                className="h-1 w-8 rounded-full bg-neutral-900/10 overflow-hidden"
                            >
                                <motion.div 
                                    initial={{ x: '-100%' }}
                                    whileInView={{ x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: i * 0.1 }}
                                    className="h-full w-full bg-neutral-900/40"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
