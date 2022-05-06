// object 

// object literal

// const mahasiswa = {
//     nama: 'misbah',
//     npm: 21552011178,
//     energi: 10,
//     makan: function() {
//         return `saya ${this.nama}, makan 1 kali`;
//     }
// }


// function ekspresion
// const mahasiswa = function(nama, npm) {
//     let data = {};
//     data.nama = nama;
//     data.npm = npm;
//     return data;
// }


// function ekspresion whit prototype

// const Mahasiswa = function(nama, alamat) {
//     this.nama = nama;
//     this.alamat = alamat;
// }

// Mahasiswa.prototype.makan = function() {
//     return `makan-makan`;
// }


// // constructor function

// const Mahasiswa = function(nama, nrp) {
//     this.nama = nama;
//     this.nrp = nrp;
//     this.makan = () => {
//         return `hai`;
//     }
// }

// class in javascript

// class Mahasiswa {
//     constructor(nama, npm) {
//         this.nama = nama;
//         this.npm = npm;
//     }
//     makan() {
//         return `makan makan`;
//     }
// }



// execution context

// hoisting
// console.log(nama)
// var nama = 'misbah';
// console.log(makan);
// function makan () {
//     console.log(nama);
//     var nama = 'udin';
// }


// closure
// function init() {
//     let angka = 1;
//     // innerfunction
//     function tampilkanAngka() {
//         console.log(angka);
//     }
//     tampilkanAngka();
// }
// init();

// function tes() {
//     function tampilkanPesan(pesan) {
//         console.log(pesan);
//     }
//     return tampilkanPesan;
// }

// let jalankanFungsi = tes();
// jalankanFungsi('tes');

// function ucapkanSalam(waktu) {
//     return function(nama) {
//         return `Halo ${nama}, selamat ${waktu}`;
//     }
// }


// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatMalam = ucapkanSalam('malam');

// selamatMalam('misbah');







// arrow function 

// let makan = () => {
//     return `makan-makan`;
// }


// this pada arrow function

// const testes =  {
//     nama: 'misbah',
//     npm: 21552011178,
//     makan: () => {
//         console.log(this);
//     }

// }


// const Mahasiswa = function(nama, npm) {
//     this.nama = nama;
//     this.npm = npm;
//     this.see = () => {
//         return `halo aku ${this.nama}`;
//     }
// }

// let misbah = new Mahasiswa('misbah', 21552011178);




// const testes =  {
//     nama: 'misbah',
//     npm: 21552011178,
//     makan: () => {
//         console.log(this);
//     }
// }




// high order function

// function count(number) {
//     let hasil = number;
//     console.log(hasil);
// }
// function akumulasi(a, b) {
//     return (a + b);
// }

// latihan high order function dengan method map, filter, reduce

// tanpa filter
// const angka = [1,2,3,5,7,9,1,3,53,2,4];
// let angkaBaru = [];

// for (let i = 0;i<angka.length; i++) {
//     if (angka[i] >= 3) {
//         angkaBaru.push(angka[i]);
//     }
// }

// pake method filter
// const angka = [1,2,3,5,7,9,1,3,53,2,4];
// const newAngka = angka.filter(a => {
//     if (a >= 3) {
//         return a;
//     }
// })


// pake method map
// const angka = [1,2,3,5,7,9,1,3,53,2,4];
// const newAngka = angka.map(a => a * 2);


// function reduce
// const angka = [1,2,3,5,7,9,1,3,53,2,4];
// const newAngka = angka.reduce((accumulator, currentValue) => {
//     return currentValue + accumulator;
// })


// method chaining
// 1. pilih angka yang lebih besar dari 5
// 2. kalikan dengan 3
// 3. akumulasikan nilainya

// const angka = [1,2,3,5,7,9,1,3,53,2,4];
// const newAngka = angka.filter(a => a >= 5)
//     .map(a => a * 3)
//     .reduce((acc, cur) => acc + cur);


// const mhs = {
//     nama: 'misbah',
//     npm: 21552011178,
//     matkul: [
//         'literasi digital',
//         'algoritma dan pemrograman',
//         'metode numerik'
//     ]
// }


// const el = `
//     <div class="mhs">
//         <h2>Nama : ${mhs.nama}</h2>
//         <h2>Npm : ${mhs.npm}</h2>
//         <h3>Matkul :</h3>
//         ${mhs.matkul.map(m => `<ul><li>${m}</li></ul>`).join('')}
//     </div>
// `;

// document.body.innerHTML = el;






const select = function (el, all = false) {
    el = el.trim();
    if (all) {
        return [...document.querySelectorAll(el)];
    } else {
        return document.querySelector(el);
    }
}


const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
}

/*
    navbar active with scroll
*/
let list = select('.list__item', true);
const navbarLinkActive = () => {
    let position = window.scrollY + 200
    list.forEach(lis => {
        if (!lis.hash) return
        let section = select(lis.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            lis.classList.add('active')
        } else {
            lis.classList.remove('active')
        }
        console.log(section.offsetHeight);
    });
}

window.addEventListener('load', navbarLinkActive)
onscroll(document, navbarLinkActive);








































