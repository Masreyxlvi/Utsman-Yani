// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika menu di klik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// fitur Hitung Mundur
// Mengatur waktu akhir perhitungan mundur
var countDownDate = new Date("Jun 30, 2023 10:00:00").getTime();

// Memperbarui hitungan mundur setiap 1 detik
var x = setInterval(function () {
  // Untuk mendapatkan tanggal dan waktu hari ini
  var now = new Date().getTime();

  // Temukan jarak antara sekarang dan tanggal hitung mundur
  var distance = countDownDate - now;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Waktu telah habis!";
    return;
  }

  // Perhitungan waktu untuk hari, jam, menit dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Keluarkan hasil dalam elemen dengan id = "demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Jika hitungan mundur selesai, tulis beberapa teks
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// Show Cards
const showCardButton = document.getElementById("show-cards");
const cardContainer = document.getElementById("card-container");
const cards = document.querySelectorAll(".card");

showCardButton.addEventListener("click", function () {
  cardContainer.classList.toggle("show");
  if (cardContainer.classList.contains("show")) {
    showCardsSequentially();
  } else {
    resetCardStyles();
  }
});

function showCardsSequentially() {
  cards.forEach((card, index) => {
    card.style.animation = `cardFadeIn 0.5s ease ${index * 0.5 + 0.5}s forwards`;
  });
}

function resetCardStyles() {
  cards.forEach((card) => {
    card.style.animation = "";
  });
}
