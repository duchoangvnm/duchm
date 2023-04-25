const names = [
    'PHẠM VĂN AN ',
    'NGUYỄN THANH BÌNH ',
    'TƯỞNG THỊ THANH BÌNH ',
    'BÙI DƯƠNG HIỀN ',
    'MAI VĂN BẮC ',
    'HOÀNG MINH  ĐỨC ',
    'NGUYỄN TOÁN ',
    'NGUYỄN THỊ VÂN HÀ ',
    'CHU THỊ THÚY HẰNG ',
    'NGHIÊM XUÂN HUY ',
    'PHẠM HỮU VĂN ',
    'NGUYỄN ANH DŨNG ',
    'KIỀU VĂN TUYỂN ',
    'QUẢN ĐÌNH NGHĨA ',
    'NGUYỄN PHÚ KHÁNH ',
    'NGUYỄN VĂN TIỆP ',
    'TRẦN MINH ĐẠT ',
    'TRƯƠNG VĂN THẮNG ',
    'HOÀNG MAI HUY ',
    'NGUYỄN THỊ THANH HUYỀN ',
    'PHẠM VĂN QUÂN ',
    'NGUYỄN HỮU HIỂU ',
    'NGUYỄN HỮU ĐỨC ',
    'HOÀNG TRỌNG HIỆP ',
    'ĐẶNG VĂN THÀNH ',
    'PHẠM XUÂN TRÌNH ',
    'NGUYỄN THỊ MINH NGUYỆT ',
    'DƯƠNG HỒNG QUANG ',
    'NGUYỄN VIỆT HÙNG ',
    'PHẠM VĂN HẢI ',
    'NGUYỄN KHẮC ĐẠT ',
    'ĐÀO LÂM TÙNG ',
    'TRẦN THÚY HÀ ',
    'NGUYỄN THANH HƯƠNG ',
    'LÊ MAI PHƯƠNG ',
    'LÃ VĂN VẤN ',
    'PHẠM THỊ HIỆP ',
    'NGUYỄN MINH THÔNG ',
    'PHẠM THỊ HOÀN ',
    'LÊ THÚY HOÀN ',
    'ĐẶNG VĂN TÍNH ',
    'DẶNG THANH TUẤN ',
    'PHẠM THỊ HOÀN ',
    'NGUYỄN THỊ HUỆ ',
    'NGUYỄN THỊ THẢO ',
    'ĐẶNG VĂN MẠC ',
    'NGUYỄN QUANG HUY ',
    'CHU VĂN DŨNG ',
    'NGÔ THÚY HÀ ',
    'PHẠM THỊ LAN ',
    'TRẦN THỊ BẰNG ',
    'CHU THỊ VÂN ',
    'ĐỖ THÔNG THƯ ',
    'LÊ THỊ THANH HƯƠNG ',
    'VƯƠNG DIỆU LINH '
];
const colorHex = ["#00ff00", "#17f500", "#2eea00", "#46e000", "#5dd600", "#74cb00", "#8bc100", "#a2b600", "#b9ac00", "#d1a200", "#e89700", "#ff8d00", "#e37d0f", "#c66e1f", "#aa5e2e", "#8e4e3e", "#713f4d", "#552f5d", "#391f6c", "#1c107c", "#00008b"];
//green to blue ["#00ff00", "#00f207", "#00e60e", "#00d915", "#00cc1c", "#00bf23", "#00b32a", "#00a631", "#009938", "#008c3f", "#008046", "#00734c", "#006653", "#00595a", "#004d61", "#004068", "#00336f", "#002676", "#001a7d", "#000d84", "#00008b"];
for (let x = 0; x < names.length; x++) {
    var nn = names[x];
    var nsp = Math.floor(Math.random() * 5);
    for (let y = 0; y < nsp; y++) {
        nn = ' ' + nn + ' ';
    }
    names[x] = nn + names[x] + nn + names[x];
}

const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;//Math.floor(window.innerHeight*7/4.5);
canvas.height = window.innerHeight;

const fontSize = 22;
const columns = Math.floor(canvas.width / fontSize);

const rainDrops = [];
const colSize = [];
const colColor = [];
for (let x = 0; x < columns; x++) {
    rainDrops[x] = Math.floor(Math.random() * 5);
    colSize[x] = Math.floor(fontSize - Math.random() * 4);
    //colColor[x]=colorHex[Math.floor(Math.random()*colorHex.length)];
}
const draw = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < rainDrops.length; i++) {
        var namepos = (i + 20) % names.length;
        var txtpos = (rainDrops[i] - 1) % names[namepos].length;        
        const text = names[namepos].charAt(txtpos);
        /*shadow*/
        if (text != " ") {
            context.shadowBlur = 1;
            context.shadowColor = colorHex[20];
            var colorpos=(names[namepos].length - txtpos) % colorHex.length;            
            context.fillStyle = colorHex[colorpos];
            context.font = 'bold ' + colSize[i] + 'px arial';
            context.fillText(text, i * fontSize, rainDrops[i] * fontSize);
        }
        /*main text*/
        context.fillStyle = colorHex[names[namepos].length - txtpos];
        context.font = 'bold ' + colSize[i] + 'px arial';
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }

};
setInterval(draw, 250);

