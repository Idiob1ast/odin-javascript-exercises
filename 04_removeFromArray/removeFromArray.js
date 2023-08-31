const removeFromArray = function (array, ...theArguments) {
  // Create a new array to push our elements into
  newArray = [];

  // For each item in the array, push that item to the new array if it isn't an argument provided

  array.forEach((item) => {
    if (!theArguments.includes(item)) {
      newArray.push(item);
    }
  });

  // Return the new array
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
