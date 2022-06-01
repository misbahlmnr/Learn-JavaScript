// rest parameter
// merupakan representasi argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array


// function myFunction(...args) {
//     return args;
// }

// console.log(myFunction(1,2,3,4,5));


// function jumlahkan(...angka) {
//     let total = 0;

//     for (const a of angka) {
//         total += a;
//     }
//     return total;
// }

// console.log(jumlahkan(1,2,3,4,5))


// kita bisa ringkas kan kodingan berikut
// function jumlahkan(...angka) {
//     return angka.reduce((a, c) => a + c)
// }

// console.log(jumlahkan(1,2,3,4,5))



// kita juga bisa menggunakan rest parameter pada saat array destructuring
// const kelompok = ['misbah', 'ujang', 'yusuf', 'adam', 'udin'];

// const [ketua, wakilketua, ...anggota] = kelompok;
// console.log(anggota)



// object distructuring
// const kelompok = {
//     ketua: 'misbah',
//     wakil: 'yusuf',
//     anggota: 'ujang',
//     anggota2: 'udin'
// }

// const {ketua, wakil, ...anggota} = kelompok;
// console.log(anggota)




// melakukan filtering pada parameter yang dikirimkan

function filterBy(types, ...values) {
    
    // if (types === 'number') {
    //     return values.filter(v => (typeof v == 'number') ? v : '');
    // } else if (types === 'string') {
    //     return values.filter(v => (typeof v == 'string') ? v : '');
    // } else if (types === 'boolean') {
    //     return values.filter(v => (typeof v == 'boolean') ? v : '');
    // } else if (types === 'object') {
    //     return values.filter(v => (typeof v == 'object') ? v : '');
    // } else {
    //     return `tidak ada tipe data`;
    // }


    return values.filter(v => typeof v === types);
}

console.log(filterBy('number', 1, 'udin', true, 3, 5, 'false', true));