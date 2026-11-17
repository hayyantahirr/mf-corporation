"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeMotion({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !containerRef.current) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      const heroItems = gsap.utils.toArray("[data-hero-reveal]");
      if (heroItems.length > 0) {
        gsap.from(heroItems, {
          opacity: 0,
          y: 24,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          clearProps: "transform,opacity",
        });
      }

      const revealGroups = gsap.utils.toArray("[data-reveal-group]");
      revealGroups.forEach((group) => {
        const items = group.querySelectorAll("[data-reveal-item]");
        if (items.length === 0) return;

        gsap.from(items, {
          opacity: 0,
          y: 24,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: group,
            start: "top 85%",
            once: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
