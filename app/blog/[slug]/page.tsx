import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col bg-neutral-200">
            <Header />
            <main className="flex-grow pt-32 md:pt-48">
                <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-12 pb-32">
                    {/* Header Info */}
                    <div className="flex flex-col items-start gap-6 md:gap-8">
                        <div className="flex items-center gap-4">
                            <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] text-neutral-400 uppercase">{post.category}</span>
                            <span className="h-1 w-1 rounded-full bg-neutral-300"></span>
                            <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] text-neutral-400 uppercase">{post.date}</span>
                        </div>
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-neutral-900 uppercase leading-[1.1]">
                            {post.title}
                        </h1>

                        {/* Author Info */}
                        <div className="mt-4 flex items-center gap-4">
                            <img src={post.author.avatar} alt={post.author.name} className="h-12 w-12 rounded-full border-2 border-white shadow-md grayscale hover:grayscale-0 transition-all" />
                            <div>
                                <p className="text-sm font-black text-neutral-900 uppercase tracking-tight">{post.author.name}</p>
                                <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">{post.author.role}</p>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="mt-16 md:mt-24 aspect-[21/9] overflow-hidden rounded-[32px] md:rounded-[48px] shadow-2xl border border-black/5">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="h-full w-full object-cover grayscale transition-all duration-1000 animate-in fade-in zoom-in-95"
                        />
                    </div>

                    {/* Content */}
                    <div className="mt-16 md:mt-24 space-y-12">
                        {post.content.map((p, i) => (
                            <p key={i} className="text-xl md:text-2xl font-medium leading-relaxed text-neutral-600 first-letter:text-6xl md:first-letter:text-8xl first-letter:font-black first-letter:text-neutral-900 first-letter:float-left first-letter:mr-4 first-letter:mt-2 first-letter:leading-none">
                                {p}
                            </p>
                        ))}
                    </div>

                    {/* Footer / Back Link */}
                    <div className="mt-24 pt-12 border-t border-black/5 flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <Link href="/blog" className="group inline-flex items-center gap-4 text-sm font-black uppercase tracking-widest text-neutral-900">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-black/5 shadow-md transition-all group-hover:-translate-x-2">
                                <svg className="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                            Back to Journal
                        </Link>

                        <div className="flex items-center gap-6">
                            <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Share this STORY:</span>
                            <div className="flex gap-4">
                                {['Twitter', 'Instagram', 'LinkedIn'].map((platform) => (
                                    <button key={platform} className="text-xs font-black uppercase tracking-widest text-neutral-900 hover:text-neutral-500 transition-colors">
                                        {platform}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </article>

                {/* Related Posts Section (Placeholder Logic) */}
                <section className="bg-white py-32">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
                        <h2 className="text-3xl font-black tracking-tighter text-neutral-900 uppercase">Further Reading</h2>
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                            {blogPosts.filter(p => p.slug !== slug).slice(0, 2).map((related) => (
                                <Link key={related.id} href={`/blog/${related.slug}`} className="group flex flex-col md:flex-row gap-8 items-center">
                                    <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden rounded-[32px] shadow-lg">
                                        <img src={related.image} alt={related.title} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <span className="text-[10px] font-black tracking-widest text-neutral-400 uppercase">{related.date}</span>
                                        <h3 className="mt-4 text-2xl font-black text-neutral-900 uppercase tracking-tighter group-hover:underline underline-offset-4">{related.title}</h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <CTA />
            </main>
            <Footer />
        </div>
    );
}
