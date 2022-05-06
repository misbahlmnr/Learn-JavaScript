// Object methodMahasiswa
// let methodMahasiswa = {
//     makan : function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },
//     tidur: function(jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     },
//     main: function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat main!`);
//     }
// }

// function Mahasiswa (nama, energi) {
//     let data = Object.create(methodMahasiswa);

//     data.nama = nama;
//     data.energi = energi;

//     return data;
// }

// let misbah = Mahasiswa('misbah', 10);


// ini masih kurang efektif, kita bisa menggunakan prototype

// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }
// Mahasiswa.prototype.main = function(jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat main!`;
// }
// Mahasiswa.prototype.tidur = function(jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat tidur!`;
// }
// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// }

// let misbah = new Mahasiswa('misbah', 10);


// sebenernya ini udah efektif, dan ini merupakan yang paling efektif, tapi ini susah di baca, jadi kita bisa menggunakan / membungkus semuanya dengan class

class Mahasiswa {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }
    makan(porsi) {
        this.umur += porsi;
        return `saya sudah makan`;
    }
}