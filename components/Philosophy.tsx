'use client';

const values = [
    {
        title: 'UNRIVALED CURATION',
        description: 'We don’t just find hotels; we discover experiences that stay with you forever. Every spot is vetted for soul, service, and style.',
    },
    {
        title: 'RADICAL PRIVACY',
        description: 'For our members, anonymity is the ultimate luxury. We specialize in off-grid escapes and private transport solutions.',
    },
    {
        title: 'CONSCIOUS TRAVEL',
        description: 'Luxury shouldn’t cost the earth. We partner with eco-certified properties and support local heritage conservation.',
    },
];

const Philosophy = () => {
    return (
        <section className="bg-white py-32 px-6 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col items-start gap-16 lg:flex-row lg:items-center">
                    <div className="lg:w-1/2">
                        <span className="text-xs font-black tracking-[0.4em] text-neutral-400 uppercase">Our DNA</span>
                        <h2 className="mt-8 text-6xl font-black tracking-tighter text-neutral-900 sm:text-7xl uppercase leading-none">
                            THE VOYAGE <br /> PHILOSOPHY
                        </h2>
                    </div>
                    <div className="lg:w-1/2">
                        <p className="text-2xl font-bold leading-tight text-neutral-900 tracking-tight">
                            We believe that the best journeys aren't measured in miles, but in the depth of the moments they create. We exist to facilitate those moments.
                        </p>
                    </div>
                </div>

                <div className="mt-32 grid grid-cols-1 gap-12 md:grid-cols-3">
                    {values.map((v) => (
                        <div key={v.title} className="group rounded-[40px] border border-black/5 p-12 transition-all hover:bg-neutral-50">
                            <h3 className="text-2xl font-black tracking-tight text-neutral-900 uppercase">{v.title}</h3>
                            <p className="mt-6 text-lg font-medium leading-relaxed text-neutral-600">
                                {v.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
