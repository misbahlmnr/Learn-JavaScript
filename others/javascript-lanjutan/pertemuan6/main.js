// function init() {
//     // let nama = 'misbah';

//     // function tampil nama disebut closure karena membutuhkan data dari parent scope nya
//     return function(nama) {
//         console.log(nama);
//     }
// }
// let a = init();
// a('udin');

// alasan menggunakan closure
// 1. untuk membuat function factories
// 2. untuk membuat private method

// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatMalam = ucapkanSalam('malam');

// // selamatPagi('misbah')
// // selamatMalam('munir')
// console.dir(selamatMalam)

// pada saat di assegment ke variable add, inner functionnya otomatis di jalankan
// let add = (function () {
//     let counter = 0;
//     return function(){
//         return ++counter;
//     }
// })();

// console.log(add());
// console.log(add());
// console.log(add());
