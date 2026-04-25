'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-neutral-900 py-32 md:py-48 px-4 sm:px-6 lg:px-12 text-white overflow-hidden">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
                    <div className="lg:col-span-12 items-center flex justify-between mb-16 md:mb-24">
                         <Link href="/" className="flex items-center gap-4 group">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-neutral-900 overflow-hidden relative">
                                <motion.span 
                                    whileHover={{ y: -40 }}
                                    className="text-2xl font-black absolute"
                                >
                                    V
                                </motion.span>
                                <motion.span 
                                    initial={{ y: 40 }}
                                    whileHover={{ y: 0 }}
                                    className="text-2xl font-black absolute"
                                >
                                    V
                                </motion.span>
                            </div>
                            <span className="text-3xl font-black tracking-tighter text-white uppercase">VOYAGE</span>
                        </Link>
                        
                        <div className="hidden md:flex gap-12">
                            {['Instagram', 'Twitter', 'LinkedIn'].map((platform) => (
                                <Link
                                    key={platform}
                                    href="#"
                                    className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 transition-colors hover:text-white"
                                >
                                    {platform}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-12">
                        <p className="text-2xl font-black leading-tight tracking-tighter uppercase max-w-sm">
                            Architecting the impossible. Curating the world's most guarded sanctuaries and unlisted routes. 
                        </p>
                        <div className="flex flex-col gap-4">
                            <span className="text-[10px] font-black tracking-[0.4em] text-white/30 uppercase">Newsletter</span>
                            <div className="relative max-w-sm">
                                <input 
                                    type="email" 
                                    placeholder="JOIN OUR CIRCLE" 
                                    className="w-full bg-transparent border-b border-white/10 pb-4 text-lg font-medium focus:outline-none focus:border-white transition-colors uppercase tracking-widest"
                                />
                                <button className="absolute right-0 bottom-4 text-sm font-black uppercase tracking-widest hover:text-white/50 transition-colors">SIGN UP</button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Explore</h4>
                            <ul className="mt-8 space-y-4">
                                {['Destinations', 'Experiences', 'Packages', 'Magazine'].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-sm font-bold text-white/50 hover:text-white transition-colors uppercase tracking-widest">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Protocol</h4>
                            <ul className="mt-8 space-y-4">
                                {['Membership', 'Safety', 'Privacy', 'Manifesto'].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-sm font-bold text-white/50 hover:text-white transition-colors uppercase tracking-widest">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Office</h4>
                            <p className="mt-8 text-sm font-bold text-white/50 leading-loose uppercase tracking-widest">
                                45 Bahnhofstrasse <br />
                                8001 Zurich <br />
                                Switzerland
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-24 md:mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
                        © {new Date().getFullYear()} VOYAGE TRAVEL INC. 
                    </p>
                    <div className="flex gap-12">
                        {['Terms', 'Cookies', 'Security'].map((item) => (
                            <Link key={item} href="#" className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-white transition-colors">
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
