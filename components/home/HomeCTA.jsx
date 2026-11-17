import React from "react";
import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-slate-900 to-brand-red/20 px-6 py-12 shadow-2xl sm:px-12 sm:py-16">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                Partner With MF Corporation
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Simplify Your China Shipping or Upgrade Your Brand Packaging
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Connect with our Karachi headquarters at Suit #9, Rafiq Mansion,
                Jethamal Road or reach out directly to our MF Express and MF
                Packages divisions.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-red px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-red/25 transition-colors hover:bg-brand-red-hover"
              >
                <span>Request a Quote</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <a
                href="https://www.mfpackages.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/15"
              >
                <span>Visit MF Packages Store</span>
                <span aria-hidden="true">&#8599;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
