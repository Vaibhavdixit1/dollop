import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Philosophy from "@/components/Philosophy";
import TeamSection from "@/components/TeamSection";
import Timeline from "@/components/Timeline";
import TravelStats from "@/components/TravelStats";
import CTA from "@/components/CTA";
import ImageBand from "@/components/ImageBand";

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col bg-neutral-200">
            <Header />
            <main className="flex-grow pt-32 md:pt-40">
                {/* Hero */}
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-12 pb-16 md:pb-20">
                    <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] text-neutral-400 uppercase">Our Story</span>
                    <h1 className="mt-6 md:mt-8 text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-neutral-900 uppercase leading-[1.1]">BEYOND <br /> HORIZONS</h1>
                    <div className="mt-12 md:mt-16 space-y-8 md:space-y-12">
                        <p className="text-2xl md:text-4xl font-bold leading-tight text-neutral-900 tracking-tight">At VOYAGE, we believe travel is not just about the destination, but the elevation of the soul. Since 2014, we&apos;ve redefined luxury through curation and connection.</p>
                        <p className="text-lg md:text-xl font-medium leading-relaxed text-neutral-600">We search for the hidden, the authentic, and the extraordinary. Each VOYAGE experience is hand-picked to ensure it meets our rigorous standards of design, service, and emotional impact.</p>
                    </div>
                </div>

                {/* Mission & Vision */}
                <section className="bg-white py-24 md:py-32 px-4 sm:px-6 lg:px-12">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                            <div className="group">
                                <div className="flex items-center gap-4 mb-6 md:mb-8">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-50 text-neutral-900">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">Our Vision</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 uppercase leading-tight">
                                    TO MAKE EVERY JOURNEY A MASTERPIECE OF HUMAN EXPERIENCE
                                </h3>
                                <p className="mt-6 md:mt-8 text-base md:text-lg font-medium leading-relaxed text-neutral-500">
                                    We envision a world where travel transcends logistics and becomes art. Where every hotel, every meal, every sunset is intentional — designed not just for comfort, but for transformation. VOYAGE exists to prove that the journey itself can be the destination.
                                </p>
                            </div>
                            <div className="group">
                                <div className="flex items-center gap-4 mb-6 md:mb-8">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-50 text-neutral-900">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">Our Mission</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 uppercase leading-tight">
                                    CONNECTING EXTRAORDINARY PEOPLE WITH EXTRAORDINARY PLACES
                                </h3>
                                <p className="mt-6 md:mt-8 text-base md:text-lg font-medium leading-relaxed text-neutral-500">
                                    We handpick destinations, forge relationships with the world&apos;s finest properties, and pair every traveler with a personal curator who understands their unique story. Our mission is to strip away the friction of travel and leave only wonder.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Full-width image band */}
                <ImageBand />

                <Philosophy />

                {/* Founder Story */}
                <section className="bg-white py-24 md:py-32 px-4 sm:px-6 lg:px-12">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                            <div className="aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-[32px] md:rounded-[48px] shadow-2xl">
                                <img
                                    src="https://i.pravatar.cc/800?u=founder-elara"
                                    alt="Elara Voss, Founder of VOYAGE"
                                    className="h-full w-full object-cover grayscale"
                                />
                            </div>
                            <div>
                                <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] text-neutral-400 uppercase">Founder&apos;s Letter</span>
                                <h2 className="mt-6 md:mt-8 text-3xl sm:text-5xl font-black tracking-tighter text-neutral-900 uppercase leading-tight">
                                    FROM A HOTEL LOBBY TO A GLOBAL MOVEMENT
                                </h2>
                                <div className="mt-8 md:mt-12 space-y-6">
                                    <p className="text-base md:text-lg font-medium leading-relaxed text-neutral-600">
                                        &ldquo;I spent 15 years behind the concierge desk of some of the world&apos;s finest hotels. Every day, I watched travelers arrive exhausted — not from the journey, but from the planning. They had the resources. They had the desire. But they lacked what I had: a network of people who could open the doors that guidebooks don&apos;t mention.&rdquo;
                                    </p>
                                    <p className="text-base md:text-lg font-medium leading-relaxed text-neutral-600">
                                        &ldquo;VOYAGE was born from a simple idea: What if every traveler could have a trusted insider? Someone who knows the chef at that unmarked restaurant in Rome, or the boatman who sails to the hidden beach in Thailand, or the temple keeper who opens the gates an hour early for a private meditation.&rdquo;
                                    </p>
                                    <p className="text-base md:text-lg font-medium leading-relaxed text-neutral-600">
                                        &ldquo;Today, VOYAGE is a community of 25,000 travelers and a team of curators who live and breathe extraordinary experiences. We don&apos;t sell trips. We craft chapters in the stories of people&apos;s lives.&rdquo;
                                    </p>
                                </div>
                                <div className="mt-10 md:mt-14 flex items-center gap-4">
                                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-neutral-100">
                                        <img
                                            src="https://i.pravatar.cc/160?u=founder-elara"
                                            alt="Elara Voss"
                                            className="h-full w-full object-cover grayscale"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm font-black text-neutral-900 uppercase tracking-wider">Elara Voss</p>
                                        <p className="mt-0.5 text-xs font-bold text-neutral-400 uppercase tracking-wider">Founder & Chief Curator</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Timeline />
                <TeamSection />
                <TravelStats />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
