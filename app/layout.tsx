import localFont from "next/font/local";
import "./globals.css";

// IranYekan font definitions
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
  variable: "--font-iranyekan", // CSS variable for the font
  display: "swap", // Ensure a smooth loading experience
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${iranYekan.variable} antialiased`}>{children}</body>
    </html>
  );
}
