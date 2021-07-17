console.log('So sanh nong');

// so sánh nông
// 1: trong Javascript thì chỉ có số 1 khi so sánh nông với true sẽ ra true, còn lại thì ra false
console.log([] == true);
// 2: So sánh nông ép kiểu dữ liệu thành giống nhau, [1] thì bên trong mảng chỉ là số 1 nên nó sẽ ép qua dạng num là 1 và khi so sánh với true sẽ là true
console.log([1] == true);
// 3: ép array qua thành một string rỗng rồi so sánh với string rỗng => true
console.log([] == '');
// 4: mảng rỗng so sánh với số thực => false
console.log([] == 4214.5125);

// 5: Để so sánh hai mảng có bằng nhau hay không chỉ cần đặt cờ hiệu rồi chạy vòng lặp để so sánh từng phần tử. Nếu có phần từ mảng này không bằng phần tử mảng kia thì trả ra kt = false rồi break
let a1=[3,5]; 
let b1=[3,5,7];
let kt = true;
if (a1.length != b1.length) {
    kt = false;
}
for (let i=0; i<a1.length; i++) {
    if (a1[i] != b1[i]) {
        kt=false;
        break;
    }
}
console.log(kt);

console.log('So sanh sau');

// So sánh sâu
// 1: so sánh cả kiểu dữ liệu thì một bên mảng một bên boolean => false
console.log([] === true);
// 2: tương tự câu 1
console.log([1] === true);
// 3: tương tự câu 1
console.log([] === '');
// 4: tương tự câu 1
console.log([] === 4214.5125);
// 5: Mỗi phần tử trong mảng đều có cùng kiểu dữ liệu thì so sánh tiếp giá trị, hai mảng có giá trị bằng nhau => true
kt = true;
if (a1.length != b1.length) {
    kt = false;
}
for (let i=0; i<a1.length; i++) {
    if (a1[i] !== b1[i]) {
        kt=false;
        break;
    }
}
console.log(kt);