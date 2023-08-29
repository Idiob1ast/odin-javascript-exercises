const repeatString = function (string, num) {
  stringToRepeat = "";
  if (num < 0) {
    return "ERROR";
  }
  while (num > 0) {
    stringToRepeat += string;
    num--;
  }
  return stringToRepeat;
};

// Do not edit below this line
module.exports = repeatString;
