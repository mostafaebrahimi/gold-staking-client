// Convert English numbers to Persian
export function toPersianNumber(number) {
  if (!number) return "";
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return number
    .toString()
    .replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
}

// Format numbers with commas as separators
export function formatWithCommas(value) {
  if (!value) return "";
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Convert Persian/Arabic numbers to English
export function f2e(value) {
  return value
    .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
    .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
}
