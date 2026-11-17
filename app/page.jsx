import React from "react";
import Hero from "@/components/home/Hero";
import CompanySummary from "@/components/home/CompanySummary";
import VisionSection from "@/components/home/VisionSection";
import Testimonials from "@/components/home/Testimonials";

export const metadata = {
  title:
    "MF Corporation | Parent Company of MF Express & MF Packages Since 1998",
  description:
    "MF Corporation is the parent organization of MF Express (China-to-Pakistan shipping & consolidation) and MF Packages (custom flexible packaging & printing).",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanySummary />
      <VisionSection />
      <Testimonials />
    </>
  );
}
