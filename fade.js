var images = [];
var top = 1;
var cur = - 1;
var nextImage;
var songlist = ['mp3/10-ntm.mp3'];
var emanx;
var timegal;
var isFirst = true;

$(document).ready(function () {
    var slides = [{ "src": "img/ctht9295_2000.08.jpg" },
    { "src": "img/ctht9295_2000.01.jpg" },
    { "src": "img/ctht9295_2000.02.jpg" },
    { "src": "img/ctht9295_2000.03.jpg" },
    { "src": "img/ctht9295_2000.04.jpg" },
    { "src": "img/ctht9295_2000.05.jpg" },
    { "src": "img/ctht9295_2000.06.jpg" },
    { "src": "img/ctht9295_2000.07.jpg" },
    { "src": "img/ctht9295_2000.09.jpg" },
    { "src": "img/ctht9295_2000.10.jpg" },
    { "src": "img/ctht9295_2000.11.jpg" },
    { "src": "img/ctht9295_2000.116.jpg" },
    { "src": "img/ctht9295_2000.118.jpg" },
    { "src": "img/ctht9295_2000.12.jpg" },
    { "src": "img/ctht9295_2000.122.jpg" },
    { "src": "img/ctht9295_2000.13.jpg" },
    { "src": "img/ctht9295_2000.14.jpg" },
    { "src": "img/ctht9295_2000.15.jpg" },
    { "src": "img/ctht9295_2000.16.jpg" },
    { "src": "img/ctht9295_2000.17.jpg" },
    { "src": "img/ctht9295_2000.18.jpg" },
    { "src": "img/ctht9295_2000.19.jpg" },
    { "src": "img/ctht9295_2000.20.jpg" },
    { "src": "img/ctht9295_2000.21.jpg" },
    { "src": "img/ctht9295_2000.22.jpg" },
    { "src": "img/ctht9295_2000.35.jpg" },
    { "src": "img/ctht9295_2022.01.jpg" },
    { "src": "img/ctht9295_2022.03.jpg" },
    { "src": "img/ctht9295_2022.04.jpg" },
    { "src": "img/ctht9295_2022.05.jpg" },
    { "src": "img/ctht9295_2022.06.jpg" },
    { "src": "img/ctht9295_2022.07.jpg" },
    { "src": "img/ctht9295_2022.08.jpg" },
    { "src": "img/ctht9295_2022.09.jpg" },
    { "src": "img/ctht9295_2022.10.jpg" },    
    { "src": "img/ctht9295_2022.11.jpg" },   
    { "src": "img/ctht9295_2022.12.jpg" },    
    { "src": "img/ctht9295_2022.13.jpg" },    
    { "src": "img/ctht9295_2022.14.jpg" },
    { "src": "img/ctht9295_2022.15.jpg" },
    { "src": "img/ctht9295_2022.16.jpg" },
    { "src": "img/ctht9295_2022.17.jpg" },
    { "src": "img/ctht9295_2022.18.jpg" },
    { "src": "img/ctht9295_2022.19.jpg" },
    { "src": "img/ctht9295_2022.20.jpg" },
    { "src": "img/ctht9295_2022.21.jpg" },
    { "src": "img/ctht9295_2022.22.jpg" },
    { "src": "img/ctht9295_2022.23.jpg" },
    { "src": "img/ctht9295_2022.24.jpg" },
    { "src": "img/ctht9295_2022.25.jpg" },
    { "src": "img/ctht9295_2022.26.jpg" },
    { "src": "img/ctht9295_2022.27.jpg" },
    { "src": "img/ctht9295_2022.28.jpg" },
    { "src": "img/ctht9295_2022.29.jpg" },
    { "src": "img/ctht9295_2022.30.jpg" },
    { "src": "img/ctht9295_2022.31.jpg" },
    { "src": "img/ctht9295_2022.32.jpg" },
    { "src": "img/ctht9295_2022.33.jpg" },
    { "src": "img/ctht9295_2022.34.jpg" },
    { "src": "img/ctht9295_2022.36.jpg" },
    { "src": "img/ctht9295_2022.37.jpg" },
    { "src": "img/ctht9295_2022.38.jpg" },
    { "src": "img/ctht9295_2022.39.jpg" },
    { "src": "img/ctht9295_2022.40.jpg" },
    { "src": "img/ctht9295_2022.41.jpg" },
    { "src": "img/ctht9295_2022.42.jpg" },
    { "src": "img/ctht9295_2022.002.jpg" },
    { "src": "img/ctht9295_2022.43.jpg" },
    { "src": "img/ctht9295_2022.44.jpg" },
    { "src": "img/ctht9295_2022.45.jpg" },
    { "src": "img/ctht9295_2022.46.jpg" },
    { "src": "img/ctht9295_2022.47.jpg" },
    { "src": "img/ctht9295_2022.48.jpg" },
    { "src": "img/ctht9295_2022.49.jpg" },
    { "src": "img/ctht9295_2022.50.jpg" },
    { "src": "img/ctht9295_2022.51.jpg" },
    { "src": "img/ctht9295_2022.52.jpg" },
    { "src": "img/ctht9295_2022.53.jpg" },
    { "src": "img/ctht9295_2022.54.jpg" },
    { "src": "img/ctht9295_2022.55.jpg" },
    { "src": "img/ctht9295_2022.56.jpg" },
    { "src": "img/ctht9295_2022.57.jpg" },
    { "src": "img/ctht9295_2022.58.jpg" },
    { "src": "img/ctht9295_2022.59.jpg" },
    { "src": "img/ctht9295_2022.60.jpg" },
    { "src": "img/ctht9295_2022.61.jpg" },
    { "src": "img/ctht9295_2022.62.jpg" },
    { "src": "img/ctht9295_2022.63.jpg" },
    { "src": "img/ctht9295_2022.63.jpg" }
    ]; //1536 2048

    var gallery = document.getElementById('fade-gallery');
    gallery.style.width = window.innerWidth;
    gallery.style.height = window.innerHeight * 0.8;
    gallery.style.textAlign = "center";
    for (var i = 0; i < slides.length; i++) {
        var img = document.createElement('img');
        img.src = slides[i]['src'];
        img.style.opacity = 0;
        img.style.maxWidth = window.innerWidth * 0.8;
        img.style.maxHeight = window.innerHeight * 0.6;
        //img.style.border='solid 1px #9acd32';
        img.style.boxShadow = '5px 5px 5px #00336f';
        img.style.position = "absolute";
        img.style.transform = "translateX(-50%) translateY(20%)";
        //img.style["-webkit-box-reflect"]="below 10px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.25))";
        images.push(img);
        gallery.appendChild(img);
    }
    top = 1;
    cur = images.length - 1;
    /*Emancipator - Safe in the Steep Cliffs */
    emanx = 0;
    document.getElementById("emancipator").addEventListener('ended', function () {
        emanx++;
        if (emanx >= songlist.length) {
            emanx = 0;
        }
        var player = document.getElementById("emancipator");
        var promise = player.play();
        if (promise !== undefined) {
            promise.then(function () {
                player.src = songlist[emanx];
                player.load();
                player.play();
                document.getElementById("bttStartEmancipator").style.display = "none";
            }).catch(function (error) {
                document.getElementById("bttStartEmancipator").style.display = "block";
            });
        }
    });
});

function startEmancipator() {
    var player = document.getElementById("emancipator");
    player.src = songlist[emanx];
    player.load();
    player.play();
    document.getElementById("bttStartEmancipator").style.display = "none";
}

function startGallery() {
    images[cur].style.opacity = 1;
    timegal = setInterval(changeImage, 2500);
    document.getElementById("bttStartGallery").style.display = "none";
    document.getElementById("bttPauseGallery").style.display = "block";
    if (isFirst) {
        startEmancipator();
        isFirst = false;
    }
}

function pauseGallery() {
    clearInterval(timegal);
    document.getElementById("bttStartGallery").style.display = "block";
    document.getElementById("bttPauseGallery").style.display = "none";
}

async function changeImage() {
    nextImage = (1 + cur) % images.length;
    images[cur].style.zIndex = top + 1;
    images[nextImage].style.zIndex = top;
    await transition();
    images[cur].style.zIndex = top;
    images[nextImage].style.zIndex = top + 1;
    top = top + 1;
    cur = nextImage;
}

function transition() {
    return new Promise(function (resolve, reject) {
        var del = 0.01;
        var id = setInterval(changeOpacity, 75);
        function changeOpacity() {
            images[cur].style.opacity = parseFloat(images[cur].style.opacity) - del;
            if (parseFloat(images[cur].style.opacity) <= 0) {
                images[cur].style.opacity = 0;
                clearInterval(id);
                resolve();
            }
            images[nextImage].style.opacity = parseFloat(images[nextImage].style.opacity) + del;
            if (parseFloat(images[nextImage].style.opacity) >= 1) {
                images[nextImage].style.opacity = 1;
                clearInterval(id);
                resolve();
            }
        }
    });
}

function transitionOut() {
    return new Promise(function (resolve, reject) {
        var del = 0.01;
        var id = setInterval(changeOpacity, 75);
        function changeOpacity() {
            images[cur].style.opacity = parseFloat(images[cur].style.opacity) - del;
            if (parseFloat(images[cur].style.opacity) <= 0) {
                images[cur].style.opacity = 0;
                clearInterval(id);
                resolve();
            }
        }
    });
}
function transitionIn() {
    return new Promise(function (resolve, reject) {
        var del = 0.01;
        var id = setInterval(changeOpacity, 75);
        function changeOpacity() {
            images[cur].style.opacity = parseFloat(images[cur].style.opacity) + del;
            if (parseFloat(images[cur].style.opacity) >= 1) {
                images[cur].style.opacity = 1;
                clearInterval(id);
                resolve();
            }
        }
    });
}

