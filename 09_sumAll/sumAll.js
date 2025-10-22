const sumAll = function (num1, num2) {
  if (num1 > num2) {
    const temp = num1;
    num1 = num2;
    num2 = temp;
  }

  if (num1 < 0 || num2 < 0) return "ERROR";
  if (Number.isInteger(num1) === false || Number.isInteger(num2) === false) {
    return "ERROR";
  }

  let sum = num1;
  for (let i = num1 + 1; i <= num2; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
