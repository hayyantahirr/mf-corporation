"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Overview", href: "/" },
  { label: "MF Express", href: "/express" },
  { label: "MF Packages", href: "/packages" },
  { label: "Leadership & Heritage", href: "/about" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-out ${
        scrolled ? "px-4 pt-3 sm:px-6" : "px-0 pt-0"
      }`}
    >
      <nav
        aria-label="Primary Navigation"
        className={`mx-auto flex items-center justify-between transition-all duration-300 ease-out ${
          scrolled
            ? "h-16 max-w-[920px] rounded-full border border-[#E2E8F0] bg-[#FFFFFF]/95 px-6 shadow-xs backdrop-blur-md sm:px-8"
            : "h-20 max-w-full border-b border-[#E2E8F0] bg-[#FFFFFF] px-6 sm:px-8 lg:px-12"
        }`}
      >
        <div className="mx-auto flex h-full w-full max-w-[1280px] items-center justify-between">
          {/* Left: Clean Typographic Lockup + 8px Red Square Mark */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center gap-3 focus:outline-none"
          >
            <span
              className="h-2 w-2 shrink-0 bg-[#ED3B09]"
              aria-hidden="true"
            />
            <span
              className={`font-heading font-bold tracking-[0.06em] text-[#0F172A] uppercase transition-all duration-300 ${
                scrolled ? "text-sm sm:text-base" : "text-base sm:text-lg"
              }`}
            >
              MF CORPORATION
            </span>
          </Link>

          {/* Right: Minimal Horizontal Links */}
          <div className="hidden md:flex md:h-full md:items-center md:gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative flex h-full items-center text-sm font-medium transition-colors duration-250 ${
                    active
                      ? "font-semibold text-[#0F172A]"
                      : "text-[#475569] hover:text-[#0F172A]"
                  }`}
                >
                  <span>{link.label}</span>
                  {active && (
                    <span
                      className={`absolute inset-x-0 h-[2px] bg-[#ED3B09] transition-all duration-300 ${
                        scrolled ? "bottom-2" : "bottom-0"
                      }`}
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className={`inline-flex items-center justify-center border border-[#E2E8F0] bg-[#FFFFFF] p-2 text-[#0F172A] transition-colors duration-250 hover:border-[#0F172A] md:hidden ${
              scrolled ? "rounded-full" : "rounded-none"
            }`}
            aria-expanded={mobileMenuOpen}
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            {mobileMenuOpen ? (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="square"
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
                strokeWidth="1.75"
                strokeLinecap="square"
                aria-hidden="true"
              >
                <line x1="4" x2="20" y1="7" y2="7" />
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="17" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`bg-[#FFFFFF] px-6 py-4 md:hidden ${
            scrolled
              ? "mx-auto mt-2 max-w-[920px] rounded-2xl border border-[#E2E8F0] shadow-xs"
              : "border-t border-[#E2E8F0]"
          }`}
        >
          <div className="flex flex-col divide-y divide-[#E2E8F0]">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-3.5 text-sm font-medium transition-colors duration-250 ${
                    active ? "font-semibold text-[#0F172A]" : "text-[#475569]"
                  }`}
                >
                  <span>{link.label}</span>
                  {active && (
                    <span
                      className="h-2 w-2 bg-[#ED3B09]"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
