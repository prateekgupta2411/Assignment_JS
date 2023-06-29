function isProperEmail(email) {
    var atIndex = email.indexOf('@');
    var dotComIndex = email.indexOf('.com');
    if (atIndex !== -1 && dotComIndex !== -1 && atIndex < dotComIndex && atIndex > 0 && dotComIndex < email.length - 4) {
        console.log('Proper');
    } else {
        console.log('Not Proper');
    }
}
  // Example usage:
var email = '@wer.com';
isProperEmail(email);
