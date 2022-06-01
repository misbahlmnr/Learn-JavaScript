// async / asyncronous function merupakan sebuah function yang bekerja sebagai function yang asyncronous yang mengembalikan (implisit) promise sebagai return value. tapi cara penulisan code nya standart atai syncronous

// sebuah asyncronous function dapat mempunyai keyword await didalamnya
// keyword await ini digunakan untuk memberhentikan sementara exsekusi function sambil menunggu promise selesai.



// function cobaPromise() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve([{
//                 title: "avengers",
//                 actors: "udin, ujang, yusuf, adam",
//                 rilis: 2016
//             }])
//         }, 2000)
//     })
// }

// const tes = cobaPromise()
// console.log(tes)

// async function getValue() {
//     const tes = await cobaPromise();
//     console.log(tes)
// }





function cobaPromise() {
    return new Promise((resolve, reject) => {
        let waktu = 5000;
        if ( waktu < 5000) {
            setTimeout(() => {
                resolve('sip jalan')
            }, waktu)
        } else {
            reject('kelamaan');
        }
    })
}

// tes
//     .then(coba => console.log(coba))
//     .catch(coba => console.log(coba))


// let data = cobaPromise();
// console.log(data)

coba()

// jika ingin menampilkan error dengan tidak menggunakan then() dan catch()
async function coba() {
    try {
        let data = await cobaPromise()
        console.log(data)
    } catch(e) {
        console.log(e)
    }
}


