import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/seo/StructuredData";
import { site } from "@/lib/site";
import "./globals.css";

const studio = Manrope({ subsets: ["latin"], variable: "--font-studio", display: "swap" });
const title = "Software Development Company in Nigeria | Elite Digital Agency";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s | Elite Digital Agency" },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_NG", url: "/", siteName: site.name, title, description: site.description },
  twitter: { card: "summary_large_image", title, description: site.description },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = { themeColor: "#1a3fcc" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG" className={studio.variable}>
      <body>
        <StructuredData />
        <Navbar />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
