let menu = document.querySelector(".menuBar i");
let navBar = document.querySelector("nav ul");
let aboutUs = document.querySelector(".aboutUs");
let info = document.querySelector(".info");
let myVideo = document.getElementById("video1");

menu.onclick = () => {
    navBar.classList.toggle("open");
};

aboutUs.onclick = () => {
    info.classList.toggle("active");
};

function playPause() {
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
}

function makeBig() {
    myVideo.width = 560;
}

function makeSmall() {
    myVideo.width = 320;
}

function makeNormal() {
    myVideo.width = 420;
}
