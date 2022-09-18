// closure merupakan konbinasi antara function dan lingkungan lexical scope di dalam function tersebut
// w3scholl sebuah function yang mempunyai akses ke parent scope nya, meskipun parent scope nya udah selesai di exsekusi


function closure() {
    let nama = 'misbah';

    // inner function
    function tampilNama() {
        console.log(nama);
    }
    tampilNama()
}
closure();


// alasan menggunakan closure?
// 1. untuk membuat function factory
// 2. untuk membuat private method
