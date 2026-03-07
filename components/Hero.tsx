import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center overflow-hidden bg-zinc-50 px-6 pt-32 pb-20 dark:bg-black md:min-h-[90vh] lg:px-12">
            {/* Background decoration */}
            <div className="absolute top-0 -left-48 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-600/5"></div>
            <div className="absolute bottom-0 -right-48 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-600/5"></div>

            <div className="relative z-10 mx-auto max-w-5xl text-center">
                <div className="mb-8 inline-flex items-center rounded-full border border-zinc-200 bg-white/80 px-4 py-1.5 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/50">
                    <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                    <span className="ml-2 text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                        v1.0 Now Live
                    </span>
                </div>

                <h1 className="text-balance bg-gradient-to-b from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-extrabold leading-[1.15] tracking-tight text-transparent dark:from-white dark:to-zinc-400 sm:text-6xl md:text-7xl">
                    Build faster with professional <br className="hidden sm:block" /> UI components.
                </h1>

                <p className="mx-auto mt-8 max-w-2xl text-balance text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl">
                    Beautifully designed, expertly crafted components and templates to jumpstart your project. Spend less time on styling and more on your product.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <button className="h-14 w-full cursor-pointer rounded-2xl bg-zinc-950 px-8 text-lg font-bold text-white shadow-2xl transition-all hover:translate-y-[-2px] hover:shadow-zinc-950/20 active:translate-y-0 dark:bg-white dark:text-black sm:w-auto">
                        Browse Components
                    </button>
                    <button className="h-14 w-full cursor-pointer rounded-2xl border border-zinc-200 bg-white px-8 text-lg font-bold text-zinc-950 transition-all hover:bg-zinc-50 active:translate-y-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:hover:bg-zinc-900 sm:w-auto">
                        Documentation
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
