import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="border-t border-black/5 bg-neutral-200 py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-4">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-4 transition-opacity hover:opacity-80">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-white">
                                <span className="text-xl font-bold">V</span>
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-neutral-900">VOYAGE</span>
                        </Link>
                        <p className="mt-8 max-w-sm text-lg font-medium leading-relaxed text-neutral-600">
                            Elevating travel experiences with curated escapes and seamless bookings. Discover the world's most exclusive destinations with VOYAGE.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-neutral-900">Explore</h4>
                        <ul className="mt-8 space-y-6">
                            <li><Link href="/destinations" className="text-sm font-bold text-neutral-600 transition-colors hover:text-black">Destinations</Link></li>
                            <li><Link href="/packages" className="text-sm font-bold text-neutral-600 transition-colors hover:text-black">Travel Packages</Link></li>
                            <li><Link href="/blog" className="text-sm font-bold text-neutral-600 transition-colors hover:text-black">Travel Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-neutral-900">Support</h4>
                        <ul className="mt-8 space-y-6">
                            <li><Link href="/about" className="text-sm font-bold text-neutral-600 transition-colors hover:text-black">About Us</Link></li>
                            <li><Link href="#" className="text-sm font-bold text-neutral-600 transition-colors hover:text-black">Help Center</Link></li>
                            <li><Link href="#" className="text-sm font-bold text-neutral-600 transition-colors hover:text-black">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-24 border-t border-black/5 pt-12 text-center md:text-left">
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                        © {new Date().getFullYear()} VOYAGE TRAVEL INC. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
