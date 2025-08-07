// konsep this pada arrow function


// const Mahasiswa = function(nama, umur) {
//     this.nama = nama;
//     this.umur = umur;
//     this.sayHhello = function() {
//         return `Halo ${this.nama}, selamat malam`;
//     }
// }

// let misbah = new Mahasiswa('misbah', 20);





// arrow function tidak ada context this

// jadi ketika kita menggunakan this maka dia akan mencari ke lexical scope / keluar scope
// const Mahasiswa = function(nama, umur) {
//     this.nama = nama;
//     this.umur = umur;
//     this.sayHhello = () => {
//         console.log(this.nama)
//     }
// }

// let misbah = new Mahasiswa('misbah', 20)



// object literal
// const testes = {
//     nama: 'misbah',
//     umur: 33,
//     sayHello: function () {
//         console.log(`Nama saya ${this.nama}`);
//     }
// }




// ketika sayHello menggunakan arrow function maka sangat susah untuk mendapatkan datanya contohnya sperti dibawah
// const testes = {
//     nama: 'misbah',
//     umur: 33,
//     sayHello: () => {
//         console.log(`Nama saya ${this.nama}`);
//     }
// }

// ini undefined karena di arrow function tidak ada context this 


// const Mahasiswa = function () {
//     this.nama = 'misbah';
//     this.umur = 20;
//     this.sayHello = () => {
//         console.log(`Halo ${this.nama}`);
//     }

//     setInterval(function() {
//         console.log(this.nama)
//     }, 500)
// }

// let misbah = new Mahasiswa();

// alasan undefined karena didalam function setInterval dia akan mengecek apakah ada variabel this.nama di local, ketika tidak ada dia akan langsung mencari ke luar, jadinya bakal undefined dan agar bisa ke data yang dimaksud kita bisa menggunakan arrow function

const Mahasiswa = function () {
    this.nama = 'misbah';
    this.umur = 20;
    this.sayHello = () => {
        console.log(`Halo ${this.nama}`);
    }

    setInterval(() => {
        console.log(this.nama);
    }, 500)
}

let misbah = new Mahasiswa();




















