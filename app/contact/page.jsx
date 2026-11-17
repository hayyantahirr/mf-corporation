import React from "react";
import HomeMotion from "@/components/home/HomeMotion";
import ContactHeader from "@/components/contact/ContactHeader";
import DivisionChannels from "@/components/contact/DivisionChannels";
import LocationAndDirectory from "@/components/contact/LocationAndDirectory";

export const metadata = {
  title: "Contact Us | Karachi Headquarters & Division Channels",
  description:
    "Contact MF Corporation in Karachi at Suite #9, Rafiq Mansion, Jethamal Road. Reach MF Packages at mfpackages.com/contact or message MF Express on WhatsApp at 0332 2464729.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "MF Corporation Contact Directory",
    url: "https://mfcorporation.com/contact",
    mainEntity: {
      "@type": "Corporation",
      name: "MF Corporation",
      telephone: "+923322464729",
      email: "info@mfpackages.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Suite #9, Rafiq Mansion, Jethamal Road",
        addressLocality: "Karachi",
        addressRegion: "Sindh",
        addressCountry: "PK",
      },
      sameAs: ["https://www.mfpackages.com", "https://mfexpress.pk"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HomeMotion>
        <ContactHeader />
        <DivisionChannels />
        <LocationAndDirectory />
      </HomeMotion>
    </>
  );
}
