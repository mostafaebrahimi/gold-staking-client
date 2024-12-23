"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  ArrowsRightLeftIcon,
  UserIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";

export default function MobileNavigation() {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/mobile/wallet",
      label: "کیف پول",
      icon: <WalletIcon className="h-6 w-6" />, // Tailwind icon class for sizing
    },

    {
      href: "/mobile",
      label: "خرید و فروش",
      icon: <ArrowsRightLeftIcon className="h-6 w-6" />,
    },
    {
      href: "/mobile/profile",
      label: "حساب کاربری",
      icon: <UserIcon className="h-6 w-6" />,
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
            className={`flex flex-col items-center py-2 flex-1 ${
              isActive ? "text-primary-500" : "text-neutral-500"
            }`}
            aria-label={item.label}
          >
            <div
              className={`${
                isActive ? "text-primary-500" : "text-neutral-500"
              }`}
            >
              {item.icon}
            </div>
            <span
              className={`text-xs ${
                isActive ? "text-primary-500" : "text-neutral-500"
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
