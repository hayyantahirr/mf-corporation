import React from "react";

export default function LocationAndDirectory() {
  return (
    <section className="bg-[#FFFFFF] py-24 lg:py-32">
      <div
        data-reveal-group
        className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12"
      >
        <div data-reveal-item className="max-w-2xl">
          <p className="text-[12px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-[#ED3B09]">
            HEADQUARTERS &amp; LOCATION
          </p>
          <h2 className="mt-4 font-heading text-[36px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0F172A] sm:text-[40px]">
            Karachi Corporate Office &amp; Map.
          </h2>
        </div>

        {/* 3-Column Hairline Directory */}
        <div
          data-reveal-item
          className="mt-12 grid grid-cols-1 divide-y divide-[#E2E8F0] border border-[#E2E8F0] md:grid-cols-3 md:divide-x md:divide-y-0"
        >
          <div className="p-8 lg:p-10">
            <p className="font-mono text-sm font-bold tracking-wider text-[#ED3B09]">
              01
            </p>
            <h3 className="mt-4 font-heading text-[20px] font-semibold leading-[1.3] tracking-[-0.015em] text-[#0F172A]">
              Headquarters Address
            </h3>
            <p className="mt-3 max-w-[34ch] text-base leading-[1.65] text-[#475569]">
              Suite #9, Rafiq Mansion, Jethamal Road, Karachi, Pakistan
            </p>
          </div>

          <div className="p-8 lg:p-10">
            <p className="font-mono text-sm font-bold tracking-wider text-[#ED3B09]">
              02
            </p>
            <h3 className="mt-4 font-heading text-[20px] font-semibold leading-[1.3] tracking-[-0.015em] text-[#0F172A]">
              Phone &amp; WhatsApp
            </h3>
            <div className="mt-3 space-y-2 text-base leading-[1.65]">
              <p>
                <a
                  href="tel:+923322464729"
                  className="font-semibold text-[#0F172A] transition-colors duration-250 hover:text-[#ED3B09]"
                >
                  0332 2464729 (+92 332 2464729)
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/923322464729"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#ED3B09] underline decoration-[#E2E8F0] underline-offset-4 transition-colors duration-250 hover:text-[#C82E04]"
                >
                  Message on WhatsApp &#8599;
                </a>
              </p>
            </div>
          </div>

          <div className="p-8 lg:p-10">
            <p className="font-mono text-sm font-bold tracking-wider text-[#ED3B09]">
              03
            </p>
            <h3 className="mt-4 font-heading text-[20px] font-semibold leading-[1.3] tracking-[-0.015em] text-[#0F172A]">
              Emails &amp; Websites
            </h3>
            <div className="mt-3 space-y-2 text-base leading-[1.65]">
              <p>
                <a
                  href="mailto:info@mfpackages.com"
                  className="text-[#0F172A] transition-colors duration-250 hover:text-[#ED3B09]"
                >
                  info@mfpackages.com
                </a>
              </p>
              <p>
                <a
                  href="mailto:mfpackages0@gmail.com"
                  className="text-[#475569] transition-colors duration-250 hover:text-[#ED3B09]"
                >
                  mfpackages0@gmail.com
                </a>
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1 text-sm font-semibold">
                <a
                  href="https://www.mfpackages.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F172A] underline decoration-[#E2E8F0] underline-offset-4 hover:text-[#ED3B09]"
                >
                  mfpackages.com &#8599;
                </a>
                <span className="text-[#E2E8F0]" aria-hidden="true">
                  /
                </span>
                <a
                  href="https://mfexpress.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F172A] underline decoration-[#E2E8F0] underline-offset-4 hover:text-[#ED3B09]"
                >
                  mfexpress.pk &#8599;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Karachi Location Map */}
        <div
          data-reveal-item
          className="mt-12 border border-[#E2E8F0] bg-[#F8F9FA]"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E2E8F0] bg-[#FFFFFF] px-6 py-4">
            <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#ED3B09]">
              KARACHI HEADQUARTERS MAP
            </span>
            <span className="text-xs font-medium text-[#475569]">
              Suite #9, Rafiq Mansion, Jethamal Road, Karachi, Pakistan
            </span>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.190307190989!2d67.01349307482648!3d24.85734904538311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33dc112238b31%3A0xc8fad6791a9fde81!2sBrown%20Kraft%20paper%20Stand%20up%20Pouch%20for%20packaging%20of%20Spices%2C%20Salt%2C%20Dates%20and%20Dryfruits%20M.F%20Packages!5e0!3m2!1sen!2s!4v1775773073945!5m2!1sen!2s"
            title="MF Corporation Karachi Headquarters Location"
            className="h-[380px] w-full border-0 md:h-[460px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
