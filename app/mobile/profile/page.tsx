"use client";

import React, { useState, useEffect } from "react";
import {
  ChatBubbleBottomCenterIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  UserIcon,
  WalletIcon,
  ExclamationCircleIcon,
  ClockIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { ChevronLeft, Clock, UserCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { toPersianNumber } from "@/utils/numberFormatter";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function ProfileSidebar() {
  const [userData, setUserData] = useState<{ name: string; phone: string }>({
    name: "مصطفی ابراهیمی",
    phone: "09172195514",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/get-profile"); // Replace with your actual API endpoint

        const data = await response.json();
        if (data?.user) setUserData(data);
        setLoading(false);
      } catch (err: any) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="md:flex md:mt-6 md:gap-4">
      {/* User Info Section */}
      <div className="md:rounded-md md:border md:w-89 md:max-w-sm md:sticky md:top-24 md:h-fit overflow-hidden">
        <div className="px-1 border-grey-500">
          {loading ? (
            <Skeleton className="h-12 w-full rounded-md" />
          ) : error ? (
            <p className="text-red-500 text-sm">{error}</p>
          ) : (
            <div className="flex items-center gap-3">
              <div className="flex">
                <UserIcon className="h-6 w-6 text-gray-500" />
              </div>
              <div>
                <p className="text-base font-bold text-neutral-800">
                  {userData?.name || "نام کاربر"}
                </p>
                <p className="text-sm text-neutral-400">
                  {toPersianNumber(userData?.phone) || "شماره تماس"}
                </p>
              </div>
            </div>
          )}

          {/* Wallet Section */}
          <div className="flex flex-col gap-3 pt-4 mt-4">
            {loading ? (
              <Skeleton className="h-6 w-full rounded-md" />
            ) : (
              <div className="flex items-center gap-3">
                <WalletIcon className="h-6 w-6 text-gray-500" />
                <div className="flex-1">
                  <p className="text-base text-neutral-800">کیف پول</p>
                </div>
                <a className="relative flex items-center text-sm text-grey-400 rounded-md mr-auto">
                  فعال‌سازی
                  <ChevronLeft className="h-4 w-4 text-gray-500 " />
                </a>
              </div>
            )}
            <div className="rounded bg-gray-100 p-2">
              <div className="flex items-center">
                <ExclamationCircleIcon className="h-5 w-5 text-gray-400" />
                <span className="mr-2 text-sm text-gray-500">
                  نمایش موجودی، نیازمندی فعال‌سازی کیف پول است.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 bg-grey-500 border-b-[4px] rounded w-full"></div>

      {/* Options Section */}
      <div className="py-4">
        <div className="bg-white flex flex-col">
          {loading
            ? Array(5)
                .fill(0)
                .map((_, index) => (
                  <Skeleton
                    key={index}
                    className="h-6 w-full rounded-md mb-4"
                  />
                ))
            : [
                {
                  href: "/gold/profile/info/",
                  label: "حساب کاربری",
                  icon: <UserCircleIcon className="h-6 w-6 text-gray-500" />,
                  badge: "نیازمند بازبینی",
                },
                {
                  href: "/gold/profile/history/",
                  label: "تاریخچه خرید و فروش",
                  icon: <ClockIcon className="h-6 w-6 text-gray-500" />,
                },
                {
                  href: "/gold/profile/terms-and-conditions/",
                  label: "قوانین و مقررات",
                  icon: <DocumentTextIcon className="h-6 w-6 text-gray-500" />,
                },
                {
                  href: "/gold/profile/faq/",
                  label: "سوالات متداول",
                  icon: (
                    <QuestionMarkCircleIcon className="h-6 w-6 text-gray-500" />
                  ),
                },
                {
                  href: "/gold/profile/support/",
                  label: "پشتیبانی",
                  icon: (
                    <ChatBubbleBottomCenterIcon className="h-6 w-6 text-gray-500" />
                  ),
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-2 py-3 border-b border-gray-100 cursor-pointer"
                >
                  <div className="flex">{item.icon}</div>
                  <span className="text-sm text-gray-700">{item.label}</span>
                  {item.badge && (
                    <div className="inline-flex items-center bg-orange-100 text-orange-500 text-xs px-2 py-1 rounded">
                      {item.badge}
                    </div>
                  )}
                  <ChevronLeft className="h-4 w-4 text-gray-500 mr-auto" />
                </a>
              ))}
        </div>
      </div>
    </div>
  );
}
