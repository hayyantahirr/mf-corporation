import React from "react";
import ExpressHero from "@/components/mf-express/ExpressHero";
import WhatWeDo from "@/components/mf-express/WhatWeDo";
import ShippingProcess from "@/components/mf-express/ShippingProcess";
import LogisticsServices from "@/components/mf-express/LogisticsServices";
import ExpressVisionMission from "@/components/mf-express/ExpressVisionMission";
import ExpressCTA from "@/components/mf-express/ExpressCTA";

export const metadata = {
  title: "MF Express | China to Pakistan Shipping, Warehousing & Customs",
  description:
    "MF Express, a subsidiary of MF Corporation, offers a one-stop international shipping solution from China to Pakistan—China warehouse storage, consolidation for Alibaba, DHgate & Made in China orders, custom clearance, and doorstep delivery.",
  alternates: {
    canonical: "/mf-express",
  },
};

export default function MFExpressPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "MF Express China-to-Pakistan Shipping & Consolidation",
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
      "China Warehouse Consolidation",
      "Custom Clearance",
      "Freight Forwarding",
      "Project Cargo Handling",
      "Doorstep Parcel Delivery",
    ],
    description:
      "One-stop international shipping from China to Pakistan enabling SMEs and shoppers to store goods at our China warehouse, consolidate shipments, clear Pakistani customs, and receive doorstep delivery.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ExpressHero />
      <WhatWeDo />
      <ShippingProcess />
      <LogisticsServices />
      <ExpressVisionMission />
      <ExpressCTA />
    </>
  );
}
