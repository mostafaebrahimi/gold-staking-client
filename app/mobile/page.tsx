"use client";

import { useState } from "react";
import GoldForm from "@/components/GoldForm";
import GoldRate from "@/components/GoldRate";

export default function MobileHomePage() {
  const [goldAmount, setGoldAmount] = useState(""); // Gold in milligrams
  const [paymentAmount, setPaymentAmount] = useState(""); // Payment in Rial
  const PRICE_PER_MILLIGRAM = 49880000; // Static price per milligram of gold in Rial

  // Handle payment amount changes
  const handlePaymentChange = (amount: string) => {
    const numericAmount = parseFloat(amount.replace(/,/g, "")) || 0;
    setPaymentAmount(amount); // Update payment input
    const calculatedGold = (numericAmount / PRICE_PER_MILLIGRAM) * 1000;
    setGoldAmount(calculatedGold ? calculatedGold.toFixed(3) : ""); // Update gold value
  };

  // Handle gold amount changes
  const handleGoldChange = (amount: string) => {
    const numericAmount = parseFloat(amount.replace(/,/g, "")) || 0;
    setGoldAmount(amount); // Update gold input
    const calculatedPayment = (numericAmount * PRICE_PER_MILLIGRAM) / 1000;
    setPaymentAmount(
      calculatedPayment ? Math.floor(calculatedPayment).toLocaleString() : ""
    ); // Update payment value
  };

  return (
    <main>
      <GoldRate />
      <GoldForm
        goldAmount={goldAmount}
        paymentAmount={paymentAmount}
        setGoldAmount={handleGoldChange}
        setPaymentAmount={handlePaymentChange}
      />
    </main>
  );
}
