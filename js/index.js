console.log('Hallo world');
const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

const songs = ['hey','buddy','ukulele'];
let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song){
    title.innerText = song;
    audio.src = `tracks/${song}.mp3`;
    cover.src = `tracks/thumbnails/${song}.jpg`;
}

function playSong(){
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

function pauseSong(){
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
}

function prevSong(){
    songIndex --;
    if(songIndex < 0){
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
}

function nextSong(){
    songIndex ++;
    if(songIndex > songs.length -1){
        songIndex = 0
    }
    loadSong(songs[songIndex]);
}

function updateProgress(e){
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

playBtn.addEventListener('click',()=>{
    const isPlaying = musicContainer.classList.contains('play');

    if(isPlaying){
        pauseSong();
    }else{
        playSong();
    }

    prevBtn.addEventListener('click',prevSong);
    nextBtn.addEventListener('click',nextSong);

});

audio.addEventListener('timeupdate',updateProgress);