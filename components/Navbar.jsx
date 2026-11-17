"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "MF Express", href: "/mf-express" },
  { label: "MF Packages", href: "/mf-packages" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-100 bg-white/90 backdrop-blur-md">
      <nav
        aria-label="Main Navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Brand Identity */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus:outline-none"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
            <span className="text-sm font-black tracking-tight">MF</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight text-neutral-900 leading-none">
              MF Corporation
            </span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-red leading-none">
              Est. 1998
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex md:items-center md:gap-2">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  active
                    ? "bg-brand-red text-white shadow-sm"
                    : "text-neutral-700 hover:bg-brand-red/5 hover:text-brand-red"
                }`}
              >
                <span>{link.label}</span>
                {!active && (
                  <span className="absolute inset-x-4 bottom-1 h-0.5 scale-x-0 rounded-full bg-brand-red transition-transform duration-200 group-hover:scale-x-100" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white p-2.5 text-neutral-800 transition-colors hover:border-brand-red hover:text-brand-red md:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? (
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-neutral-100 bg-white px-4 pb-5 pt-3 shadow-lg md:hidden">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-brand-red text-white"
                      : "text-neutral-700 hover:bg-brand-red/5 hover:text-brand-red"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
