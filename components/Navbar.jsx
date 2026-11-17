"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const companyLinks = [
  {
    label: "MF Express",
    description: "China-to-Pakistan Logistics & Warehousing",
    href: "/express",
  },
  {
    label: "MF Packages",
    description: "Custom Flexible Packaging & Printing",
    href: "/packages",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCompanyDropdownOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setCompanyDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isCompanyActive = isActive("/express") || isActive("/packages");

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
            onClick={() => {
              setMobileMenuOpen(false);
              setCompanyDropdownOpen(false);
            }}
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
            {/* Home */}
            <Link
              href="/"
              className={`relative flex h-full items-center text-sm font-medium transition-colors duration-250 ${
                isActive("/")
                  ? "font-semibold text-[#0F172A]"
                  : "text-[#475569] hover:text-[#0F172A]"
              }`}
            >
              <span>Home</span>
              {isActive("/") && (
                <span
                  className={`absolute inset-x-0 h-[2px] bg-[#ED3B09] transition-all duration-300 ${
                    scrolled ? "bottom-2" : "bottom-0"
                  }`}
                  aria-hidden="true"
                />
              )}
            </Link>

            {/* About Us */}
            <Link
              href="/about"
              className={`relative flex h-full items-center text-sm font-medium transition-colors duration-250 ${
                isActive("/about")
                  ? "font-semibold text-[#0F172A]"
                  : "text-[#475569] hover:text-[#0F172A]"
              }`}
            >
              <span>About Us</span>
              {isActive("/about") && (
                <span
                  className={`absolute inset-x-0 h-[2px] bg-[#ED3B09] transition-all duration-300 ${
                    scrolled ? "bottom-2" : "bottom-0"
                  }`}
                  aria-hidden="true"
                />
              )}
            </Link>

            {/* Our Company Dropdown */}
            <div
              ref={dropdownRef}
              className="relative flex h-full items-center"
              onMouseEnter={() => setCompanyDropdownOpen(true)}
              onMouseLeave={() => setCompanyDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setCompanyDropdownOpen((prev) => !prev)}
                aria-expanded={companyDropdownOpen}
                aria-haspopup="menu"
                className={`relative flex h-full cursor-pointer items-center gap-1.5 text-sm font-medium transition-colors duration-250 focus:outline-none ${
                  isCompanyActive || companyDropdownOpen
                    ? "font-semibold text-[#0F172A]"
                    : "text-[#475569] hover:text-[#0F172A]"
                }`}
              >
                <span>Our Company</span>
                <svg
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    companyDropdownOpen
                      ? "rotate-180 text-[#ED3B09]"
                      : "text-[#475569]"
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                {isCompanyActive && (
                  <span
                    className={`absolute inset-x-0 h-[2px] bg-[#ED3B09] transition-all duration-300 ${
                      scrolled ? "bottom-2" : "bottom-0"
                    }`}
                    aria-hidden="true"
                  />
                )}
              </button>

              {/* Editorial Hairline Dropdown Panel */}
              {companyDropdownOpen && (
                <div
                  role="menu"
                  className={`absolute right-0 top-full w-80 border border-[#E2E8F0] bg-[#FFFFFF] shadow-xs ${
                    scrolled ? "mt-2 rounded-2xl" : "mt-0 rounded-none"
                  } overflow-hidden`}
                >
                  <div className="divide-y divide-[#E2E8F0]">
                    {companyLinks.map((item) => {
                      const itemActive = isActive(item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          role="menuitem"
                          onClick={() => setCompanyDropdownOpen(false)}
                          className={`group flex items-center justify-between gap-4 px-5 py-4 transition-colors duration-200 hover:bg-[#F8F9FA] ${
                            itemActive ? "bg-[#F8F9FA]" : ""
                          }`}
                        >
                          <div>
                            <div className="flex items-center gap-2">
                             
                              
                              <span className="font-heading text-sm font-semibold text-[#0F172A] transition-colors duration-200 group-hover:text-[#ED3B09]">
                                {item.label}
                              </span>
                            </div>
                            <p className="mt-1 text-xs leading-relaxed text-[#475569]">
                              {item.description}
                            </p>
                          </div>
                          <span
                            aria-hidden="true"
                            className="text-sm text-[#475569] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#ED3B09]"
                          >
                            &rarr;
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Contact Us */}
            <Link
              href="/contact"
              className={`relative flex h-full items-center text-sm font-medium transition-colors duration-250 ${
                isActive("/contact")
                  ? "font-semibold text-[#0F172A]"
                  : "text-[#475569] hover:text-[#0F172A]"
              }`}
            >
              <span>Contact Us</span>
              {isActive("/contact") && (
                <span
                  className={`absolute inset-x-0 h-[2px] bg-[#ED3B09] transition-all duration-300 ${
                    scrolled ? "bottom-2" : "bottom-0"
                  }`}
                  aria-hidden="true"
                />
              )}
            </Link>
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
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between py-3.5 text-sm font-medium ${
                isActive("/")
                  ? "font-semibold text-[#0F172A]"
                  : "text-[#475569]"
              }`}
            >
              <span>Home</span>
              {isActive("/") && (
                <span className="h-2 w-2 bg-[#ED3B09]" aria-hidden="true" />
              )}
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between py-3.5 text-sm font-medium ${
                isActive("/about")
                  ? "font-semibold text-[#0F172A]"
                  : "text-[#475569]"
              }`}
            >
              <span>About Us</span>
              {isActive("/about") && (
                <span className="h-2 w-2 bg-[#ED3B09]" aria-hidden="true" />
              )}
            </Link>

            {/* Mobile Our Company Accordion */}
            <div className="py-1">
              <button
                type="button"
                onClick={() => setMobileCompanyOpen((prev) => !prev)}
                aria-expanded={mobileCompanyOpen}
                className={`flex w-full items-center justify-between py-2.5 text-sm font-medium ${
                  isCompanyActive
                    ? "font-semibold text-[#0F172A]"
                    : "text-[#475569]"
                }`}
              >
                <span>Our Company</span>
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    mobileCompanyOpen
                      ? "rotate-180 text-[#ED3B09]"
                      : "text-[#475569]"
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {mobileCompanyOpen && (
                <div className="mb-2 space-y-1 border-l-2 border-[#ED3B09] pl-4">
                  {companyLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileCompanyOpen(false);
                      }}
                      className="block py-2 text-sm text-[#475569] hover:text-[#0F172A]"
                    >
                      <span className="font-mono text-xs font-bold text-[#ED3B09]">
                        {item.index}
                      </span>{" "}
                      <span className="font-semibold text-[#0F172A]">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between py-3.5 text-sm font-medium ${
                isActive("/contact")
                  ? "font-semibold text-[#0F172A]"
                  : "text-[#475569]"
              }`}
            >
              <span>Contact Us</span>
              {isActive("/contact") && (
                <span className="h-2 w-2 bg-[#ED3B09]" aria-hidden="true" />
              )}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
