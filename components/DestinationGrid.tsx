import Image from 'next/image';

const destinations = [
    { id: 1, name: 'Bora Bora', location: 'French Polynesia', price: '$2,400', rating: 4.9, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800' },
    { id: 2, name: 'Swiss Alps', location: 'Switzerland', price: '$1,850', rating: 4.8, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800' },
    { id: 3, name: 'Santorini', location: 'Greece', price: '$1,200', rating: 4.7, image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800' },
    { id: 4, name: 'Kyoto', location: 'Japan', price: '$950', rating: 4.9, image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800' },
];

const DestinationGrid = () => {
    return (
        <section className="bg-neutral-200 py-24 md:py-32 px-4 sm:px-6 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                    <div className="max-w-xl">
                        <h2 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-neutral-400">Curated for You</h2>
                        <p className="mt-4 text-4xl sm:text-6xl font-black tracking-tighter text-neutral-900 uppercase">
                            POPULAR <br /> DESTINATIONS
                        </p>
                    </div>
                    <button className="group flex cursor-pointer items-center gap-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-900 transition-all hover:gap-6">
                        View All Destinations
                        <span className="h-[1px] w-8 sm:w-12 bg-neutral-900 transition-all group-hover:w-16"></span>
                    </button>
                </div>

                <div className="mt-16 md:mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {destinations.map((dest) => (
                        <div key={dest.id} className="group relative flex flex-col overflow-hidden rounded-[32px] md:rounded-[40px] border border-black/5 bg-white transition-all hover:-translate-y-2 hover:shadow-xl">
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <img
                                    src={dest.image}
                                    alt={dest.name}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-1 rounded-full bg-white/70 px-2 sm:px-3 py-1 backdrop-blur-md">
                                    <span className="text-[10px] sm:text-xs font-bold text-neutral-900">★ {dest.rating}</span>
                                </div>
                            </div>
                            <div className="p-6 md:p-8">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-black tracking-tight text-neutral-900">{dest.name}</h3>
                                        <p className="mt-1 text-[10px] md:text-sm font-bold text-neutral-500 uppercase tracking-widest">{dest.location}</p>
                                    </div>
                                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl md:rounded-2xl bg-neutral-100 text-neutral-600 transition-colors group-hover:bg-neutral-900 group-hover:text-white">
                                        <span className="text-xl">→</span>
                                    </div>
                                </div>
                                <div className="mt-6 md:mt-8 flex items-end justify-between border-t border-black/5 pt-4 md:pt-6">
                                    <p className="text-[9px] md:text-xs font-black uppercase tracking-widest text-neutral-400">Starting from</p>
                                    <p className="text-xl md:text-2xl font-black text-neutral-900">{dest.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DestinationGrid;
