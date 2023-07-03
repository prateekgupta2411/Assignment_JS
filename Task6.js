function countDifferentCharacters(str) {
    var distinctChars = [];
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (distinctChars.indexOf(char) === -1) {
            distinctChars.push(char);
            count++;
        }
    }

    return count;
}
var input = 'heshethemthey';
var output = countDifferentCharacters(input);
console.log(output);
