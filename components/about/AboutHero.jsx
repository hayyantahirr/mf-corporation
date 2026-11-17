import React from "react";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="bg-slate-950 py-16 text-white sm:py-22">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-brand-red">
            <span>Corporate Heritage &amp; Leadership</span>
          </div>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Over Two Decades of Trust, Resilience &amp; Innovation
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            Founded on 1st April 1998 under the leadership of Chairman{" "}
            <strong className="text-white">Tahir Yaseen</strong>, MF Corporation
            has grown from a trusted Pakistani logistics pioneer into an
            international parent company uniting{" "}
            <strong className="text-white">MF Express</strong> and{" "}
            <strong className="text-white">MF Packages</strong>.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/mf-express"
              className="rounded-xl bg-brand-red px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-red-hover"
            >
              MF Express Division
            </Link>
            <Link
              href="/mf-packages"
              className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/15"
            >
              MF Packages Division
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
