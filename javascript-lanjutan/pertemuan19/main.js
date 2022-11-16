// rest parameter
// merupakan representasi argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array

// function myFunction(...args) {
//     return args;
// }

// console.log(myFunction(1,2,3,4,5));

// function jumlahkan (...angka) {
    // cara pertama
    // return angka.reduce((a, i) => a + i);

    // cara kedua
    // let total = 0;
    // for(const a of angka) {
    //     total += a;
    // }
    // return total;
// }

// console.log(jumlahkan(1,2,3,4,5));



// const mhs = ['misbah', 'adia', 'dian', 'edi', 'erna', 'nur', 'sindi', 'putri'];
// const [ketua, wakil, ...anggota] = mhs;
// console.log(anggota);

// const Gemastik = {
//     frontend: 'misbah',
//     backend: 'zamzam',
//     uiux: 'arya surya'
// }
// const {backend: ketua, frontend: wakil, uiux: projectManager} = Gemastik;
// console.log(ketua)


// function filterBy(type, ...data) {
//     return data.filter(d => typeof d === type);
// }

// console.log(filterBy('boolean', 1,2,3,'misbah', true, 4,5, false, true));