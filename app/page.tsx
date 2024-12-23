"use client";

import GoldPurchaseForm from "@/components/GoldPurchaseForm";
import { useState, useEffect } from "react";
import GoldForm from "@/components/GoldForm";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
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

  // Detect screen size for mobile vs desktop
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Check on initial mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mobile View: Only GoldForm is shown
  if (isMobile) {
    return (
      <main className="p-1">
        <GoldForm
          goldAmount={goldAmount}
          paymentAmount={paymentAmount}
          setGoldAmount={handleGoldChange}
          setPaymentAmount={handlePaymentChange}
        />
      </main>
    );
  }

  // Desktop View: Render all components in one layout
  return (
    <GoldPurchaseForm
      goldAmount={goldAmount}
      paymentAmount={paymentAmount}
      setGoldAmount={handleGoldChange}
      setPaymentAmount={handlePaymentChange}
      pricePerMilligram={PRICE_PER_MILLIGRAM}
    />
  );
}
