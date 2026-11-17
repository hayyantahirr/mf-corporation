import React from "react";
import HomeMotion from "@/components/home/HomeMotion";
import Hero from "@/components/home/Hero";
import MetricsStrip from "@/components/home/MetricsStrip";
import CompaniesShowcase from "@/components/home/CompaniesShowcase";

export const metadata = {
  title:
    "MF Corporation | Powering Global Trade & Sustainable Packaging Since 1998",
  description:
    "Established April 1, 1998 in Karachi, Pakistan, MF Corporation is the parent company of MF Express (China-to-Pakistan logistics) and MF Packages (custom flexible packaging & printing).",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <HomeMotion>
      <Hero />
      <MetricsStrip />
      <CompaniesShowcase />
    </HomeMotion>
  );
}
