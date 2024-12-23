"use client";

import MobileNavigation from "@/components/MobileNavigation";

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-col w-full max-w-[480px] mx-auto bg-white"
      style={{ minHeight: "100vh" }}
    >
      {/* Main Content */}
      <main className="flex-grow p-1">{children}</main>
    </div>
  );
}
