
// const
const audio = document.getElementById("myAudio");
const mutton = document.getElementById("mutebtn");
const aud = document.getElementById("plybtn");
const playlist = [
    "music/teto.mp3",
    "music/WAKE UP.mp3"
];
let current = 0;
const player = document.getElementById("player");
const judul = document.getElementById("judul");

// function lagu
function playSong(index) {
    current = index;
    player.src = playlist[index];
    player.play();
    judul.textContent = "sedang diputar: " + playlist[index].split("/").pop();
}
// lagu berikutnya
function next() {
    current = current++;
    if (current >= playlist.length) current = 0;
    playSong(current);
}
// lagu sebelumnya
function prev() {
    current = current--;
    if (current < 0) current = playlist.length - 1;
    playSong(current);
}

// play random
function playRandom() {
    let randomIndex = Math.floor(Math.random() * playlist.length);
    do {
        while (randomIndex = Math.floor(Math.random() * playlist.length));
    } while (randomIndex === current);
    playSong(randomIndex);
}
// otomatis next lagu
player.addEventListener("ended", next);
// mulai lagu pertama
playSong(current);


// function tombol
function tglmuted() {
    if (audio.muted) {
        audio.muted = false;
        mutton.textContent = "Mute";
    } else {
        audio.muted = true;
        mutton.textContent = "Unmute";
    }
}
function tglplay() {
    if (audio.paused) {
        audio.play();
        aud.textContent = "Pause";
    } else {
        audio.pause();
        aud.textContent = "Play";
    }
}

// simple login validation
function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {
        alert("Login successful!");
        window.location.href = "home.html";
        // Redirect to another page or perform other actions
    } else if (username === "dev" && password === "root") {
        alert("login sebagai dev");
        window.location.href = "ZGV2bW9kZQo=.html";
        // You can add a redirect or other actions here for dev
    } else if (username === "user" && password === "user123") {
        alert("login sebagai user");
        window.location.href = "Home.html";
        // You can add a redirect or other actions here for user
    } else {
        alert("Invalid username or password. Please try again.");
    }
}