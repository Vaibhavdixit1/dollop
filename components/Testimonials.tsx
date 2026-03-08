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
        <section className="bg-neutral-200 py-32 px-6 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col items-center text-center">
                    <span className="text-xs font-black tracking-[0.4em] text-neutral-400 uppercase">Voices of Voyage</span>
                    <h2 className="mt-8 text-5xl font-black tracking-tighter text-neutral-900 sm:text-6xl uppercase">SHARED MEMORIES</h2>
                </div>

                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
                    {testimonials.map((t, i) => (
                        <div key={i} className="relative rounded-[48px] bg-white p-16 shadow-xl transition-all hover:scale-[1.02]">
                            <div className="absolute top-10 right-16 text-8xl font-black text-neutral-100 uppercase select-none">"</div>
                            <p className="relative z-10 text-3xl font-bold leading-tight text-neutral-900 tracking-tight">
                                {t.quote}
                            </p>
                            <div className="mt-12 flex items-center gap-6">
                                <div className="h-16 w-16 overflow-hidden rounded-2xl grayscale">
                                    <img src={t.avatar} alt={t.author} className="h-full w-full object-cover" />
                                </div>
                                <div className="text-left">
                                    <p className="text-lg font-black text-neutral-900 uppercase">{t.author}</p>
                                    <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest">{t.role}</p>
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
