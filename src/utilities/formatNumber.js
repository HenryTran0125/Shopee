export function formatNumber(number) {
  const num = parseFloat(number); // Đảm bảo chuyển đổi mọi giá trị vào thành số thực
  if (isNaN(num)) {
    console.error("Invalid number input for formatting:", number);
    return number; // Trả lại nguyên giá trị nếu không phải số
  }
  return Number(num.toFixed(2)).toLocaleString("en-US"); // Làm tròn đến 2 chữ số thập phân và định dạng
}
