"use client";

import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { formatWithCommas, toPersianNumber } from "@/utils/numberFormatter";

export default function GoldRate() {
  const [pricePerMilligram, setPricePerMilligram] = useState<number | null>(
    5222000
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGoldRate = async () => {
      try {
        const response = await fetch("/api/goldRate"); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch gold rate");
        }
        const data = await response.json();
        if (data?.pricePerMilligram)
          setPricePerMilligram(data?.pricePerMilligram);
        setLoading(false);
      } catch (err) {
        setError("نرخ طلا");
        setLoading(false);
      }
    };

    fetchGoldRate();
  }, []);

  return (
    <div className="pt-4 pb-4 md:p-4 md:bg-gray-100 flex flex-col gap-4 md:border rounded-md">
      <div className="flex justify-between items-center">
        {loading ? (
          <Skeleton className="h-5 w-[200px] rounded gap-2" />
        ) : (
          <span className="text-sm md:text-lg">
            نرخ لحظه‌ای هر میلی‌گرم طلای ۱۸ عیار
          </span>
        )}
        <div className="flex items-center gap-2 text-sm md:text-lg text-primary font-bold">
          {loading ? (
            <GoldRateSkeleton />
          ) : !error ? (
            <span className="text-xs md:text-sm text-red-500">{error}</span>
          ) : (
            <>
              <span className="text-sm md:text-lg">
                {toPersianNumber(
                  formatWithCommas(pricePerMilligram!.toLocaleString())
                )}
              </span>
              <span className="text-xs md:text-sm">ریال</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function GoldRateSkeleton() {
  return (
    <div className="flex items-center gap-2">
      <Skeleton className="h-5 w-[80px] rounded" />
      <Skeleton className="h-5 w-[30px] rounded" />
    </div>
  );
}
