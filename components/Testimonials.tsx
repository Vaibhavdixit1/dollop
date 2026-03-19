'use client';

import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "Voyage transformed our honeymoon into a cinematic experience we'll never forget. Every detail was perfection.",
        author: "Sarah & Mark",
        role: "Global Travelers",
        avatar: "https://i.pravatar.cc/150?u=sarah",
        rating: 5
    },
    {
        quote: "The private access to the Amalfi coast villas was something I didn't think was possible. Truly world-class.",
        author: "Julian Chen",
        role: "Design Architect",
        avatar: "https://i.pravatar.cc/150?u=julian",
        rating: 5
    },
    {
        quote: "From Patagonia to the Arctic, their choice of guides and local experiences is unmatched in the luxury space.",
        author: "Elena Rodriguez",
        role: "Adventure Photographer",
        avatar: "https://i.pravatar.cc/150?u=elena",
        rating: 5
    },
    {
        quote: "A seamless blend of modern comfort and ancient culture. They understand the soul of a traveler.",
        author: "James Wilson",
        role: "Tech Executive",
        avatar: "https://i.pravatar.cc/150?u=james",
        rating: 4
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

                <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {testimonials.map((t, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="relative rounded-[32px] md:rounded-[48px] bg-white p-8 md:p-12 shadow-xl transition-all hover:scale-[1.01] flex flex-col justify-between"
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
            </div>
        </section>
    );
};

export default Testimonials;
