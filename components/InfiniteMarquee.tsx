'use client';

const InfiniteMarquee = () => {
    const text = 'SOVEREIGNTY · DISCREET ESTATES · UNLISTED ROUTES · ISOLATION · ARCHITECTURAL TRUTH · OFF-MANIFEST · EXTREME RARITY · LEGACY · ';
    
    return (
        <section className="bg-neutral-900 py-6 md:py-8 overflow-hidden border-y border-white/5 select-none">
            <div className="flex whitespace-nowrap">
                <div className="animate-marquee flex items-center gap-0">
                    <span className="text-lg md:text-2xl font-black tracking-[0.3em] text-white/15 uppercase">
                        {text}{text}{text}
                    </span>
                </div>
                <div className="animate-marquee flex items-center gap-0" aria-hidden="true">
                    <span className="text-lg md:text-2xl font-black tracking-[0.3em] text-white/15 uppercase">
                        {text}{text}{text}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default InfiniteMarquee;
