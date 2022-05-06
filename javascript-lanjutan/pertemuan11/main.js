// ambil semua elemen videos
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// filter / ambil video yang merupakan tutorial Javascript
let video = videos.filter(v => v.textContent.includes('JAVASCRIPT DEPS'))

    // ambil durasi video dari tiap tutorial
    .map(item => item.dataset.duration)

    // ubah dari String ke Float 
    .map(waktu => {
        // 10:20 => [10,20] namanya split
        const timeSplit = waktu.split(':').map(part => parseFloat(part));
        return timeSplit[0] * 60 + timeSplit[1];
    })

    // jumlahkan semua detik
    .reduce((acc, curr) => acc + curr);

// ubah formatnya menjadi jam:menit:detik
const jam = Math.floor(video / 3600);
video = video - (jam * 3600);
const menit = Math.floor(video / 60);
const detik = Math.floor(video - (menit * 60));

//simpan ke dalam DOM
const totalVideo = document.querySelector('.total-video'),
    totalDurationVideo = document.querySelector('.total-durationVideo');

totalVideo.textContent = `${videos.filter(v => v.textContent.includes('JAVASCRIPT DEPS')).length} Video.`;
totalDurationVideo.textContent = `${jam} Jam : ${menit} Menit : ${detik} Detik.`;