import React from "react";
import Link from "next/link";

const metrics = [
  { value: "1998", label: "Founded" },
  { value: "22+", label: "Years Legacy" },
  { value: "2", label: "Subsidiaries" },
  { value: "3", label: "Global Hubs" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-32">
      {/* Subtle Red Ambient Accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/3 translate-x-1/4 rounded-full bg-brand-red/6 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 translate-y-1/3 -translate-x-1/4 rounded-full bg-brand-red/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-red">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            <span>MF Corporation &bull; Est. 1st April 1998</span>
          </div>

          <h1 className="mt-7 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl lg:leading-[1.08]">
            Global Logistics &amp; Packaging{" "}
            <span className="text-brand-red">Built on Trust</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            MF Corporation is the parent organization behind{" "}
            <strong className="font-semibold text-neutral-900">MF Express</strong>{" "}
            and{" "}
            <strong className="font-semibold text-neutral-900">MF Packages</strong>
            —simplifying China-to-Pakistan trade and delivering custom
            flexible packaging solutions worldwide.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/mf-express"
              className="inline-flex items-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-red-hover"
            >
              <span>Explore MF Express</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              href="/mf-packages"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-7 py-3.5 text-sm font-bold text-neutral-900 transition-all hover:border-brand-red hover:text-brand-red"
            >
              <span>Explore MF Packages</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Minimal 4-Stat Bar */}
        <div className="mx-auto mt-16 max-w-4xl rounded-2xl border border-neutral-200 bg-white/80 p-6 shadow-xs backdrop-blur-xs sm:mt-20 sm:p-8">
          <div className="grid grid-cols-2 gap-8 divide-neutral-100 sm:grid-cols-4 sm:divide-x">
            {metrics.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-3xl font-extrabold tracking-tight text-brand-red sm:text-4xl">
                  {item.value}
                </p>
                <p className="mt-1.5 text-xs font-bold uppercase tracking-widest text-neutral-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
