import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StructuredData, { organizationSchema, localBusinessSchema, websiteSchema } from "@/components/seo/StructuredData";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const BASE_URL = "https://www.elitedigitalagency.net";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Elite Digital Agency — Web Development, Mobile Apps & Digital Marketing",
    template: "%s | Elite Digital Agency",
  },
  description:
    "Elite Digital Agency builds world-class websites, mobile apps, and digital marketing campaigns. Expert IT training & consulting for businesses across Africa and beyond. Get a free quote today.",

  keywords: [
    "web development agency",
    "mobile app development",
    "digital marketing agency",
    "IT training Nigeria",
    "IT consulting Lagos",
    "website design agency",
    "Next.js development",
    "React Native apps",
    "SEO agency Nigeria",
    "software development company Lagos",
    "elite digital agency",
    "web design Nigeria",
    "app development Africa",
    "digital transformation",
    "UI UX design agency",
    "ecommerce development",
    "corporate IT training",
    "cloud consulting Nigeria",
    "social media marketing agency",
    "web developer in Auchi",
    "mobile app developer in Auchi",
    "Fintech app development",
    "healthtech app development",
    "edtech app development",
    "SaaS development agency",
    "custom software development",
  ].join(", "),

 
  authors: [{ name: "Elite Digital Agency", url: BASE_URL }],
  creator: "Elite Digital Agency",
  publisher: "Elite Digital Agency",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Elite Digital Agency",
    title: "Elite Digital Agency — Web Development, Mobile Apps & Digital Marketing",
    description:
      "We build world-class websites, mobile apps, and digital marketing campaigns for businesses across Africa and beyond. 200+ projects delivered. Get a free quote.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elite Digital Agency — We Build Digital Experiences That Drive Growth",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@elitedigitalagency",
    creator: "@elitedigitalagency",
    title: "Elite Digital Agency — Web Development, Mobile Apps & Digital Marketing",
    description:
      "We build world-class websites, mobile apps, and digital marketing campaigns. 200+ projects. Free discovery call.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: BASE_URL,
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#00e5b0" }],
  },

  manifest: "/site.webmanifest",

  verification: {
    google: "your-google-verification-code", // Replace from Google Search Console
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <meta name="theme-color" content="#080810" />
        <meta name="msapplication-TileColor" content="#080810" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-black text-white overflow-x-hidden">
        <StructuredData schema={[organizationSchema, localBusinessSchema, websiteSchema]} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
