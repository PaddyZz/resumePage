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
        /*path: 'https://upcdn.io/FW25bvd/raw/the_nights_avicii.mp3', */
        /* path:'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdmwxTHhRMUZKMmpleVR0ZmhQVUhIMHVjVk0_ZT1FY3FXdTY.mp3', */
        /*path: 'https://cdn.jsdelivr.net/gh/PaddyZz/resumePage/src/the_nights_avicii.mp3', */
        path: 'https://cdn.jsdelivr.net/gh/PaddyZz/resumePage/src/TheNights_avicii.m4a', 
        displayName: 'The Nights',
       /* cover: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBdmwxTHhRMUZKMmpmbFJiM1hRMTk2WkFsTDQ_ZT1GcndubTU.webp', */
       /* cover: 'https://cdn.jsdelivr.net/gh/PaddyZz/resumePage/src/TheNightsCover.png', */
        /*cover: './src/TheNightsCover.png', */
        cover: 'https://cdn.jsdelivr.net/gh/PaddyZz/resumePage/src/TheNightsCover_scale_ver1.webp',
        artist: 'Avicii',
        index: '0',
       
    },
    {
        /*path: 'https://upcdn.io/FW25bvd/raw/DreamItPossible.mp3', */
        /* path: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdmwxTHhRMUZKMmpmUGtJTVV6SHFKWHMwbTQ_ZT01RlU2eEY.mp3',*/
        /*path: 'https://cdn.jsdelivr.net/gh/PaddyZz/resumePage/src/DreamItPossible.mp3',*/
        path: 'https://cdn.jsdelivr.net/gh/PaddyZz/resumePage/src/DreamItPossible.m4a', 
        displayName: 'Dream It Possible',
      /*  cover: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBdmwxTHhRMUZKMmpmY1pWbTRqOFRCeVBEaUE_ZT1aZGJOMmE.webp', */
     /*   cover: 'https://cdn.jsdelivr.net/gh/PaddyZz/resumePage/src/dreamItPossibleCover.png',*/
        /*cover: './src/dreamItPossibleCover.png',*/
        cover: 'https://cdn.jsdelivr.net/gh/PaddyZz/resumePage/src/dreamItPossibleCover.webp',
        artist: 'Delacey',
        index: '1',
        
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

/*
function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
} */

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


let musicOneSrcBlobUrl =  { value: null };
let musicTwoSrcBlobUrl =  { value: null };
let imageOneSrcBlobUrl =  { value: null };
let imageTwoSrcBlobUrl =  { value: null };

const customLoadEvent = new Event('customLoadEvent');
// 使用示例
const musicOneSrcUrl = songs[0].path;
const musicTwoSrcUrl = songs[1].path;
const imageOneSrcUrl = songs[0].cover;
const imageTwoSrcUrl = songs[1].cover;

function loadMusic(song) {
    if (song.index == '0'){
        music.src = musicOneSrcBlobUrl.value ;
        image.src = imageOneSrcBlobUrl.value;
    } else {
        music.src = musicTwoSrcBlobUrl.value;
        image.src = imageTwoSrcBlobUrl.value;
    }
    //music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
} 

async function fetchAndConvertToBlob(initialUrl) {
    try {
        const response = await fetch(initialUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const blob = await response.blob();
        return blob;
    } catch (error) {
        console.error('Error fetching and converting to Blob:', error);
        return null;
    }
}

function handleBlob(blob,blobUrlToBeAssigned) {
    if (blob) {
        const blobURL = URL.createObjectURL(blob);
        console.log('成功获取 Blob 文件:', blobURL);
        blobUrlToBeAssigned.value = blobURL;
        // 触发自定义的加载事件 
        if ((musicOneSrcBlobUrl.value !== null && imageOneSrcBlobUrl.value !== null) ||
            (musicTwoSrcBlobUrl.value !== null && imageTwoSrcBlobUrl.value !== null)) {
            // 条件成立时的逻辑
            document.dispatchEvent(customLoadEvent);
        }
        
    } else {
        console.log('未能获取 Blob 文件');
    }
}

document.addEventListener('customLoadEvent', function() {
    console.log('自定义加载事件被触发，可以运行别的程序了');
    loadMusic(songs[musicIndex]);
    // 在这里运行您想要执行的其他程序
});


window.addEventListener("load", function() {
    fetchAndConvertToBlob(musicOneSrcUrl)
    .then(blob => handleBlob(blob, musicOneSrcBlobUrl));
    fetchAndConvertToBlob(musicTwoSrcUrl)
    .then(blob => handleBlob(blob,musicTwoSrcBlobUrl));
    fetchAndConvertToBlob(imageOneSrcUrl)
    .then(blob => handleBlob(blob,imageOneSrcBlobUrl));
    fetchAndConvertToBlob(imageTwoSrcUrl)
    .then(blob => handleBlob(blob,imageTwoSrcBlobUrl));
});



/*
function preloadMusic(musicUrl, imageUrl) {
    let audio = new Audio();
    audio.src = musicUrl;
    audio.load();
    let img = new Image();
    img.onload = function() {
        if (img.complete) {
            
        }
    };
    img.src = imageUrl;
}

preloadMusic(songs[0].path,songs[0].cover);
preloadMusic(songs[1].path,songs[1].cover); 


loadMusic(songs[musicIndex]); */


