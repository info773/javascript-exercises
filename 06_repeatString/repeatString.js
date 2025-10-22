const repeatString = function (word, count) {
  if (count < 0) return "ERROR";
  let sum = "";
  for (i = 0; i < count; i++) {
    sum += word;
  }
  return sum;
};

// Do not edit below this line
module.exports = repeatString;
