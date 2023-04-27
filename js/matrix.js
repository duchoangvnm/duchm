const names = [
	'PHẠM VĂN AN ',
	'NGUYỄN THANH BÌNH ',
	'TƯỞNG THỊ THANH BÌNH ',
	'BÙI DƯƠNG HIỀN ',
	'MAI VĂN BẮC ',
	'HOÀNG MINH  ĐỨC ',
	'NGUYỄN VĂN TOÁN ',
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
	'ĐẠT ĐÁNG ',
	'ĐÀO LÂM TÙNG ',
	'TRẦN THÚY HÀ ',
	'NGUYỄN THANH HƯƠNG ',
	'LÊ MAI PHƯƠNG ',
	'LÃ VĂN VẤN ',
	'PHẠM THỊ HIỆP ',
	'NGUYỄN MINH THÔNG ',
	'PHẠM THỊ HOÀN ',
	'NGUYỄN THỊ THÚY HOÀN ',
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
	'VƯƠNG DIỆU LINH ',
	'NGUYỄN THỊ NGỌC '
];
const colorHex=['#fe0000','	#fff202','	#01fff4','	#7cff00'];//['#ff0000','#ffac00','#fff100','#0bff00','#00f6ff'];
for (let x = 0; x < names.length; x++) {
	var nsp=Math.floor(Math.random()*10);
	for (let y=0;y<nsp;y++){
		names[x]=' '+names[x];
	}
}
const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;//Math.floor(window.innerHeight*7/4.5);
canvas.height = window.innerHeight;

const fontSize = 14;
const columns = Math.floor(canvas.width / fontSize);

const rainDrops =[];
const colSize=[];
const colColor=[];
for (let x = 0; x < columns; x++) {
	rainDrops[x] = Math.floor(Math.random()*15);
	colSize[x]=Math.floor(fontSize-Math.random()*5);
	colColor[x]=colorHex[Math.floor(Math.random()*colorHex.length)];
}
const draw = () => {
	context.fillStyle = 'rgba(0, 0, 0, 0.05)';
	context.fillRect(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < rainDrops.length; i++) {
		var namepos = i + 20;
		while (namepos>=names.length){
			namepos=namepos - names.length;
		}
		var txtpos = rainDrops[i] - 1;
		while (txtpos >= names[namepos].length) { 
			txtpos = txtpos - names[namepos].length; 
		}
		const text = names[namepos].charAt(txtpos);
		context.fillStyle=colColor[i];
		context.font = colSize[i] + 'px arial';
		context.fillText(text, i * fontSize, rainDrops[i] * fontSize);
		if (rainDrops[i] * fontSize > canvas.height) {
			rainDrops[i] = 0;
		}
		rainDrops[i]++;		
	}

};

setInterval(draw, 250);