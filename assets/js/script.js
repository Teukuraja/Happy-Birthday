const btnPlay = document.querySelector('#button .mulai');
const messege1 = document.querySelector('.messege-box1');
const messege2 = document.querySelector('.messege-box2');
const messege2P = document.querySelector('.messege-box2 .pesan p');
const hilang1 = document.querySelector('.hilang1');
const hilang2 = document.querySelector('.hilang2');
const nama = document.querySelectorAll('.nama h2')[0];
const nama1 = document.querySelectorAll('.nama h2')[1];
const waktu = document.getElementById('waktu');
const jam = waktu.querySelector('h1');
const hari = waktu.querySelector('p');
const body = document.querySelector('.body');
const audio = document.querySelector('.audio');

body.classList.add('background1');

const date = new Date();
const hour = String(date.getHours()).padStart(2, '0');
const minutes = String(date.getMinutes()).padStart(2, '0');
const day = date.getDay();
const tgl = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

hari.innerHTML = `${dayID()}, ${tgl} ${monthID()} ${year}`;
jam.innerHTML = `${hour}:${minutes}`;

const pengirim = "Cin ♡";
const nomorWa = "6282350191117";
const textWa = "Terimakasih sayang ♡";
const pesan = `Happy Birthday! Di hari yang spesial ini, aku ingin mengucapkan terima kasih karena sudah menjadi seseorang yang luar biasa. Semoga semua yang terbaik datang menghampirimu di tahun ini dan seterusnya. Ingatlah bahwa di setiap langkah, selalu ada harapan dan kesempatan baru yang menantimu. Nikmati setiap momen, dan teruslah melangkah maju dengan senyum dan semangat yang sama seperti hari ini`;

if (pengirim) {
  nama.innerHTML = pengirim;
  nama1.innerHTML = pengirim;
} else {
  nama.innerHTML = "Nama Kamu";
  nama1.innerHTML = "Nama Kamu";
}

btnPlay.addEventListener('click', () => {
  audio.play();
  messege1.style.display = "block";
  btnPlay.style.display = "none";
  hilang1.style.display = "block";
});

hilang1.addEventListener('click', () => {
  messege1.style.display = "none";
  messege2.style.transform = "translateX(0)";
  hilang1.style.display = "none";
  hilang2.style.display = "block";
  Swal.fire({
    imageUrl: "assets/img/stiker_mylove.gif",
    imageHeight: 120,
    title: 'Masukin nama kamu dong, aku ada kata-kata spesial buat kamu',
    html: `<input type="text" id="login" class="swal2-input" placeholder="Nama Kamu">`,
    confirmButtonText: 'Kirim',
    focusConfirm: false,
    preConfirm: () => {
      const login = Swal.getPopup().querySelector('#login').value;
      if (!login) {
        Swal.showValidationMessage(`Masukin Nama Kamu Dong, Aku Mau kasih Kejutan di hari Spesial Ini :(`);
      }
      return { login };
    }
  }).then((result) => {
    let i = 0;
    const speed = 50;
    let txt = `Halo, Nama kamu ${result.value.login},   ${pesan}`;

    const typeWriter = () => {
      if (i < txt.length) {
        messege2P.innerHTML += txt.charAt(i);
        i++;
        messege2.classList.remove('kelip');
        hilang2.style.display = "none";
        setTimeout(typeWriter, speed);
      } else {
        messege2.classList.add('kelip');
        body.classList.replace('background1', 'background2');
        body.classList.add('muncul');
        hilang2.style.display = "block";
      }
    };
    typeWriter();
  });
});

hilang2.addEventListener('click', () => {
  window.open(`https://wa.me/${nomorWa}/?text=${textWa}`, '_blank');
});
