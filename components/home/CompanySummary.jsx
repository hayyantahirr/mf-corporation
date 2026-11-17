import React from "react";
import Link from "next/link";

const subsidiaries = [
  {
    index: "01",
    name: "MF Express",
    tag: "International Shipping",
    summary:
      "A one-stop China-to-Pakistan shipping and warehouse consolidation gateway helping SMEs and shoppers import effortlessly from Chinese marketplaces and factories.",
    href: "/mf-express",
  },
  {
    index: "02",
    name: "MF Packages",
    tag: "Flexible Packaging",
    summary:
      "USA-registered packaging and printing specialist (MF-Packages LLC) manufacturing ready-made and custom pouches across China and Karachi, Pakistan.",
    href: "/mf-packages",
  },
];

export default function CompanySummary() {
  return (
    <section className="border-t border-neutral-100 bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left: Concise Parent Company Summary */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
              Who We Are
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
              Over Two Decades Connecting Trade &amp; Industry
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-600">
              Established on 1st April 1998, MF Corporation has grown into a
              recognized leader in Pakistani custom clearance, freight
              forwarding, project cargo handling, and warehousing.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              Guided by sustainability and entrepreneurship, the group operates
              across the USA, China, and Pakistan through two dedicated
              subsidiaries.
            </p>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-red transition-colors hover:text-brand-red-hover"
              >
                <span>Learn More About MF Corporation</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right: Two Clean Subsidiary Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {subsidiaries.map((sub) => (
              <article
                key={sub.name}
                className="group flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-red hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-brand-red">
                      {sub.index}
                    </span>
                    <span className="rounded-full bg-brand-red/8 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-red">
                      {sub.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-extrabold text-neutral-900">
                    {sub.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {sub.summary}
                  </p>
                </div>

                <div className="mt-8 border-t border-neutral-100 pt-5">
                  <Link
                    href={sub.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-neutral-900 transition-colors group-hover:text-brand-red"
                  >
                    <span>Visit {sub.name}</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
