// asynchronous javascript

// apa itu javascript?
// javascript is a single thread, non blocking, asyncronous and concurent language

// apa itu single thread?
// thread = urutan eksekusi kode yang dapat dilakukan secara bebas satu sama lain. jadi javascript hanya dapat menjalankan satu fungsi dalam satu waktu

// non blocking
// ketika mengerjakan satu hal, kalopun belum beres, itu bisa untuk mengerjakan kedepannya.

// syncronous

// asyncronous

// web untuk lebih memahami asyncronous 
// http://latentflip.com/loupe/



// callback
// apa itu callback?
// callback merupakan sebuah functio yang dikirimkan sebagai parameter di function yang lain

// syncronous callback
// function halo(nama) {
//     alert(`halo ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('masukan nama');
//     callback(nama);
// }

// tampilkanPesan(halo);
// tampilkanPesan(nama => alert(nama));

const data = [
    {
        nama: 'misbah',
        umur: 20,
        email: 'misbahx.id@gmail.com'
    },
    {
        nama: 'adia',
        umur: 19,
        email: 'adia@gmail.com'
    },
    {
        nama: 'ical',
        umur: 21,
        email: 'icalmrx@gmail.com'
    }
];



console.log('satu');

// const hello = (sapa, aksi) => {
//     aksi(`${sapa}, misbah`);
// }
// hello('halo', console.log);

setTimeout(() => {
    console.log('dua');
},0)

console.log('tiga');






// const misbah = "misbahdevs";
// const a = [...misbah];

// a.forEach(h => console.log(h))

// function Filter(string, expresi) {
//     string.forEach(e => {
//         if (e.includes('<')) {
//             e.replace('heker')
//             return e;
//         }
//     });
// }

// console.log(Filter`<hai`)

// syncronous callback
// console.log('mulai')
// function halo(nama) {
//     alert(nama)
// }

// function tampilkanPesan(callback) {
//     let nama = prompt('masukan nama anda: ');
//     callback(`Halo, ${nama}`);
// }

// tampilkanPesan(halo)

// console.log('selesai')



// asyncronous callback
// contoh ajax dengan vanila js

// console.log('mulai');
// function getDataMahasiswa(url, success, error) {
//     let xhtr = new XMLHttpRequest();
//     xhtr.onreadystatechange = function() {
//         if (xhtr.readyState === 4) {
//             if (xhtr.status === 200) {
//                 success(xhtr.response);
//             } else {
//                 error()
//             }
//         }
//     }

//     xhtr.open('get', url);
//     xhtr.send();
// }
// getDataMahasiswa('http://127.0.0.1:5500/mahasiswa.json', result => console.log(JSON.parse(result)), e => console.log(e))
// console.log('selesai')


// contoh ajax dengan jquery
// console.log('mulai');
// $.ajax({
//     url : 'mahasiswa.json',
//     success : result => console.log(result),
//     error : e => console.log(e)
// })
// console.log('selesai')


// $.ajax({
//     url: 'http://127.0.0.1:5500/mahasiswa.json',
//     success: result => result.forEach(r => console.log(r.nama)),
//     error: e => console.log(e)
// })

