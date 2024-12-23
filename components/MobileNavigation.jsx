"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MobileNavigation() {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/mobile/wallet",
      label: "کیف پول",
      icon: "💰",
      activeClass: "text-primary-500",
      defaultClass: "text-neutral-500",
    },
    {
      href: "/mobile/profile",
      label: "پروفایل",
      icon: "👤",
      activeClass: "text-primary-500",
      defaultClass: "text-neutral-500",
    },
    {
      href: "/mobile",
      label: "خانه",
      icon: "🏠",
      activeClass: "text-primary-500",
      defaultClass: "text-neutral-500",
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-100 md:hidden flex justify-between items-center border-t border-gray-300 z-10">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center py-2 flex-1"
            aria-label={item.label}
          >
            <span
              className={`cube-font-icon text-xl ${
                isActive ? item.activeClass : item.defaultClass
              }`}
              data-icon-name={item.label}
            >
              {item.icon}
            </span>
            <span
              className={`text-xs ${
                isActive ? item.activeClass : item.defaultClass
              }`}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
