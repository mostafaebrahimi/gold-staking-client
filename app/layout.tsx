"use client";

import { useState, useEffect } from "react";
import localFont from "next/font/local";
import "./globals.css";
import MobileNavigation from "@/components/MobileNavigation";

const iranYekan = localFont({
  src: [
    { path: "./fonts/iranyekan_thin.ttf", weight: "100", style: "normal" },
    { path: "./fonts/iranyekan_light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/iranyekan.ttf", weight: "400", style: "normal" },
    { path: "./fonts/iranyekan_medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/iranyekan_bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/iranyekan_extrabold.ttf", weight: "800", style: "normal" },
    { path: "./fonts/iranyekan_black.ttf", weight: "900", style: "normal" },
    {
      path: "./fonts/iranyekan_extrablack.ttf",
      weight: "950",
      style: "normal",
    },
  ],
  variable: "--font-iranyekan",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the screen size is mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <html lang="fa" dir="rtl">
      <body className={`${iranYekan.variable} antialiased`}>
        <div
          className="flex flex-col container w-full max-w-[480px] md:max-w-[100%] mx-auto bg-white"
          style={{ minHeight: "100vh" }}
        >
          {/* Header */}
          <header className="w-full sticky top-0 z-10 bg-secondary-100 flex items-center justify-between px-4 py-2 md:p-3 shadow-md">
            <div className="flex items-center gap-2">
              <img
                src="/favicon.ico"
                alt="Logo"
                className="w-8 h-8"
                style={{ objectFit: "contain" }}
              />
              <h1 className="text-primary-500 font-extrabold text-lg md:text-xl">
                طلای دیجیتال
              </h1>
            </div>
            {!isMobile && (
              <div className="hidden md:flex items-center">
                <button className="text-primary-500">پروفایل</button>
              </div>
            )}
          </header>

          {/* Main Content */}
          <main className="flex-grow p-4">{children}</main>

          {/* Mobile Navigation */}
          {isMobile && <MobileNavigation />}
        </div>
      </body>
    </html>
  );
}
