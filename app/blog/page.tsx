import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogExplorer from "@/components/BlogExplorer";
import CTA from "@/components/CTA";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPage() {
    return (
        <div className="flex min-h-screen flex-col bg-neutral-200">
            <Header />
            <main className="flex-grow pt-32 md:pt-40">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 pb-24 md:pb-32">
                    <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] text-neutral-400 uppercase">Voyage Journal</span>
                    <h1 className="mt-6 md:mt-8 text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-neutral-900 uppercase leading-[1.1]">THE INSIDER <br /> TRAVEL STORIES</h1>

                    <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
                        {blogPosts.map((post) => (
                            <Link key={post.id} href={`/blog/${post.slug}`} className="group cursor-pointer">
                                <div className="aspect-[16/10] overflow-hidden rounded-[24px] md:rounded-[32px] border border-black/5 bg-white shadow-lg transition-all hover:shadow-2xl">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                    />
                                </div>
                                <div className="mt-6 md:mt-8 px-2">
                                    <span className="text-[10px] font-black tracking-[0.3em] text-neutral-400 uppercase">{post.date}</span>
                                    <h2 className="mt-3 md:mt-4 text-2xl md:text-3xl font-black text-neutral-900 group-hover:underline underline-offset-8 transition-all uppercase tracking-tighter leading-tight">{post.title}</h2>
                                    <p className="mt-4 md:mt-6 text-base md:text-lg font-medium text-neutral-600 leading-relaxed line-clamp-2">{post.excerpt}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <BlogExplorer />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
