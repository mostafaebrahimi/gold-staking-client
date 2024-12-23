import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function InstructionSteps() {
  return (
    <div className="p-4 space-y-6 border rounded-md">
      {/* Step 1 */}
      <div className="flex items-start gap-3">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-bold">
            ۱
          </div>
          <div className="border-l border-primary flex-1 mt-1"></div>
        </div>
        <div>
          <h3 className="text-h5 text-primary">فعال‌سازی کیف پول</h3>
          <p className="text-sm text-neutral-400">
            مشاهده میزان کیف پول ریالی نیازمند فعال‌سازی کیف پول است.
          </p>
          {/* <Button size="sm">فعال‌سازی</Button> */}
        </div>
      </div>

      {/* Step 2 */}
      <div className="flex items-start gap-3">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white border-2 border-primary text-primary font-bold">
            ۲
          </div>
          <div className="border-l border-primary flex-1 mt-1"></div>
        </div>
        <div>
          <h3 className="text-h5 text-primary">احراز هویت</h3>
          <p className="text-sm text-neutral-400">
            برای انجام اولین خرید خود نیاز است تا فرآیند احراز هویت را تکمیل
            کنید.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="flex items-start gap-3">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white border-2 border-primary text-primary font-bold">
            ۳
          </div>
        </div>
        <div>
          <h3 className="text-h5 text-primary">خرید طلا</h3>
          <p className="text-sm text-neutral-400">
            حالا شما آماده هستید تا هم به ریال و هم به میلی‌گرم طلای دیجیتال خود
            را خریداری کنید.
          </p>
        </div>
      </div>
    </div>
  );
}
