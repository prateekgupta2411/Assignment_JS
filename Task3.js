function compareStrings(str1, str2) {
    if (str1 === str2) {
        console.log('Equal');
    } else if (str1.length > str2.length) {
        console.log(str1);
    } else if (str2.length > str1.length) {
        console.log(str2);
    } else {
        for (var i = 0; i < str1.length; i++) {
        if (str1[i] > str2[i]) {
            console.log(str1);
            return;
        } else if (str2[i] > str1[i]) {
            console.log(str2);
            return;
        }
    }
        console.log('Equal');
    }
}
  // Test case
var str1 = '987654321987654321';
var str2 = '987654321987654321';
compareStrings(str1, str2);