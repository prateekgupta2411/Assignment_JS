function countUniqueCharacters(str) {
    var uniqueChars = {};
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        if (!uniqueChars[char]) {
        uniqueChars[char] = true;
        count++;
        }
    }
    return count;
}
var str = "AAAAAAAAA";
var uniqueCount = countUniqueCharacters(str);
console.log(uniqueCount);