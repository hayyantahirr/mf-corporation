import React from "react";
import Link from "next/link";

export default function SubsidiariesShowcase() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-brand-red/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-brand-red">
            Our Operating Subsidiaries
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Two Specialized Divisions. One Unwavering Standard.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Backed by MF Corporation&apos;s two-decade market foundation, our
            subsidiaries empower Pakistani and international businesses with
            seamless cross-border trade and custom product packaging.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Card 1: MF Express */}
          <article className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-xs transition-all hover:border-brand-red/40 hover:shadow-lg sm:p-10">
            <div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red text-white shadow-sm">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M2 17h13l4-5V6H2z" />
                    <path d="M16 17h4l2-3v-3h-3" />
                    <circle cx="6.5" cy="17.5" r="2.5" />
                    <circle cx="16.5" cy="17.5" r="2.5" />
                  </svg>
                </div>
                <span className="rounded-full bg-brand-red/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-red">
                  China &rarr; Pakistan Logistics
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-extrabold text-slate-950">
                MF Express
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                A one-stop international shipping solution from China to
                Pakistan designed for shoppers and small-to-medium enterprises.
                Source freely from Alibaba, DHgate, Made in China, or direct
                Chinese factories while we handle warehousing, consolidation,
                custom clearances, and doorstep delivery.
              </p>

              <ul className="mt-6 space-y-3 border-t border-slate-200 pt-6 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                  <span>
                    Dedicated China warehouse storage saving expensive carrier
                    warehousing fees
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                  <span>
                    Multi-supplier shipment consolidation &amp; cost-reduced
                    international freight
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                  <span>
                    End-to-end Pakistani custom clearance &amp; nationwide
                    doorstep delivery
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 pt-4">
              <Link
                href="/mf-express"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-red"
              >
                <span>Explore MF Express</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-400"
              >
                Ship From China
              </Link>
            </div>
          </article>

          {/* Card 2: MF Packages */}
          <article className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-xs transition-all hover:border-emerald-600/40 hover:shadow-lg sm:p-10">
            <div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-700 text-white shadow-sm">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                    <path d="m3.3 7 8.7 5 8.7-5" />
                    <path d="M12 22V12" />
                  </svg>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Packaging &amp; Printing &bull; Est. 2018
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-extrabold text-slate-950">
                MF Packages (MF-Packages LLC)
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Registered in the USA with manufacturing in China and Karachi,
                Pakistan, MF Packages is a premier flexible packaging and
                printing specialist with 50+ skilled workers. We equip growing
                brands, food businesses, and distributors with protective,
                sustainable packaging formats.
              </p>

              <ul className="mt-6 space-y-3 border-t border-slate-200 pt-6 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                  <span>
                    10+ ready-made &amp; custom pouch formats: Kraft paper,
                    stand-up, flat-bottom, aluminium, retort, spout &amp; coffee
                    pouches
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                  <span>
                    HP Indigo digital presses (25K, 20000s, 6900s) &amp;
                    Heidelberg/Roland offset systems
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                  <span>
                    Local Karachi &amp; international fulfilment with organic,
                    eco-conscious options
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 pt-4">
              <Link
                href="/mf-packages"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-700"
              >
                <span>Explore MF Packages</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <a
                href="https://www.mfpackages.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-400"
              >
                <span>www.mfpackages.com</span>
                <span aria-hidden="true">&#8599;</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
