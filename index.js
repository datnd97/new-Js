let inputWidth;
let inputHeight;

inputWidth = prompt('Enter the width:');
inputHeight = prompt('Enter the height');
// chuyển đổi từ chuỗi sang số nguyên:
let width = parseInt(inputWidth);
let height = parseInt(inputHeight);

//  tính S :

let area = width * height;
document.write('The area is:' + area);