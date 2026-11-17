import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://mfcorporation.com"),
  title: {
    default:
      "MF Corporation | Global Logistics (MF Express) & Flexible Packaging (MF Packages)",
    template: "%s | MF Corporation",
  },
  description:
    "Established in 1998, MF Corporation is the parent company of MF Express (China-to-Pakistan shipping, consolidation & custom clearance) and MF Packages (USA-registered flexible packaging & HP Indigo/Heidelberg printing specialist).",
  keywords: [
    "MF Corporation",
    "MF Express",
    "MF Packages",
    "MF-Packages LLC",
    "Tahir Yaseen",
    "China to Pakistan shipping",
    "China warehouse consolidation Pakistan",
    "custom clearance Karachi Pakistan",
    "freight forwarding Pakistan",
    "project cargo handling",
    "flexible packaging Pakistan",
    "kraft paper pouches",
    "biodegradable packaging solutions",
    "HP Indigo digital printing",
  ],
  authors: [{ name: "MF Corporation" }],
  creator: "MF Corporation",
  publisher: "MF Corporation",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mfcorporation.com",
    siteName: "MF Corporation",
    title:
      "MF Corporation | Logistics Excellence & Sustainable Packaging Since 1998",
    description:
      "Parent group of MF Express (China-to-Pakistan international shipping & customs) and MF Packages (custom flexible packaging & printing across USA, China, and Pakistan).",
  },
  twitter: {
    card: "summary_large_image",
    title: "MF Corporation | MF Express & MF Packages",
    description:
      "Over 22 years of leadership in custom clearance, freight forwarding, China-to-Pakistan consolidation, and eco-friendly flexible packaging.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "MF Corporation",
    url: "https://mfcorporation.com",
    foundingDate: "1998-04-01",
    founder: {
      "@type": "Person",
      name: "Tahir Yaseen",
      jobTitle: "Chairman",
    },
    description:
      "Parent company operating since 1st April 1998 specializing in custom clearance, freight forwarding, project cargo handling, warehousing, China-to-Pakistan shipping (MF Express), and organic/biodegradable flexible packaging & printing (MF Packages).",
    telephone: "+923322464729",
    email: "info@mfpackages.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Suit #9, Rafiq Mansion, Jethamal Road",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      addressCountry: "PK",
    },
    areaServed: ["PK", "CN", "US"],
    subOrganization: [
      {
        "@type": "Organization",
        name: "MF Express",
        url: "https://mfcorporation.com/mf-express",
        description:
          "One-stop international shipping solution from China to Pakistan offering Chinese warehouse storage, shipment consolidation, custom clearances, and doorstep delivery for SMEs and shoppers.",
      },
      {
        "@type": "Organization",
        name: "MF-Packages LLC (MF Packages)",
        url: "https://www.mfpackages.com",
        foundingDate: "2018",
        description:
          "USA-registered flexible packaging and printing specialist with global manufacturing in China and Karachi, Pakistan, featuring HP Indigo digital presses, Heidelberg/Roland offset systems, and custom pouch formats.",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
