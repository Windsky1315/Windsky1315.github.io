"use strict";
window.alert("The website updates from time to time! To have a comfortable view, we recommend using computer or ipad");

const audio=document.getElementById('audio');
const playButton=document.getElementById('playButton');

playButton.addEventListener('click', ()=>{
    if(audio.paused){
        audio.play();
        playButton.textContent='Pause';
        playButton.classList.add('playing');
    }else{
        audio.pause();
        playButton.textContent='Play';
        playButton.classList.remove('playing');
    }
});