const palindromes = function(string) {
    let lowerCaseNoPunctuation = string.toLowerCase().replace(/\W/g, "");
    let split = lowerCaseNoPunctuation.split("");
    let reverse = split.reverse();
    let join = reverse.join("");
    return join == lowerCaseNoPunctuation;
}

module.exports = palindromes
