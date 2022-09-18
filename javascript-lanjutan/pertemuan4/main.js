// execution conteks

// console.log(nama)
// var nama = 'misbah'

// alasan console.log(nama) berisi undifined karena di balik layar javascript akan mencari variabel dan fungsi lalu mengisi dengan nilai default terlebih dahulu, nilai default variable adalah 'undefined' dan fungsi adalah isi codingan dari fungsi dan itu diberi nama hoisting

// console.log(sayHello);
// function sayHello(nama) {
//     return `Halo ${nama}, selamat pagi!`;
// } 

// dan jikalau function maka akan mempunyai local execution context sendiri sendiri

// function test() {
//     console.log('ini a');
//     function test2() {
//         console.log('ini b');
//         function test3() {
//             console.log('ini c');
//         }
//         test3();
//     }
//     test2();
// }
// test();




// 2 fase pada excecution context di javascript
// 1 Creation
// 2 Execution



// var x = 'misbah';
// console.log(x)
x = 10;
var x;
console.log(x)

// untuk lebih memahami tentang excecution contex dan hoisting, anda bisa mengunjungi website javascript visualizazer
