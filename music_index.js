const image = document.getElementById('cover'),
    musicContainer = document.getElementById('music_container'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    playerControls = document.getElementById('player-controls');

    
let musicPlayerSign = document.getElementById('musicPlayerSign');
let volume_slider = document.querySelector('.volume_slider');
var loopId;
let toggleSign = false;
const music = new Audio();
music.volume = 30/100;

function setVolume(){

    music.volume = volume_slider.value / 100;
    if (music.volume <= 0.03)
        music.volume = 0;
}

function ctlPlayerSign() {
    if (toggleSign) {
        musicPlayerSign.classList.replace('signIsOn', 'signIsOff');
        toggleSign = false;
        setTimeout(()=> {
    
            musicContainer.style.display = "none";
            title.style.display = "none";
            artist.style.display = "none";
            playerControls.style.display = "none";
            playerProgress.style.display = "none";
        },800); 
    }else {
        musicPlayerSign.classList.replace('signIsOff', 'signIsOn');
        toggleSign = true;
        setTimeout(()=> {
            
            musicContainer.style.display = "block";
            title.style.display = "block";
            artist.style.display = "block";
            playerControls.style.display = "inline-block";
            playerProgress.style.display = "inline-block";
        },500); 
    }   
}

const songs = [
    {
        path: './src/the_nights_avicii.mp3',
        displayName: 'The Nights',
        cover: './src/TheNightsCover.png',
        artist: 'Avicii',
    },
    {
        path: './src/DreamItPossible.mp3',
        displayName: 'Dream It Possible',
        cover: './src/dreamItPossibleCover.png',
        artist: 'Delacey',
    },
    
];

let musicIndex = 0;
let isPlaying = false;


function togglePlay() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function loop() {

    var i, n, s = '';

    for (i = 0; i < 10; i++) {
        n = Math.floor(Math.sin((Date.now()/200) + (i/2)) * 4) + 4;

        s += String.fromCharCode(0x2581 + n);
    }

    location.hash = "Thank_you_for_listening_music" + s;
    loopId = setTimeout(loop, 50);
}

function playMusic() {
    isPlaying = true;
    // Change play button icon
    playBtn.classList.replace('fa-play', 'fa-pause');
    // Set button hover title
    playBtn.setAttribute('title', 'Pause');
    music.play();
    loop();
}

function pauseMusic() {
    isPlaying = false;
    // Change pause button icon
    playBtn.classList.replace('fa-pause', 'fa-play');
    // Set button hover title
    playBtn.setAttribute('title', 'Play');
    music.pause();
    clearTimeout(loopId);
    location.hash = "Thank_you_for_listening_music"; 
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    pauseMusic();
    progress.style.width = `${0}%`;
}

function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}


playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);

