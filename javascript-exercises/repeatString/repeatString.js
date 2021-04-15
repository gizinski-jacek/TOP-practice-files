const repeatString = function(string, n) {
    if (n < 0) return 'ERROR';
    let theString = '';
    for (let i = 0; i < n; i++) {
        theString += string;
    } return theString
}

module.exports = repeatString
