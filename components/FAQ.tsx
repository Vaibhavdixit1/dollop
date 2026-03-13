'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: 'How does the VOYAGE membership work?',
        answer: 'VOYAGE offers three membership tiers — Essential, Premium, and Elite. Each tier unlocks progressively deeper access to curated destinations, private transfers, concierge services, and invite-only experiences. Membership is annual and can be upgraded at any time.',
    },
    {
        question: 'Can I customize my travel itinerary?',
        answer: 'Absolutely. Every VOYAGE itinerary is fully bespoke. After an initial consultation with your personal curator, we design a tailored journey based on your preferences, pace, interests, and budget. No two trips are ever the same.',
    },
    {
        question: 'What destinations do you cover?',
        answer: 'We currently curate experiences across 150+ destinations spanning 6 continents. From the Yaeyama Islands of Japan to the fjords of Norway, the Amalfi Coast to Patagonia — our network covers both iconic landmarks and hidden gems.',
    },
    {
        question: 'Is there a cancellation policy?',
        answer: 'Yes. We offer flexible cancellation on most bookings up to 30 days before departure. Premium and Elite members enjoy enhanced flexibility with up to 14-day cancellation windows. Full details are provided at the time of booking.',
    },
    {
        question: 'How far in advance should I book?',
        answer: 'For the best availability — especially during peak seasons and for exclusive properties — we recommend booking 3–6 months ahead. However, our concierge team can also arrange last-minute luxury escapes within 48 hours for Premium and Elite members.',
    },
    {
        question: 'Do you offer group and corporate travel?',
        answer: 'Yes. We specialize in high-end group experiences including corporate retreats, milestone celebrations, and multi-family trips. Our team coordinates every logistical detail to ensure seamless group travel.',
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-white py-24 md:py-32 px-4 sm:px-6 lg:px-12">
            <div className="mx-auto max-w-4xl">
                <div className="text-center mb-16 md:mb-24">
                    <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] text-neutral-400 uppercase">Common Questions</span>
                    <h2 className="mt-4 md:mt-6 text-4xl sm:text-6xl font-black tracking-tighter text-neutral-900 uppercase">
                        FREQUENTLY ASKED
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="rounded-[24px] md:rounded-[32px] border border-black/5 overflow-hidden transition-all hover:shadow-md"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer group"
                            >
                                <span className="text-base md:text-lg font-black text-neutral-900 tracking-tight uppercase pr-4 group-hover:text-neutral-600 transition-colors">
                                    {faq.question}
                                </span>
                                <motion.span
                                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex-shrink-0 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl md:rounded-2xl bg-neutral-50 text-neutral-900 text-xl font-bold transition-colors group-hover:bg-neutral-900 group-hover:text-white"
                                >
                                    +
                                </motion.span>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <p className="px-6 md:px-8 pb-6 md:pb-8 text-base md:text-lg font-medium leading-relaxed text-neutral-600">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
