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
//     .then(response => console.log(response))


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


const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'avengers',
            aktor: 'udin, ujang',
            tahun: 2016
        }])
    }, 1000)
})

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Bandung',
            suhu: 26,
            status: 'Cerah berawan'
        }])
    })
})

// film.then(response => console.log(response))
// cuaca.then(response => console.log(response))

Promise.all([film, cuaca])
    .then(response => {
        const [film, cuaca] = response;
        console.log(film)
        console.log(cuaca)
    })