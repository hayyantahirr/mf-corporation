import React from "react";

export default function PrintingCompliance() {
  return (
    <section className="border-b border-[#E2E8F0] bg-[#FFFFFF] py-24 lg:py-32">
      <div
        data-reveal-group
        className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12"
      >
        <div data-reveal-item className="max-w-2xl">
          <p className="text-[12px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-[#ED3B09]">
            PRINTING &amp; COMPLIANCE
          </p>
          <h2 className="mt-4 max-w-[28ch] font-heading text-[36px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0F172A] sm:text-[40px]">
            Industrial Press Capabilities &amp; Material Verification.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <article
            data-reveal-item
            className="border border-[#E2E8F0] bg-[#F8F9FA] p-10 lg:p-12"
          >
            <p className="text-[12px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-[#ED3B09]">
              01 &bull; DIGITAL &amp; OFFSET CAPABILITIES
            </p>
            <h3 className="mt-5 font-heading text-[24px] font-semibold leading-[1.3] tracking-[-0.015em] text-[#0F172A]">
              HP Indigo &amp; Heidelberg Press Fleet
            </h3>
            <p className="mt-4 max-w-[65ch] text-base leading-[1.65] text-[#475569]">
              Our HP Indigo 25K, 20000s, and 6900s digital presses support
              agile short-runs, rapid turnarounds, and variable-design SKUs
              without cylinder tooling fees.
            </p>
            <p className="mt-4 max-w-[65ch] text-base leading-[1.65] text-[#475569]">
              High-volume orders run on Heidelberg and Roland offset systems
              backed by CTP pre-press, lamination, UV coating, gluing, and
              binding lines.
            </p>
          </article>

          <article
            data-reveal-item
            className="border border-[#E2E8F0] bg-[#F8F9FA] p-10 lg:p-12"
          >
            <p className="text-[12px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-[#ED3B09]">
              02 &bull; TECHNICAL COMPLIANCE
            </p>
            <h3 className="mt-5 font-heading text-[24px] font-semibold leading-[1.3] tracking-[-0.015em] text-[#0F172A]">
              Material Structure &amp; Safety Verification
            </h3>
            <p className="mt-4 max-w-[65ch] text-base leading-[1.65] text-[#475569]">
              Each pouch specification tailors barrier performance, film
              layers, and functional closures to your storage conditions and
              target shelf life.
            </p>
            <p className="mt-4 max-w-[65ch] text-base leading-[1.65] text-[#475569]">
              We advise clients to verify food-contact compliance, material
              structures, and environmental claims against full technical data
              sheets and current certificates.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
