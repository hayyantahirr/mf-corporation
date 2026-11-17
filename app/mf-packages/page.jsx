import React from "react";
import PackagesHero from "@/components/mf-packages/PackagesHero";
import PackagingFormats from "@/components/mf-packages/PackagingFormats";
import PrintingTechnology from "@/components/mf-packages/PrintingTechnology";
import SectorsAndClients from "@/components/mf-packages/SectorsAndClients";
import OrderProcess from "@/components/mf-packages/OrderProcess";
import PackagesCTA from "@/components/mf-packages/PackagesCTA";

export const metadata = {
  title: "MF Packages | Custom Flexible Packaging & HP Indigo Printing",
  description:
    "MF-Packages LLC, a USA-registered subsidiary of MF Corporation operating in China and Karachi, Pakistan since 2018 with 50+ skilled workers. Shop stand-up, kraft paper, aluminium, retort, spout & coffee pouches with HP Indigo digital and Heidelberg/Roland offset printing.",
  alternates: {
    canonical: "/mf-packages",
  },
};

export default function MFPackagesPage() {
  const packagesJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MF Packages (MF-Packages LLC)",
    url: "https://www.mfpackages.com",
    foundingDate: "2018",
    parentOrganization: {
      "@type": "Corporation",
      name: "MF Corporation",
    },
    telephone: "+923322464729",
    email: "info@mfpackages.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Suit #9, Rafiq Mansion, Jethamal Road",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      addressCountry: "PK",
    },
    description:
      "USA-registered flexible packaging and printing specialist with manufacturing in China and Karachi, Pakistan, offering stand-up, kraft paper, aluminium, retort, spout, coffee pouches, shrink capsules, HP Indigo digital printing, and Heidelberg/Roland offset printing.",
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Custom & Ready-Made Flexible Packaging Pouches",
        description:
          "Stand-up pouches, kraft paper pouches, high-barrier aluminium pouches, flat-bottom pouches, retort pouches, spout pouches, coffee pouches with valves, coffee brewing filters, and shrink capsules.",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(packagesJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PackagesHero />
      <PackagingFormats />
      <PrintingTechnology />
      <SectorsAndClients />
      <OrderProcess />
      <PackagesCTA />
    </>
  );
}
