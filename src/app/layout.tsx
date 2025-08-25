import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pearlux - Premium Pearls, Stones & Embroidery Materials",
  description:
    "Discover brilliance in every detail. Pearlux brings you premium pearls, precious stones, and luxury embroidery materials with a touch of elegance and modern design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org structured data for better SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pearlux",
    url: "https://pearlux.pk",
    logo: "https://pearlux.pk/Pearlux.svg",
    description: "Premium Pearls, Stones & Embroidery Materials",
    sameAs: ["https://facebook.com/pearlux", "https://instagram.com/pearlux"],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
}
