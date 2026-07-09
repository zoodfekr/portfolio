import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "رامین زودفکر | توسعه‌دهنده فرانت‌اند",
  description: "رامین زودفکر - توسعه‌دهنده فرانت‌اند | نمونه‌کارها و مهارت‌ها",
};

export const viewport: Viewport = {
  themeColor: "#0B1020",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className="dark">
      <body className="font-vazir bg-[#0B1020] text-[#E8ECF4] min-h-screen antialiased pt-16">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
