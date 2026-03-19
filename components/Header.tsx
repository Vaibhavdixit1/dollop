'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Handle scroll lock
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.overflow = 'auto'; // Fallback
        };
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'Destinations', href: '/destinations' },
        { name: 'Experiences', href: '/experiences' },
        { name: 'Packages', href: '/packages' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Blog', href: '/blog' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    const menuVariants = {
        closed: {
            y: '-100%',
            transition: {
                type: 'spring' as const,
                stiffness: 300,
                damping: 30,
            }
        },
        open: {
            y: 0,
            transition: {
                type: 'spring' as const,
                stiffness: 300,
                damping: 30,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const linkVariants = {
        closed: { opacity: 0, y: 20 },
        open: { opacity: 1, y: 0 }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-[1000] border-b border-black/5 transition-colors duration-300 ${isMenuOpen ? 'bg-white' : 'bg-neutral-200/80 backdrop-blur-xl'}`}>
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
                <Link href="/" onClick={closeMenu} className="group flex items-center gap-3 transition-all active:scale-95 relative z-[1010]">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 text-white shadow-xl transition-transform group-hover:rotate-6">
                        <span className="text-lg font-bold">V</span>
                    </div>
                    <span className="text-xl font-black tracking-tighter text-neutral-900">VOYAGE</span>
                </Link>

                <nav className="hidden items-center gap-10 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 transition-all hover:text-black hover:tracking-[0.25em]"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4 relative z-[1010]">
                    <Link href="/signup" className="hidden cursor-pointer rounded-full bg-neutral-900 px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-neutral-800 active:scale-95 sm:block shadow-lg">
                        Book Now
                    </Link>

                    <button
                        onClick={toggleMenu}
                        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl border border-black/10 bg-black/5 hover:bg-black/10 md:hidden transition-all"
                        aria-label="Toggle menu"
                    >
                        <div className="relative h-6 w-6">
                            <motion.span
                                animate={isMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                                className="absolute left-0 top-1/2 h-0.5 w-full bg-black"
                            />
                            <motion.span
                                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                className="absolute left-0 top-1/2 h-0.5 w-full bg-black"
                            />
                            <motion.span
                                animate={isMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                                className="absolute left-0 top-1/2 h-0.5 w-full bg-black"
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Scroll Progress Bar */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-neutral-900 origin-left z-[1011]"
                style={{ scaleX }}
            />

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 z-[999] bg-white md:hidden"
                    >
                        <nav className="flex flex-col items-center justify-center h-full gap-8 p-10">
                            {navLinks.map((link) => (
                                <motion.div key={link.name} variants={linkVariants}>
                                    <Link
                                        onClick={closeMenu}
                                        href={link.href}
                                        className="text-4xl font-black uppercase tracking-tighter text-neutral-900 hover:text-neutral-500 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div variants={linkVariants} className="mt-12 flex flex-col w-full gap-4 max-w-sm">
                                <Link href="/signup" onClick={closeMenu} className="w-full text-center rounded-2xl bg-neutral-900 p-6 text-xl font-black uppercase tracking-widest text-white shadow-2xl active:scale-95 transition-transform">
                                    Book Now
                                </Link>
                                <Link href="/login" onClick={closeMenu} className="w-full text-center rounded-2xl border border-black/10 p-6 text-xl font-black uppercase tracking-widest text-neutral-900 active:scale-95 transition-transform">
                                    Login
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
