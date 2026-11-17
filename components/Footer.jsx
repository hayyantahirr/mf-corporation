import React from "react";
import Link from "next/link";

const quickLinks = [
  { label: "Corporate Home", href: "/" },
  { label: "About MF Corporation", href: "/about" },
  { label: "MF Express Logistics", href: "/mf-express" },
  { label: "MF Packages & Printing", href: "/mf-packages" },
  { label: "Request a Quote", href: "/contact" },
];

const subsidiariesAndServices = [
  { label: "China-to-Pakistan Shipping", href: "/mf-express" },
  { label: "China Warehouse & Consolidation", href: "/mf-express#consolidation" },
  { label: "Custom Clearance & Freight", href: "/mf-express#services" },
  { label: "Flexible & Eco Packaging", href: "/mf-packages#formats" },
  { label: "HP Indigo & Offset Printing", href: "/mf-packages#technology" },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-300">
      <div className="h-1 w-full bg-gradient-to-r from-brand-red via-orange-500 to-slate-900" />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Column 1: Corporate Identity */}
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/15">
                <span className="text-base font-extrabold tracking-tight">
                  M<span className="text-brand-red">F</span>
                </span>
              </div>
              <div>
                <span className="block text-lg font-bold text-white">
                  MF Corporation
                </span>
                <span className="block text-xs font-medium text-slate-400">
                  Serving Global Trade Since 1998
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-slate-400">
              Established on 1st April 1998, MF Corporation is a prominent
              logistics, custom clearance, warehousing, and sustainable
              flexible packaging parent group operating across the USA, China,
              and Pakistan.
            </p>

            <div className="flex flex-wrap gap-2">
              <Link
                href="/mf-express"
                className="rounded-md border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white transition-colors hover:border-brand-red hover:bg-brand-red/15"
              >
                MF Express
              </Link>
              <Link
                href="/mf-packages"
                className="rounded-md border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white transition-colors hover:border-brand-red hover:bg-brand-red/15"
              >
                MF Packages LLC
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Corporate Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-brand-red" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.mfpackages.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-red transition-colors hover:text-orange-400"
                >
                  <span>www.mfpackages.com</span>
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" x2="21" y1="14" y2="3" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Divisions & Capabilities */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Divisions &amp; Solutions
            </h3>
            <ul className="mt-5 space-y-3">
              {subsidiariesAndServices.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-slate-600" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Headquarters &amp; Inquiries
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-red"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-slate-300">
                  Suit #9, Rafiq Mansion, Jethamal Road, Karachi, Pakistan
                </span>
              </li>

              <li className="flex items-center gap-3">
                <svg
                  className="h-4 w-4 shrink-0 text-brand-red"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a
                  href="tel:+923322464729"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  +92 332 2464729
                </a>
              </li>

              <li className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-red"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <div className="flex flex-col space-y-1">
                  <a
                    href="mailto:info@mfpackages.com"
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    info@mfpackages.com
                  </a>
                  <a
                    href="mailto:mfpackages0@gmail.com"
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    mfpackages0@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Leadership Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>
            &copy; 2026 MF Corporation. All rights reserved. Parent Group of MF
            Express &amp; MF Packages.
          </p>
          <p className="text-slate-400">
            Chairman: <span className="font-semibold text-white">Tahir Yaseen</span>{" "}
            &bull; Est. April 1, 1998
          </p>
        </div>
      </div>
    </footer>
  );
}
