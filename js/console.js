// function([string1, string2],target id,[color1,color2]) 
/*consoleText(["37 cái đầu 🙄",
    "Ở tận đẩu đâu 🧐",
    "Sao chẳng đứa nào rủ nhau 🙃",
    "Mà túm tụm cùng một chỗ ?! 😱",
    "Chí chóe lẫn nhau 😜",
    "Cũng được 30 năm rồi đấy! 😍"], 'text', ['#3f3']); */

consoleText(["HƠN 50 MƯƠI CÁI ĐẦU 🙄",
    "Ở TẬN ĐẨU TẬN ĐÂU 🧐",
    "CHẲNG ĐỨA NÀO RỦ NHAU 🙃",
    "MÀ TÚM TỤM MỘT CHỖ ?! 🥳 😱 🥳 🥴",
    "CHUYỆN BUÔN DÀI MUÔN THUỞ 👫 🧑‍🔬 🧑‍💻 👩‍🎨",
    "CHÍ CHÓE CŨNG ĐÔI NGÀY 🍻 🍹 🍾",
    "THỜI GIAN NHƯ GIÓ BAY 🌬 🌑 🌔 🌕 🌖",
    "BA MƯƠI NĂM RỒI ĐẤY! 😍 🎉 🎊 "
    ], 'text', ['#3f3']);

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function () {
        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function () {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0]);
                letterCount += x;
                waiting = false;
            }, 1000);
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000);
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount);
            letterCount += x;
        }
    }, 120);
    window.setInterval(function () {
        if (visible === true) {
            con.className = 'console-underscore hidden';
            visible = false;
        } else {
            con.className = 'console-underscore';
            visible = true;
        }
    }, 400);
}
