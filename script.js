//lista de musica
const songs = [
    {title: "Skyline",src:"musica1.mp3"},
    {title: "skyline 2",src:"musica2.mp3"},
];
let currentSong = 0;
const audio = document.getElementById("audio");
const songTitle = document.getElementById("songTitle");

//botoes
document.getElementById("play").addEventListener("click", () => {
    audio.play();
});

document.getElementById("pause").addEventListener("click", () => {
    audio.pause();
});    

document.getElementById("next").addEventListener("click", () => {
    nextSong();
});

//funçoes
function loadSong(index) {
    audio.src =  songs[index].src;
    songTitle.textContent = songs[index].title;audio.play();
}
function nextSong() {
    currentSong++; if(currentSong >= songs.length) currentSong = 0;loadSong(currentSong);
}

//inicia a primeira msc
loadSong(currentSong)