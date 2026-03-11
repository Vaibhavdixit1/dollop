'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: 'Destinations', href: '/destinations' },
        { name: 'Packages', href: '/packages' },
        { name: 'Blog', href: '/blog' },
        { name: 'About', href: '/about' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-neutral-200/80 backdrop-blur-xl transition-all duration-300">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-12">
                <Link href="/" className="group flex items-center gap-3 transition-all active:scale-95">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-neutral-900 text-white shadow-xl transition-transform group-hover:rotate-6">
                        <span className="text-lg sm:text-xl font-bold">V</span>
                    </div>
                    <span className="text-xl sm:text-2xl font-black tracking-tighter text-neutral-900">VOYAGE</span>
                </Link>

                <nav className="hidden items-center gap-10 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-semibold uppercase tracking-widest text-neutral-600 transition-colors hover:text-black"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2 sm:gap-4">
                    <Link href="/login" className="hidden cursor-pointer text-sm font-bold uppercase tracking-widest text-neutral-600 transition-colors hover:text-black sm:block">Login</Link>
                    <Link href="/signup" className="hidden cursor-pointer rounded-full bg-neutral-900 px-6 lg:px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-neutral-800 active:scale-95 sm:block shadow-lg">
                        Book Now
                    </Link>

                    <button
                        onClick={toggleMenu}
                        className="flex h-10 w-10 sm:h-12 sm:w-12 cursor-pointer items-center justify-center rounded-xl border border-black/10 bg-black/5 hover:bg-black/10 md:hidden transition-all"
                        aria-label="Toggle menu"
                    >
                        <div className="relative h-5 w-5 sm:h-6 sm:w-6">
                            <span className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-2 transition-all duration-300 bg-black ${isMenuOpen ? 'rotate-45 translate-y-0' : ''}`}></span>
                            <span className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-0 transition-all duration-300 bg-black ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`absolute left-0 top-1/2 h-0.5 w-full translate-y-2 transition-all duration-300 bg-black ${isMenuOpen ? '-rotate-45 translate-y-0' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <div className={`fixed inset-0 top-0 z-40 bg-neutral-200/98 backdrop-blur-2xl transition-all duration-500 md:hidden ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                <nav className="flex flex-col items-center justify-center h-full gap-8 p-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            onClick={() => setIsMenuOpen(false)}
                            href={link.href}
                            className="text-3xl font-black uppercase tracking-tighter text-neutral-900 hover:text-neutral-600 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="mt-8 flex flex-col w-full gap-4 max-w-sm">
                        <Link href="/signup" onClick={() => setIsMenuOpen(false)} className="w-full text-center rounded-2xl bg-neutral-900 p-5 text-lg font-bold uppercase tracking-widest text-white shadow-2xl">
                            Book Now
                        </Link>
                        <button onClick={() => setIsMenuOpen(false)} className="text-neutral-900 font-bold uppercase tracking-widest opacity-60 mt-4">Close Menu</button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
