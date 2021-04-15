function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	return array.reduce((total, value) => total += value, 0);
}

function multiply (array) {
	return array.reduce((total, value) => total *= value);
}

function power(a, b) {
	return a ** b;
}

function factorial(n) {
	if (n == 0) return 1;
	let result = 1;
	for (let i = 1; i <= n; i++) {
		result *= i;
	} return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}