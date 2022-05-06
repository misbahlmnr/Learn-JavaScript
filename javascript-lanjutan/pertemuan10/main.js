// contoh high order function
// Array.prototype.filter() untuk memfilter
// Array.prototype.map() untuk memetakan
// Array.prototype.reduce(); untuk menggabungkan

const angka = [1, 3, 5, 8, 11, 14, 8, 2];

// mencari angka yang lebih besar dari tiga
// menggunakan looping
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }


// pake looping juga bisa, hanya saja codingannya menjadi lebih banyak dan kurang beres, makanya kita bisa memanfaatkan function buat mempersingkatnya

// const newAngka = angka.filter(a => a >= 3);
// const newAngka = angka.map(a => a * 2)

// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue)


// method caining, yaitu kita bisa menggabungkan filter, map, dan reduce dalam 1 code eksekusi, contoh seperti codingan dibawah

// cari angka yang lebih besar dari 5
const newAngka = angka.filter(a => a >= 14)
    .map(a => a * 3)
    .reduce((acc, curr) => acc + curr);


console.log(newAngka)