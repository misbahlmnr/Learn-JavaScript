// destructering berpengaruh pada function


// function penjulahanPerkalian(a, b) {
//     return [a + b, a * b];
// }

// const jumlah = penjulahanPerkalian(2,3)[0];
// const kali = penjulahanPerkalian(2,3)[1];
// console.log(jumlah)
// console.log(kali)

// yang diatas sedikit repot, jadi kita bisa memanfaatkan fungsi destructering

// const [jumlah, kali] = penjulahanPerkalian(2,3)
// console.log(jumlah)
// console.log(kali)

// function kalkulasi(a, b) {
//     return [a + b, a * b, a - b, a / b];
// }

// const [tambah, kali, kurang, bagi = 'bagi tidak ada'] = kalkulasi(2,3)

// console.log(bagi)

// problem codingan yang diatas dikarenakan kita tidak bebas memberikan nama, karena nama harus sesuai dengan urutan
// jadi urutan berperan penting dalam distructering function

// agar urutan tidak berpengaruh dalam distructering function maka harus menggunakan object sebagai return valuenya

// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     };
// }

// const {tambah, bagi, kurang, kali} = kalkulasi(5, 9)
// console.log(kali);

// Destructering function argument
// const mhs1 = {
//     nama: 'misbah', 
//     umur: 19,
//     email: 'misbahx.id@gmail.com',
//     nilai: {
//         tugas: 80,
//         uts: 80,
//         uas: 75
//     }
// }
// sebelum menggunakan destructering

// kita bisa pecah di parameter awal
// function cetakMhs (nama, umur) {
//     return `Halo nama saya ${nama}, umur saya baru ${umur} tahun`;
// }

// console.log(cetakMhs(mhs1.nama, mhs1.umur));


// kita bisa pecah di return valuenya
// function cetakMhs (mhs) {
//     return `Halo nama saya ${mhs.nama}, umur saya baru ${mhs.umur} tahun`;
// }

// console.log(cetakMhs(mhs1));


// sudah menggunakan destructering function

// function cetakMhs ({ nama, umur}) {
//     return `Halo nama saya ${nama}, umur saya baru ${umur} tahun.`;
// }

// console.log(cetakMhs(mhs1));

// menambahkan untuk menampilkan nilai
// function cetakMhs ({ nama, umur, nilai: {tugas, uts, uas}}) {
//     return `Halo nama saya ${nama}, umur saya baru ${umur} tahun. Nilai tugas saya ${tugas}`;
// }
    
// console.log(cetakMhs(mhs1));


// let a = "misbah hulmunir";
// let [namadepan, namabelakang] = a.split(' ');
<<<<<<< HEAD
// console.log(namabelakang)
=======
// console.log(namabelakang)



let Details = function(nama, jabatan, umur) {
    this.nama = nama;
    this.jabatan = jabatan;
    this.umur = umur;
}

Details.prototype.info = function () {
    return `hai`;
}

let misbah = new Details('misbah', 'programer', 19);


const Dosen = {
    nama: 'Misbah',
    umur: 20,
    email: 'misbahx.id@gmail.com',
    mengajar: {
        kampus1: 'Sekolah Tinggi Teknologi Bandung',
        kampus2: 'Stimik',
        kampus3: {
            hehe: 'tulus'
        }
    }
}

function cetakDosen({nama, umur, mengajar: {kampus1, kampus2, kampus3: {hehe}}}) {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
}

console.log(cetakDosen(Dosen));
>>>>>>> defd95ebaf9b17d8670d7a8816a745998cc9e2ba
