"use client";

import React, { useRef, useState } from "react";

export default function SubsidiaryHoverLink({ label, siteLabel, href }) {
  const linkRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const updatePosition = (clientX, clientY) => {
    if (!linkRef.current) return;
    const rect = linkRef.current.getBoundingClientRect();
    setCoords({
      x: clientX - rect.left,
      y: clientY - rect.top,
    });
  };

  const handleMouseEnter = (e) => {
    updatePosition(e.clientX, e.clientY);
    setVisible(true);
  };

  const handleMouseMove = (e) => {
    updatePosition(e.clientX, e.clientY);
  };

  const handleFocus = () => {
    if (linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      setCoords({ x: rect.width / 2, y: 0 });
    }
    setVisible(true);
  };

  return (
    <a
      ref={linkRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setVisible(false)}
      onFocus={handleFocus}
      onBlur={() => setVisible(false)}
      className="relative inline-block font-semibold text-[#0F172A] underline decoration-[#ED3B09]/40 underline-offset-4 transition-colors duration-200 hover:text-[#ED3B09] hover:decoration-[#ED3B09] focus:outline-none"
    >
      <span>{label}</span>

      <span
        role="tooltip"
        aria-hidden={!visible}
        style={{
          left: `${coords.x}px`,
          top: `${Math.max(coords.y - 42, -44)}px`,
        }}
        className={`pointer-events-none absolute z-30 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap border border-[#E2E8F0] bg-[#0F172A] px-3 py-1.5 text-xs font-medium text-[#FFFFFF] transition-opacity duration-150 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="h-1.5 w-1.5 shrink-0 bg-[#ED3B09]" aria-hidden="true" />
        <span>
          Visit the site <strong className="font-semibold">{siteLabel}</strong>{" "}
          &rarr;
        </span>
      </span>
    </a>
  );
}
