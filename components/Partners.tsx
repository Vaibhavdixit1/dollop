"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const partners = [
  "FOUR SEASONS",
  "AMAN RESORTS",
  "RITZ-CARLTON",
  "MANDARIN ORIENTAL",
  "PENINSULA",
  "ROSEWOOD",
  "BELMOND",
  "ONE&ONLY",
];

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="bg-neutral-200 py-20 md:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden border-y border-black/5">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-[10px] sm:text-xs font-black tracking-[0.5em] text-neutral-400 uppercase">
            Trusted Partners
          </span>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-linear-to-r from-neutral-200 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-linear-to-l from-neutral-200 to-transparent z-10 pointer-events-none"></div>

          <div className="flex items-center justify-between gap-8 md:gap-12 overflow-hidden">
            {partners.map((partner, i) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex-shrink-0 group cursor-pointer"
              >
                <span className="text-sm md:text-lg font-black tracking-[0.15em] text-neutral-500 transition-colors duration-300 group-hover:text-neutral-900 whitespace-nowrap uppercase">
                  {partner}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
