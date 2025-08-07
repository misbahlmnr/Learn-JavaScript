// template literals

// 1. menggunakan `` backtick
// 2. multi line string
// 3. embedded expression
// 4. HTML fragments
// 5. Expression Interpolations
// 6. Tag Template

// contoh penggunaan template literals

// `string literals`;

// `string 1  // multiline string
// string 2
// string 3`;

// `string ${expression}` // embedded expression

// tag `string template literals ${expression}` // tagged template

// multi line string

// console.log('testes1\ntestes2');

// jika tidak menggunakan string literals itu sedikit repot karena harus menambahkan \n agar string menjadi kebawah

// tapi jika menggunakan string literal anda hanya perlu mengetikan seperti dibawah ini

// console.log(
//     `string 1
// string 2`
// )

// multi line string HTML Fragment
// contoh codingannya

// const mhs = {
//     nama: 'misbah',
//     umur: 20,
//     npm: 21552011178,
//     email: 'misbahx.id@gmail.com'
// }


// let elemen = '';
// elemen += '<div class="mhs">';
// elemen += '<h2>' + mhs.nama + '</h2>';
// elemen += '<span class="nrp">' + mhs.nrp + '</span>';
// elemen += '</div>';

// jika tanpa menggunakan template literals sedikit repot ya, beda jika kita menggunakan template literal

// let el = '';
// el += `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nrp">${mhs.npm}</span>
// </div>`;

// menjadi lebih simple kan jika menggunakan template literals :)


// embedded expression

// const nama = 'misbahulmunir';
// console.log(`Halo nama saya ${nama}`);

// jika kita menggunakan template literals, kita bisa langsung menambahkan epresi di string nya

// tambah kita juga bisa menambahkan interpolation expression di stringnya / bisa melakukan operasi matematik langsung
// let a = 10;
// let b = 20;

// console.log(`jika ${a} + ${b} = ${a + b}`);


// kita juga bisa menambahkan operator ternary di string literal
// let a = 3;
// console.log(`apakah a lebih besar dari 5? ${(a >= 5) ? true : false}`)


// HTML Fragments

// console.log(el)