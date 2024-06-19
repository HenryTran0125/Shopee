export function formatNumber(number, numberToFixed) {
  if (number === undefined || number === null) {
    // console.error("Invalid number input for formatting:", number);
    return number; // Trả lại nguyên giá trị nếu là undefined hoặc null
  }
  const num = parseFloat(number); // Đảm bảo chuyển đổi mọi giá trị vào thành số thực
  if (isNaN(num)) {
    // console.error("Invalid number input for formatting:", number);
    return number; // Trả lại nguyên giá trị nếu không phải số
  }
  return Number(num.toFixed(numberToFixed)).toLocaleString("en-US"); // Làm tròn đến 2 chữ số thập phân và định dạng
}

export function formatNumberInThousand(number) {
  if (number === undefined || number === null) {
    // console.error("Invalid number input for formatting:", number);
    return number; // Trả lại nguyên giá trị nếu là undefined hoặc null
  }
  const num = parseFloat(number); // Đảm bảo chuyển đổi mọi giá trị vào thành số thực
  if (isNaN(num)) {
    // console.error("Invalid number input for formatting:", number);
    return number; // Trả lại nguyên giá trị nếu không phải số
  }
  return Number(num.toFixed(1)).toLocaleString("de-DE"); // Làm tròn đến 2 chữ số thập phân và định dạng
}
