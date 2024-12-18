import { useState } from "react";
import { formatWithCommas, toPersianNumber } from "@/utils/numberFormatter";

// Persian/Arabic to English Number Conversion
const f2e = (value) =>
  value
    .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
    .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

export function FormattedInput({
  label,
  placeholder,
  hint,
  value,
  onChange,
  currency,
}) {
  const [isFocused, setIsFocused] = useState(false);

  // Handle input formatting: convert Persian to English, then emit
  const handleInputChange = (e) => {
    const rawValue = f2e(e.target.value.replace(/,/g, "")); // Convert Persian to English
    if (/^\d*\.?\d*$/.test(rawValue)) {
      // Validate numbers and one optional decimal
      onChange(rawValue); // Emit the value to parent
    }
  };

  // Display value: always formatted as Persian
  const displayValue = toPersianNumber(formatWithCommas(value));

  return (
    <div
      className={`relative border rounded-md p-2 ${
        isFocused ? "border-primary shadow-md" : "border-gray-300 bg-gray-50"
      }`}
    >
      {/* Label */}
      <div className="flex items-center">
        <label
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-lg ${
            isFocused || value ? " text-primary -translate-x-5" : ""
          } transition-all`}
        >
          {label}
        </label>
        {/* 
        {value && hint && (
          <div className="text-xs text-gray-400 text-right">{hint}</div>
        )} */}
      </div>
      {/* Input Field */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder={isFocused ? "" : placeholder}
          value={displayValue} // Display Persian value dynamically
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleInputChange} // Internal raw value remains English
          className="w-full bg-transparent outline-none text-left text-2xl text-primary placeholder-gray-400"
        />
        <span className="text-gray-500 ml-2 mr-2 whitespace-nowrap">
          {currency}
        </span>
      </div>
    </div>
  );
}
