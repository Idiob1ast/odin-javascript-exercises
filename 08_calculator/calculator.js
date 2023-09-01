const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
};

const multiply = function (numbers) {
  let total = 1;
  for (const number of numbers) {
    total *= number;
  }
  return total;
};

const power = function (number, power) {
  return number ** power;
};

const factorial = function (number) {
  // A factorial represents the multiplication of all numbers between 1 and n (n!).
  // So if you were to have 3! , for example, you'd compute 3 x 2 x 1 (which = 6)

  // FOR EACH NUMBER BETWEEN NUMBER AND 1, multiply EACH NUMBER
  let total = 1;
  if (number === 0 || number === 1) {
    return total;
  }
  while (number > 0) {
    total *= number;
    number--;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
