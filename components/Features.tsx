'use client';

const features = [
    {
        title: 'CURATED LUXURY',
        description: 'Every destination and hotel is hand-picked by our travel experts for its unique design and exceptional service.',
        icon: '01'
    },
    {
        title: 'PRIVATE ACCESS',
        description: 'Unlock experiences that aren’t available to the general public, from private museum tours to secret beach dinners.',
        icon: '02'
    },
    {
        title: 'GLOBAL CONCIERGE',
        description: 'Our 24/7 support team ensures your journey is seamless, handling everything from transport to last-minute bookings.',
        icon: '03'
    },
    {
        title: 'BESPOKE DESIGN',
        description: 'We don’t do cookie-cutter. Every itinerary is tailored to your personal preferences and travel style.',
        icon: '04'
    }
];

const Features = () => {
    return (
        <section className="bg-white py-32 px-6 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <div>
                        <span className="text-xs font-black tracking-[0.4em] text-neutral-400 uppercase">The Voyage Standard</span>
                        <h2 className="mt-8 text-6xl font-black tracking-tighter text-neutral-900 sm:text-7xl uppercase leading-none">
                            REDEFINING <br /> THE WAY <br /> YOU TRAVEL
                        </h2>
                        <p className="mt-12 max-w-md text-xl font-medium leading-relaxed text-neutral-600">
                            We believe that travel is an art form. Our mission is to provide you with the canvas and the tools to create your most memorable masterpieces.
                        </p>
                        <div className="mt-16 aspect-square max-w-sm overflow-hidden rounded-[48px]">
                            <img
                                src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=1000"
                                alt="Luxury Lifestyle"
                                className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                        {features.map((feature) => (
                            <div key={feature.title} className="group flex flex-col items-start p-8 rounded-[40px] border border-black/5 bg-neutral-50 transition-all hover:bg-neutral-900 hover:text-white">
                                <span className="text-4xl font-black tracking-tighter opacity-20 group-hover:opacity-40">{feature.icon}</span>
                                <h3 className="mt-8 text-2xl font-black tracking-tight">{feature.title}</h3>
                                <p className="mt-4 text-sm font-medium leading-relaxed opacity-60">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
