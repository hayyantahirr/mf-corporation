import React from "react";
import Link from "next/link";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "MF Express", href: "/express" },
  { label: "MF Packages", href: "/packages" },
  { label: "Contact Us", href: "/contact" },
];

const divisionLinks = [
  { label: "MF Express — China-to-Pakistan Logistics", href: "/express" },
  { label: "MF Packages — Custom Flexible Packaging", href: "/packages" },
  { label: "MF Packages Storefront", href: "https://www.mfpackages.com", external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-[#0F172A] text-[#FFFFFF]">
      <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 lg:gap-8">
          {/* Brand Summary */}
          <div className="md:col-span-12 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span
                className="h-2 w-2 shrink-0 bg-[#ED3B09]"
                aria-hidden="true"
              />
              <span className="font-heading text-base font-bold tracking-[0.06em] text-[#FFFFFF] uppercase">
                MF CORPORATION
              </span>
            </Link>
            <p className="mt-5 max-w-[38ch] text-sm leading-[1.65] text-slate-300">
              Established April 1, 1998 in Karachi, Pakistan. Parent holding
              group of MF Express and MF Packages.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4 lg:col-span-2">
            <h3 className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#ED3B09]">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {navigationLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-300 transition-colors duration-250 hover:text-[#FFFFFF]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Operating Companies */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#ED3B09]">
              Operating Companies
            </h3>
            <ul className="mt-5 space-y-3">
              {divisionLinks.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-slate-300 transition-colors duration-250 hover:text-[#FFFFFF]"
                    >
                      <span>{item.label}</span>
                      <span aria-hidden="true">&#8599;</span>
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm text-slate-300 transition-colors duration-250 hover:text-[#FFFFFF]"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Headquarters */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#ED3B09]">
              Headquarters
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-[1.65] text-slate-300">
              <li>Suite #9, Rafiq Mansion, Jethamal Road, Karachi, Pakistan</li>
              <li>
                <a
                  href="tel:+923322464729"
                  className="font-medium text-[#FFFFFF] transition-colors duration-250 hover:text-[#ED3B09]"
                >
                  +92 332 2464729
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@mfpackages.com"
                  className="transition-colors duration-250 hover:text-[#FFFFFF]"
                >
                  info@mfpackages.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:mfpackages0@gmail.com"
                  className="transition-colors duration-250 hover:text-[#FFFFFF]"
                >
                  mfpackages0@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-slate-800 pt-8 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>&copy; 2026 MF Corporation. All rights reserved.</p>
          <p>Chairman: Tahir Yaseen &bull; Est. April 1, 1998</p>
        </div>
      </div>
    </footer>
  );
}
