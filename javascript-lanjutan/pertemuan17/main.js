// for...in dan for...off
// for...of merupakan sebuah looping yang bisa mengulang atau menelusuri object object yang iterable

const select = (el, all=false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)];
    } else {
        return document.querySelector(el);
    }
}

// object yang iterable
/*
1. String
2. Array
3. Argument / Node list
4. Typed Array
5. Map
6. Set
7. User defind iterable
*/

// object yang unerable
/* 
1. Object
*/

// for...of

// const mhs = ['misbah', 'udin', 'ujang'];

// for (let i = 0;i < mhs.length; i++) {
//     console.log(mhs[i])
// }

// mhs.forEach(m => console.log(m))

// for( const m of mhs) {
//     console.log(m)
// }


// string
// const nama = "misbah";
// for (const n of nama) {
//     console.log(n)
// }



const mhs = ['misbah', 'udin', 'ujang'];

// mhs.forEach((m, i) => {
//     console.log(`${m} merupakan mahasiswa ke ${i + 1}`);
// })

// secara default kalo foreach dia bisa menambahkan index

// berbeda dengan for...of dia tidak mempunyai index
// for (const m of mhs) {
//     console.log(m)
// }
// jika kita memaksakan untuk menambahkan index, maka terjadi error

// tapi jika kalian tetap ingin menggunakan for untuk looping kalin, bisa gunakan cara berikut
// for (const [i,m] of mhs.entries()) {
//     console.log(`${m} merupakan mahasiswa ke ${i + 1}`);
// }



// select nodeslist
// const list = select('.list', true);
// list.forEach(l => console.log(l.textContent));

// for( l of list) {
//     console.log(l.textContent)
// }


// argument
function penjumlahanAngka() {
    // secara default nilai parameter yang tidak ditangkap oleh argumen function akan masuk ke variabel arguments
    // console.log(arguments)

    // misalnya disini kita coba untuk menambahkan semua nilai argument
    // arguments.forEach(a => console.log(a));
    // dan akan tidak bisa dikarenakan foreach merupakan function prototype array

    // arguments.reduce((a, i) => a + i);
    // ini juga sama tidak bisa dikarenakan reduce merupakan function prototype array

    // tapi akan berhasil jika menggunakan for (of)
    // let jumlah = 0;
    // for(a of arguments) {
    //     jumlah += a;
    // }
    // return jumlah;
}


// console.log(penjumlahanAngka(1,2,3,4,5))




// for ..in biasanya digunakan untuk melooping properti pada object


// const mhs2 = {
//     nama: 'misbah',
//     umur: 19,
//     email: 'misbahx.id@gmail.com'
// }


// mhs2.forEach(p => {
//     console.log(p)
// });


// for(p in mhs2) {
//     console.log(mhs2)
// }



// constructor function
// let Mahasiswa = function (nama,umur, email) {
//     this.nama = nama;
//     this.umur = umur;
//     this.email = email;
// }

// function deklaration
// let mahasiswa = function (nama, umur, email) {
//     let data = {}
//     data.nama = nama;
//     data.umur = umur;
//     data.email = email;

//     return data;
// }

// Mahasiswa.prototype.makan = function () {
//     return `${this.nama} lapar :(`
// }

// let misbah = mahasiswa('misbah', 19, 'misbahx.id@gmail.com');






















































// const select = (el, all=false) => {
//     el = el.trim()
//     if (all) {
//         return [...document.querySelectorAll(el)];
//     } else {
//         return document.querySelector(el);
//     }
// }

// // const eventClick = (el, linstener) => {
// //     el.addEventListener('click', linstener);
// // }

// // latihan soal javascript

// // const getDiskon = jb => (jb >= 3) ? '10%' : '-';


// // const getHargaBayar =  (db, tb) => (db === '10%') ? tb - (tb * 10 / 100) : tb;

// // // latihan
// // const namaBarang = select('input[name=nama_barang]', false),
// //     hargaBarang = select('input[name=harga_barang]', false),
// //     jumlahBarang = select('input[name=jumlah_barang]', false),
// //     totalBarang = select('input[name=total_barang]', false),
// //     diskonBarang = select('input[name=diskon_barang]', false),
// //     bayarBarang = select('input[name=bayar_barang]', false);


// // const btnProses = select('.proses', false),
// //     btnReset = select('.reset', false);

// // const activeProses = () => {
// //     let nb = namaBarang.value;
// //     let hb = hargaBarang.value;
// //     let jb = jumlahBarang.value;
// //     let tb = (hb * jb)
// //     let db = getDiskon(jb)
// //     let bb = getHargaBayar(db, tb);
    
// //     namaBarang.value = nb;
// //     hargaBarang.value = hb;
// //     jumlahBarang.value = jb;
// //     totalBarang.value = tb;
// //     diskonBarang.value = db;
// //     bayarBarang.value = bb;
// // }

// // const activeReset = () => {
// //     let form = select('form', false);
// //     form.reset();
// // }

// // eventClick(btnProses, activeProses);
// // eventClick(btnReset, activeReset);



// // latihan javascript kedua

// const namaBarang = select('[name=cars]', false),
//     jumlahBarang = select('input[name=jumlah_barang]', false),
//     hargaBarang = select('input[name=harga_barang]', false),
//     totalBarang = select('input[name=total_barang]', false),
//     btnProses = select('.proses', false),
//     btnReset = select('.reset', false);

// const getNamaBarang = selected => {
//     if (selected === '1') {
//         return `Kipas Angin`;
//     } else if (selected === '2') {
//         return `Laptop`;
//     } else {
//         return `Handphone`;
//     }
// }

// const activeProses = () => {
//     let selected = namaBarang.value;
//     let nb = getNamaBarang(selected);
//     let hb = hargaBarang.value;
//     let jb = jumlahBarang.value;
//     let tb = (hb * jb);

//     jumlahBarang.value = jb;
//     hargaBarang.value = hb;
//     totalBarang.value = tb;
// }

// eventClick(btnProses, activeProses);































































