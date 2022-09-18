// closure merupakan konbinasi antara function dan lingkungan lexical scope di dalam function tersebut
// w3scholl sebuah function yang mempunyai akses ke parent scope nya, meskipun parent scope nya udah selesai di exsekusi


function closure() {
    let nama = 'misbah';

    // inner function
    function tampilNama() {
        console.log(nama);
    }
    tampilNama()
}
closure();


// alasan menggunakan closure?
// 1. untuk membuat function factory
// 2. untuk membuat private method

// contoh function factory
function ucapkanSalam(waktu){
    return function(nama){
        console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
    }
}

let selamatPagi = ucapkanSalam('pagi');
let selamatSiang = ucapkanSalam('siang');
let selamatMalam = ucapkanSalam('malam');

selamatPagi('misbah');


// private method
let counter = 0;
let add = function() {
    return ++counter;
};

console.log(add()); // 1
console.log(add()); // 2
console.log(add()); // 3

// ini gaada masalah, cuma pada saat ditengah jalan / dicode line berapa, ada yang menambahkan seperti ini
let counter = 0;
let add = function() {
    return ++counter;
};

counter = 10;

console.log(add()); // 11
console.log(add()); // 12
console.log(add()); // 13

// ini terjadi karena hoisting

// solusinya bisa dengan menyimpan variable counter ke local context function
let add = function() {
    let counter = 0;
    return ++counter;
};

console.log(add()); // 1
console.log(add()); // 1
console.log(add()); // 1

// tapi hasilnya jadi satu semua, karena setiap function di panggil, counter di set jadi 0 + 1 = 1

// oleh sebab itu kita bisa menggunakan closure
let counter = 0;
let add = function() {
    return function() {
       return ++counter;
    }
};

let a = add();

console.log(a()); // 1
console.log(a()); // 2
console.log(a()); // 3

// sekarang sukses, karena counter yang di acu adalah di function parent nya :)

// tips dan cara agar kita tidak perlu mendefinisikan dulu function add ke variable a, atau cara agar function di jalankan penuh, kita bisa 
// membungkusnya dengan imadietli infoc function
let counter = 0;
let add = (function() {
    return function() {
       return ++counter;
    }
})();

console.log(add()); // 1
console.log(add()); // 2
console.log(add()); // 3
