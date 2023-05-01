var images = [];
var top = 1;
var cur = - 1;
var nextImage;
var songlist = ['mp3/09-LangDu.mp3','mp3/10-ntm.mp3'];
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
        { "src": "img/ctht9295_2022.64.jpg" },
        { "src": "img/ctht9295_2022.65.jpg" },
        { "src": "img/ctht9295_2022.66.jpg" },
        { "src": "img/ctht9295_2022.67.jpg" },
        { "src": "img/ctht9295_2022.68.jpg" },
        { "src": "img/ctht9295_2022.69.jpg" },
        { "src": "img/ctht9295_2022.70.jpg" },
        { "src": "img/ctht9295_2022.71.jpg" },
        { "src": "img/ctht9295_2022.72.jpg" },
        { "src": "img/ctht9295_2022.73.jpg" },
        { "src": "img/ctht9295_2022.74.jpg" },   
        { "src": "img/ctht9295_2022.76.jpg" },
        { "src": "img/ctht9295_2022.77.jpg" },
        { "src": "img/ctht9295_2022.78.jpg" },
        { "src": "img/ctht9295_2022.79.jpg" },
        { "src": "img/ctht9295_2022.80.jpg" },
        { "src": "img/ctht9295_2022.81.jpg" },
        { "src": "img/ctht9295_2022.82.jpg" },
        { "src": "img/ctht9295_2022.83.jpg" },
        { "src": "img/ctht9295_2022.84.jpg" },
        { "src": "img/ctht9295_2022.85.jpg" },
        { "src": "img/ctht9295_2022.86.jpg" },
        { "src": "img/ctht9295_2022.87.jpg" },
        { "src": "img/ctht9295_2022.88.jpg" },
        { "src": "img/ctht9295_2022.89.jpg" },
        { "src": "img/ctht9295_2022.94.jpg" },
        { "src": "img/ctht9295_2022.95.jpg" },
        { "src": "img/ctht9295_2022.96.jpg" },
        { "src": "img/ctht9295_2022.97.jpg" },        
        { "src": "img/ctht9295_2022.99.jpg" },
        { "src": "img/ctht9295_2022.100.jpg" },
        { "src": "img/ctht9295_2022.101.jpg" },
        { "src": "img/ctht9295_2022.102.jpg" },
        { "src": "img/ctht9295_2022.103.jpg" },
        { "src": "img/ctht9295_2022.104.jpg" },
        { "src": "img/ctht9295_2022.105.jpg" },
        { "src": "img/ctht9295_2022.106.jpg" },
        { "src": "img/ctht9295_2022.107.jpg" },
        { "src": "img/ctht9295_2022.108.jpg" },
        { "src": "img/ctht9295_2022.109.jpg" },
        { "src": "img/ctht9295_2022.110.jpg" },
        { "src": "img/ctht9295_2022.111.jpg" },
        { "src": "img/ctht9295_2022.112.jpg" },
        { "src": "img/ctht9295_2022.113.jpg" },
        { "src": "img/ctht9295_2022.114.jpg" },
        { "src": "img/ctht9295_2022.115.jpg" },
        { "src": "img/ctht9295_2022.116.jpg" },
        { "src": "img/ctht9295_2022.117.jpg" },
        { "src": "img/ctht9295_2022.118.jpg" },
        { "src": "img/ctht9295_2022.119.jpg" },
        { "src": "img/ctht9295_2022.120.jpg" },
        { "src": "img/ctht9295_2022.122.jpg" },
        { "src": "img/ctht9295_2022.123.jpg" },
        { "src": "img/ctht9295_2022.124.jpg" },
        { "src": "img/ctht9295_2022.125.jpg" },
        { "src": "img/ctht9295_2022.126.jpg" },
        { "src": "img/ctht9295_2022.127.jpg" },
        { "src": "img/ctht9295_2022.128.jpg" },
        { "src": "img/ctht9295_2022.129.jpg" },
        { "src": "img/ctht9295_2022.130.jpg" },
        { "src": "img/ctht9295_2022.131.jpg" },
        { "src": "img/ctht9295_2022.132.jpg" },
        { "src": "img/ctht9295_2022.133.jpg" },
        { "src": "img/ctht9295_2022.134.jpg" },
        { "src": "img/ctht9295_2022.135.jpg" },
        { "src": "img/ctht9295_2022.136.jpg" },
        { "src": "img/ctht9295_2022.137.jpg" },
        { "src": "img/ctht9295_2022.138.jpg" },
        { "src": "img/ctht9295_2022.139.jpg" },
        { "src": "img/ctht9295_2022.140.jpg" },
        { "src": "img/ctht9295_2022.141.jpg" },
        { "src": "img/ctht9295_2022.142.jpg" },
        { "src": "img/ctht9295_2022.143.jpg" },
        { "src": "img/ctht9295_2022.144.jpg" },
        { "src": "img/ctht9295_2022.145.jpg" },
        { "src": "img/ctht9295_2022.146.jpg" }, 
        { "src": "img/ctht9295_2022.147.jpg" },
        { "src": "img/ctht9295_2022.148.jpg" },
        { "src": "img/ctht9295_2022.149.jpg" },
        { "src": "img/ctht9295_2022.150.jpg" },
        { "src": "img/ctht9295_2022.151.jpg" },   
        { "src": "img/ctht9295_2022.152.jpg" }, 
        { "src": "img/ctht9295_2022.153.jpg" },   
        { "src": "img/ctht9295_2022.154.jpg" },  
        { "src": "img/ctht9295_2022.155.jpg" }, 
        { "src": "img/ctht9295_2022.156.jpg" }, 
        { "src": "img/ctht9295_2022.157.jpg" }, 
        { "src": "img/ctht9295_2022.158.jpg" }, 
        { "src": "img/ctht9295_2022.159.jpg" }, 
        { "src": "img/ctht9295_2022.160.jpg" }, 
        { "src": "img/ctht9295_2022.161.jpg" }, 
        { "src": "img/ctht9295_2022.162.jpg" }, 
        { "src": "img/ctht9295_2022.163.jpg" }, 
        { "src": "img/ctht9295_2022.164.jpg" }, 
        { "src": "img/ctht9295_2022.165.jpg" }, 
        { "src": "img/ctht9295_2022.166.jpg" }, 
        { "src": "img/ctht9295_2022.167.jpg" }, 
        { "src": "img/ctht9295_2022.168.jpg" }, 
        { "src": "img/ctht9295_2022.169.jpg" }, 
        { "src": "img/ctht9295_2022.170.jpg" }, 
        { "src": "img/ctht9295_2022.171.jpg" }, 
        { "src": "img/ctht9295_2022.172.jpg" }, 
        { "src": "img/ctht9295_2022.173.jpg" }, 
        { "src": "img/ctht9295_2022.174.jpg" }, 
        { "src": "img/ctht9295_2022.175.jpg" }, 
        { "src": "img/ctht9295_2022.176.jpg" }, 
        { "src": "img/ctht9295_2022.177.jpg" }, 
        { "src": "img/ctht9295_2022.178.jpg" }, 
        { "src": "img/ctht9295_2022.179.jpg" }, 

        { "src": "img/ctht9295_2022.200.jpg" },
        { "src": "img/ctht9295_2022.201.jpg" }
        

       
    ]; //1536 2048

    var gallery = document.getElementById('fade-gallery');
    gallery.style.width = window.innerWidth;
    gallery.style.height = window.innerHeight * 0.6;
    gallery.style.textAlign = "center";
    for (var i = 0; i < slides.length; i++) {
        var img = document.createElement('img');
        img.src = slides[i]['src'];
        img.style.opacity = 0;
        img.style.maxWidth = window.innerWidth * 0.6;
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

