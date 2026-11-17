import React from "react";
import AboutHero from "@/components/about/AboutHero";
import OurHistory from "@/components/about/OurHistory";
import VisionMission from "@/components/about/VisionMission";
import LeadershipMessage from "@/components/about/LeadershipMessage";
import CorporateStructure from "@/components/about/CorporateStructure";

export const metadata = {
  title: "About Us | Heritage, Vision & Leadership",
  description:
    "Learn about MF Corporation's 22+ year journey since 1st April 1998 under Chairman Tahir Yaseen, our vision, mission, sustainability commitment, and our subsidiaries MF Express and MF Packages.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurHistory />
      <VisionMission />
      <LeadershipMessage />
      <CorporateStructure />
    </>
  );
}
