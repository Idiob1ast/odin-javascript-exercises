const fibonacci = function (position) {
  if (position < 0) {
    return "OOPS";
  }
  if (position === 0) {
    return 0;
  }

  let test1 = 1;
  let test2 = 0;

  //   Start at 2nd position
  for (let index = 2; index <= position; index++) {
    let current = test1 + test2;
    test2 = test1;
    test1 = current;
  }
  return test1;
};

// Do not edit below this line
module.exports = fibonacci;
