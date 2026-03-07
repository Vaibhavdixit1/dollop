'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/50 bg-white/70 backdrop-blur-xl transition-all duration-300 dark:border-zinc-800/50 dark:bg-black/70">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
                <Link href="/" className="group flex items-center gap-3 transition-all active:scale-95">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 text-white shadow-xl transition-transform group-hover:rotate-6 dark:bg-white dark:text-black">
                        <span className="text-lg font-bold">D</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-zinc-950 dark:text-white">Dollop</span>
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    <Link href="#features" className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white">Features</Link>
                    <Link href="#about" className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white">About</Link>
                    <Link href="#pricing" className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white">Pricing</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <button className="hidden cursor-pointer text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white sm:block">Sign in</button>
                    <button className="hidden cursor-pointer rounded-full bg-zinc-950 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-zinc-200 sm:block">
                        Get Started
                    </button>

                    {/* Mobile Hamburger Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-800 md:hidden"
                        aria-label="Toggle menu"
                    >
                        <div className="relative h-5 w-5">
                            <span className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1.5 transition-all duration-300 dark:bg-white bg-zinc-950 ${isMenuOpen ? 'rotate-45 translate-y-0' : ''}`}></span>
                            <span className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-0 transition-all duration-300 dark:bg-white bg-zinc-950 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`absolute left-0 top-1/2 h-0.5 w-5 translate-y-1.5 transition-all duration-300 dark:bg-white bg-zinc-950 ${isMenuOpen ? '-rotate-45 translate-y-0' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <div className={`fixed inset-x-0 top-20 z-40 origin-top overflow-hidden bg-white/95 backdrop-blur-2xl transition-all duration-500 dark:bg-black/95 md:hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <nav className="flex flex-col gap-2 p-6">
                    <Link onClick={() => setIsMenuOpen(false)} href="#features" className="flex items-center rounded-xl p-4 text-lg font-semibold text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white">
                        Features
                    </Link>
                    <Link onClick={() => setIsMenuOpen(false)} href="#about" className="flex items-center rounded-xl p-4 text-lg font-semibold text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white">
                        About
                    </Link>
                    <Link onClick={() => setIsMenuOpen(false)} href="#pricing" className="flex items-center rounded-xl p-4 text-lg font-semibold text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white">
                        Pricing
                    </Link>
                    <hr className="my-2 border-zinc-100 dark:border-zinc-800" />
                    <button className="flex w-full items-center justify-center rounded-xl p-4 text-lg font-semibold text-zinc-600 dark:text-zinc-400">
                        Sign in
                    </button>
                    <button className="flex w-full items-center justify-center rounded-xl bg-zinc-950 p-4 text-lg font-bold text-white shadow-xl dark:bg-white dark:text-black">
                        Get Started
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
