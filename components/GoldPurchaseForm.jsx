"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import GoldForm from "@/components/GoldForm";
import InstructionSteps from "@/components/InstructionSteps";
import IdentityVerificationDialog from "@/components/IdentityVerificationDialog";

import { formatWithCommas, toPersianNumber } from "@/utils/numberFormatter";

export default function GoldTransactionForm() {
  const [goldAmount, setGoldAmount] = useState(""); // Gold in milligrams
  const [paymentAmount, setPaymentAmount] = useState(""); // Payment in Rial
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const PRICE_PER_MILLIGRAM = 49880000; // Static price per milligram of gold in Rial

  // Handle payment amount changes
  const handlePaymentChange = (amount) => {
    const numericAmount = parseFloat(amount.replace(/,/g, "")) || 0;
    setPaymentAmount(amount); // Update payment input
    const calculatedGold = (numericAmount / PRICE_PER_MILLIGRAM) * 1000;
    setGoldAmount(calculatedGold ? calculatedGold.toFixed(3) : ""); // Update gold value
  };

  // Handle gold amount changes
  const handleGoldChange = (amount) => {
    const numericAmount = parseFloat(amount.replace(/,/g, "")) || 0;
    setGoldAmount(amount); // Update gold input
    const calculatedPayment = (numericAmount * PRICE_PER_MILLIGRAM) / 1000;
    setPaymentAmount(
      calculatedPayment ? Math.floor(calculatedPayment).toLocaleString() : ""
    ); // Update payment value
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header Alert */}
      <div className="flex items-center justify-between bg-orange-100 p-4 rounded-md mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-md bg-white">⚠️</div>
          <span>
            حساب کاربری شما در حال حاضر احراز هویت نشده است، برای شروع خرید و
            فروش ابتدا بایستی حساب کاربری خود را احراز هویت کنید.
          </span>
        </div>
        <Button onClick={() => setIsDialogOpen(true)}>احراز هویت</Button>
      </div>

      {/* Gold Rate */}
      <Card className="p-4 bg-gray-100 flex justify-between items-center mb-6">
        <span>نرخ لحظه‌ای هر میلی‌گرم طلای ۱۸ عیار</span>
        <div className="flex items-center gap-2 text-xl text-primary font-bold">
          <span>
            {toPersianNumber(
              formatWithCommas(PRICE_PER_MILLIGRAM.toLocaleString())
            )}
          </span>
          <span>ریال</span>
        </div>
      </Card>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Form */}
        <Card className="p-4 space-y-4">
          <GoldForm
            goldAmount={goldAmount}
            paymentAmount={paymentAmount}
            setGoldAmount={handleGoldChange}
            setPaymentAmount={handlePaymentChange}
          />
        </Card>

        {/* Instructions */}
        <InstructionSteps />
      </div>

      {/* Identity Verification Dialog */}
      <IdentityVerificationDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
}
