// function([string1, string2],target id,[color1,color2]) 

consoleText(["LỚP 9 Thân yêu! 🙄",
    "Bao năm rồi chúng ta chẳng gặp nhau 🙄",
    "Nhớ tôi không ? Ơi hỡi người bạn cũ! ... 🙄",
    "Khi xưa ta, buồn vui cùng ấp ủ 🙄",
    "4 năm liền cùng luyện toán, ôn văn 🧐",
    "Mới đó thôi giờ đã 32 năm 🙃",
    "Bạn thế nào, chắc cũng nhiều đổi khác ! 🥳 😱 🥳 🥴",
    "Tôi 2 con, tóc cũng vài sợi bạc 👫 🧑‍🔬 🧑‍💻 👩‍🎨",
    "Bạn còn son hay nay đã mấy con?", 
    "Mới hôm nào ta độ tuổi trăng tròn 🍻 🍹 🍾",
    "Cùng đá bóng, hét vang trên sân cỏ  🌬 🌑 🌔 🌕 🌖",
    "Thầy giáo tìm các buổi chiều đâu đó 🌬 🌑 🌔 🌕 🌖", 
    "Chẳng thấy về nghe thầy giảng bài ư?...🍻 🍹 🍾",
    "Thầy cũng chẳng trách mắng đứa trẻ hư🌬 🥳 😱 🥳 🥴",  
    "Cứ chơi xong lại học hành ngoan ngoãn🌬 🌑 🌔 🌕 🌖",  
    "Kệ bọn trẻ vô tư cùng chúng bạn 🌬 🥳 😱 🥳 🥴",
    "Tuổi mười lăm đâu có đến hai lần?!🌬 🌑 🌔 🌕 🌖",
    "32 năm nay, các bạn có còn thân🌬 🥳 😱 🥳 🥴",
    "Với đứa bạn lúc xưa ta ngồi cạnh🌬 🌑 🌔 🌕 🌖", 
    "Mối tình đầu, ta vẫn nhớ mong manh?🌬 🥳 😱 🥳 🥴",
    "Kể đến đây chắc bạn nhớ lại rồi🌬 🌑 🌔 🌕 🌖", 
    "(Bởi) Tin nhắn zalo ngày đêm thúc, hối 🌬 🥳 😱 🥳 🥴",
    "Tiếp tin nhau từ sớm mai tới tối 🍻 🍹 🍾",
    "Lũ bạn này như nợ mãi tin thôi 🍻 🍹 🍾",
    "Tiếng trống trường giờ cũng đã vẳng xa 🍻 🍹 🍾",
    "Tiếng trống lòng bạn và tôi còn loạn nhịp 🍻 🍹 🍾",
    "Bạn tôi ơi hãy về nhanh cho kịp 👫 🧑‍🔬 🧑‍💻 👩‍🎨",
    "Ngày của Đoàn Viên, Hội Ngộ, Thương Yêu"     
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
    }, 200);
}
