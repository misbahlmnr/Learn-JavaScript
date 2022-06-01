// spread operator
// memecah iterable menjadi single element

// const mhs = ['misbah', 'ujang', 'yusuf'];

// console.log(...mhs)


// kpan kita menggunakan spread operator ini
// 1. biasanya digunakan untuk menggabungkan beberapa elemen array ke 1 array

// const cikembang = ['misbah', 'gen gen', 'adi'];
// const cirandagelis = ['ujang', 'yusuf', 'adam'];

// const ulinBarang = [...cikembang, ...cirandagelis];
// console.log(ulinBarang)


// sebelumnya untuk melakukan hal yang sama ada method di dalam array yang berfungsi untuk menggabungkan 2 / lebih array

// console.log(cikembang.concat(cirandagelis));

// tpi ini kurang fleksible, 
// dengan spred operator kita bisa menambahkan elemen array di tengah tengah

// const ulinBarang = [...cikembang, 'udin',...cirandagelis];
// console.log(ulinBarang)



// 2. digunakan juga untuk mengcopy nilai array
// const mhs = ['misbah', 'yusuf', 'ujang'];
// const mhs1 = mhs;
// console.log(mhs1);

// ini juga udah bisa dikatan mencopy, tapi sebenernya ini bukan lah mengcopy, tapi mengambil refrensi, ini akan jdi masalah ketika kita ubah nilainya

// mhs1[0] = 'cecep';
// console.log(mhs1);
// ini lancar terganti, tapi
// console.log(mhs)

// nilai mhs yang diatas juga terganti, jadinya kita tidak bisa menggunakan ini

// terusan bagaimana agar kita bisa benar benar mencopy nya
// kita bisa menggunakan spred operator
// const mhs1 = [...mhs];
// mhs1[0] = 'cecep';
// console.log(mhs1);
// ini lancar terganti, dan
// console.log(mhs)
// juga tidak terganti


// latihan
const select = (el, all=false) => {
    el = el.trim();
    if (all) {
        return [...document.querySelectorAll(el)];
    } else {
        return document.querySelector(el);
    }
}
const nama = select('.nama', false)

const nama2 = [...nama.textContent].map(n => `<span>${n}</span>`).join('');

nama.innerHTML = nama2;














