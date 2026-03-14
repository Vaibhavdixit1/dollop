'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DestinationGrid from "@/components/DestinationGrid";
import RegionCategories from "@/components/RegionCategories";
import CTA from "@/components/CTA";
import { motion } from 'framer-motion';

export default function DestinationsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-neutral-200">
            <Header />
            <main className="flex-grow pt-32 md:pt-40">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12"
                >
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-neutral-900 uppercase leading-[1.1]">ALL <br /> DESTINATIONS</h1>
                    <p className="mt-6 md:mt-8 max-w-2xl text-lg md:text-xl font-bold text-neutral-500 uppercase tracking-widest leading-relaxed">EXPLORE THE FULL RANGE OF OUR CURATED EXPERIENCES ACROSS THE GLOBE.</p>
                </motion.div>
                <RegionCategories />
                <DestinationGrid />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
