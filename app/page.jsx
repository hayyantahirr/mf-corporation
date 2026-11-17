import React from "react";
import Hero from "@/components/home/Hero";
import SubsidiariesShowcase from "@/components/home/SubsidiariesShowcase";
import CoreCapabilities from "@/components/home/CoreCapabilities";
import ChairmanMessage from "@/components/home/ChairmanMessage";
import GlobalFootprint from "@/components/home/GlobalFootprint";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HomeCTA from "@/components/home/HomeCTA";

export const metadata = {
  title:
    "MF Corporation | Parent Company of MF Express & MF Packages Since 1998",
  description:
    "MF Corporation is a Pakistani corporate group operating since 1st April 1998, parent company of MF Express (China-to-Pakistan shipping & customs clearance) and MF Packages (USA-registered flexible packaging & printing specialist).",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SubsidiariesShowcase />
      <CoreCapabilities />
      <ChairmanMessage />
      <GlobalFootprint />
      <WhyChooseUs />
      <HomeCTA />
    </>
  );
}
