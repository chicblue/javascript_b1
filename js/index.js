// bài tập 1
var soNgay = prompt ("mời nhập số ngày làm");
const luongNgay = 100000;
var tongLuong = Number(soNgay) * luongNgay;
console.log('Tổng tiền lương của bạn là:',tongLuong);
document.write(tongLuong);
/*mô hình 3 khối
 Đầu vào : số ngày làm người dùng nhập
 Giải thuật : 
 b1 : tao bien soNgay và sử dụng hàm promt cho phép người dùng nhập vào
 b2 :tạo biến LuongNgay  và gán giá trị =100000  ;
 b3 : công thức tính tổng lương = số ngày làm * lương làm một ngày 
 b4 : in kết quả ra console
Đầu ra : tổng lương
*/ 
// Bài Tập 2
var so1 = prompt("Mời nhập vào số thứ nhất");
var so2 = prompt("Mời nhập vào số thứ hai");
var so3 = prompt("Mời nhập vào số thứ ba");
var so4 = prompt("Mời nhập vào số thứ tư");
var so5 = prompt("Mời nhập vào số thứ năm");
var diemTrungBinh = (Number(so1)+Number(so2)+Number(so3)+Number(so4)+Number(so5))/5 ;
console.log('Giá trị trung bình của 5 số vừa nhập là:',diemTrungBinh);
document.write(diemTrungBinh);
/*
mô hình 3 khối
Đầu vào: nhập vào 5 số thực
Giải Thuật : b1 :tạo 5 biến và sử dụng hàm prompt để lấy dữ liệu nhập từ người dùng
b2 tạo biến diemTrungBinh  để tính tổng trung bình của 5 số vừa nhập vào
b3 : công thức tính diemTrungBinh = (so1+so2+so3+so4+so5)/5
b4 :in kết quả ra console
Đầu ra : điểm trung bình của 5 số vừa nhập vào 
*/ 
// Bài Tập 3
var usd = prompt('Mời nhập vào số usd cần quy đổi ');
const tienViet = 23500 ;
var tienQuyDoi = Number(usd) * tienViet;
console.log('Số tiền quy đổi của bạn là :',tienQuyDoi,'vnd');
/*
Đầu vào : nhập vào số usd cần quy đổi
Giải Thuật: b1 :tạo biến usd và sử dụng hàm prompt để lấy dũ liệu nhập từ người dùng;
b2 : tạo biến tienViet = 23500 
b3 : tạo biến tienQuyDoi = usd * tienViet để tính số tiền quy đổi
b4 : in kết quả ra console
Đầu ra : số tiền VND quy đổi từ USD 
*/ 
// Bài tập 4
var chieuDai = prompt('Mời nhập vào chiều dài:');
var chieuRong = prompt ('Mời nhập vào chiều rộng:');
var chuVi = (Number(chieuDai)+Number(chieuRong)) * 2;
var dienTich = Number(chieuDai) * Number(chieuRong);
console.log('Chu Vi HCN là :',chuVi);
console.log('Diện Tích HCN là :',dienTich);
/*
Đầu vào: nhập chiều dài và chiều rộng của HCN
Giải Thuật : B1 tạo 2 biến chieuDai , chieuRong và sử dụng hàm prompt để lấy dữ liệu từ người dùng
B2 : tạo biến chuVi =  (chieuDai + chieuRong) * 2 để tính chu vi HCN
b3 : tạo biến dienTich = chieuDai * chieuRong  để tính diện tích HCN
b4 : in kết quả ra console 
Đầu ra : Chu vi và diện tích của HCN
*/
// Bài Tập 5
var so2chuSo = prompt('Mời Nhập vào số có 2 chữ số:')
if (9<so2chuSo&&so2chuSo<100){
var sohangdv = so2chuSo % 10 ;
var sohangchuc = Math.floor(so2chuSo / 10) ;
var tong = sohangdv + sohangchuc ;
console.log('Tổng của số vừa nhập là',tong);
}
else{
    alert('Số bạn vừa nhập không phải số có 2 chữ số');
}
/*
Đầu vào : nhập số có 2 chữ số
Giải Thuật : 
B1 : tạo biến so2chuSo và sử dụng hàm prompt  lấy dữ liệu nhâp từ người dùng
B2 : sử dụng hàm if else để kiểm tra số nhập vào có phải số có 2 chữ số không , nếu đúng thì đến B3 , không thì hiện thị không phải số có 2 chữ số
B3 : tạo biến sohangdv = so2chuSo % 10 ; để lấy số hàng đơn vị
B4 : tạo biến sohangchuc = Math.floor(so2chuSo / 10 ) ; để lấy số hàng chục
B5 : tạo biến tong = sohangdv + sohangchuc ; để tính tổng số vừa nhập vào 
B6 : in kết quả ra console
*/ 
