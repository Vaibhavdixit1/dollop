'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 4000);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
    } as any;

    return (
        <div className="flex min-h-screen flex-col bg-neutral-200">
            <Header />
            <main className="flex-grow pt-32 md:pt-40">
                {/* Hero */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 pb-16 md:pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] text-neutral-400 uppercase">Contact Us</span>
                        <h1 className="mt-6 md:mt-8 text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-neutral-900 uppercase leading-[0.9]">
                            LET&apos;S <br /> CONNECT
                        </h1>
                        <p className="mt-10 md:mt-14 max-w-2xl text-xl md:text-3xl font-bold leading-tight text-neutral-900 tracking-tight">
                            Whether you&apos;re planning your next escape or have questions about membership, our global team is ready to curate your journey.
                        </p>
                    </motion.div>
                </div>

                {/* Contact Grid */}
                <section className="bg-white py-24 md:py-32 px-4 sm:px-6 lg:px-12">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-2xl md:text-4xl font-black tracking-tight text-neutral-900 uppercase">
                                    SEND AN <br /> INQUIRY
                                </h2>
                                <p className="mt-4 text-lg font-medium text-neutral-500">
                                    Our concierge team typically responds to premium inquiries within 12 hours.
                                </p>

                                <form onSubmit={handleSubmit} className="mt-12 md:mt-16 space-y-8">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder=" "
                                                required
                                                className="peer w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-8 pb-4 pt-8 text-base font-bold text-neutral-900 outline-none transition-all focus:border-neutral-900 focus:bg-white focus:ring-4 focus:ring-black/5"
                                            />
                                            <label htmlFor="name" className="absolute left-8 top-6 text-[10px] font-black uppercase tracking-widest text-neutral-400 transition-all peer-focus:top-3 peer-focus:text-[8px] peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-[8px]">Full Name</label>
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder=" "
                                                required
                                                className="peer w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-8 pb-4 pt-8 text-base font-bold text-neutral-900 outline-none transition-all focus:border-neutral-900 focus:bg-white focus:ring-4 focus:ring-black/5"
                                            />
                                            <label htmlFor="email" className="absolute left-8 top-6 text-[10px] font-black uppercase tracking-widest text-neutral-400 transition-all peer-focus:top-3 peer-focus:text-[8px] peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-[8px]">Email Address</label>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <select
                                            id="subject"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            required
                                            className="peer w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-8 pb-4 pt-8 text-base font-bold text-neutral-900 outline-none transition-all focus:border-neutral-900 focus:bg-white appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled hidden></option>
                                            <option value="membership">Elite Membership Program</option>
                                            <option value="booking">Besopke Voyage Booking</option>
                                            <option value="custom">Extreme Adventure Planning</option>
                                            <option value="corporate">Corporate Private Charters</option>
                                            <option value="partnership">Global Partner Relations</option>
                                            <option value="other">General Inquiry</option>
                                        </select>
                                        <label htmlFor="subject" className={`absolute left-8 transition-all font-black uppercase tracking-widest text-neutral-400 pointer-events-none ${formData.subject ? 'top-3 text-[8px]' : 'top-6 text-[10px]'} peer-focus:top-3 peer-focus:text-[8px]`}>What can we help you with?</label>
                                        <div className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 text-neutral-400">
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <textarea
                                            id="message"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder=" "
                                            rows={6}
                                            required
                                            className="peer w-full rounded-3xl border border-neutral-100 bg-neutral-50 px-8 pb-6 pt-8 text-base font-bold text-neutral-900 outline-none transition-all focus:border-neutral-900 focus:bg-white resize-none"
                                        />
                                        <label htmlFor="message" className="absolute left-8 top-6 text-[10px] font-black uppercase tracking-widest text-neutral-400 transition-all peer-focus:top-4 peer-focus:text-[8px] peer-[:not(:placeholder-shown)]:top-4 peer-[:not(:placeholder-shown)]:text-[8px]">Tell us about your next Voyage</label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full cursor-pointer rounded-2xl bg-neutral-900 py-6 text-sm font-black uppercase tracking-[0.3em] text-white shadow-2xl transition-all hover:bg-neutral-800 active:scale-[0.98] group relative overflow-hidden"
                                    >
                                        <span className="relative z-10">{isSubmitted ? '✓ REQUEST RECEIVED' : 'INITIATE REQUEST'}</span>
                                        <div className={`absolute inset-0 bg-neutral-700 transition-transform duration-500 origin-left ${isSubmitted ? 'scale-x-full' : 'scale-x-0'}`}></div>
                                    </button>
                                </form>
                            </motion.div>

                            {/* Contact Info & Details */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-16 lg:pl-12"
                            >
                                <motion.div variants={itemVariants}>
                                    <h3 className="text-sm font-black tracking-[0.4em] text-neutral-400 uppercase">Global Headquarters</h3>
                                    <div className="mt-8 flex items-start gap-6 group">
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-neutral-900 text-white shadow-xl transition-all group-hover:bg-neutral-800">
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xl font-black text-neutral-900 uppercase">LONDON OFFICE</p>
                                            <p className="mt-1 text-lg font-medium text-neutral-500 leading-tight">42 Mayfair Lane, London W1K 3QT<br />United Kingdom</p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <h3 className="text-sm font-black tracking-[0.4em] text-neutral-400 uppercase">Direct Access</h3>
                                    <div className="mt-8 space-y-6">
                                        <a href="mailto:concierge@voyagetravel.com" className="flex items-center gap-6 group cursor-pointer border-b border-neutral-100 pb-6 transition-all hover:border-neutral-900">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-50 text-neutral-400 group-hover:bg-neutral-900 group-hover:text-white transition-all">
                                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <p className="text-lg font-bold text-neutral-900">concierge@voyagetravel.com</p>
                                        </a>
                                        <a href="tel:+442071234567" className="flex items-center gap-6 group cursor-pointer border-b border-neutral-100 pb-6 transition-all hover:border-neutral-900">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-50 text-neutral-400 group-hover:bg-neutral-900 group-hover:text-white transition-all">
                                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <p className="text-lg font-bold text-neutral-900">+44 20 7123 4567</p>
                                        </a>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <h3 className="text-sm font-black tracking-[0.4em] text-neutral-400 uppercase mb-8">Regional Hubs</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                        {[
                                            { city: 'New York', region: 'Americas' },
                                            { city: 'Tokyo', region: 'East Asia' },
                                            { city: 'Dubai', region: 'Middle East' },
                                            { city: 'Singapore', region: 'Southeast Asia' },
                                        ].map((office) => (
                                            <div key={office.city} className="rounded-2xl border border-black/5 p-6 hover:bg-neutral-900 hover:text-white transition-all duration-300 cursor-pointer text-left group hover:-translate-y-1 hover:shadow-xl">
                                                <p className="text-lg font-black tracking-tight">{office.city}</p>
                                                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-neutral-400 group-hover:text-white/60">{office.region}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Visual Map Card */}
                                <motion.div variants={itemVariants} className="aspect-[16/10] overflow-hidden rounded-[40px] bg-neutral-100 border border-black/5 relative group cursor-pointer shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200"
                                        alt="London Office Location"
                                        className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-all duration-500"></div>
                                    <div className="absolute bottom-8 left-8">
                                        <div className="inline-flex items-center gap-3 rounded-full bg-white/95 backdrop-blur-md px-6 py-3 shadow-2xl transition-transform duration-300 group-hover:scale-105 group-hover:bg-white">
                                            <span className="h-2 w-2 rounded-full bg-neutral-900 animate-pulse"></span>
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-900">London HQ — Explore Location</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <FAQ />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
