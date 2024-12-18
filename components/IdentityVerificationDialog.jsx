import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function IdentityVerificationDialog({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg rtl:text-right">
        <DialogHeader className="rtl:text-left">
          <DialogTitle className="mt-4 text-lg font-bold rtl:text-right">
            تأیید هویت
          </DialogTitle>
          <DialogDescription className="rtl:text-right">
            اطلاعات شناسایی خود را منطبق با کارت ملی وارد کنید. این اطلاعات باید
            متعلق به مالک شماره <strong>۰۹۱۷۲۱۹۵۵۱۴</strong> باشد.
          </DialogDescription>
        </DialogHeader>

        {/* Form Inputs */}
        <div className="space-y-10">
          <div>
            <label className="block text-gray-700 mb-2">کد ملی *</label>
            <Input placeholder="کد ملی خود را وارد کنید" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">تاریخ تولد *</label>
            <div className="flex gap-2">
              <Input placeholder="روز" className="flex-1" />
              <Input placeholder="ماه" className="flex-1" />
              <Input placeholder="سال" className="flex-1" />
            </div>
          </div>
        </div>

        {/* Info Text */}
        <p className="text-xs text-gray-500 mt-6">
          لطفا دقت کنید! درستی اطلاعات توسط سامانه ثبت احوال بررسی می‌شود و هر
          سال فقط ۵ بار می‌توانید ثبت درخواست انجام دهید.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-between mt-8">
          <DialogClose asChild>
            <Button variant="outline" className="w-1/2 ml-2">
              انصراف
            </Button>
          </DialogClose>
          <Button disabled className="w-1/2 bg-gray-300 text-gray-500">
            دریافت پیامک
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
