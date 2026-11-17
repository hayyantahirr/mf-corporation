import React from "react";

export default function AboutHeader() {
  return (
    <section className="border-b border-[#E2E8F0] bg-[#FFFFFF] py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <p
          data-hero-reveal
          className="text-[12px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-[#ED3B09]"
        >
          ESTABLISHED APRIL 1, 1998 &bull; KARACHI, PAKISTAN
        </p>

        <h1
          data-hero-reveal
          className="mt-6 max-w-[22ch] font-heading text-[42px] font-bold leading-[1.1] tracking-[-0.03em] text-[#0F172A] sm:text-[56px] lg:text-[64px]"
        >
          Leadership &amp; Corporate Heritage.
        </h1>

        <p
          data-hero-reveal
          className="mt-6 max-w-[65ch] text-lg leading-[1.65] text-[#475569]"
        >
          Founded in Karachi in 1998, MF Corporation has grown from a customs
          and freight pioneer into an international holding group uniting MF
          Express and MF Packages.
        </p>
      </div>
    </section>
  );
}
