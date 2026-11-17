import React from "react";
import HomeMotion from "@/components/home/HomeMotion";
import PackagesHeader from "@/components/packages/PackagesHeader";
import PackagingCatalog from "@/components/packages/PackagingCatalog";
import PrintingCompliance from "@/components/packages/PrintingCompliance";
import OrderAndContact from "@/components/packages/OrderAndContact";

export const metadata = {
  title: "MF Packages | Custom Flexible Packaging & Printing",
  description:
    "Operating from Karachi since 2018 with 50+ specialists, MF Packages supplies custom and ready-made flexible pouches with HP Indigo digital and Heidelberg/Roland offset printing.",
  alternates: {
    canonical: "/packages",
  },
};

export default function MFPackagesPage() {
  const packagesJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MF Packages",
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
      streetAddress: "Suite #9, Rafiq Mansion, Jethamal Road",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      addressCountry: "PK",
    },
    description:
      "Flexible packaging and printing subsidiary of MF Corporation operating from Karachi since 2018 with 50+ specialists, offering nine pouch formats alongside HP Indigo digital and Heidelberg/Roland offset printing.",
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Custom & Ready-Made Flexible Packaging Pouches",
        description:
          "Stand-up pouches, kraft paper pouches, high-barrier aluminium pouches, transparent plastic pouches, flat-bottom pouches, retort pouches, spout pouches, coffee valve pouches, and shrink capsules.",
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
      <HomeMotion>
        <PackagesHeader />
        <PackagingCatalog />
        <PrintingCompliance />
        <OrderAndContact />
      </HomeMotion>
    </>
  );
}
