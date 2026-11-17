import React from "react";

export default function PackagesHeader() {
  return (
    <section className="border-b border-[#E2E8F0] bg-[#FFFFFF] py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <p
          data-hero-reveal
          className="text-[12px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-[#ED3B09]"
        >
          AN MF CORPORATION COMPANY &bull; EST. 2018
        </p>

        <h1
          data-hero-reveal
          className="mt-6 max-w-[20ch] font-heading text-[42px] font-bold leading-[1.1] tracking-[-0.03em] text-[#0F172A] sm:text-[56px] lg:text-[64px]"
        >
          Custom Flexible Packaging &amp; Global Fulfilment.
        </h1>

        <p
          data-hero-reveal
          className="mt-6 max-w-[65ch] text-lg leading-[1.65] text-[#475569]"
        >
          Operating from Karachi with 50+ skilled specialists, we combine
          product protection, shelf-ready visual identity, and scalable order
          quantities for local and international markets.
        </p>

        <div data-hero-reveal className="mt-10 flex flex-wrap gap-4">
          <a
            href="#packages-contact"
            className="inline-flex items-center justify-center rounded-none bg-[#ED3B09] px-7 py-4 text-sm font-semibold text-[#FFFFFF] transition-colors duration-250 hover:bg-[#C82E04]"
          >
            Request a Packaging Quote
          </a>

          <a
            href="#formats"
            className="inline-flex items-center justify-center rounded-none border border-[#E2E8F0] bg-[#FFFFFF] px-7 py-4 text-sm font-semibold text-[#0F172A] transition-colors duration-250 hover:border-[#0F172A]"
          >
            View Product Formats
          </a>
        </div>
      </div>
    </section>
  );
}
