'use client';

const featured = [
    { title: 'GUIDES', count: '124 Articles', image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=800' },
    { title: 'EXPERIENCES', count: '86 Articles', image: 'https://images.unsplash.com/photo-1530789253516-ad9d7c080fcd?auto=format&fit=crop&q=80&w=800' },
    { title: 'DESIGN', count: '45 Articles', image: 'https://images.unsplash.com/photo-1449156001533-cb3941547196?auto=format&fit=crop&q=80&w=800' },
    { title: 'PEOPLE', count: '32 Articles', image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=800' },
];

const BlogExplorer = () => {
    return (
        <section className="bg-neutral-200 py-24 md:py-32 px-4 sm:px-6 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col gap-8 md:gap-16 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-xl">
                        <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] text-neutral-400 uppercase">Dive Deeper</span>
                        <h2 className="mt-6 md:mt-8 text-5xl sm:text-7xl font-black tracking-tighter text-neutral-900 uppercase leading-none">THE <br /> COLLECTION</h2>
                    </div>
                    <p className="max-w-sm text-lg md:text-xl font-medium text-neutral-600 leading-relaxed">
                        Explore our categorized archive of travel intelligence and editorial stories.
                    </p>
                </div>

                <div className="mt-16 md:mt-24 grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {featured.map((item) => (
                        <div key={item.title} className="group relative flex h-64 md:h-80 flex-col justify-end rounded-[32px] md:rounded-[40px] overflow-hidden border border-black/5 p-8 md:p-10 shadow-lg transition-all hover:-translate-y-2 cursor-pointer">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/20 to-transparent opacity-80 transition-opacity group-hover:opacity-60"></div>

                            <div className="relative z-10 w-full">
                                <span className="text-[13px] md:text-[15px] font-black tracking-widest text-white/60 group-hover:text-white/40">{item.count}</span>
                                <h3 className="mt-3 md:mt-4 text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">{item.title}</h3>
                                <div className="mt-6 md:mt-8 h-1 w-12 bg-white/20 transition-all group-hover:w-full group-hover:bg-white/40"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogExplorer;
