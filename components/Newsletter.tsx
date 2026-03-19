'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 1500);
    };

    return (
        <section className="bg-neutral-900 py-24 md:py-32 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 opacity-20 pointer-events-none">
                <div className="h-[600px] w-[600px] rounded-full border border-white/10"></div>
            </div>
            
            <div className="mx-auto max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] text-white/40 uppercase">Journal of Voyage</span>
                        <h2 className="mt-6 text-4xl sm:text-6xl font-black tracking-tighter text-white uppercase leading-none">
                            UNFILTERED <br /> INSPIRATION
                        </h2>
                        <p className="mt-8 text-lg sm:text-xl text-white/60 font-medium leading-relaxed max-w-md">
                            Join our exclusive circle of travelers. Receive curated itineraries, hidden gems, and first access to our seasonal retreats.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[48px]"
                    >
                        {status === 'success' ? (
                            <div className="text-center py-8">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="h-16 w-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6"
                                >
                                    <svg className="w-8 h-8 text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </motion.div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tight">Welcome to the Club</h3>
                                <p className="mt-4 text-white/60 font-medium">Check your inbox for your first curated guide.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-4">Email Address</label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your@email.com"
                                        className="w-full bg-neutral-800 border-none rounded-[24px] px-8 py-5 text-white placeholder:text-white/20 focus:ring-2 focus:ring-white/20 outline-none transition-all"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full bg-white text-neutral-900 rounded-[24px] py-5 font-black uppercase tracking-widest hover:bg-neutral-200 transition-all active:scale-[0.98] disabled:opacity-50"
                                >
                                    {status === 'loading' ? 'Joining...' : 'Become a Member'}
                                </button>
                                <p className="text-[10px] text-center text-white/20 font-bold uppercase tracking-wider">
                                    No spam. Only extraordinary stories. Unsubscribe anytime.
                                </p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
