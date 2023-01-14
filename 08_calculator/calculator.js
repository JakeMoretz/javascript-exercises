const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i += 1) {
      sum += array[i]
    }
    return(sum);
};

const multiply = function(array) {
    let sum = 1;
    for (let i = 0; i<array.length; i++) {
      sum = sum * array[i];
    }
    return sum;

};

const power = function(m, n) {
	return Math.pow(m, n);
};

const factorial = function(n) {
	return(n<2)?1:factorial(n-1)*n;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
