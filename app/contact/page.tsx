'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

    return (
        <div className="flex min-h-screen flex-col bg-neutral-200">
            <Header />
            <main className="flex-grow pt-32 md:pt-40">
                {/* Hero */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 pb-16 md:pb-20">
                    <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] text-neutral-400 uppercase">Get In Touch</span>
                    <h1 className="mt-6 md:mt-8 text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-neutral-900 uppercase leading-[1.1]">
                        LET&apos;S START <br /> A CONVERSATION
                    </h1>
                    <p className="mt-8 md:mt-12 max-w-2xl text-lg md:text-xl font-medium leading-relaxed text-neutral-600">
                        Whether you&apos;re planning your next escape or curious about membership, our team is ready to help you every step of the way.
                    </p>
                </div>

                {/* Contact Grid */}
                <section className="bg-white py-24 md:py-32 px-4 sm:px-6 lg:px-12">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
                            {/* Contact Form */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 uppercase">
                                    SEND US A MESSAGE
                                </h2>
                                <p className="mt-4 text-base font-medium text-neutral-500">
                                    Fill out the form and a member of our concierge team will respond within 24 hours.
                                </p>

                                <form onSubmit={handleSubmit} className="mt-10 md:mt-12 space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="John Doe"
                                                required
                                                className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-6 py-4 text-base font-bold text-neutral-900 outline-none transition-all focus:border-neutral-900 focus:bg-white"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-1">Email</label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="name@example.com"
                                                required
                                                className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-6 py-4 text-base font-bold text-neutral-900 outline-none transition-all focus:border-neutral-900 focus:bg-white"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-1">Subject</label>
                                        <select
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            required
                                            className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-6 py-4 text-base font-bold text-neutral-900 outline-none transition-all focus:border-neutral-900 focus:bg-white appearance-none cursor-pointer"
                                        >
                                            <option value="">Select a topic</option>
                                            <option value="membership">Membership Inquiry</option>
                                            <option value="booking">Booking Assistance</option>
                                            <option value="custom">Custom Trip Planning</option>
                                            <option value="corporate">Corporate / Group Travel</option>
                                            <option value="partnership">Partnership Opportunity</option>
                                            <option value="other">General Question</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-1">Message</label>
                                        <textarea
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Tell us about your dream trip..."
                                            rows={5}
                                            required
                                            className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-6 py-4 text-base font-bold text-neutral-900 outline-none transition-all focus:border-neutral-900 focus:bg-white resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full sm:w-auto cursor-pointer rounded-2xl bg-neutral-900 px-12 py-5 text-sm font-black uppercase tracking-[0.2em] text-white shadow-xl transition-all hover:bg-neutral-800 active:scale-[0.98]"
                                    >
                                        {isSubmitted ? '✓ MESSAGE SENT' : 'SEND MESSAGE'}
                                    </button>
                                </form>
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-12 md:space-y-16 lg:pl-8">
                                <div>
                                    <h3 className="text-lg md:text-xl font-black tracking-tight text-neutral-900 uppercase">Headquarters</h3>
                                    <div className="mt-6 space-y-4">
                                        <div className="flex items-start gap-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-50 text-neutral-600">
                                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-neutral-900">The VOYAGE Building</p>
                                                <p className="mt-1 text-sm font-medium text-neutral-500">42 Mayfair Lane, London W1K 3QT</p>
                                                <p className="text-sm font-medium text-neutral-500">United Kingdom</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg md:text-xl font-black tracking-tight text-neutral-900 uppercase">Regional Offices</h3>
                                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {[
                                            { city: 'New York', address: '580 Fifth Avenue, Suite 820', country: 'United States' },
                                            { city: 'Dubai', address: 'DIFC Gate Village, Tower 2', country: 'United Arab Emirates' },
                                            { city: 'Singapore', address: '1 Raffles Place, Level 34', country: 'Singapore' },
                                            { city: 'Tokyo', address: 'Roppongi Hills Mori Tower, 38F', country: 'Japan' },
                                        ].map((office) => (
                                            <div key={office.city} className="rounded-2xl border border-black/5 p-5 md:p-6 hover:bg-neutral-50 transition-colors">
                                                <p className="text-sm font-black text-neutral-900 uppercase tracking-wider">{office.city}</p>
                                                <p className="mt-2 text-xs font-medium text-neutral-500 leading-relaxed">{office.address}</p>
                                                <p className="text-xs font-medium text-neutral-400">{office.country}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg md:text-xl font-black tracking-tight text-neutral-900 uppercase">Direct Lines</h3>
                                    <div className="mt-6 space-y-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-50 text-neutral-600">
                                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Email</p>
                                                <p className="text-sm font-bold text-neutral-900">concierge@voyagetravel.com</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-50 text-neutral-600">
                                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Phone</p>
                                                <p className="text-sm font-bold text-neutral-900">+44 20 7123 4567</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-50 text-neutral-600">
                                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Concierge Hours</p>
                                                <p className="text-sm font-bold text-neutral-900">24/7 for Premium & Elite members</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Map placeholder */}
                                <div className="aspect-[16/9] overflow-hidden rounded-[32px] bg-neutral-100 border border-black/5 relative group cursor-pointer">
                                    <img
                                        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200"
                                        alt="London Office Location"
                                        className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all"></div>
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-4 py-2 shadow-lg">
                                            <span className="h-2 w-2 rounded-full bg-neutral-900 animate-pulse"></span>
                                            <span className="text-xs font-black uppercase tracking-widest text-neutral-900">London HQ — Mayfair</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
