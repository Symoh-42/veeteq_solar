import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Veeteq Solar | Solar Energy & Engineering Solutions in Kenya",
    template: "%s | Veeteq Solar",
  },
  description: siteConfig.description,
  keywords: [
    "solar company Kenya",
    "solar installers Kenya",
    "solar installation Nairobi",
    "hybrid solar Kenya",
    "solar batteries Kenya",
    "commercial solar Kenya",
    "agricultural solar Kenya",
    "solar water heating Kenya",
    "solar engineering Nairobi",
    "solar power systems Kenya",
  ],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteConfig.url,
    siteName: "Veeteq Solar",
    title: "Veeteq Solar | Solar Energy & Engineering Solutions in Kenya",
    description: siteConfig.description,
    images: [{ url: "/images/og-image.svg", width: 1200, height: 630, alt: "Veeteq Solar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veeteq Solar | Solar Energy & Engineering Solutions in Kenya",
    description: siteConfig.description,
    images: ["/images/og-image.svg"],
  },
  alternates: {
    canonical: "/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Veeteq Solar",
  parentOrganization: {
    "@type": "Organization",
    name: "Veeteq Limited",
  },
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.jpeg`,
  areaServed: "KE",
  description: siteConfig.description,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Veeteq Solar",
  image: `${siteConfig.url}/images/logo.jpeg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  telephone: siteConfig.phone,
  url: siteConfig.url,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-off-white text-charcoal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
