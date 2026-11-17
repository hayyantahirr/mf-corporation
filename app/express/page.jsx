import React from "react";
import HomeMotion from "@/components/home/HomeMotion";
import ExpressHeader from "@/components/express/ExpressHeader";
import VisionMissionSplit from "@/components/express/VisionMissionSplit";
import HowItWorksGrid from "@/components/express/HowItWorksGrid";
import ExpressCTABanner from "@/components/express/ExpressCTABanner";

export const metadata = {
  title: "MF Express | China to Pakistan Shipping & Warehousing",
  description:
    "One-stop China-to-Pakistan shipping, China warehousing, shipment consolidation, customs clearance, and doorstep delivery by MF Corporation.",
  alternates: {
    canonical: "/express",
  },
};

export default function MFExpressPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "MF Express China-to-Pakistan Shipping & Warehousing",
    provider: {
      "@type": "Organization",
      name: "MF Express",
      parentOrganization: {
        "@type": "Corporation",
        name: "MF Corporation",
      },
    },
    areaServed: ["CN", "PK"],
    serviceType: [
      "China to Pakistan International Shipping",
      "China Warehouse Storage & Consolidation",
      "Pakistan Customs Clearance",
      "Freight Forwarding",
      "Project Cargo Handling",
      "Doorstep Delivery",
    ],
    description:
      "One-stop international shipping from China to Pakistan enabling businesses and shoppers to store goods at our China warehouse, consolidate orders, clear customs, and receive doorstep delivery.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HomeMotion>
        <ExpressHeader />
        <VisionMissionSplit />
        <HowItWorksGrid />
        <ExpressCTABanner />
      </HomeMotion>
    </>
  );
}
