import { Button } from "@/components/ui/button";
import LimitsInfo from "@/components/LimitsInfo";
import { FormattedInput } from "@/components/FormattedInput";
import { useState } from "react";

export default function GoldForm({
  goldAmount,
  paymentAmount,
  setGoldAmount,
  setPaymentAmount,
}) {
  const [activeTab, setActiveTab] = useState("buy");

  return (
    <>
      <div className="flex rounded-md border bg-secondary-100 text-neutral-500 p-1 mb-6">
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
      <h3 className="text-lg font-bold text-primary">
        {activeTab === "buy" ? "فرم خرید طلا" : "فرم فروش طلا"}
      </h3>

      <FormattedInput
        label={activeTab === "buy" ? "مبلغ پرداختی" : "مبلغ دریافتی"}
        placeholder="۰"
        value={paymentAmount}
        onChange={setPaymentAmount}
        currency="ریال"
        hint="با احتساب کارمزد"
      />

      <FormattedInput
        label="مقدار طلا (میلی‌گرم)"
        placeholder="۰"
        value={goldAmount}
        onChange={setGoldAmount}
        currency="میلی گرم"
        hint="با احتساب کارمزد"
      />

      {/* Limits and Info */}
      <LimitsInfo activeTab={activeTab} />

      <Button
        className="w-full h-12"
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
