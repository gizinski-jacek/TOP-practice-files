const sumAll = function(number1, number2) {
if (Number.isInteger(number1) && Number.isInteger(number2)) {
    if (number1 < 0 || number2 < 0) return 'ERROR';
        let min;
        let max;
        if (number1 < number2) {
            min = number1;
            max = number2;
        } else {
            min = number2;
            max = number1;
        }
        let sumAll = 0;
        for (let i = min; i <= max; i++) {
            sumAll += i;
        } return sumAll;
    } else return 'ERROR';
}

module.exports = sumAll
