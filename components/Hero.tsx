import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center overflow-hidden bg-neutral-200 px-6 pt-40 pb-32 md:min-h-screen lg:px-12">
            {/* Cinematic Background Elements */}
            <div className="absolute top-1/4 -left-48 h-[600px] w-[600px] rounded-full bg-white/40 blur-[120px]"></div>
            <div className="absolute bottom-1/4 -right-48 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[120px]"></div>

            <div className="relative z-10 mx-auto max-w-6xl text-center">
                <div className="mb-10 inline-flex items-center rounded-full border border-black/5 bg-white/20 px-6 py-2 backdrop-blur-md">
                    <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                    <span className="ml-3 text-xs font-bold uppercase tracking-[0.3em] text-neutral-600">
                        Discover the Unseen
                    </span>
                </div>

                <h1 className="text-balance text-6xl font-black leading-[1] tracking-tighter text-neutral-900 sm:text-7xl md:text-9xl">
                    YOUR JOURNEY <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-neutral-900">STARTS HERE.</span>
                </h1>

                <p className="mx-auto mt-12 max-w-3xl text-balance text-xl font-medium leading-relaxed text-neutral-700 sm:text-2xl">
                    Experience luxury travel like never before. From hidden tropical paradises to majestic mountain peaks, we curate the world's most exclusive escapes.
                </p>

                {/* Floating Search Widget */}
                <div className="mt-20 w-full max-w-5xl rounded-[40px] border border-black/5 bg-white/70 p-4 backdrop-blur-3xl shadow-2xl">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                        <div className="flex flex-col items-start px-8 py-4 text-left border-r border-black/5 last:border-0 hover:bg-black/5 transition-colors rounded-2xl cursor-pointer">
                            <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Destination</span>
                            <span className="mt-1 text-lg font-bold text-neutral-900">Where to?</span>
                        </div>
                        <div className="flex flex-col items-start px-8 py-4 text-left border-r border-black/5 last:border-0 hover:bg-black/5 transition-colors rounded-2xl cursor-pointer">
                            <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Check-in</span>
                            <span className="mt-1 text-lg font-bold text-neutral-900">Add dates</span>
                        </div>
                        <div className="flex flex-col items-start px-8 py-4 text-left border-r border-black/5 last:border-0 hover:bg-black/5 transition-colors rounded-2xl cursor-pointer">
                            <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Guests</span>
                            <span className="mt-1 text-lg font-bold text-neutral-900">Add guests</span>
                        </div>
                        <div className="flex items-center justify-center p-2">
                            <button className="h-full w-full cursor-pointer rounded-3xl bg-neutral-900 px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-xl transition-all hover:scale-[1.02] active:scale-95">
                                Explore Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Trusted By / Stats */}
                <div className="mt-32">
                    <p className="text-xs font-black uppercase tracking-[0.4em] text-neutral-400">Over 2M+ Travelers Trusted Us</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
