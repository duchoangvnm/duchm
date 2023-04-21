// function([string1, string2],target id,[color1,color2]) 
/*consoleText(["37 cái đầu 🙄",
    "Ở tận đẩu đâu 🧐",
    "Sao chẳng đứa nào rủ nhau 🙃",
    "Mà túm tụm cùng một chỗ ?! 😱",
    "Chí chóe lẫn nhau 😜",
    "Cũng được 30 năm rồi đấy! 😍"], 'text', ['#3f3']); */

consoleText(["ĐÃ 30 NĂM RỒI ĐẤY ! 🙄",
    "CHUYỆN KỂ TỪ MỘT HUYỆN NHỎ VEN SÔNG ĐÁY 🙄",
    "RỒI QUÊ HƯƠNG CHIẾC GẬY TRƯỜNG SƠN,KHU CHÁY,TỨ GIẾNG,TRANG VÂN ĐÌNH ... 🙄",
    "TỤ VỀ THÔN DƯƠNG KHÊ, NƠI ẤY KỶ NIỆM 🙄",
    "LỚP 5 ĐÃ XA NHÀ,CẶP LỒNG CƠM THỨC ĂN MUỐI VỪNG,CHỨNG VỊT LỘT,THỊT TEM PHIẾU... 🧐",
    "CHẲNG ĐỨA NÀO RỦ NHAU 🙃",
    "MÀ TÚM TỤM MỘT CHỖ ĂN UỐNG VÔ TƯ, NHANH NHANH CÒN NGHỊCH ! 🥳 😱 🥳 🥴",
    "BẮN BI,BẮN BÒM,BA CÂY ĂN NỊT CHÙM XÒ LÀ QUANG TÍNH 👫 🧑‍🔬 🧑‍💻 👩‍🎨",
    "BẮM BÒM THÌ CÓ DŨNG,HIỂU THẮNG CUỘC VỖ MÔNG ĐEN ĐÉT 🍻 🍹 🍾",
    "LỚP TRƯỞNG HIỀN BÙI,HỌC HÀNH LUÔN GIỎI, CHƠI BỜI KÉM CỎI DẬY THÌ SỚM NHẤT...🍻 🍹 🍾",
    "CÒN LẠI TOÀN BỌN TRẺ CON KHÔNG HIỂU SỰ ĐỜI 🌬 🌑 🌔 🌕 🌖",
    "THỜI GIAN NHƯ GIÓ BAY 🌬 🌑 🌔 🌕 🌖",
    "BA MƯƠI NĂM TRÔI VÈO ! 😍 🎉 🎊 "
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
