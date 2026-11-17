import React from "react";
import Link from "next/link";

export default function ExpressCTA() {
  return (
    <section className="bg-slate-950 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-brand-red/20 p-8 sm:p-12 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to Consolidate Your China Orders?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-300">
              Get a tailored freight, China warehousing, and Pakistani customs
              clearance quote from the MF Express team today.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-brand-red px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-red-hover"
            >
              Request Shipping Quote
            </Link>
            <a
              href="tel:+923322464729"
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/15"
            >
              Call +92 332 2464729
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
