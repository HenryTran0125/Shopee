export function formatNumber(number) {
  const num = parseFloat(number); // Đảm bảo chuyển đổi mọi giá trị vào thành số thực
  if (isNaN(num)) {
    console.error("Invalid number input for formatting:", number);
    return number; // Trả lại nguyên giá trị nếu không phải số
  }
  return number.toLocaleString("en-US");
}
