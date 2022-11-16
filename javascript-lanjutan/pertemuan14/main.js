// tagged template merupakan bentuk yang lebih kompleks dari template literals, memungkinkan kita untuk membaca template literals melalui sebuah function

// tagged templates biasa digunakan untuk
// 1. Escaping HTML Tags
// 2. Translation & Internazionation
// 3. Styled component

// const mhs = {
//     nama: 'misbah',
//     umur: 19
// }

// function validasi(string, ...values) {
//     if (values.includes('hacked')) {
//         return `Website telah diretas`;
//     }
//     return `Website mu aman dari hacker`;
// }

// let string = validasi`${prompt('masukan tulisanmu : ')}`;
// console.log(string);

// contoh tagged template html escaping tag

// function sanitaze(string, ...values) {
//     return DOMpurify.sanitaze(about);
// }

// const nama = "misbahdevs";
// const about = "Hai, i want to Hack your browser <img src=x onerror=alert('hacked by me')>";

// const forHtml = sanitaze`
//     <h1>${nama}</h1>
//     <h3>${about}</h3>
// `;

// document.body.innerHTML = forHtml;

// contoh tagged template translation & internazionalition

// const html = i18n`Hai, my name is ${name}, i have ${amount} in my account bank`;
// hai, nama saya misbah, aku punya uang di aku bank saya.

// styled component

// const styled = styled.h1`
//     font-size: 1.5rem;
//     text-align: center;
// `;

// function tes(str, ...arr) {
//   console.log(arr);
// }

// const nama = `misbah`;
// const str = tes`hai nama saya ${nama} !`;
