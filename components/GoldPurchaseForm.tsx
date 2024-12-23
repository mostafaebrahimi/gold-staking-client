"use client";

import GoldForm from "@/components/GoldForm";
import InstructionSteps from "@/components/InstructionSteps";
import Wallet from "@/components/Wallet";
import GoldRate from "./GoldRate";

export default function GoldPurchaseForm({
  goldAmount,
  paymentAmount,
  setGoldAmount,
  setPaymentAmount,
  pricePerMilligram,
}: {
  goldAmount: string;
  paymentAmount: string;
  setGoldAmount: (value: string) => void;
  setPaymentAmount: (value: string) => void;
  pricePerMilligram: number;
}) {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Main Layout */}
      <div className="flex flex-col gap-4 md:flex-row">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-4">
          <GoldRate />
          <div className="p-4 bg-gray-100 flex flex-col gap-4 border rounded-md">
            {/* Wallet Component */}
            <Wallet />
          </div>

          {/* Instructions */}
          <InstructionSteps />
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <div className="p-4 flex flex-col gap-4 border rounded-md space-y-1">
            <GoldForm
              goldAmount={goldAmount}
              paymentAmount={paymentAmount}
              setGoldAmount={setGoldAmount}
              setPaymentAmount={setPaymentAmount}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
