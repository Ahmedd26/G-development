import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const helveticaNow = localFont({
  src: [
    {
      path: "../public/fonts/helvetica-now/HelveticaNowDisplay-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/helvetica-now/HelveticaNowDisplay-ExtLt.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/helvetica-now/HelveticaNowDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/helvetica-now/HelveticaNowDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/helvetica-now/HelveticaNowDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/helvetica-now/HelveticaNowDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/helvetica-now/HelveticaNowDisplay-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/helvetica-now/HelveticaNowDisplay-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-helvetica-now",
  display: "swap",
});

export const metadata: Metadata = {
  title: "G Dev",
  description:
    "G-Development, Real Estate developer blending timeless design with comfortable living.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${helveticaNow.variable} antialiased`}>
        {/* <Navbar />
                {children} */}
        <Navbar />
        <main className="overflow-y-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
