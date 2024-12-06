import type { Metadata } from "next";
import "./globals.css";
import ResponsiveNavBar from "@/components/Home/Header/ResponsiveNavBar";
import { Outfit } from "next/font/google";
import Footer from "@/components/Home/Footer/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});


export const metadata: Metadata = {
  title: "WebDev portfolio",
  description: "WebDev portfolio with next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <ResponsiveNavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
