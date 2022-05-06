// const mahasiswa = {
//     nama: "misbah",
//     umur: 20,
//     npm: 21552011178,
//     email: "misbahx.id@gmail.com"
// }

// const el = `<div class="mhs">
// <h2>${mahasiswa.nama}</h2>
// <span class="nrp">${mahasiswa.npm}</span>`;

// document.body.innerHTML = el;


// 2. looping, bagaimana mengulang data yang didapatkan baik itu dari API / apapun

// const mahasiswa = [
//     {
//         nama: 'misbah',
//         email: 'misbahx.id@gmail.com'
//     },
//     {
//         nama: 'doody',
//         email: 'doody.id@gmail.com'
//     },
//     {
//         nama: 'ucup',
//         email: 'ucup.id@gmail.com'
//     }
// ]

// const el = `<div class="mhs">
// ${(mahasiswa.map(m => `<ul>
// <li>${m.nama}</li>
// <li>${m.email}</li>
// </ul>
// `)).join('')}
// </div>`;

// document.body.innerHTML = el;



// 3. conditional
// ternary

const lagu = {
    judul: 'tetap dalam jiwa',
    penyanyi: 'misbah'
}

const elemenFragmen = `<div class="lagu">
    <ul>
        <li>${lagu.judul}</li>
        <li>${lagu.penyanyi}</li>
    </ul>
</div>`;

document.body.innerHTML = elemenFragmen;