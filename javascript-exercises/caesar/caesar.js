const alphabetArray = [...'abcdefghijklmnopqrstuvwxyz'];
const caesar = function(string, number) {
	let newString = '';
	for (let i = 0; i < string.length; i++) {
		oldLetter = string[i];
		if (alphabetArray.indexOf(oldLetter.toLowerCase()) == -1) {
			newString += oldLetter;
		}
		else if (oldLetter == oldLetter.toLowerCase()) {
			newLetter = alphabetArray.indexOf(oldLetter) + number;
			while (newLetter > 25) {
				newLetter -= 26;
			}
			while (newLetter < 0) {
				newLetter += 26;
			}
			newString += alphabetArray[newLetter];
		}
		else {
			oldLetter = oldLetter.toLowerCase();
			newLetter = alphabetArray.indexOf(oldLetter) + number;
			while (newLetter > 25) {
				newLetter -= 26;
			}
			while (newLetter < 0) {
				newLetter += 26;
			}
			newLetter = alphabetArray[newLetter];
			newLetter = newLetter.toUpperCase();
			newString += newLetter;
		}
	}
	return newString;
}

module.exports = caesar
