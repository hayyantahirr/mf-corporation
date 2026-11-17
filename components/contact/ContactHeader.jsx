import React from "react";

export default function ContactHeader() {
  return (
    <section className="border-b border-[#E2E8F0] bg-[#FFFFFF] py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <p
          data-hero-reveal
          className="text-[12px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-[#ED3B09]"
        >
          CORPORATE &amp; SUBSIDIARY CONTACT
        </p>

        <h1
          data-hero-reveal
          className="mt-6 max-w-[22ch] font-heading text-[42px] font-bold leading-[1.1] tracking-[-0.03em] text-[#0F172A] sm:text-[56px] lg:text-[64px]"
        >
          Direct Channels Across Our Operating Companies.
        </h1>

        <p
          data-hero-reveal
          className="mt-6 max-w-[65ch] text-lg leading-[1.65] text-[#475569]"
        >
          Reach our Karachi headquarters or connect directly with the dedicated
          inquiry desks for{" "}
          <a
            href="https://www.mfpackages.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#0F172A] underline decoration-[#E2E8F0] underline-offset-4 transition-colors duration-250 hover:text-[#ED3B09] hover:decoration-[#ED3B09]"
          >
            mfpackages.com
          </a>{" "}
          and{" "}
          <a
            href="https://mfexpress.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#0F172A] underline decoration-[#E2E8F0] underline-offset-4 transition-colors duration-250 hover:text-[#ED3B09] hover:decoration-[#ED3B09]"
          >
            mfexpress.pk
          </a>
          .
        </p>
      </div>
    </section>
  );
}
