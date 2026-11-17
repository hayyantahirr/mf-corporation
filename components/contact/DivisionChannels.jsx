import React from "react";

export default function DivisionChannels() {
  return (
    <section className="border-b border-[#E2E8F0] bg-[#F8F9FA] py-24 lg:py-32">
      <div
        data-reveal-group
        className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12"
      >
        <div data-reveal-item className="max-w-2xl">
          <p className="text-[12px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-[#ED3B09]">
            SUBSIDIARY INQUIRY DESKS
          </p>
          <h2 className="mt-4 font-heading text-[36px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0F172A] sm:text-[40px]">
            Route Your Query to the Right Division.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Card 1: Packaging Queries -> mfpackages.com/contact */}
          <article
            data-reveal-item
            className="flex flex-col justify-between border border-[#E2E8F0] bg-[#FFFFFF] p-10 transition-colors duration-250 hover:border-[#0F172A] lg:p-12"
          >
            <div>
              <p className="text-[12px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-[#ED3B09]">
                01 &bull; PACKAGING &amp; PRINTING QUERIES
              </p>

              <h3 className="mt-5 font-heading text-[24px] font-semibold leading-[1.3] tracking-[-0.015em] text-[#0F172A]">
                MF Packages Inquiry Desk
              </h3>

              <p className="mt-4 max-w-[65ch] text-base leading-[1.65] text-[#475569]">
                For custom-printed pouches, ready-made stock formats, MOQs, or
                compliance certificates, visit our dedicated MF Packages contact
                portal directly.
              </p>
            </div>

            <div className="mt-10 space-y-5 border-t border-[#E2E8F0] pt-6">
              <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
                <span className="text-[#475569]">Official Website:</span>
                <a
                  href="https://www.mfpackages.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#0F172A] underline decoration-[#E2E8F0] underline-offset-4 transition-colors duration-250 hover:text-[#ED3B09] hover:decoration-[#ED3B09]"
                >
                  mfpackages.com &#8599;
                </a>
              </div>

              <a
                href="https://www.mfpackages.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-none bg-[#ED3B09] px-7 py-4 text-sm font-semibold text-[#FFFFFF] transition-colors duration-250 hover:bg-[#C82E04] sm:w-auto"
              >
                Visit mfpackages.com/contact &#8599;
              </a>
            </div>
          </article>

          {/* Card 2: MF Express Queries -> WhatsApp 0332 2464729 & Email */}
          <article
            data-reveal-item
            className="flex flex-col justify-between border border-[#E2E8F0] bg-[#FFFFFF] p-10 transition-colors duration-250 hover:border-[#0F172A] lg:p-12"
          >
            <div>
              <p className="text-[12px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-[#ED3B09]">
                02 &bull; SHIPPING &amp; CONSOLIDATION QUERIES
              </p>

              <h3 className="mt-5 font-heading text-[24px] font-semibold leading-[1.3] tracking-[-0.015em] text-[#0F172A]">
                MF Express Inquiry Desk
              </h3>

              <p className="mt-4 max-w-[65ch] text-base leading-[1.65] text-[#475569]">
                For China warehouse addresses, parcel consolidation, customs
                clearance, or doorstep delivery rates, message us on WhatsApp at
                0332 2464729 or email our team.
              </p>
            </div>

            <div className="mt-10 space-y-5 border-t border-[#E2E8F0] pt-6">
              <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
                <span className="text-[#475569]">Official Website:</span>
                <a
                  href="https://mfexpress.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#0F172A] underline decoration-[#E2E8F0] underline-offset-4 transition-colors duration-250 hover:text-[#ED3B09] hover:decoration-[#ED3B09]"
                >
                  mfexpress.pk &#8599;
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/923322464729"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-none bg-[#ED3B09] px-7 py-4 text-sm font-semibold text-[#FFFFFF] transition-colors duration-250 hover:bg-[#C82E04]"
                >
                  WhatsApp: 0332 2464729 &#8599;
                </a>

                <a
                  href="mailto:info@mfpackages.com"
                  className="inline-flex items-center justify-center rounded-none border border-[#E2E8F0] bg-[#FFFFFF] px-6 py-4 text-sm font-semibold text-[#0F172A] transition-colors duration-250 hover:border-[#0F172A]"
                >
                  Email Desk
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
