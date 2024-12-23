"use client";

import GoldRate from "@/components/GoldRate";
import InstructionSteps from "@/components/InstructionSteps";
import Wallet from "@/components/Wallet";

export default function WalletPage() {
  return (
    <div className="flex-1 flex flex-col gap-4">
      <GoldRate />
      <div className="p-4 bg-gray-100 flex flex-col gap-4 border rounded-md">
        {/* Wallet Component */}
        <Wallet />
      </div>

      {/* Instructions */}
      <InstructionSteps />
    </div>
  );
}
