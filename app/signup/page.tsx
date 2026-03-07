'use client';

import Link from 'next/link';

export default function SignupPage() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-neutral-200 overflow-hidden selection:bg-neutral-900 selection:text-white">
            <div className="flex w-full max-w-6xl h-[700px] overflow-hidden rounded-[48px] bg-white shadow-2xl transition-all hover:scale-[1.005]">

                {/* Visual Side */}
                <div className="relative hidden w-[45%] md:block">
                    <img
                        src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=1200"
                        alt="Join Voyage"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-10 left-10 right-10 text-white">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60 leading-none">Membership</span>
                        <h2 className="mt-2 text-3xl font-black leading-tight uppercase tracking-tighter">BEYOND <br />EVERY HORIZON.</h2>
                    </div>
                </div>

                {/* Form Side */}
                <div className="flex w-full flex-col justify-center p-10 md:w-[55%] lg:p-14">
                    <div className="mb-6">
                        <Link href="/" className="inline-flex items-center gap-3 active:scale-95 transition-transform">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-900 text-white shadow-xl">
                                <span className="text-xs font-bold">V</span>
                            </div>
                            <span className="text-lg font-black tracking-tighter text-neutral-900 uppercase leading-none">VOYAGE</span>
                        </Link>
                        <h1 className="mt-6 text-3xl font-black tracking-tighter text-neutral-900 uppercase leading-none">START YOUR VOYAGE</h1>
                        <p className="mt-2 text-sm font-medium text-neutral-500 uppercase tracking-widest leading-none">Join our exclusive travel membership.</p>
                    </div>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-1.5">
                            <label className="text-[9px] font-black uppercase tracking-widest text-neutral-400 ml-1">First Name</label>
                            <input
                                type="text"
                                placeholder="John"
                                className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-5 py-3.5 text-base font-bold text-neutral-900 outline-none transition-all focus:border-neutral-900 focus:bg-white"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[9px] font-black uppercase tracking-widest text-neutral-400 ml-1">Last Name</label>
                            <input
                                type="text"
                                placeholder="Doe"
                                className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-5 py-3.5 text-base font-bold text-neutral-900 outline-none transition-all focus:border-neutral-900 focus:bg-white"
                            />
                        </div>

                        <div className="space-y-1.5 md:col-span-2">
                            <label className="text-[9px] font-black uppercase tracking-widest text-neutral-400 ml-1">Email Address</label>
                            <input
                                type="email"
                                placeholder="name@example.com"
                                className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-5 py-3.5 text-base font-bold text-neutral-900 outline-none transition-all focus:border-neutral-900 focus:bg-white"
                            />
                        </div>

                        <div className="space-y-1.5 md:col-span-2">
                            <label className="text-[9px] font-black uppercase tracking-widest text-neutral-400 ml-1">Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-5 py-3.5 text-base font-bold text-neutral-900 outline-none transition-all focus:border-neutral-900 focus:bg-white"
                            />
                        </div>

                        <div className="flex items-center gap-3 py-1 px-1 md:col-span-2">
                            <input type="checkbox" id="terms" className="h-4 w-4 accent-neutral-900 rounded-md" />
                            <label htmlFor="terms" className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest transition-colors hover:text-neutral-900">
                                I ACCEPT THE TERMS AND PRIVACY POLICY
                            </label>
                        </div>

                        <div className="md:col-span-2 pt-2">
                            <button className="w-full cursor-pointer rounded-2xl bg-neutral-900 py-4.5 text-sm font-black uppercase tracking-[0.2em] text-white shadow-xl transition-all hover:bg-neutral-800 active:scale-[0.98]">
                                CREATE ACCOUNT
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 pt-6 border-t border-neutral-50">
                        <p className="text-sm font-medium text-neutral-500 uppercase tracking-widest text-center md:text-left">
                            ALREADY HAVE AN ACCOUNT?{' '}
                            <Link href="/login" className="font-black text-neutral-900 hover:underline underline-offset-4 ml-1">SIGN IN</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
