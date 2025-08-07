// promise
// apa itu promise?
// promise merupakan sebuah object yang merepresentasikan keberhasilan atau kegagalan dari sebuah event yang asyncronous di masa yang akan datang
// janji itu biasanya ada 2 yaitu 
// janji (terpenuhi / ingkar)
// states (fullfield / rejected / pending)

// fungsi callback ada (resolve / rejected / finally)
// aksi (then / catch)

// contoh pertama
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve(`janji telah ditepati`);
//     } else {
//         reject('ingkar janji');
//     }
// });

// janji1
//     .then(response => console.log(`OK : ${response}`))
//     .catch(response => console.log(`NOT OK : ${response}`));

// contoh kedua
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve(`Janji ditepati`);
//         }, 3000); 
//     } else {
//         setTimeout(() => {
//             reject(`Ingkar Janji`);
//         }, 1000); 
//     }
// });

// janji2
//     .then(response => console.log(response))
//     .catch(response => console.log(response));

// console.log('satu');
// console.log(janji2.then(() => console.log(janji2)));
// console.log('tiga');


// contoh ke 3
const mahasiswa = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            nama: 'misbah',
            npm: 21552011178,
            email: 'misbahx.id@gmail.com'
        }]);
    }, 5000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Bandung',
            temp: 27,
            Kondisi: 'Cerah Berawan'
        }])
    }, 3000)
})


// mahasiswa.then(result => console.log(result));
// cuaca.then(result => console.log(result));


Promise.all([mahasiswa, cuaca])
    .then(result => {
        const [mahasiswa, cuaca] = result;
        console.log(mahasiswa);
        console.log(cuaca);
     });




// $.ajax({
//     url: 'http://www.omdbapi.com/?i=tt3896198&apikey=76618eaa&s=avengers',
//     success: movies => {
//         console.log(movies)
//     },
//     error: e => console.log(e)
// })


// ajax vanilla js
// let xhtr = new XMLHttpRequest();
// xhtr.onreadystatechange = function() {
//     if(xhtr.readyState === 4) {
//         if (xhtr.status === 200) {
//             console.log(JSON.parse(xhtr.response));
//         } else {
//             console.log(xhtr.responseText);
//         }
//     }
// }
// xhtr.open('get', 'http://www.omdbapi.com/?i=tt3896198&apikey=76618eaa&s=avengers')
// xhtr.send();

// fetch
// fetch('http://www.omdbapi.com/?i=tt3896198&apikey=76618eaa&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response.Search));


// let ditepati = true;
// const janji = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('ditepati!')
//     } else {
//         reject('tidak ditepati...')
//     }
// })

// janji
//     .then(response => console.log(response))
//     .catch(response => console.log(response))

// console.log('mulai')
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('ditepati setelah 5 detik...')
//         }, 5000)
//     } else {
//         setTimeout(() => {
//             reject('tidak ditepati setelah beberap waktu...')
//         }, 2000)
//     }
// })

// // console.log(janji2.then(() => console.log(janji2)))
// janji2
//     .finally(() => console.log('ini harus dulu'))
//     .then(response => console.log('hai'))
//     .catch(response => console.log('error'));
// console.log('selesai')


// const film = new Promise(resolve => {
//     setTimeout(() => {
//         resolve([{
//             judul: 'avengers',
//             aktor: 'udin, ujang',
//             tahun: 2016
//         }])
//     }, 1000)
// })

// const cuaca = new Promise(resolve => {
//     setTimeout(() => {
//         resolve([{
//             kota: 'Bandung',
//             suhu: 26,
//             status: 'Cerah berawan'
//         }])
//     })
// })

// film.then(response => console.log(response))
// cuaca.then(response => console.log(response))

// Promise.all([film, cuaca])
//     .then(response => {
//         const [film, cuaca] = response;
//         console.log(film)
//         console.log(cuaca)
//     })


// fetch
// fetch merupakan sebuah function api di javascript advanced yang merupakan asyncronous 

