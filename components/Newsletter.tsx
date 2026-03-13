'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 3000);
            setEmail('');
        }
    };

    return (
        <section className="relative bg-neutral-200 py-24 md:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden">
            {/* Subtle decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-white/30 blur-[150px]"></div>

            <div className="relative z-10 mx-auto max-w-4xl text-center">
                <span className="text-[10px] sm:text-xs font-black tracking-[0.5em] text-neutral-400 uppercase">Stay Connected</span>
                <h2 className="mt-6 md:mt-8 text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-neutral-900 uppercase leading-none">
                    THE VOYAGE <br /> DISPATCH
                </h2>
                <p className="mx-auto mt-8 md:mt-12 max-w-xl text-lg md:text-xl font-medium leading-relaxed text-neutral-600">
                    Receive curated travel stories, insider tips, and exclusive member offers delivered to your inbox every week.
                </p>

                <form onSubmit={handleSubmit} className="mt-12 md:mt-16 mx-auto max-w-xl">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 relative">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                className="w-full rounded-2xl border border-black/5 bg-white/70 backdrop-blur-md px-8 py-5 text-base font-bold text-neutral-900 outline-none transition-all focus:border-neutral-900 focus:bg-white placeholder:text-neutral-400 placeholder:font-medium shadow-lg"
                                required
                            />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="cursor-pointer rounded-2xl bg-neutral-900 px-10 py-5 text-sm font-black uppercase tracking-widest text-white shadow-xl transition-colors hover:bg-neutral-800"
                        >
                            {isSubmitted ? '✓ SUBSCRIBED' : 'SUBSCRIBE'}
                        </motion.button>
                    </div>
                    <p className="mt-6 text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-neutral-400">
                        No spam. Unsubscribe anytime. Read by 15,000+ travelers.
                    </p>
                </form>

                {/* Social proof dots */}
                <div className="mt-16 md:mt-20 flex items-center justify-center gap-3">
                    <div className="flex -space-x-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="h-10 w-10 rounded-full border-2 border-neutral-200 bg-neutral-100 overflow-hidden shadow-md">
                                <img
                                    src={`https://i.pravatar.cc/80?u=subscriber${i}`}
                                    alt={`Subscriber ${i}`}
                                    className="h-full w-full object-cover grayscale"
                                />
                            </div>
                        ))}
                    </div>
                    <span className="ml-3 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-neutral-400">
                        +15K Readers
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
