// function yang disimpan sebagai argumen disebut callback
// sedangkan function yang mempunyai callback disebut sebagai high order function


// function hello (waktu, test) {
//     console.log(`Halo, selamat ${waktu}`);
//     test();
// }

// function selesai() {
//     alert(`hore akhirnya selesai juga`);
// }


// hello('pagi', selesai);


// setInterval dan juga setTimeOut merupakan high order function karena terdapat function sebagai argumen (calback)

// setInterval(function(){
//     console.log(`hello world`)
// }, 1000)

// setTimeout(function(){
//     console.log(`testes`)
// }, 5000);

// pada saat kita memanipulasi DOM juga, contoh event itu juga merupakan high order function karena terdapat callback di function tersebut

// const button = document.querySelector('.button');

// button.addEventListener('click', function() {
//     console.log(`tombol di clicked`);
// })



// ketika function memiliki return value berupa function juga, itu bisa disebut high order function, contohnya seperti dibawah

// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, selamat ${waktu}`);
//     }
// }

// let selamatMalam = ucapkanSalam('malam');
// selamatMalam('misbah')


// alasan kita harus belajar high order function yaitu :
// 1. abstraksi
// agar code kita menjadi lebih simple, karena function itu menyembunyikan kerumitan

// let total = 0, count = 1;
// while (count <= 10) {  
//     total += count;
//     count++;
// }
// console.log(total)

// function logLoop(n) {
//     for (let i = 0; i <= n; i++) {
//         console.log(i);
//     }
// }

// logLoop(100)


// cobalah untuk mengubah sebuah kerumitan dengan function agar menjadi lebih efisien
// function repeat(n, action) {
//     for (let i = 0; i <= n; i++) {
//         action(n);
//     }
// }

// repeat(10, console.log)


// functional programming








let select = (el, all = false) => {
    el = el.trim();
    if (all == true) {
        return [...document.querySelectorAll(el)];
    } else {
        return document.querySelector(el);
    }
}

if (window.scrollY > 100) {
    alert('works')
}
console.log('gagal')






