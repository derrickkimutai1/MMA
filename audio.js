const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPause");
const muteBtn = document.getElementById("mute");
const forwardBtn = document.getElementById("forward");
const backwardBtn = document.getElementById("backward");
const volumeSlider = document.getElementById("volume");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");


playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "⏸️";
    } else {
        audio.pause();
        playPauseBtn.textContent = "▶️";
    }
});


muteBtn.addEventListener("click", () => {
    audio.muted = !audio.muted;
    muteBtn.textContent = audio.muted ? "🔇" : "🔊";
});


volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
});


forwardBtn.addEventListener("click", () => {
    audio.currentTime += 10;
});

backwardBtn.addEventListener("click", () => {
    audio.currentTime -= 10;
});


audio.addEventListener("timeupdate", () => {
    progress.max = audio.duration;
    progress.value = audio.currentTime;

    currentTimeEl.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration);
});


progress.addEventListener("input", () => {
    audio.currentTime = progress.value;
});


function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}


document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        e.preventDefault();
        playPauseBtn.click();
    }
    if (e.code === "ArrowRight") {
        audio.currentTime += 5;
    }
    if (e.code === "ArrowLeft") {
        audio.currentTime -= 5;
    }
});