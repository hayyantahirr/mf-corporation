import React from "react";
import Link from "next/link";
import ClientMarquee from "@/components/home/ClientMarquee";
import SubsidiaryHoverLink from "@/components/home/SubsidiaryHoverLink";

export default function Hero() {
  return (
    <section className="border-b border-[#E2E8F0] bg-[#FFFFFF] pt-24 pb-16 lg:pt-32 lg:pb-20">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p
            data-hero-reveal
            className="text-[12px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-[#ED3B09]"
          >
            ESTABLISHED 1998 &bull; KARACHI, PAKISTAN
          </p>

          <h1
            data-hero-reveal
            className="mx-auto mt-6 max-w-[20ch] font-heading text-[40px] font-bold leading-[1.1] tracking-[-0.03em] text-[#0F172A] sm:text-[56px] lg:text-[64px]"
          >
            Powering Global Trade and{" "}
            <span className="text-[#ED3B09]">Sustainable Packaging</span>
          </h1>

          <p
            data-hero-reveal
            className="mx-auto mt-6 max-w-[60ch] text-lg leading-[1.65] text-[#475569]"
          >
            For over two decades, MF Corporation has driven supply chain
            efficiency and innovative brand packaging through{" "}
            <SubsidiaryHoverLink
              label="MF Express"
              siteLabel="mfexpress.pk"
              href="https://mfexpress.pk"
            />{" "}
            and{" "}
            <SubsidiaryHoverLink
              label="MF Packages"
              siteLabel="mfpackages.com"
              href="https://www.mfpackages.com"
            />
            .
          </p>

          <div
            data-hero-reveal
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
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
      </div>

      {/* Bottom Client Brands Marquee */}
      <ClientMarquee />
    </section>
  );
}
