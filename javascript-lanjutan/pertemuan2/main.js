// function declaration
// function Mahasiswa(nama, energi) {
//     let data = {};
//     data.nama = nama;
//     data.energi = energi;
//     data.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
//     return data;
// }

// const misbah = Mahasiswa('misbah', 10);


// biar gak banyak properti maka anda harus membuat object yang lain untuk membungkus method

let methodMahasiswa = {
    makan : function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`)
    }
    tidur: function (jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, selamat tidur!`);
    }
    main: function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat main!`);
    }
}


function mahasiswa(nama, energi) {
    let data = Object.create(methodMahasiswa);
    data.nama = nama;
    data.energi = energi;
    return data;
}

let misbah = mahasiswa('misbah', 10);

// tapi ini masih belum efektif karena yang kita butuhkan cuma object mahasiswa, bukan 2 2 nya sama object methodMahasiswa, untuk lebih efisien kita lanjutkan di pertemuan ke 3
