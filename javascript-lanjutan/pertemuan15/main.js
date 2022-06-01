/* 
destructiring assigment
merupakan expression pada javascript yang membuat kita dapat memborkar nilai dari array / object kedalam variable terpisah.

contoh
*/
// jika array
// const angkaLatin = ['satu', 'dua', 'tiga'];
// const [a, b, c] = angkaLatin;

// console.log(a);

// // jika object
// const me = {
//     nama: 'misbah',
//     umur: 19,
//     email: 'misbahx.id@gmail.com'
// }
// const {nama, umur, email} = me;

// console.log(nama);


// contoh lain destructuirng assigment
// const salam = ['halo', 'nama', 'saya', 'misbah'];
// const [satu, dua, tiga, empat] = salam;
// console.log(satu);

// skip items
// const salam = ['halo', 'nama', 'saya', 'misbah'];
// const [satu, , , empat] = salam;
// console.log(dua);

// tukar items
// let a = 5;
// let b = 10;
// console.log(a)
// console.log(b)
// [a, b] = [b, a];
// console.log(a)
// console.log(b)


// return value pada function
// function coba () {
//     return [1, 2];
// }
// const [a, b] = coba();

// console.log(a)

// akali jika kita tidak tahu berapa elemen di dalam array dengan Rest Parameter
// const [a, b, c] = [1,2,3,4,5];

// const [...values] = [1,2,3,4,5];
// values.forEach(v => {
//     console.log(v);
// })

// destructering Object

// const mhs = {
//     nama: 'misbah', 
//     umur: 19
// }

// const {nama, umur} = mhs;
// console.log(nama);

// atau jika object nya sederhan bisa seperti ini
// ({nama, umur} = {nama:'misbah', umur:19});
// console.log(nama)


// assign ke nama variable baru
// const mhs = {
//     nama: 'misbah', 
//     umur: 19
// }

// const {nama: n, umur: u} = mhs;
// console.log(u);



// memberikan nilai default
// const mhs = {
//     nama: 'misbah', 
//     umur: 19,
//     email: 'misbahx.id@gmail.com'
// }

// const {nama: n, umur: u, email = 'reoneh4x0r@gmail.com'} = mhs;
// console.log(email)


// mengambil field pada object, yang dimana objectnya dikirimkan menjadi parameter pada sebuah function

// ini masih belum menggunakan destructering assigment
// contoh data barang
// const barang1 = {
//     id: 321,
//     nama_barang: 'kursi',
// }

// function getIdBarang(barang) {
//     return barang.id;
// }

// idBarang = getIdBarang(barang1);
// console.log(idBarang)


// sudah menggunakan destructuring assigment
// const barang1 = {
//     id: 321,
//     nama_barang: 'kursi',
// }

// function getIdBarang({ id }) {
//     return id;
// }

// idBarang = getIdBarang(barang1);
// console.log(idBarang)