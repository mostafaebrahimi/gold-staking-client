"use client";

import { formatWithCommas, toPersianNumber } from "@/utils/numberFormatter";

export default function GoldRate({
  pricePerMilligram,
}: {
  pricePerMilligram: number;
}) {
  return (
    <div className="p-4 bg-gray-100 flex flex-col gap-4 border rounded-md">
      <div className="flex justify-between items-center">
        <span>نرخ لحظه‌ای هر میلی‌گرم طلای ۱۸ عیار</span>
        <div className="flex items-center gap-2 text-xl text-primary font-bold">
          <span>
            {toPersianNumber(
              formatWithCommas(pricePerMilligram.toLocaleString())
            )}
          </span>
          <span>ریال</span>
        </div>
      </div>
    </div>
  );
}
