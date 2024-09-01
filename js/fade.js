var images = [];
var top = 1;
var cur = - 1;
var nextImage;
var songlist = ['mp3/01-LovingYou.mp3','mp3/09-LangDu.mp3','mp3/10-ntm.mp3'];
var emanx;
var timegal;
var isFirst = true;

$(document).ready(function () {
    var slides = [
    { "src": "img/anh1.jpg" },
    { "src": "img/anh2.jpg" },
    { "src": "img/anh3.jpg" },
    { "src": "img/anh4.jpg" },
    { "src": "img/anh5.jpg" },
    { "src": "img/anh6.jpg" },
    { "src": "img/anh7.jpg" },
    { "src": "img/anh8.jpg" },
    { "src": "img/anh9.jpg" }]           
    
    var gallery = document.getElementById('fade-gallery');
    gallery.style.width = window.innerWidth + "px";
    gallery.style.height = window.innerHeight * 0.6 + "px";
    gallery.style.textAlign = "center";
    for (var i = 0; i < slides.length; i++) {


        var img = document.createElement('img');
        img.src = slides[i]['src'];


        img.style.opacity = 0;
        img.style.maxWidth = window.innerWidth * 0.6 + "px";
        img.style.maxHeight = window.innerHeight * 0.6 + "px";

        img.style.border = 'solid 5px #9acd32'; // Thêm viền xung quanh ảnh
        img.style.boxShadow = '5px 5px 15px rgba(0, 51, 111, 0.5)'; // Tăng độ mờ của bóng
        img.style.position = "absolute";
        img.style.transform = "translateX(-50%) translateY(20%)";
       
        
        img.style.filter = "brightness(1.2) contrast(1.1)";
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
    timegal = setInterval(changeImage, 3000);
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

function nextImage() {
    clearInterval(timegal); // Dừng auto change
    images[cur].style.opacity = 0; // Ẩn ảnh hiện tại
    cur = (cur + 1) % images.length; // Tăng chỉ số ảnh, quay về 0 nếu quá số lượng ảnh
    images[cur].style.opacity = 1; // Hiển thị ảnh tiếp theo
}

function prevImage() {
    clearInterval(timegal); // Dừng auto change
    images[cur].style.opacity = 0; // Ẩn ảnh hiện tại
    cur = (cur - 1 + images.length) % images.length; // Giảm chỉ số ảnh, quay về ảnh cuối nếu quá số lượng ảnh
    images[cur].style.opacity = 1; // Hiển thị ảnh trước đó
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

