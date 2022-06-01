// asynchronous javascript
 

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


$.ajax({
    url: 'http://127.0.0.1:5500/mahasiswa.json',
    success: result => result.forEach(r => console.log(r.nama)),
    error: e => console.log(e)
})

