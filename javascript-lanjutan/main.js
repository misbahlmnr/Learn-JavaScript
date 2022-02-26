// object literal
const mahasiswa1 = {
    nama : 'misbahdevs',
    npm  : 21552011178,
    motivasi : function() {
        alert(`namaku ${this.nama}, dan aku ingin menjadi programer`);
    }
}

const mahasiswa2 = {
    nama : 'dimas aryasatya',
    npm  : 215520111893,
    motivasi : function() {
        alert(`namaku ${this.nama}, dan aku ingin menjadi programer`);
    }
}



// function declaration
function Mahasiswa (nama, npm,) {
    let data = {};
    data.nama = nama;
    data.npm = npm;
    data.motivasi = function() {
        alert(`hallo ${this.nama}, test!`)
    }
    return data;
}

const mahasiswa4 = Mahasiswa('reza herdiansyah',21552011188);

// constructor
function Mahasiswa (nama, npm) {
    this.nama = nama;
    this.npm = npm;
    this.motivasi = function () {
        console.log(`hallo ${this.nama}, kamu udah jago!`)
    }
} 

const mahasiswa5 = new Mahasiswa('misbah', 2155201337);



