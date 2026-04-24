'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: 'What defines the VOYAGE membership?',
        answer: 'VOYAGE provides a gated ecosystem through three tiers — Essential, Premium, and Elite. Each level grants progressively deeper entry into curated domains, private aviation, and unlisted experiences. Membership is vetted and renewed annually.',
    },
    {
        question: 'How do you architect a journey?',
        answer: 'Precision is our standard. Every VOYAGE itinerary is built from the ground up. Following a deep-dive consultation with your personal curator, we engineer a sequence of moments tailored to your specific cognitive and physical needs.',
    },
    {
        question: 'What is the scope of your global coverage?',
        answer: 'We currently curate experiences across 150+ destinations spanning 6 continents. From the Yaeyama Islands of Japan to the fjords of Norway, the Amalfi Coast to Patagonia — our network covers both iconic landmarks and hidden gems.',
    },
    {
        question: 'Is there a cancellation policy?',
        answer: 'Yes. We offer flexible cancellation on most bookings up to 30 days before departure. Premium and Elite members enjoy enhanced flexibility with up to 14-day cancellation windows. Full details are provided at the time of booking.',
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-white py-32 md:py-48 px-4 sm:px-6 lg:px-12">
            <div className="mx-auto max-w-5xl">
                <div className="flex flex-col md:flex-row gap-16 md:gap-24">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="md:w-1/3"
                    >
                        <span className="text-[10px] sm:text-xs font-black tracking-[0.6em] text-neutral-400 uppercase">The Protocol</span>
                        <h2 className="mt-8 text-5xl sm:text-6xl font-black tracking-tighter text-neutral-900 uppercase leading-[0.9]">
                            FREQUENTLY <br /> ASKED
                        </h2>
                        <p className="mt-12 text-lg font-medium text-neutral-500">
                            Our team is available 24/7 for our Elite members. For all other inquiries, please refer to our manifesto.
                        </p>
                    </motion.div>

                    <div className="md:w-2/3 space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="border-b border-neutral-100"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full flex items-center justify-between py-10 text-left cursor-pointer group"
                                >
                                    <span className="text-xl md:text-2xl font-black text-neutral-900 tracking-tighter uppercase pr-8 transition-colors group-hover:text-neutral-500">
                                        {faq.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: openIndex === i ? 45 : 0 }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-900 transition-all group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900"
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square"/>
                                        </svg>
                                    </motion.div>
                                </button>
                                <AnimatePresence initial={false}>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pb-12 text-lg md:text-xl font-medium leading-relaxed text-neutral-500 max-w-2xl">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
