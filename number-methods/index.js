// Number method have some useful method
// 1. toFixed
// 2. toExponential
// 3. toLocaleString
// 4. toString
// 5. toPrecision
// 6. isInteger
// 7. isNaN

let angka = 123455.789;
console.log(angka.toFixed(2)); // 123455.79
console.log(angka.toExponential(0)); // 1.23456e+5
console.log(
  angka.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  })
); // Rp 123.456,79
console.log(angka.toString()); // 123455.789

console.log(angka.toPrecision(2)); // 123.46

console.log(Number.isInteger(angka)); // false

const result = 0 / 0;
const nanForString = Number("misbah");
console.log(Number.isNaN(result)); // true
console.log(Number.isNaN(nanForString)); // true
