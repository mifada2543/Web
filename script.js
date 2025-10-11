
// const
const audio = document.getElementById("myAudio");
const mutton = document.getElementById("mutebtn");
const aud = document.getElementById("plybtn");

// function

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
    } else {
        alert("Invalid username or password. Please try again.");
    }
}