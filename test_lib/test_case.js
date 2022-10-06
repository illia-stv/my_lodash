const isEqual = require('lodash').isEqual;

module.exports = ({expected, func, args}) => {
  const FgRed = "\x1b[31m";
  const FgGreen = "\x1b[32m";
  const output = func(...args);
  if (isEqual(output, expected)) {
    console.log(FgGreen, `for input ${args} test is passed`);
  } else {
    console.log(FgRed, `for input ${args} test is not passed, given ${output}, should be ${expected}`);
  }
};
