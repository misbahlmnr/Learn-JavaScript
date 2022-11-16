// for...in dan for...off

// for...of merupakan sebuah looping yang bisa mengulang atau menelusuri object object yang iterable
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

// for (let i = 0; i < mhs.length; i++) {
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



// const mhs = ['misbah', 'udin', 'ujang'];

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
// function penjumlahanAngka() {
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
// }


// console.log(penjumlahanAngka(1,2,3,4,5))




// for ..in biasanya digunakan untuk melooping properti pada object

const mhs = {
    nama: 'misbah',
    umur: 20,
    email: 'misbahx.id@gmail.com'
}
// tidak bisa menggunakan for .. off karena bukan object yang iterable
// for( m of mhs) {
//     console.log(m)
// }

// tapi harus menggunakan for .. in
for (m in mhs) {
    console.log(mhs[m])
}