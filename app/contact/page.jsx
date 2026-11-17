import React from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactCards from "@/components/contact/ContactCards";
import ContactForm from "@/components/contact/ContactForm";
import ContactFAQ, { contactFaqs } from "@/components/contact/ContactFAQ";

export const metadata = {
  title: "Contact Us | Karachi Headquarters & Quote Desk",
  description:
    "Contact MF Corporation, MF Express, or MF Packages in Karachi, Pakistan at Suit #9, Rafiq Mansion, Jethamal Road. Call +92 332 2464729 or email info@mfpackages.com for China-to-Pakistan shipping and custom flexible packaging quotes.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: contactFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ContactHero />
      <ContactCards />
      <ContactForm />
      <ContactFAQ />
    </>
  );
}
