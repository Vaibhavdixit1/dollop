'use client';

const tiers = [
    {
        name: 'ESSENTIAL',
        price: '$499/yr',
        description: 'Perfect for the casual luxury traveler.',
        features: ['Early access to deals', 'Personal search agent', 'Member exclusive rates', 'Basic concierge support'],
        pill: 'Silver'
    },
    {
        name: 'PREMIUM',
        price: '$1,299/yr',
        description: 'Our most popular membership for explorers.',
        features: ['All Essential features', 'Private airport transfers', 'Room upgrades (subject to availability)', '24/7 Global concierge'],
        pill: 'Gold',
        highlight: true
    },
    {
        name: 'ELITE',
        price: '$4,999/yr',
        description: 'Unrestricted access to the world’s secrets.',
        features: ['All Premium features', 'Private jet booking access', 'Personal travel butler', 'Access to invite-only hotels'],
        pill: 'Platinum'
    }
];

const PackageTiers = () => {
    return (
        <section className="bg-neutral-50 py-24 md:py-32 px-4 sm:px-6 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-16 md:mb-24">
                    <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] text-neutral-400 uppercase">Membership</span>
                    <h2 className="mt-4 md:mt-6 text-4xl sm:text-6xl font-black tracking-tighter text-neutral-900 uppercase">CHOOSE YOUR ACCESS</h2>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {tiers.map((tier) => (
                        <div key={tier.name} className={`relative rounded-[32px] md:rounded-[48px] p-8 md:p-12 transition-all hover:scale-[1.02] bg-white border border-black/5 text-neutral-900 ${tier.highlight ? 'shadow-2xl ring-2 ring-neutral-900/5' : 'shadow-xl'}`}>
                            {tier.highlight && (
                                <div className="absolute top-6 right-6 md:top-8 md:right-8 rounded-full bg-neutral-900 px-3 py-1 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white">
                                    RECOMMENDED
                                </div>
                            )}
                            <span className="text-[10px] md:text-xs font-black tracking-widest uppercase text-neutral-400">{tier.pill} Access</span>
                            <h3 className="mt-3 md:mt-4 text-3xl md:text-4xl font-black">{tier.name}</h3>
                            <p className="mt-3 md:mt-4 text-base md:text-lg font-medium opacity-60 leading-tight">{tier.description}</p>

                            <div className="my-8 md:my-10 h-[1px] w-full bg-black/5"></div>

                            <ul className="space-y-4 md:space-y-6">
                                {tier.features.map(f => (
                                    <li key={f} className="flex items-start gap-4 text-sm font-bold uppercase tracking-tight">
                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-900/40 shrink-0"></span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-12 md:mt-16">
                                <p className="text-3xl md:text-4xl font-black">{tier.price}</p>
                                <button className="mt-6 md:mt-8 w-full rounded-2xl bg-neutral-900 py-4 md:py-5 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-neutral-800 active:scale-95 shadow-lg">
                                    Join {tier.name}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PackageTiers;
