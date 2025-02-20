document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-music");
    audio.volume = 0.5; // Adjust volume (0 to 1)

    document.body.addEventListener("click", function () {
        audio.play();
    }, { once: true }); // Ensures playback starts after user interaction
});
