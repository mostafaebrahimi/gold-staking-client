import { toPersianNumber, formatWithCommas } from "@/utils/numberFormatter";

const InfoRow = ({ label, value, unit }) => (
  <>
    <div className="text-right text-gray-400">{label}</div>
    <div className="flex justify-end font-bold text-primary">
      <span>{toPersianNumber(formatWithCommas(value))}</span>
      <span className="ml-1 mr-1">{unit}</span>
    </div>
  </>
);

export default function LimitsInfo({ activeTab }) {
  return (
    <div className="grid grid-cols-2 gap-4 text-gray-600 text-sm mt-4">
      {activeTab === "buy" ? (
        <>
          <InfoRow label="موجودی کیف پول" value="0" unit="ریال" />
          <InfoRow label="حداقل خرید" value="1" unit="میلی‌گرم" />
          <InfoRow label="حداکثر خرید" value="10000" unit="میلی‌گرم" />
          <InfoRow label="کارمزد خرید" value="0" unit="ریال" />
        </>
      ) : (
        <>
          <InfoRow label="دارایی طلا" value="0" unit="میلی‌گرم" />
          <InfoRow label="حداقل فروش" value="1" unit="میلی‌گرم" />
          <InfoRow label="حداکثر فروش" value="10000" unit="میلی‌گرم" />
          <InfoRow label="کارمزد فروش" value="0" unit="ریال" />
        </>
      )}
    </div>
  );
}
