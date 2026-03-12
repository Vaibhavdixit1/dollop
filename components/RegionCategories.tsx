'use client';

const categories = [
    { title: 'TROPICAL PARADISE', count: '42 Locations', image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=800' },
    { title: 'ARCTIC ESCAPES', count: '18 Locations', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800' },
    { title: 'URBAN LUXURY', count: '31 Locations', image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=800' },
    { title: 'WILD SAFARI', count: '12 Locations', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800' },
];

const RegionCategories = () => {
    return (
        <section className="bg-white py-24 md:py-32 px-4 sm:px-6 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col items-center text-center">
                    <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] text-neutral-400 uppercase">Explore by Type</span>
                    <h2 className="mt-6 md:mt-8 text-4xl sm:text-6xl font-black tracking-tighter text-neutral-900 uppercase">WHERE DO YOU <br /> BELONG?</h2>
                </div>

                <div className="mt-16 md:mt-24 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((cat) => (
                        <div key={cat.title} className="group relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-[32px] md:rounded-[40px] cursor-pointer shadow-lg transition-transform hover:-translate-y-2">
                            <img
                                src={cat.image}
                                alt={cat.title}
                                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-90"></div>
                            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
                                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/60">{cat.count}</span>
                                <h3 className="mt-2 text-xl md:text-2xl font-black text-white uppercase leading-none">{cat.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RegionCategories;
