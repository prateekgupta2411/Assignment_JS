let str = "HUMAN";
let result = "";
let numX = 'x';

for (let i = 0; i < str.length; i++) {
    result += str[i] + numX;
    numX += 'x';
}
console.log(result);
