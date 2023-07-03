let equ = "100y - 101 = 2399";
let y;
let cleanedEqu = "";
for (let i = 0; i < equ.length; i++) {
    if (equ[i] !== ' ') {
        cleanedEqu += equ[i];
    }
}
let plusIndex = cleanedEqu.indexOf('+');
let minusIndex = cleanedEqu.indexOf('-');
if (plusIndex !== -1) {
    let equalIndex = cleanedEqu.indexOf('=');
    let c = +cleanedEqu.substring(0, plusIndex - 1);
    let d = +cleanedEqu.substring(plusIndex + 1, equalIndex);
    let m = +cleanedEqu.substring(equalIndex + 1);
    y = (m - d) / c;
} else if (minusIndex !== -1) {
    let equalIndex = cleanedEqu.indexOf('=');
    let c = +cleanedEqu.substring(0, minusIndex - 1);
    let d = +cleanedEqu.substring(minusIndex + 1, equalIndex);
    let m = +cleanedEqu.substring(equalIndex + 1);
    y = (m + d) / c;
}
console.log("y =", y);
