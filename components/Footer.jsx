import React from "react";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "MF Express", href: "/mf-express" },
  { label: "MF Packages", href: "/mf-packages" },
  { label: "Contact", href: "/contact" },
];

const subsidiaries = [
  {
    label: "MF Express — China to Pakistan Shipping",
    href: "/mf-express",
  },
  {
    label: "MF Packages — Flexible Packaging & Printing",
    href: "/mf-packages",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-600">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          {/* Column 1: Brand */}
          <div className="space-y-4 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red text-white">
                <span className="text-sm font-black tracking-tight">MF</span>
              </div>
              <div>
                <span className="block text-base font-extrabold text-neutral-900">
                  MF Corporation
                </span>
                <span className="block text-[11px] font-semibold uppercase tracking-widest text-brand-red">
                  Since 1st April 1998
                </span>
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-neutral-600">
              Parent company of MF Express and MF Packages, connecting global
              trade corridors and sustainable flexible packaging across the USA,
              China, and Pakistan.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-brand-red"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Subsidiaries */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900">
              Subsidiaries
            </h3>
            <ul className="mt-4 space-y-2.5">
              {subsidiaries.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-brand-red"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.mfpackages.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-red transition-colors hover:text-brand-red-hover"
                >
                  <span>www.mfpackages.com</span>
                  <span aria-hidden="true">&#8599;</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Headquarters */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900">
              Headquarters
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-neutral-600">
              <li>Suit #9, Rafiq Mansion, Jethamal Road, Karachi, Pakistan</li>
              <li>
                <a
                  href="tel:+923322464729"
                  className="font-semibold text-neutral-900 transition-colors hover:text-brand-red"
                >
                  +92 332 2464729
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@mfpackages.com"
                  className="transition-colors hover:text-brand-red"
                >
                  info@mfpackages.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:mfpackages0@gmail.com"
                  className="transition-colors hover:text-brand-red"
                >
                  mfpackages0@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-neutral-100 pt-6 text-xs text-neutral-500 sm:flex-row">
          <p>&copy; 2026 MF Corporation. All rights reserved.</p>
          <p>
            Parent Company of{" "}
            <span className="font-semibold text-neutral-900">MF Express</span>{" "}
            &amp;{" "}
            <span className="font-semibold text-neutral-900">MF Packages</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
