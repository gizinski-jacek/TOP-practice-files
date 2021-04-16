const alphabetArray = [...'abcdefghijklmnopqrstuvwxyz'];
const caesar = function(oldString, number) {
	let newString = '';
	for (let i = 0; i < oldString.length; i++) {
		oldLetter = oldString[i];
		if (alphabetArray.indexOf(oldLetter.toLowerCase()) == -1) {
			newString += oldLetter;
		}
		else if (oldLetter == oldLetter.toLowerCase()) {
			newLetterIndex = alphabetArray.indexOf(oldLetter) + number;
			while (newLetterIndex > 25) {
				newLetterIndex -= 26;
			}
			while (newLetterIndex < 0) {
				newLetterIndex += 26;
			}
			newString += alphabetArray[newLetterIndex];
		}
		else {
			oldLetter = oldLetter.toLowerCase();
			newLetterIndex = alphabetArray.indexOf(oldLetter) + number;
			while (newLetterIndex > 25) {
				newLetterIndex -= 26;
			}
			while (newLetterIndex < 0) {
				newLetterIndex += 26;
			}
			newLetter = alphabetArray[newLetterIndex];
			newString += newLetter.toUpperCase();
		}
	}
	return newString;
}

module.exports = caesar
