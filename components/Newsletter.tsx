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
        <section className="bg-neutral-900 py-32 md:py-48 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
            {/* Architectural Background */}
            <div className="absolute inset-0 z-0">
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1/2 -right-1/4 h-[800px] w-[800px] rounded-full border border-white/5 opacity-50"
                />
                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-1/2 -left-1/4 h-[1000px] w-[1000px] rounded-full border border-white/5 opacity-30"
                />
            </div>
            
            <div className="mx-auto max-w-7xl relative z-10 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-3xl"
                >
                    <span className="text-[10px] sm:text-xs font-black tracking-[0.6em] text-white/40 uppercase">THE PROTOCOL</span>
                    <h2 className="mt-8 text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9]">
                        UNLISTED <br /> FREQUENCIES
                    </h2>
                    <p className="mt-12 text-xl font-medium text-white/50 leading-relaxed max-w-xl mx-auto">
                        Access the undocumented. Receive encrypted dispatches regarding private estates, off-manifest expeditions, and the world's most guarded sanctuaries.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full max-w-2xl mt-16 md:mt-24"
                >
                    {status === 'success' ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[40px] md:rounded-[56px] p-16 text-center"
                        >
                            <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                                <svg className="w-8 h-8 text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-black text-white uppercase tracking-tighter">IDENTITY VERIFIED</h3>
                            <p className="mt-4 text-white/40 font-black uppercase tracking-widest text-[10px]">Awaiting secure transmission.</p>
                        </motion.div>
                    ) : (
                        <div className="bg-white px-8 py-8 md:px-12 md:py-12 rounded-[40px] md:rounded-[56px] shadow-2xl">
                            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                                <div className="relative flex-grow">
                                    <input
                                        id="newsletter-email"
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="ENTER YOUR EMAIL"
                                        className="w-full bg-neutral-100 border-none rounded-3xl md:rounded-full px-8 py-5 text-neutral-900 font-bold placeholder-neutral-400 focus:ring-2 focus:ring-neutral-900 outline-none transition-all"
                                    />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="bg-neutral-900 text-white rounded-3xl md:rounded-full px-12 py-5 font-black uppercase tracking-[0.2em] hover:bg-neutral-800 transition-all disabled:opacity-50 whitespace-nowrap"
                                >
                                    {status === 'loading' ? 'Processing...' : 'Subscribe'}
                                </motion.button>
                            </form>
                            <p className="mt-8 text-[9px] text-neutral-400 font-black uppercase tracking-[0.3em]">
                                Privacy is absolute. No secondary distribution.
                            </p>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Newsletter;
