// 
console.log([] == true);
console.log([1] == true);
console.log([] == '');
console.log([] == 4214.5125);

let a1=[3,5]; 
let b1=[3,5];
let kt = true;
for (let i=0; i<a1.length; i++) {
    if (a1[i] != b1[i]) {
        kt=false;
    }
}

console.log(kt);