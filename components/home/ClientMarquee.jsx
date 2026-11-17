"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const clients = [
  { name: "Ahmed Sweet", src: "/top_clients/ahmed_sweet.avif" },
  { name: "Anaj Pur", src: "/top_clients/anaj_pur.webp" },
  { name: "Aztec", src: "/top_clients/aztec.webp" },
  { name: "Bin Hahim", src: "/top_clients/bin_hahim.webp" },
  { name: "Bombay Dry Fruits", src: "/top_clients/bombay_dry_fruits.svg" },
  { name: "Chand Ispaghol", src: "/top_clients/chand_ispaghol.webp" },
  { name: "Coco9", src: "/top_clients/coco9.avif" },
  { name: "Crispiko", src: "/top_clients/crispiko.webp" },
  { name: "Crown Ispaghol", src: "/top_clients/crown_ispaghol.webp" },
  { name: "Darbare Sheeren", src: "/top_clients/darbaresheeren.webp" },
  { name: "Diamond Super Mart", src: "/top_clients/diamond_super_mart.webp" },
  { name: "Fresh Basket", src: "/top_clients/fresh_basket.avif" },
  { name: "Gold Dry Fruits", src: "/top_clients/gold_dry_fruits.webp" },
  { name: "Grao Coffee", src: "/top_clients/grao_coffee.avif" },
  { name: "Kababjees", src: "/top_clients/kababjees.webp" },
  { name: "Khan Dry Fruits", src: "/top_clients/khan_dry_fruits.webp" },
  { name: "Lals", src: "/top_clients/lals.webp" },
  { name: "Mahmood Sweets", src: "/top_clients/mahmood_sweets.webp" },
  { name: "Maqbool Ispaghol", src: "/top_clients/maqbool_ispaghol.webp" },
  { name: "Melbrew Coffee", src: "/top_clients/melbrew_coffee.webp" },
  { name: "Nawab Ganic", src: "/top_clients/nawab_ganic.webp" },
  { name: "Nomad Coffee", src: "/top_clients/nomad_coffee.webp" },
  { name: "Nutibles", src: "/top_clients/nutibles.webp" },
  { name: "Pie in the Sky", src: "/top_clients/pie_in_the_sky.webp" },
  { name: "Raaz Coffee", src: "/top_clients/raaz_coffee.svg" },
  { name: "Rehmat-e-Sheeren", src: "/top_clients/rehmat_e_sheeren.webp" },
  { name: "RM Salt", src: "/top_clients/rm_salt.webp" },
  { name: "Sheikh Abdul Wahid", src: "/top_clients/sheikh_abdul_wahid.webp" },
  { name: "Sunridge", src: "/top_clients/sunridge.webp" },
];

export default function ClientMarquee() {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !trackRef.current) {
      return undefined;
    }

    tweenRef.current = gsap.to(trackRef.current, {
      xPercent: -50,
      duration: 45,
      ease: "none",
      repeat: -1,
    });

    return () => {
      if (tweenRef.current) {
        tweenRef.current.kill();
      }
    };
  }, []);

  const handleMouseEnter = () => {
    tweenRef.current?.pause();
  };

  const handleMouseLeave = () => {
    tweenRef.current?.resume();
  };

  return (
    <div className="mt-20 border-t border-[#E2E8F0] pt-12">
      {/* Editorial Hairline Caption */}
      <div className="mx-auto flex max-w-[1280px] items-center gap-4 px-6 sm:px-8 lg:px-12">
        <div className="h-px flex-1 bg-[#E2E8F0]" aria-hidden="true" />
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.14em] text-[#475569]">
          Trusted by 50+ Leading Brands &amp; Enterprises
        </p>
        <div className="h-px flex-1 bg-[#E2E8F0]" aria-hidden="true" />
      </div>

      {/* Marquee Viewport */}
      <div
        className="relative mt-8 overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Crisp White Edge Fades */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#FFFFFF] to-transparent sm:w-28"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#FFFFFF] to-transparent sm:w-28"
          aria-hidden="true"
        />

        {/* Infinite Track (duplicated for seamless loop) */}
        <div
          ref={trackRef}
          className="flex w-max items-center will-change-transform"
        >
          {[0, 1].map((copyIndex) => (
            <div
              key={copyIndex}
              aria-hidden={copyIndex === 1}
              className="flex shrink-0 items-center gap-12 px-6 sm:gap-16 sm:px-8"
            >
              {clients.map((client) => (
                <div
                  key={`${copyIndex}-${client.name}`}
                  className="relative h-10 w-28 shrink-0 sm:h-12 sm:w-32"
                >
                  <Image
                    src={client.src}
                    alt={copyIndex === 0 ? `${client.name} logo` : ""}
                    fill
                    sizes="(max-width: 640px) 112px, 128px"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
