'use client';

import Link from 'next/link';

export default function LoginPage() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-neutral-200 p-4 md:p-8 selection:bg-neutral-900 selection:text-white">
            <div className="flex w-full max-w-6xl md:h-[700px] overflow-hidden rounded-[32px] md:rounded-[48px] bg-white shadow-2xl transition-all hover:scale-[1.005]">

                {/* Visual Side */}
                <div className="relative hidden w-1/2 md:block">
                    <img
                        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1200"
                        alt="Travel"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-12 left-12 right-12">
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-white/70">Luxury Escapes</span>
                        <h2 className="mt-4 text-4xl font-black text-white leading-tight">EXPLORE THE <br />WORLD&apos;S FINEST.</h2>
                    </div>
                </div>

                {/* Form Side */}
                <div className="flex w-full flex-col justify-center p-8 sm:p-12 md:w-1/2 lg:p-16">
                    <div className="mb-8">
                        <Link href="/" className="inline-flex items-center gap-3 active:scale-95 transition-transform">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-white shadow-xl">
                                <span className="text-sm font-bold">V</span>
                            </div>
                            <span className="text-xl font-black tracking-tighter text-neutral-900 uppercase">VOYAGE</span>
                        </Link>
                        <h1 className="mt-8 text-3xl md:text-4xl font-black tracking-tighter text-neutral-900 uppercase">WELCOME BACK</h1>
                        <p className="mt-2 text-base font-medium text-neutral-500">Sign in to resume your journey.</p>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-1">Email Address</label>
                            <input
                                type="email"
                                placeholder="name@example.com"
                                className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-6 py-4 text-base font-bold text-neutral-900 outline-none transition-all focus:border-neutral-900 focus:bg-white"
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between px-1">
                                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Password</label>
                                <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-neutral-500 hover:text-neutral-900">Forgot?</Link>
                            </div>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-6 py-4 text-base font-bold text-neutral-900 outline-none transition-all focus:border-neutral-900 focus:bg-white"
                            />
                        </div>

                        <button className="w-full cursor-pointer rounded-2xl bg-neutral-900 py-4 md:py-5 text-sm font-black uppercase tracking-[0.2em] text-white shadow-xl transition-all hover:bg-neutral-800 active:scale-[0.98]">
                            SIGN IN
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-neutral-50">
                        <p className="text-sm font-medium text-neutral-500 uppercase tracking-widest text-center md:text-left">
                            DON&apos;T HAVE AN ACCOUNT?{' '}
                            <Link href="/signup" className="font-black text-neutral-900 hover:underline underline-offset-4 ml-1">SIGN UP</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
