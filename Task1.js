function addXAfterCharacters(str, numX) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        result += str[i];
        for (var j = 0; j < numX; j++) {
        result += 'x';
        }
    }
    return result;
}
console.log(addXAfterCharacters("AbC",3));  