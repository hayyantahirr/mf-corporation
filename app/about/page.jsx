import React from "react";
import HomeMotion from "@/components/home/HomeMotion";
import AboutHeader from "@/components/about/AboutHeader";
import ChairmansMessage from "@/components/about/ChairmansMessage";
import CorePillars from "@/components/about/CorePillars";

export const metadata = {
  title: "About Us | Leadership & Heritage",
  description:
    "Discover MF Corporation's heritage since April 1, 1998, Chairman Tahir Yaseen's leadership message, and our commitment to logistics excellence and sustainable packaging.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <HomeMotion>
      <AboutHeader />
      <ChairmansMessage />
      <CorePillars />
    </HomeMotion>
  );
}
