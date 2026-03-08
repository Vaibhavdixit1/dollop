'use client';

const featured = [
    { title: 'GUIDES', count: '124 Articles' },
    { title: 'EXPERIENCES', count: '86 Articles' },
    { title: 'DESIGN', count: '45 Articles' },
    { title: 'PEOPLE', count: '32 Articles' },
];

const BlogExplorer = () => {
    return (
        <section className="bg-neutral-200 py-32 px-6 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col gap-16 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-xl">
                        <span className="text-xs font-black tracking-[0.4em] text-neutral-400 uppercase">Dive Deeper</span>
                        <h2 className="mt-8 text-7xl font-black tracking-tighter text-neutral-900 uppercase leading-none">THE <br /> COLLECTION</h2>
                    </div>
                    <p className="max-w-sm text-xl font-medium text-neutral-600 leading-relaxed">
                        Explore our categorized archive of travel intelligence and editorial stories.
                    </p>
                </div>

                <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {featured.map((item) => (
                        <div key={item.title} className="group relative flex h-64 flex-col justify-end rounded-[40px] border border-black/5 bg-white p-10 shadow-lg transition-all hover:bg-neutral-900 hover:text-white hover:-translate-y-2">
                            <span className="text-[15px] font-black tracking-widest text-neutral-400 group-hover:text-white/40">{item.count}</span>
                            <h3 className="mt-4 text-4xl font-black uppercase tracking-tighter text-neutral-900 group-hover:text-white">{item.title}</h3>
                            <div className="mt-8 h-1 w-12 bg-neutral-900/10 transition-all group-hover:w-full group-hover:bg-white/20"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogExplorer;
