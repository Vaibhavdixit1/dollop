import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="border-t border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-black">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-950 text-white dark:bg-white dark:text-black">
                                <span className="text-sm font-bold">D</span>
                            </div>
                            <span className="text-lg font-bold tracking-tight text-zinc-950 dark:text-white">Dollop</span>
                        </Link>
                        <p className="mt-6 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                            Elevating web experiences with premium design systems and components. Built for modern creators.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-950 dark:text-white">Company</h4>
                        <ul className="mt-6 space-y-4">
                            <li><Link href="/" className="text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white">About</Link></li>
                            <li><Link href="/" className="text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white">Careers</Link></li>
                            <li><Link href="/" className="text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white">Support</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-950 dark:text-white">Product</h4>
                        <ul className="mt-6 space-y-4">
                            <li><Link href="/" className="text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white">Features</Link></li>
                            <li><Link href="/" className="text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white">Templates</Link></li>
                            <li><Link href="/" className="text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-950 dark:text-white">Legal</h4>
                        <ul className="mt-6 space-y-4">
                            <li><Link href="/" className="text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white">Privacy Policy</Link></li>
                            <li><Link href="/" className="text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white">Terms of Service</Link></li>
                            <li><Link href="/" className="text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-20 flex flex-col items-center justify-between border-t border-zinc-200 pt-8 dark:border-zinc-800 sm:flex-row">
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        © {new Date().getFullYear()} Dollop Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
