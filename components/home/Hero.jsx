import React from "react";
import Link from "next/link";

const divisions = [
  {
    index: "01",
    name: "MF Express",
    subtitle: "China-to-Pakistan Logistics & Warehousing",
    href: "/express",
  },
  {
    index: "02",
    name: "MF Packages",
    subtitle: "Custom Flexible Packaging & Printing",
    href: "/packages",
  },
];

export default function Hero() {
  return (
    <section className="border-b border-[#E2E8F0] bg-[#FFFFFF] py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left: 7-Column Editorial Copy */}
          <div className="lg:col-span-7">
            <p
              data-hero-reveal
              className="text-[12px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-[#ED3B09]"
            >
              ESTABLISHED 1998 &bull; KARACHI, PAKISTAN
            </p>

            <h1
              data-hero-reveal
              className="mt-6 max-w-[20ch] font-heading text-[42px] font-bold leading-[1.1] tracking-[-0.03em] text-[#0F172A] sm:text-[56px] lg:text-[64px]"
            >
              Powering Global Trade and Sustainable Packaging Solutions.
            </h1>

            <p
              data-hero-reveal
              className="mt-6 max-w-[65ch] text-lg leading-[1.65] text-[#475569]"
            >
              For over two decades, MF Corporation has driven supply chain
              efficiency and innovative brand packaging across Pakistan and
              international markets.
            </p>

            <div
              data-hero-reveal
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#companies"
                className="inline-flex items-center justify-center rounded-none bg-[#ED3B09] px-7 py-4 text-sm font-semibold text-[#FFFFFF] transition-colors duration-250 hover:bg-[#C82E04]"
              >
                Explore Our Companies
              </a>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-none border border-[#E2E8F0] bg-[#FFFFFF] px-7 py-4 text-sm font-semibold text-[#0F172A] transition-colors duration-250 hover:border-[#0F172A]"
              >
                Chairman&apos;s Message
              </Link>
            </div>
          </div>

          {/* Right: 5-Column Operating Division Index Card */}
          <div data-hero-reveal className="lg:col-span-5">
            <div className="border border-[#E2E8F0] bg-[#F8F9FA]">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] px-8 py-5">
                <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#475569]">
                  Operating Division Index
                </span>
                <span className="font-mono text-xs font-semibold text-[#ED3B09]">
                  02
                </span>
              </div>

              <div className="divide-y divide-[#E2E8F0]">
                {divisions.map((division) => (
                  <Link
                    key={division.index}
                    href={division.href}
                    className="group flex items-center justify-between gap-6 px-8 py-7 transition-colors duration-250 hover:bg-[#FFFFFF]"
                  >
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs font-bold tracking-wider text-[#ED3B09]">
                          {division.index}
                        </span>
                        <span className="text-xs text-[#E2E8F0]">/</span>
                        <span className="font-heading text-lg font-semibold tracking-[-0.015em] text-[#0F172A] transition-colors duration-250 group-hover:text-[#ED3B09]">
                          {division.name}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm leading-[1.65] text-[#475569]">
                        {division.subtitle}
                      </p>
                    </div>

                    <svg
                      className="h-5 w-5 shrink-0 text-[#475569] transition-all duration-250 group-hover:translate-x-1 group-hover:text-[#ED3B09]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="square"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </Link>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-[#E2E8F0] px-8 py-4 text-xs font-medium text-[#475569]">
                <span>Parent Holding Group</span>
                <span>USA &bull; China &bull; Pakistan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
