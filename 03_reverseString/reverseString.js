const reverseString = function (string) {
  let stringToReverse = [];
  for (const character of string) {
    stringToReverse.push(character);
  }
  let reversedString = stringToReverse.reverse();
  let newString = reversedString.join("");
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
