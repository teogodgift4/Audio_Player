const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');
const artist = document.querySelector('#artist');
const player = document.querySelector('#random');
const volumeslider = document.querySelector('#volumeslider');
const volume = document.querySelector('#volume');
const favourite = document.querySelector('#favourite');
const favsongs = document.querySelector('#favsongs');
//const server = ('./server-readfiles');



const songs = ['acousticbreeze','anewbeginning','buddy','creativeminds','cute','goinghigher','happyrock','hey','jazzyfrenchy','littleidea','memories','ukulele'];
let songIndex = 0;
favList = new Set();

var trackList =  [
	{
		"filename": "acousticbreeze.mp3",
		"thumbnail": "acousticbreeze.jpg",
		"artist": "One Zillion Collapsing Iced Koalas",
		"title": "Acoustic breeze"
	},
	{
		"filename": "anewbeginning.mp3",
		"thumbnail": "anewbeginning.jpg",
		"artist": "Puddle of Rock",
		"title": "A new beginning"
	},
	{
		"filename": "buddy.mp3",
		"thumbnail": "buddy.jpg",
		"artist": "The Quiet Goblins",
		"title": "Buddy"
	},
	{
		"filename": "creativeminds.mp3",
		"thumbnail": "creativeminds.jpg",
		"artist": "New York Panic",
		"title": "Creative Minds"
	},
	{
		"filename": "cute.mp3",
		"thumbnail": "cute.jpg",
		"artist": "Izabel Monroe",
		"title": "Cute"
	},
	{
		"filename": "goinghigher.mp3",
		"thumbnail": "goinghigher.jpg",
		"artist": "Christina Ibarra",
		"title": "Going Higher"
	},
	{
		"filename": "happyrock.mp3",
		"thumbnail": "happyrock.jpg",
		"artist": "Leia Knox",
		"title": "Happy Rock"
	},
	{
		"filename": "hey.mp3",
		"thumbnail": "hey.jpg",
		"artist": "Isra Traynor",
		"title": "Hey"
	},
	{
		"filename": "jazzyfrenchy.mp3",
		"thumbnail": "jazzyfrenchy.jpg",
		"artist": "Au Revior Ears",
		"title": "Jazzy Frenchy"
	},
	{
		"filename": "littleidea.mp3",
		"thumbnail": "littleidea.jpg",
		"artist": "Lynette Wonder",
		"title": "Little Idea"
	},
	{
		"filename": "memories.mp3",
		"thumbnail": "memories.jpg",
		"artist": "Megachord",
		"title": "Memories"
	},
	{
		"filename": "ukulele.mp3",
		"thumbnail": "ukulele.jpg",
		"artist": "Rage Against the Chord",
		"title": "Ukulele"
	}
];



loadSong(songs[songIndex]);

function favlistfunc(){
    favList.add(trackList[songIndex].filename);
    if(favList.size != 0){
        favsongs.style.opacity = 1;
    }
    document.getElementById('favsongs').innerHTML += `<div class="tracks_team_2">
    <div class="track_2">
      <img src=${cover.src} alt="ukulele">
      <p class="track_2_title">${trackList[songIndex].filename}</p>
      <p class="track_2_par">${trackList[songIndex].artist}</p>
    </div>
  </div>`;
};

function loadSong(song){
    title.innerText = trackList[songIndex].filename;
    artist.innerText = trackList[songIndex].artist;
    audio.src = `tracks/${song}.mp3`;
    cover.src = `tracks/thumbnails/${song}.jpg`;
    if(favList.size == 0){
        favsongs.style.opacity = 0;
    }
    favourite.addEventListener('click',favlistfunc);
    //console.log(favList);
}

function playSong(){
    musicContainer.classList.add('play');
    playBtn.querySelector('.fas').classList.remove('fa-play');
    playBtn.querySelector('.fas').classList.add('fa-pause');
    audio.play();
}

function pauseSong(){
    musicContainer.classList.remove('play');
    playBtn.querySelector('.fas').classList.add('fa-play');
    playBtn.querySelector('.fas').classList.remove('fa-pause');
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


function loadSongRandom(){
    var randomIndex = Math.floor(Math.random() * (songs.length));
    loadSong(songs[randomIndex]);
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

function setvolume(){
    audio.volume = volumeslider.value / 100;
}

function mute(){
    if(audio.muted){
        audio.muted = false;
        volume.style.opacity = 0.5;
    } else {
        audio.muted = true;
        volume.style.opacity = 1;
    }
}

audio.addEventListener('timeupdate',updateProgress);
player.addEventListener('click', loadSongRandom);
volumeslider.addEventListener("mousemove", setvolume);
volume.addEventListener('click', mute);