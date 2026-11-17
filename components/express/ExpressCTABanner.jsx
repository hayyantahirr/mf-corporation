import React from "react";
import Link from "next/link";

export default function ExpressCTABanner() {
  return (
    <section className="bg-[#FFFFFF] py-24">
      <div
        data-reveal-group
        className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12"
      >
        <div
          data-reveal-item
          className="flex flex-col gap-8 border border-[#E2E8F0] bg-[#F8F9FA] p-10 lg:flex-row lg:items-center lg:justify-between lg:p-14"
        >
          <div className="max-w-[65ch]">
            <p className="text-[12px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-[#ED3B09]">
              PARENT GROUP HERITAGE
            </p>
            <h2 className="mt-4 font-heading text-[36px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0F172A] sm:text-[40px]">
              Start Shipping from China with MF Express.
            </h2>
            <p className="mt-4 max-w-[65ch] text-base leading-[1.65] text-[#475569]">
              Backed by MF Corporation&apos;s 25+ years of customs clearance,
              freight forwarding, and project cargo experience across Pakistan.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-none bg-[#ED3B09] px-7 py-4 text-sm font-semibold text-[#FFFFFF] transition-colors duration-250 hover:bg-[#C82E04]"
            >
              Start Shipping Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
