const palindromes = function (thing) {
  strippedString = thing.toLowerCase().replace(/[^a-z0-9]/g, "");
  return strippedString === strippedString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
