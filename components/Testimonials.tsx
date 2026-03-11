'use client';

const testimonials = [
    {
        quote: "Voyage transformed our honeymoon into a cinematic experience we'll never forget. Every detail was perfection.",
        author: "Sarah & Mark",
        role: "Global Travelers",
        avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        quote: "The private access to the Amalfi coast villas was something I didn't think was possible. Truly world-class.",
        author: "Julian Chen",
        role: "Design Architect",
        avatar: "https://i.pravatar.cc/150?u=julian"
    }
];

const Testimonials = () => {
    return (
        <section className="bg-neutral-200 py-24 md:py-32 px-4 sm:px-6 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col items-center text-center">
                    <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] text-neutral-400 uppercase">Voices of Voyage</span>
                    <h2 className="mt-6 md:mt-8 text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-neutral-900 uppercase">SHARED MEMORIES</h2>
                </div>

                <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {testimonials.map((t, i) => (
                        <div key={i} className="relative rounded-[32px] md:rounded-[48px] bg-white p-8 md:p-16 shadow-xl transition-all hover:scale-[1.02]">
                            <div className="absolute top-6 right-8 md:top-10 md:right-16 text-6xl md:text-8xl font-black text-neutral-100 uppercase select-none leading-none">"</div>
                            <p className="relative z-10 text-xl md:text-3xl font-bold leading-tight text-neutral-900 tracking-tight">
                                {t.quote}
                            </p>
                            <div className="mt-10 md:mt-12 flex items-center gap-4 md:gap-6">
                                <div className="h-12 w-12 md:h-16 md:w-16 overflow-hidden rounded-xl md:rounded-2xl grayscale">
                                    <img src={t.avatar} alt={t.author} className="h-full w-full object-cover" />
                                </div>
                                <div className="text-left">
                                    <p className="text-base md:text-lg font-black text-neutral-900 uppercase">{t.author}</p>
                                    <p className="text-[10px] md:text-sm font-bold text-neutral-400 uppercase tracking-widest">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
