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

export function formatPrice(price, fractionDigits = 2) {
  const formatedPrice = (price / 100000).toLocaleString("en-US", {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
  return formatedPrice;
}

export function formatVoucher(voucher) {
  const formatedVoucher = voucher?.toLocaleString("en-US", {
    maximumFractionDigits: 0,
  });

  return formatedVoucher;
}

export function roundingNumber(number) {
  const lengthOfNumber = number.toString().length;
  const dividedNumber = Math.pow(10, lengthOfNumber - 1); // Math.floor là hàm lũy thừa dựa trên số mũ và cơ số cho trước (cơ số 10, số mũ: lengthOfNumber - 1)

  const roundedNumber = Math.floor(number / dividedNumber) + "k";

  return roundedNumber;
}

export function getCurrentDate() {
  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0 nên cần +1
  let year = currentDate.getFullYear();

  // Định dạng ngày tháng năm thành chuỗi
  let formattedDate = day + "." + month + "." + year;
  return formattedDate;
}

export function getIntegerPart(number) {
  const getNumber = Math.trunc(number);

  return getNumber;
}

export function getDecimalPart(number) {
  const getNumber = number.toFixed(1);

  return getNumber;
}

export function getIntegerAndDecimalPart(number) {
  const lengthOfNumber = number.toString().length;
  const lengthOfTen = Math.pow(10, lengthOfNumber - 1);
  const getNumber = number / lengthOfTen;
  const result = getNumber.toFixed(1) + "k";

  return result;
}
