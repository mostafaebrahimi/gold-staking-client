import { Button } from "@/components/ui/button";
import LimitsInfo from "@/components/LimitsInfo";
import { FormattedInput } from "@/components/FormattedInput";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Ensure you have a Skeleton component

export default function GoldForm({
  goldAmount,
  paymentAmount,
  setGoldAmount,
  setPaymentAmount,
}) {
  const [activeTab, setActiveTab] = useState("buy");
  const [loading, setLoading] = useState(true); // Simulates loading state

  useEffect(() => {
    // Simulate API loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust time as needed

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div>
        <div className="flex rounded-md bg-secondary-100 text-neutral-700 mb-6">
          <Skeleton className="flex-1 h-10 rounded-sm" />
          <Skeleton className="flex-1 h-10 rounded-sm mr-2" />
        </div>

        <Skeleton className="h-14 w-full rounded-md" />
        <div className="mt-4">
          <Skeleton className="h-14 w-full rounded-md" />
        </div>

        <div className="mt-6">
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        <Skeleton className="h-12 w-full rounded-md mt-4" />
      </div>
    );
  }

  return (
    <>
      <div className="flex rounded-md border bg-secondary-100 text-neutral-700 p-1 mb-6">
        <button
          onClick={() => setActiveTab("buy")}
          className={`flex-1 px-4 py-2 rounded-sm ${
            activeTab === "buy" ? "bg-orange-200 font-bold" : "bg-white"
          }`}
        >
          خرید طلا
        </button>
        <button
          onClick={() => setActiveTab("sell")}
          className={`flex-1 px-4 py-2 rounded-sm ${
            activeTab === "sell" ? "bg-orange-200 font-bold" : "bg-white"
          }`}
        >
          فروش طلا
        </button>
      </div>

      <FormattedInput
        label={activeTab === "buy" ? "مبلغ پرداختی" : "مبلغ دریافتی"}
        placeholder="۰"
        value={paymentAmount}
        onChange={setPaymentAmount}
        currency="ریال"
        hint="با احتساب کارمزد"
      />

      <div className="mt-4 md:mt-0">
        <FormattedInput
          label="مقدار طلا (میلی‌گرم)"
          placeholder="۰"
          value={goldAmount}
          onChange={setGoldAmount}
          currency="میلی گرم"
          hint="با احتساب کارمزد"
        />
      </div>

      <LimitsInfo activeTab={activeTab} />

      <Button
        className="w-full h-12 mt-4 md:mt-0"
        disabled={
          !goldAmount ||
          !paymentAmount ||
          parseFloat(goldAmount) <= 0 ||
          parseFloat(paymentAmount) <= 0
        }
      >
        {activeTab === "buy" ? "خرید طلا" : "فروش طلا"}
      </Button>
    </>
  );
}
