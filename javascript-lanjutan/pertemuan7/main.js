// function declaration
// function test() {
//     return `hello world`;
// }
// console.log(test());


// function ekspression
// let salam = function() {
//     return `Assalamualaikum wr, wb`;
// }

// console.log(salam());


// arrow function
// let salam = () => { return `Assalamualaikum wr, wb`; }

// ini bisa dipersingkat seperti ini
// let salam = () => `Assalamualaikum wr, wb`;

// console.log(salam());




// studi kasus sederhana

// let mahasiswa = ['misbah', 'azka sofa nugraha', 'azki sofa nugraha'];
// let jmlhMahasiswa = mahasiswa.map(function(nama) {
//     return nama.length;
// })

// console.table(jmlhMahasiswa)

// kita ubah return nya menjadi object

// let mahasiswa = ['misbah', 'azka sofa nugraha', 'azki sofa nugraha'];

// let jmlhMahasiswa = mahasiswa.map(nama => ({ nama: nama, jmlh: nama.length }));
// console.log(jmlhMahasiswa)