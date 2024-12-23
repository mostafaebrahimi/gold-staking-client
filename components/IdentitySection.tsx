"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import IdentityVerificationDialog from "@/components/IdentityVerificationDialog";

export default function IdentitySection() {
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="flex items-center justify-between bg-orange-100 p-4 rounded-md mb-6">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-md bg-white">⚠️</div>
        <span>
          حساب کاربری شما در حال حاضر احراز هویت نشده است، برای شروع خرید و فروش
          ابتدا بایستی حساب کاربری خود را احراز هویت کنید.
        </span>
      </div>
      {/* Navigate to Identity Verification Page */}

      <Button onClick={() => setIsDialogOpen(true)}>احراز هویت</Button>

      {/* Identity Verification Dialog */}
      <IdentityVerificationDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
}
