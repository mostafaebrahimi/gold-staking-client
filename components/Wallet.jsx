import React from "react";

export default function Wallet() {
  return (
    <div className="bg-gray-100 rounded-md flex flex-col gap-4">
      {/* Title */}
      <div className="text-primary-500 font-semibold text-lg">کیف پول من</div>

      {/* Main Content */}
      <div className="flex justify-between items-end">
        {/* Right Column */}
        <div className="flex flex-col items-start">
          {/* Currency in Milligrams */}
          <div className="flex items-center gap-1 text-primary-500">
            <span className="text-xl font-bold">۰</span>
            <span className="text-lg">میلی</span>
            <span className="text-lg">گرم</span>
          </div>

          {/* Currency in Rials */}
          <div className="mt-4">
            <span className="text-lg font-bold text-neutral-500">۰</span>
            <span className="text-neutral-500"> ریال</span>
          </div>
        </div>

        {/* Left Column */}
        <div className="text-neutral-500">
          <div className="mt-12">تحویل فیزیکی</div>
        </div>
      </div>
    </div>
  );
}
