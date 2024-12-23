"use client";

import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { formatWithCommas, toPersianNumber } from "@/utils/numberFormatter";

export default function Wallet() {
  const [walletData, setWalletData] = useState<{
    milligrams: number;
    rials: number;
  } | null>({ milligrams: 1000, rials: 50000 });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWalletData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/wallet"); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch wallet data");
        }
        const data = await response.json();
        setWalletData(data);
        setLoading(false);
      } catch (err) {
        setError("خطا دریافت اطلاعات");
        setLoading(false);
      }
    };

    fetchWalletData();
  }, []);

  return (
    <div className="bg-gray-100 rounded-md flex flex-col gap-4 max-w-[480px] p-1">
      {/* Title */}
      <div className="text-gray-700 font-semibold text-lg">کیف پول من</div>

      {/* Main Content */}
      <div className="flex justify-between items-end">
        {/* Right Column */}
        <div className="flex flex-col items-start">
          {loading ? (
            <Skeleton className="h-6 w-32" />
          ) : !error ? (
            <span className="text-red-500">{error}</span>
          ) : (
            <>
              {/* Currency in Milligrams */}
              <div className="flex items-center gap-1 text-primary-500">
                <span className="text-xl font-bold">
                  {toPersianNumber(
                    formatWithCommas(walletData?.milligrams ?? 0)
                  )}
                </span>
                <span className="text-lg">میلی</span>
                <span className="text-lg">گرم</span>
              </div>

              {/* Currency in Rials */}
              <div className="mt-4">
                <span className="text-lg font-bold text-neutral-500">
                  {toPersianNumber(formatWithCommas(walletData?.rials ?? 0))}
                </span>
                <span className="text-neutral-500"> ریال</span>
              </div>
            </>
          )}
        </div>

        {/* Left Column */}
        <div className="text-neutral-500">
          {loading ? (
            <Skeleton className="h-4 w-20" />
          ) : (
            <div className="mt-12">تحویل فیزیکی</div>
          )}
        </div>
      </div>
    </div>
  );
}
