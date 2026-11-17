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
            <div className="mt-5 flex flex-wrap items-center gap-6 text-sm font-semibold">
              <a
                href="https://mfexpress.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F172A] underline decoration-[#E2E8F0] underline-offset-4 transition-colors duration-250 hover:text-[#ED3B09] hover:decoration-[#ED3B09]"
              >
                mfexpress.pk &#8599;
              </a>
              <a
                href="https://www.mfpackages.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#475569] underline decoration-[#E2E8F0] underline-offset-4 transition-colors duration-250 hover:text-[#ED3B09] hover:decoration-[#ED3B09]"
              >
                Sister Company: mfpackages.com &#8599;
              </a>
            </div>
          </div>

          <div className="flex shrink-0 flex-wrap gap-4">
            <a
              href="https://wa.me/923322464729"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-none bg-[#ED3B09] px-7 py-4 text-sm font-semibold text-[#FFFFFF] transition-colors duration-250 hover:bg-[#C82E04]"
            >
              WhatsApp: 0332 2464729
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-none border border-[#E2E8F0] bg-[#FFFFFF] px-7 py-4 text-sm font-semibold text-[#0F172A] transition-colors duration-250 hover:border-[#0F172A]"
            >
              Contact Directory
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
